import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import { getAuth } from "firebase/auth";

const VisitorCounter: React.FC = () => {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    const db = getDatabase();
    const activeUsersRef = ref(db, "activeUsers");
    const auth = getAuth();

    // Generate a unique session ID for anonymous users
    const userId = `anonymous_${Math.random().toString(36).substring(2, 9)}`;

    // Add current user to active users list
    const addActiveUser = () => {
      const userRef = ref(db, `activeUsers/${userId}`);
      set(userRef, {
        lastActive: new Date().toISOString(),
        isOnline: true,
        sessionStart: new Date().toISOString(),
      });
    };

    // Remove inactive users
    const cleanupInactiveUsers = () => {
      onValue(activeUsersRef, (snapshot) => {
        if (!snapshot.exists()) return;

        const users = snapshot.val();
        const fiveMinutesAgo = new Date(
          Date.now() - 5 * 60 * 1000
        ).toISOString();

        Object.entries(users).forEach(([key, user]: [string, any]) => {
          if (!user.isOnline || user.lastActive < fiveMinutesAgo) {
            remove(ref(db, `activeUsers/${key}`));
          }
        });
      });
    };

    // Update active users count
    const updateActiveUsersCount = (snapshot: any) => {
      if (!snapshot.exists()) {
        setActiveUsers(0);
        return;
      }

      const users = snapshot.val();
      const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
      const activeCount = Object.values(users).filter(
        (user: any) => user.isOnline && user.lastActive > fiveMinutesAgo
      ).length;

      setActiveUsers(activeCount);
    };

    // Initialize user session
    addActiveUser();

    // Set up intervals and listeners
    const cleanupInterval = setInterval(cleanupInactiveUsers, 60000);
    const updateInterval = setInterval(() => addActiveUser(), 30000);
    const unsubscribeCounter = onValue(activeUsersRef, updateActiveUsersCount);

    // Handle page visibility changes
    const handleVisibilityChange = () => {
      const userRef = ref(db, `activeUsers/${userId}`);
      set(userRef, {
        lastActive: new Date().toISOString(),
        isOnline: !document.hidden,
        sessionStart: new Date().toISOString(),
      });
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function
    return () => {
      // Clear intervals
      clearInterval(cleanupInterval);
      clearInterval(updateInterval);

      // Remove listeners
      unsubscribeCounter();
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      // Remove user from active users
      const userRef = ref(db, `activeUsers/${userId}`);
      set(userRef, {
        lastActive: new Date().toISOString(),
        isOnline: false,
      }).then(() => remove(userRef));
    };
  }, []); // Empty dependency array as we want this to run only once

  return (
    <div className="flex items-center space-x-2">
      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      <span className="text-white">
        {activeUsers} active {activeUsers === 1 ? "visitor" : "visitors"}
      </span>
    </div>
  );
};

export default VisitorCounter;

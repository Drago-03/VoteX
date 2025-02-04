
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCurrentUser } from '../utils/firebaseAuth';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/staff/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
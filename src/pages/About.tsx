import React from "react";
import { Shield, Users, Scale, Globe2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Election Commission of India
          </h1>
          <p className="text-xl text-blue-100">
            Guarding India's Democratic Process Since 1950
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Election Commission of India (ECI) is an autonomous
            constitutional authority responsible for administering Union and
            State election processes in India. Established on January 25, 1950,
            the ECI ensures free and fair elections across the nation, upholding
            the democratic principles of our Constitution.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Constitutional Authority
            </h3>
            <p className="text-gray-600">
              Autonomous body under Article 324 of the Indian Constitution
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Universal Suffrage</h3>
            <p className="text-gray-600">
              Ensures voting rights for all citizens above 18 years
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Scale className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fair Elections</h3>
            <p className="text-gray-600">
              Maintains integrity and transparency in electoral processes
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Globe2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">National Reach</h3>
            <p className="text-gray-600">
              Conducts elections across all states and union territories
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-12 max-w-4xl mx-auto">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To conduct free, fair, and transparent elections to strengthen
              democracy in India. The Commission is committed to ensuring that
              every eligible citizen can exercise their right to vote without
              any discrimination or barriers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Key Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Supervising and conducting all elections to Parliament and State
                Legislatures
              </li>
              <li>Maintaining and updating the electoral rolls</li>
              <li>
                Setting up polling stations and appointing polling personnel
              </li>
              <li>Implementing the Model Code of Conduct</li>
              <li>Regulating political parties and their funding</li>
              <li>Addressing electoral disputes and grievances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Technological Advancement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The ECI has embraced modern technology to enhance the electoral
              process. From Electronic Voting Machines (EVMs) to Voter
              Verifiable Paper Audit Trail (VVPAT) systems, we continuously
              innovate to ensure accurate and efficient elections.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Contact Information
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-2">
                <strong>Address:</strong> Election Commission of India,
                Nirvachan Sadan, Ashoka Road, New Delhi-110001
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> 011-23052205
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Toll Free:</strong> 1800111950
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> support@eci.gov.in
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

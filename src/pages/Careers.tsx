import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, Users, GraduationCap, ExternalLink } from "lucide-react";

const Careers: React.FC = () => {
  const jobCategories = [
    {
      title: "Administrative Positions",
      description:
        "Join our administrative team to support electoral operations.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Technical Roles",
      description: "Work on cutting-edge election technology and systems.",
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
    },
  ];

  const currentOpenings = [
    {
      title: "Senior Election Officer",
      department: "Electoral Operations",
      location: "New Delhi",
      type: "Full-time",
    },
    {
      title: "IT Systems Administrator",
      department: "Information Technology",
      location: "Mumbai",
      type: "Full-time",
    },
    {
      title: "Data Analyst",
      department: "Electoral Data Management",
      location: "Bangalore",
      type: "Contract",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Careers</span>
        </nav>

        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900">Careers at ECI</h1>
          </div>
          <p className="text-gray-600">
            Join the Election Commission of India and be part of strengthening
            the world's largest democracy. We offer challenging opportunities
            across various domains and locations.
          </p>
        </div>

        {/* Job Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {category.icon}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Openings */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Current Openings
          </h2>
          <div className="space-y-4">
            {currentOpenings.map((job, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <p className="text-gray-600">{job.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{job.location}</span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Apply Now
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Why Join ECI?
            </h2>
            <div className="prose prose-lg max-w-none">
              <ul>
                <li>Be part of India's democratic process</li>
                <li>Competitive compensation and benefits</li>
                <li>Professional development opportunities</li>
                <li>Work-life balance</li>
                <li>Healthcare and insurance coverage</li>
              </ul>
            </div>
          </div>

          {/* Application Process */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Application Process
            </h2>
            <div className="prose prose-lg max-w-none">
              <ol>
                <li>Review job openings and requirements</li>
                <li>Submit online application with required documents</li>
                <li>Initial screening and shortlisting</li>
                <li>Written test/Interview process</li>
                <li>Final selection and offer</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

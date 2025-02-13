import React from "react";
import { Link } from "react-router-dom";
import { FileText, Download, ExternalLink } from "lucide-react";

const RTI: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Right to Information</span>
        </nav>

        {/* Page Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-gray-900">
              Right to Information (RTI)
            </h1>
          </div>
          <p className="text-gray-600 mb-4">
            Access information under the Right to Information Act, 2005. This
            page provides details about filing RTI applications, fees, and
            important information about the Election Commission of India.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="space-y-8">
            {/* Filing RTI Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How to File an RTI Application
              </h2>
              <div className="prose prose-lg">
                <p>You can file an RTI application in the following ways:</p>
                <ul>
                  <li>Online through the RTI Portal</li>
                  <li>By post to the Public Information Officer</li>
                  <li>In person at the ECI office</li>
                </ul>
              </div>
              <a
                href="https://rtionline.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
              >
                File RTI Online
                <ExternalLink size={16} />
              </a>
            </section>

            {/* Fee Structure */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Fee Structure
              </h2>
              <div className="prose prose-lg">
                <ul>
                  <li>Application Fee: ₹10</li>
                  <li>
                    Additional Fee for Information:
                    <ul>
                      <li>₹2 per page (A4 or A3 size)</li>
                      <li>Actual cost for larger publications</li>
                      <li>No fee for BPL category applicants</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            {/* Important Documents */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Important Documents
              </h2>
              <div className="grid gap-4">
                <a
                  href="/documents/rti-guidelines.pdf"
                  className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="h-5 w-5 text-primary" />
                  <span>RTI Guidelines (PDF)</span>
                </a>
                <a
                  href="/documents/rti-manual.pdf"
                  className="flex items-center gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="h-5 w-5 text-primary" />
                  <span>RTI Manual (PDF)</span>
                </a>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <div className="prose prose-lg">
                <p>
                  <strong>Central Public Information Officer (CPIO)</strong>
                  <br />
                  Election Commission of India
                  <br />
                  Nirvachan Sadan, Ashoka Road
                  <br />
                  New Delhi - 110001
                  <br />
                  Email: rti@eci.gov.in
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTI;

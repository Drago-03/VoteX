import React, { useState, useEffect } from 'react';
import { 
  Camera, Shield, UserCheck, AlertTriangle, Activity, Users, 
  Clock, CheckCircle, Fingerprint, FileCheck, XCircle, Loader2 
} from 'lucide-react';
import type { VerificationStep, VerificationStats, VerificationReport } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [processing, setProcessing] = useState(false);
  const [verificationReport, setVerificationReport] = useState<VerificationReport | null>(null);

  const stats: VerificationStats = {
    totalProcessed: 1254,
    verified: 1087,
    rejected: 98,
    pending: 69
  };

  const [steps, setSteps] = useState<VerificationStep[]>([
    {
      id: 1,
      title: 'System Check',
      description: 'Verifying hardware and security protocols',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Fingerprint Verification',
      description: 'Place your finger on the TouchID sensor',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Facial Recognition',
      description: 'Position your face in the camera frame',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Voter ID Validation',
      description: 'Scan your voter ID card',
      status: 'pending'
    }
  ]);

  const simulateStepProcess = async (stepIndex: number) => {
    setProcessing(true);
    setSteps(prev => prev.map((step, idx) => 
      idx === stepIndex ? { ...step, status: 'processing' } : step
    ));

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    const confidence = Math.random() * 20 + 80; // Random confidence between 80-100
    
    setSteps(prev => prev.map((step, idx) => 
      idx === stepIndex ? { 
        ...step, 
        status: confidence > 85 ? 'success' : 'error',
        confidence: parseFloat(confidence.toFixed(2))
      } : step
    ));

    setProcessing(false);

    if (confidence > 85 && stepIndex < steps.length - 1) {
      setCurrentStep(stepIndex + 1);
    } else if (confidence > 85 && stepIndex === steps.length - 1) {
      generateVerificationReport();
    }
  };

  const generateVerificationReport = () => {
    const report: VerificationReport = {
      sessionId: `VS-${Date.now()}`,
      timestamp: new Date().toISOString(),
      steps: steps,
      overallStatus: steps.every(step => step.status === 'success') ? 'success' : 'failed',
      voterInfo: {
        id: 'VT' + Math.floor(Math.random() * 1000000),
        name: 'John Doe',
        district: 'Central District'
      }
    };
    setVerificationReport(report);
  };

  const getStepIcon = (step: VerificationStep) => {
    switch (step.id) {
      case 1:
        return <Shield className="h-8 w-8" />;
      case 2:
        return <Fingerprint className="h-8 w-8" />;
      case 3:
        return <Camera className="h-8 w-8" />;
      case 4:
        return <FileCheck className="h-8 w-8" />;
      default:
        return <CheckCircle className="h-8 w-8" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-gray-400';
      case 'processing':
        return 'text-blue-500';
      case 'success':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-indigo-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Matdata Suraksha</h1>
              <p className="text-sm text-gray-500">AI-Powered Voter Verification System</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="px-4 py-2 bg-indigo-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-indigo-600" />
                <span className="text-indigo-600 font-medium">System Status: Operational</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Processed</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProcessed}</p>
              </div>
              <Users className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Verified</p>
                <p className="text-2xl font-bold text-green-600">{stats.verified}</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Rejected</p>
                <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Biometric Verification Process</h2>
          </div>
          <div className="p-6">
            {!verificationReport ? (
              <div className="max-w-3xl mx-auto">
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={step.id} className={`flex items-start space-x-4 ${index !== currentStep && 'opacity-50'}`}>
                      <div className={`flex-shrink-0 ${getStatusColor(step.status)}`}>
                        {step.status === 'processing' ? (
                          <Loader2 className="h-8 w-8 animate-spin" />
                        ) : (
                          getStepIcon(step)
                        )}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                        <p className="text-gray-500 mb-2">{step.description}</p>
                        {step.confidence && (
                          <div className="flex items-center space-x-2">
                            <div className="text-sm font-medium text-gray-500">
                              Confidence: {step.confidence}%
                            </div>
                            <div className="flex-grow bg-gray-200 rounded-full h-2">
                              <div 
                                className={`confidence-bar ${
                                  step.confidence > 85 ? 'confidence-bar-success' : 'confidence-bar-error'
                                }`}
                                style={{ width: `${step.confidence}%` }}
                              />
                            </div>
                          </div>
                        )}
                        {index === currentStep && step.status === 'pending' && (
                          <button
                            onClick={() => simulateStepProcess(index)}
                            disabled={processing}
                            className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
                          >
                            Start Verification
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  {verificationReport.overallStatus === 'success' ? (
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  ) : (
                    <XCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Verification {verificationReport.overallStatus === 'success' ? 'Complete' : 'Failed'}
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Verification Report</h4>
                  <dl className="grid grid-cols-1 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Session ID</dt>
                      <dd className="text-sm text-gray-900">{verificationReport.sessionId}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Timestamp</dt>
                      <dd className="text-sm text-gray-900">
                        {new Date(verificationReport.timestamp).toLocaleString()}
                      </dd>
                    </div>
                    {verificationReport.voterInfo && (
                      <>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Voter ID</dt>
                          <dd className="text-sm text-gray-900">{verificationReport.voterInfo.id}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Name</dt>
                          <dd className="text-sm text-gray-900">{verificationReport.voterInfo.name}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">District</dt>
                          <dd className="text-sm text-gray-900">{verificationReport.voterInfo.district}</dd>
                        </div>
                      </>
                    )}
                  </dl>
                </div>

                <button
                  onClick={() => {
                    setVerificationReport(null);
                    setCurrentStep(0);
                    setSteps(steps.map(step => ({ ...step, status: 'pending', confidence: undefined })));
                  }}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Start New Verification
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="h-5 w-5 text-indigo-600" />
              <span className="text-lg font-semibold text-gray-900">Indie Hub</span>
            </div>
            <p className="text-sm text-gray-500">&copy; 2025 Indie Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
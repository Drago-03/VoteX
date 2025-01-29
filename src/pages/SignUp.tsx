import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, User, Phone, MapPin, CreditCard } from 'lucide-react';
import { AuthLayout } from '../components/AuthLayout';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useAuth } from '../context/AuthContext';

export const SignUp: React.FC = () => {
  const { signUp, googleSignIn, isLoading, error } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    panCard: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signUp(formData);
  };

  const validatePAN = (pan: string) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return panRegex.test(pan);
  };

  return (
    <AuthLayout title="Create your account">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input
              label="First Name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              icon={<User className="h-5 w-5 text-gray-400" />}
            />

            <Input
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              icon={<User className="h-5 w-5 text-gray-400" />}
            />
          </div>

          <Input
            label="Last Name"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            icon={<User className="h-5 w-5 text-gray-400" />}
          />

          <Input
            label="Email address"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            icon={<Mail className="h-5 w-5 text-gray-400" />}
          />

          <Input
            label="Phone Number"
            name="phone"
            type="tel"
            required
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            icon={<Phone className="h-5 w-5 text-gray-400" />}
          />

          <Input
            label="Complete Address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            icon={<MapPin className="h-5 w-5 text-gray-400" />}
          />

          <Input
            label="PAN Card Number"
            name="panCard"
            required
            value={formData.panCard}
            onChange={handleChange}
            error={formData.panCard && !validatePAN(formData.panCard) ? 'Invalid PAN format (e.g., ABCDE1234F)' : undefined}
            icon={<CreditCard className="h-5 w-5 text-gray-400" />}
          />

          <div>
            <Button
              type="submit"
              className="w-full"
              isLoading={isLoading}
            >
              Sign up
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div>
            <Button
              type="button"
              variant="google"
              className="w-full"
              onClick={googleSignIn}
              isLoading={isLoading}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
              Sign up with Google
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Already have an account?{' '}
                <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
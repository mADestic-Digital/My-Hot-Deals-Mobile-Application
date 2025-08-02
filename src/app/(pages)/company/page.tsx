import { Metadata } from 'next';
import SharedLayout from '../../SharedLayout';

export const metadata: Metadata = {
  title: 'Company - United Stars Global',
  description: 'Company information and management',
};

export default function CompanyPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Company
          </h1>
          <p className="text-gray-600">
            This is the Company page
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}
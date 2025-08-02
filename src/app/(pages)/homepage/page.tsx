import { Metadata } from 'next';
import SharedLayout from '../../SharedLayout';

export const metadata: Metadata = {
  title: 'United Stars Global - Management Portal',
  description: 'Management Portal for United Stars Global',
};

export default function HomePage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to United Stars Global
          </h1>
          <p className="text-gray-600 mb-8">
            Navigate using the menu above to access different sections of the management portal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Company</h3>
              <p className="text-gray-600">Manage company information and settings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Users</h3>
              <p className="text-gray-600">User management and administration</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Requests</h3>
              <p className="text-gray-600">Handle and process user requests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Disbursement</h3>
              <p className="text-gray-600">Manage disbursements and payments</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Affiliations</h3>
              <p className="text-gray-600">Partnership and affiliation management</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">History</h3>
              <p className="text-gray-600">View transaction and activity history</p>
            </div>
          </div>
        </div>
      </div>
    </SharedLayout>
  );
}
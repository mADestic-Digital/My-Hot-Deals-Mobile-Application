import { Metadata } from 'next';
import SharedLayout from '../../SharedLayout';

export const metadata: Metadata = {
  title: 'Users - United Stars Global',
  description: 'User management and administration',
};

export default function UsersPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Users
          </h1>
          <p className="text-gray-600">
            This is the Users page
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}
import { Metadata } from 'next';
import SharedLayout from '../../SharedLayout';

export const metadata: Metadata = {
  title: 'History - United Stars Global',
  description: 'Transaction and activity history',
};

export default function HistoryPage() {
  return (
    <SharedLayout requireAuth={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            History
          </h1>
          <p className="text-gray-600">
            This is the History page
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}
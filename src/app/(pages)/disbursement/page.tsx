import { Metadata } from 'next';
import SharedLayout from '../../SharedLayout';

export const metadata: Metadata = {
  title: 'Disbursement - United Stars Global',
  description: 'Disbursement management and tracking',
};

export default function DisbursementPage() {
  return (
    <SharedLayout requireAuth={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Disbursement
          </h1>
          <p className="text-gray-600">
            This is the Disbursement page
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}
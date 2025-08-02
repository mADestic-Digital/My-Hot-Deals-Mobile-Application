import { Metadata } from 'next';
import SharedLayout from '../../SharedLayout';

export const metadata: Metadata = {
  title: 'Affiliations - United Stars Global',
  description: 'Affiliation management and partnerships',
};

export default function AffiliationsPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Affiliations
          </h1>
          <p className="text-gray-600">
            This is the Affiliations page
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}
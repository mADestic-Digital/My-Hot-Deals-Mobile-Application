import { Metadata } from 'next';
import SharedLayout from '../../SharedLayout';

export const metadata: Metadata = {
  title: 'Advertisement - United Stars Global',
  description: 'Advertisement management and campaigns',
};

export default function AdvertisementPage() {
  return (
    <SharedLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Advertisement
          </h1>
          <p className="text-gray-600">
            This is the Advertisement page
          </p>
        </div>
      </div>
    </SharedLayout>
  );
}
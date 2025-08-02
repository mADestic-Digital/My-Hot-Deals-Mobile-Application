'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  onRequestLogin: () => void;
}

export default function ProtectedRoute({ children, onRequestLogin }: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    if (status === 'loading') return; // Still loading, don't do anything yet
    
    setHasChecked(true);
    
    if (!session) {
      // User is not logged in, show login modal
      onRequestLogin();
    }
  }, [session, status, onRequestLogin]);

  // Show loading while checking authentication
  if (status === 'loading' || !hasChecked) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is not logged in, show a message (login modal will be triggered)
  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Authentication Required</h2>
          <p className="text-gray-600">Please log in to access this page.</p>
        </div>
      </div>
    );
  }

  // User is logged in, show the protected content
  return <>{children}</>;
}
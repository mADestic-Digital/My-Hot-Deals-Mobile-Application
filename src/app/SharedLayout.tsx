'use client';

import { useState, useCallback } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import ProtectedRoute from '../auth-configs/ProtectedRoute';

interface SharedLayoutProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export default function SharedLayout({ children, requireAuth = false }: SharedLayoutProps) {
  const { data: session, status } = useSession();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = useCallback(() => {
    setShowLoginModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
  };

  // Get user initial from session
  const userInitial = session?.user?.name?.charAt(0).toUpperCase() || session?.user?.email?.charAt(0).toUpperCase() || 'A';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isLoggedIn={!!session}
        userInitial={userInitial}
        onLoginClick={handleLoginClick}
        onLogout={handleLogout}
      />
      
      <main>
        {requireAuth ? (
          <ProtectedRoute onRequestLogin={handleLoginClick}>
            {children}
          </ProtectedRoute>
        ) : (
          children
        )}
      </main>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}
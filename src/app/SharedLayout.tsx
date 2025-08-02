'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';

interface SharedLayoutProps {
  children: React.ReactNode;
}

export default function SharedLayout({ children }: SharedLayoutProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [userInitial, setUserInitial] = useState('U');

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = (email: string, password: string) => {
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', { email, password });
    
    // For demo purposes, let's simulate a successful login
    // Extract first letter of email for user initial
    const initial = email.charAt(0).toUpperCase();
    setUserInitial(initial);
    setIsLoggedIn(true);
    setShowLoginModal(false);
    
    // In a real app, you'd handle authentication properly
    alert('Login successful! (This is just a demo)');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInitial('U');
    alert('Logged out successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isLoggedIn={isLoggedIn}
        userInitial={userInitial}
        onLoginClick={handleLoginClick}
        onLogout={handleLogout}
      />
      
      <main>
        {children}
      </main>

      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseModal}
        onLogin={handleLogin}
      />
    </div>
  );
}
import React from 'react';
import { Vote } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { logout, isAuthenticated } from '../utils/auth';

export function Header() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';
  const isAuthed = isAuthenticated();

  const handleLogout = () => {
    logout();
    window.location.href = '/'; // Redirect to home after logout
  };

  return (
    <header className="bg-blue-600 text-white py-6 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <Vote size={32} />
            <h1 className="text-3xl font-bold">IEEE ELECTIONS 2024</h1>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              to={isAdmin ? '/' : '/admin'}
              className="text-white hover:text-blue-200 transition-colors"
            >
              {isAdmin ? 'Go to Voting' : 'Admin Dashboard'}
            </Link>
            {isAuthed && (
              <button
                onClick={handleLogout}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
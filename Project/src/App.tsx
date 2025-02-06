import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { VotingForm } from './components/VotingForm';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminProtected } from './components/AdminProtected';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 pb-16 max-w-5xl">
          <Routes>
            <Route path="/" element={<VotingForm />} />
            <Route
              path="/admin"
              element={
                <AdminProtected>
                  <AdminDashboard />
                </AdminProtected>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
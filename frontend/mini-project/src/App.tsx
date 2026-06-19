import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Komponen Pengaman Halaman / Route Guard (Kriteria Dosen 1.1)
const ProtectedRoute = ({ children, allowedRole }: { children: React.ReactNode, allowedRole: string }) => {
  const userRole = localStorage.getItem('role');

  if (!userRole) {
    alert('Akses ditolak! Anda harus login terlebih dahulu.');
    return <Navigate to="/" replace />;
  }

  if (userRole !== allowedRole) {
    alert('Akses ditolak! Akun Anda tidak diizinkan membuka halaman ini.');
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

// Simple placeholder components to avoid missing imports
const LoginPage = () => (
  <div>
    <h1>Login Page</h1>
    <p>Placeholder login/katalog halaman.</p>
  </div>
);

const AdminDashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <p>Halaman admin yang dilindungi.</p>
  </div>
);

export default function App() {
  return (
    <Routes>
      {/* 1. Jalur Utama: Menampilkan Halaman Login & Katalog */}
      <Route path="/" element={<LoginPage />} />

      {/* 2. Jalur Rahasia: Menampilkan Sisi Dasbor Admin yang Dilindungi (Req 1.1) */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

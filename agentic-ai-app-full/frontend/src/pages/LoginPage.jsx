import React from 'react';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={() => window.location.href = 'http://localhost:8000/auth/login/github'} className="px-6 py-3 bg-blue-600 text-white rounded">
        Login with GitHub
      </button>
    </div>
  );
}

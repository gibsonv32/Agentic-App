import React, { useEffect, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function AuthCallback() {
  const [params] = useSearchParams();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get('access_token');
    if (token) {
      login(token);
      navigate('/');
    }
  }, [params, login, navigate]);

  return <div>Logging in...</div>;
}

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import axios from 'axios';
import { setCredentials, clearCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

interface User {
  username: string;
}

interface LoginResponse {
  token: string;
  user: User;
}

export const useAuthSession = () => {
  const dispatch = useAppDispatch();
  const { token, user } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setCredentials({ token, user: response.data.user }));
      } catch (error) {
        dispatch(clearCredentials());
        toast.error('Session expired. Please login again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token, dispatch]);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post<LoginResponse>('/api/auth/login', { username, password });
      dispatch(setCredentials(response.data));
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Invalid username or password');
    }
  };

  const logout = () => {
    dispatch(clearCredentials());
    toast.success('Logout successful!');
  };

  return { user, token, loading, login, logout };
};

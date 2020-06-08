import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  nickname: string;
  avatar_url: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextDTO {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextDTO>({} as AuthContextDTO);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Cosmo:token');
    const user = localStorage.getItem('@Cosmo:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email, password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Cosmo:token', token);
    localStorage.setItem('@Cosmo:user', JSON.stringify(user));
  
    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Cosmo:token');
    localStorage.removeItem('@Cosmo:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback((user: User) => {
    localStorage.setItem('@Cosmo:user', JSON.stringify(user));
    
    setData({
      token: data.token,
      user,
    })
  }, [data.token, setData]);
  
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextDTO {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };

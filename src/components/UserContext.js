// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// // Create Axios Instance
// const api = axios.create({
//   baseURL: `https://luminate-server.vercel.app`, // Replace with your backend URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add an interceptor to include the token in all requests
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('userToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Create Auth Context
// const AuthContext = createContext();

// // AuthProvider Component
// export const AuthProvider = ({ children }) => {
//   const [authData, setAuthData] = useState({
//     email: localStorage.getItem('userEmail') || '',
//     token: localStorage.getItem('userToken') || '',
//     isAuthenticated: !!localStorage.getItem('userToken'),
//     experienceDate: localStorage.getItem('experienceDate') || '',
//   });

//     // setDate function: This will be responsible for setting the experienceDate
//     const setDate = (date) => {
//       localStorage.setItem('experienceDate', date); // Save to localStorage
//       setAuthData({ ...authData, experienceDate: date }); // Update context state
//     };


//   // Login Function
//   const login = (email, token,isFirstLogin) => {
//     localStorage.setItem('userEmail', email); // Store email in localStorage
//     localStorage.setItem('userToken', token); 
//     // Store token in localStorage
//     setAuthData({ email, token, isAuthenticated: true }); // Update context
//   };

//   // Logout Function
//   const logout = () => {
//     localStorage.removeItem('userEmail');
//     localStorage.removeItem('userToken');
//     setAuthData({ email: '', token: '', isAuthenticated: false }); // Clear context
//   };

//   // Auto-load user on app start
//   useEffect(() => {
//     const token = localStorage.getItem('userToken');
//     const email = localStorage.getItem('userEmail');
//     if (token && email) {
//       setAuthData({ email, token, isAuthenticated: true });
//     }
//   }, []);




//   return (
//     <AuthContext.Provider value={{ authData, login, logout, api }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use Auth Context
// export const useAuth = () => useContext(AuthContext);



import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Axios Instance
const api = axios.create({
  baseURL: `https://luminate-server.vercel.app`, // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to include the token in all requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('userToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Create Auth Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    email: localStorage.getItem('userEmail') || '',
    token: localStorage.getItem('userToken') || '',
    isNewUser: localStorage.getItem('isNewUser') === 'true',
    isAuthenticated: !!localStorage.getItem('userToken'),
    experienceDate: localStorage.getItem('experienceDate') || '', // Set experienceDate from localStorage
  });

  // setDate function: This will be responsible for setting the experienceDate
  const setDate = (date) => {
    const someDate = new Date(date);
    const isoDate = someDate.toISOString();
    
  console.log("api date",isoDate)
    localStorage.setItem('experienceDate', isoDate); // Save to localStorage
    setAuthData((prevState) => ({ ...prevState, experienceDate:isoDate})); // Update context state
  };

    const setNewUserFlag = (isNewUser) => {
    localStorage.setItem('isNewUser', isNewUser ? 'true' : 'false');
    setAuthData((prevState) => ({ ...prevState, isNewUser }));
  };

  // Login Function
  const login = (email, token) => {
    localStorage.setItem('userEmail', email); // Store email in localStorage
    localStorage.setItem('userToken', token); // Store token in localStorage
    setAuthData({ email, token, isAuthenticated: true }); // Update context
  };

  // Logout Function
  const logout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userToken');
    localStorage.removeItem('experienceDate'); // Clear experienceDate from localStorage
    setAuthData({ email: '', token: '', isAuthenticated: false, experienceDate: '' }); // Clear context
  };

  // Auto-load user on app start
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    const email = localStorage.getItem('userEmail');
    const experienceDate = localStorage.getItem('experienceDate');
    if (token && email) {
      setAuthData({ email, token, isAuthenticated: true, experienceDate }); // Load experienceDate from localStorage
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authData, login, logout, api, setDate,setNewUserFlag }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use Auth Context
export const useAuth = () => useContext(AuthContext);


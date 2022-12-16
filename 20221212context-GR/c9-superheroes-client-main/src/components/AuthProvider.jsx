import { createContext, useContext, useEffect, useState } from 'react';
export const AnthContext = createContext(null);

export const useAuth = () => {
  return useContext(AnthContext);
};

const AuthProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  //   const updateProfile = useCallback(async (profile) => {
  //     const res = await fetch('/api/profile', {
  //       method: 'POST',
  //       body: JSON.stringify(profile)
  //     });
  //     setProfile(await res.json());
  //   }, []);

  useEffect(() => {
    async function fetchProfile() {
      const response = await fetch('/api/profile');

      if (!response.ok) {
        return;
      }

      const profile = await response.json();

      setProfile(profile);
    }

    fetchProfile();
  }, []);

  const authContextValue = {
    profile
    // updateProfile
  };
  return (
    <AnthContext.Provider value={authContextValue}>
      {children}
    </AnthContext.Provider>
  );
};

export default AuthProvider;

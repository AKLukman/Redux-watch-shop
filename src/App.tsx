import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './redux/hook';
import { setLoading, setUser } from './redux/features/user/userSlice';
import { useEffect } from 'react';

function App() {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  });

  return (
    <div>
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;

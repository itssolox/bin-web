import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BinDetails from './pages/BinDetails';
import Methods from './pages/Methods';
import MethodDetails from './pages/MethodDetails';
import Support from './pages/Support';
import Admin from './pages/Admin';
import Login from './pages/Login';
import './styles/App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <div className="app">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bin/:id" element={<BinDetails />} />
                <Route path="/methods" element={<Methods />} />
                <Route path="/methods/:id" element={<MethodDetails />} />
                <Route path="/support" element={<Support />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
            <ToastContainer position="bottom-right" />
          </div>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;

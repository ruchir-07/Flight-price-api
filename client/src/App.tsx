import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home isLogin={false} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Home isLogin={true} />} />
      </Routes>
    </>
  );
}

export default App;

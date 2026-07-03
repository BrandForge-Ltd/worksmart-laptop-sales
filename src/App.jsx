import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CameraHome from './pages/CameraHome';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <div className="flex min-h-screen selection:bg-brand-purple/30">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/camera" element={<CameraHome />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default App;

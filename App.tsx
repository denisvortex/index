
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Builds from './pages/Builds';
import ImageDetail from './pages/ImageDetail';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/windows" element={<Builds />} />
            {/* Прямые ссылки как на adderly.top */}
            <Route path="/makuos_11" element={<ImageDetail manualId="makuos_11" />} />
            <Route path="/makuos_10" element={<ImageDetail manualId="makuos_10" />} />
            <Route path="/makuos_11_Lite" element={<ImageDetail manualId="makuos_11_Lite" />} />
            <Route path="/makuos_mini" element={<ImageDetail manualId="makuos_mini" />} />
            <Route path="/makuos_10_Lite" element={<ImageDetail manualId="makuos_10_Lite" />} />
            <Route path="/makuos_8" element={<ImageDetail manualId="makuos_8" />} />
            <Route path="/makuos_7" element={<ImageDetail manualId="makuos_7" />} />
            {/* Динамический роут для остальных случаев */}
            <Route path="/build/:id" element={<ImageDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

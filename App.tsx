
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import Builds from './pages/Builds.tsx';
import ImageDetail from './pages/ImageDetail.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-cyan-500 selection:text-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builds" element={<Builds />} />
            <Route path="/windows" element={<Builds />} />
            <Route path="/makuos_11" element={<ImageDetail manualId="makuos_11" />} />
            <Route path="/makuos_10" element={<ImageDetail manualId="makuos_10" />} />
            <Route path="/makuos_11_Lite" element={<ImageDetail manualId="makuos_11_Lite" />} />
            <Route path="/makuos_mini" element={<ImageDetail manualId="makuos_mini" />} />
            <Route path="/makuos_10_Lite" element={<ImageDetail manualId="makuos_10_Lite" />} />
            <Route path="/makuos_8" element={<ImageDetail manualId="makuos_8" />} />
            <Route path="/makuos_7" element={<ImageDetail manualId="makuos_7" />} />
            <Route path="/build/:id" element={<ImageDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Archiving from './pages/Archiving.tsx';
import Contact from './pages/Contact.tsx';
import ChatAssistant from './components/ChatAssistant.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 mt-[80px] h-[calc(100vh-80px)]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<About />} />
              <Route path="/archiving/:category" element={<Archiving />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
        </div>
        {/* Floating AI Assistant */}
        <ChatAssistant />
      </div>
    </Router>
  );
};

export default App;
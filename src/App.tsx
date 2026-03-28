/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Home from './components/Home';
import Expertise from './components/Expertise';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-[#121826] text-white min-h-screen font-sans selection:bg-purple-500/30 overflow-x-clip">
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

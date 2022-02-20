import Landingpage from '../components/pages/Landingpage.js'
import EasyGameDisplay from '../components/pages/EasyGameDisplay.js'
import MediumGameDisplay from '../components/pages/MediumGameDisplay.js'
import HardGameDisplay from '../components/pages/HardGameDisplay.js'
import { Routes, Route } from "react-router-dom";

function Router() {

  return (

    <div className="App">        
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="easy-game" element={<EasyGameDisplay />} />
        <Route path="medium-game" element={<MediumGameDisplay />} />
        <Route path="hard-game" element={<HardGameDisplay />} />
      </Routes>
    </div>

  );
  
}

export default Router;

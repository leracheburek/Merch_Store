
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import TemporaryDrawer from '../Admin/SideBar/index';

import BarsDataset from './stats/CardStats'
import BasicCard from './pages/Chart';
import BasicPie from './pages/BarChart';
// import BasicCard from './pages/Chart';
import Nav from './Nav'; 

export default function Admin() {
  return (
    <Router>
      <div>
        <Nav />
        <TemporaryDrawer />
    </div>

        <div className="content">
          <Routes>
            <Route path="/charts" element={<BasicCard />} />
            <Route path="/pie" element={<BasicPie />} />

          </Routes>
        </div>
    </Router>
  );
}

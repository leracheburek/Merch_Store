
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
<<<<<<< HEAD
// import TemporaryDrawer from '../Admin/SideBar/index';
// import BarsDataset from './stats/CardStats'
=======
import TemporaryDrawer from '../Admin/SideBar/index';
<<<<<<< Updated upstream
=======
>>>>>>> origin/dev
>>>>>>> Stashed changes
import BasicCard from './pages/Chart';
import BasicPie from './pages/BarChart';
import Nav from './Nav'; 

export default function Admin() {
  return (
    <Router>
      <div>
        <Nav />
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

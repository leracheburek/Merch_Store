import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import TemporaryDrawer from '../Admin/SideBar/index';
import BarsDataset from './stats/CardStats'
import BasicCard from './pages/Chart';
import BasicPie from './pages/BarChart';


export default function Admin() {
  return (
    <Router>
      <div>
        <TemporaryDrawer />
        <BasicCard />
        <BarsDataset /> 
        <BasicPie />
    </div>
        <div className="content">
          <Routes>
            <Route path="/charts" element={<BasicCard />} />
            {/* <Route path="/stats" element={<BarsDataset />} /> */}
            <Route path="/pie" element={<BasicPie />} />
            {/* Додайте інші маршрути за потреби */}
          </Routes>
        </div>
    </Router>

  );
}

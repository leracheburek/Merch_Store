import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import TemporaryDrawer from '../Admin/SideBar/index';
import BarsDataset from './stats/CardStats'
// import Nav from './Nav';
import BasicCard from './pages/Chart';
// import BarsDataset from './stats/CardStats';
import BasicPie from './pages/BarChart';
import BasicStacking from './Form';


export default function Admin() {import AddProduct from './AddProduct';


  return (
    <Router>
      <div>
        <Nav />
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
            <Route path="/form" element={<BasicStacking />} />
            {/* Додайте інші маршрути за потреби */}
          </Routes>
        </div>
      </div>
    </Router>

  );
}

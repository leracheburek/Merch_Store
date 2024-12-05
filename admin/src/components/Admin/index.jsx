import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import BasicCard from './pages/Chart';
import ChartDash from './pages/ChartDash';
import BasicTable from './pages/DataDash';
import ProductCard from './pages/CardRedo';
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
            <Route path="/Data" element={<BasicTable />} />
            <Route path='/Dash' element={<ChartDash/>} />
            <Route path='/Components' element={<ProductCard/>} />
          </Routes>
        </div>
    </Router>
  );
}

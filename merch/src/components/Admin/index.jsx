import './style.css';
import Nav from './Nav'
import TemporaryDrawer from './SideBar';
import BasicCard from './charts'
import BarsDataset from './stats/CardStats'
import BasicPie from './BarChart'

export default function Discount() {
  return (
    <div>
        <Nav />
        <TemporaryDrawer />
        <BasicCard />
        <BarsDataset /> 
        <BasicPie />

    </div>
  );
}

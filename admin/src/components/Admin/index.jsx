import './style.css';
import Nav from './Nav'
import TemporaryDrawer from './SideBar';
import BasicCard from './charts'
import BarsDataset from './stats/CardStats'
import BasicPie from './BarChart'
import Form from './Form'
export default function Admin() {
  return (
    <div>
        <Nav />
        <TemporaryDrawer />
        <BasicCard />
        <BarsDataset /> 
        <BasicPie />
        <Form/>
    </div>
  );
}

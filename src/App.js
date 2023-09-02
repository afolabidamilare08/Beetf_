import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';
import HeaderComponent from './components/header_component/header_component';
// import WithdrawalComponent from './components/withdrawal_component/withdrawal_component';
import Particles from './components/utilities/particles.tsx';
import {
  Routes,
  Route,
} from "react-router-dom";
import SwapPage from './pages/swappage/swapPage';
import EtfPage from './pages/etfPage/etfPage';
import CreateEFTIndex from './pages/createETFpage/createETF_index';
import TradePage from './pages/swappage/swapPage';
import LandingPage from './pages/landingPage/landingPage';

function App() {
  return (
    <div className='main_body' >
      {/* <HeaderComponent/> */}



     <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/trade' element={ <TradePage/> } />
        <Route path='/etf' element={ <EtfPage/> } />
        <Route path='/createEtf' element={ <CreateEFTIndex/> } />
     </Routes>
     <Particles style={{
        position:"absolute",
        inset:"0px",
        zIndex:"6"
      }} quantity={40} staticity={30} />
    </div>
  );
}

export default App;

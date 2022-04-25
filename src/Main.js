import About from './Components/About/About';
import Asseen from './Components/AsSeen/Asseen';
import Footer from './Components/Footer/Footer';
import Guides from './Components/Guides/Guides';
import Header from './Components/Header/Header';
import HeaderTop from './Components/Header/HeaderTop';
import Navbar1 from './Components/Header/Navbar1';
import Panel from './Components/Panel/Panel';
import Savetime from './Components/Savetime/Savetime';
import Steps from './Components/Steps/steps';

export default function Main() {
    return (
        <div>
            <Savetime />
            <Steps />
            < About />
            <Guides />
            <Panel />
            <Asseen />
        </div>
    )
}

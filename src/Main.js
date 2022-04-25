import About from './Components/About/About';
import Asseen from './Components/AsSeen/Asseen';
import Guides from './Components/Guides/Guides';
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

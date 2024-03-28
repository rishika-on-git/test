import ExploreCard from '../Components/ExploreCard/ExploreCard'
import About from '../Components/About/About';
import Timeline from '../Components/Timeline/Timeline';
import Home from './Home/Home';
import Prizes from '../Components/Prizes/Prizes';
import Faculty from '../Components/Faculty/Faculty';

const Layout = () => {
    return (
        <>
            <Home />
            <About />
            <Prizes/>
            <ExploreCard />
            <Timeline />
            <Faculty/>
        </>
    )
}

export default Layout;
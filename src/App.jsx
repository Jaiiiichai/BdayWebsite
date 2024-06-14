import AboutUs from './AboutUs';
import './App.css';
import Details from './Details';
import Gallery from './Gallery';
import Home from './Home';
import Message from './Message';
import Videos from './Videos';


function App() {
  return (
    <>
     <div className='wrapper'>
     <Home />
      <Details />
      <Gallery />
      <AboutUs/>
      <Videos/>
      <Message/>
     </div>
    </>
  );
}

export default App;

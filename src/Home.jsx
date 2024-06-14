import './Home.css';

import chyle from './assets/chylepic.png'

function Home() {
    return (
        <div className='welcome-container'>
            <div className='welcome-message'>
                <h1 className='greet'>Happy Birthday Chyle</h1>
                <p className='date'>June 15,2024</p>
                <p> Today is all about you and the amazing person you are. May your day be as wonderful and special as you are, filled with love, laughter, and all your heart desires.</p>

            </div>
            <div className='chylepic'>
             <img src={chyle} alt="Alternative text" id='chyle'/>
            </div>
        </div>
    );
}

export default Home;

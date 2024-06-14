import chyle from "./assets/chyle.png"
import './Details.css'

function Details(){

    return(
    <>
        <h1>About Her</h1>
       <div className="details-container">
            <div className="detail-pic">
            <img src={chyle} alt="Alternative text" id='chyle-detail'/>
            </div>
            <div className="detail-message">
                <h1>Chyle Mary Demecillo</h1>
                <p>This is the girl I fell in love with . She is super smart, and a bit mysterious. At cosplay events, she shines like a princess, but in everyday life, she is my queen. We love going on adventures together and trying new things, especially exploring new places. She is also a huge fan of BL, and her love for cats adds so much warmth to our lives. She is sweet, adorable, and just makes every moment special. Our journey together is filled with laughter, love, and lots of fun memories.</p>
            </div>
       </div>
       </>  
    );
}
export default Details
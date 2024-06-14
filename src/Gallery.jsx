import './Gallery.css';
import chyle1 from "./assets/chylepics/chyle1.jpg";
import chyle2 from "./assets/chylepics/chyle2.jpg";
import chyle3 from "./assets/chylepics/chyle3.jpg";
import chyle4 from "./assets/chylepics/chyle4.jpg";
import chyle5 from "./assets/chylepics/chyle5.jpg";
import chyle6 from "./assets/chylepics/chyle6.jpg";
import chyle7 from "./assets/chylepics/chyle7.jpg";
import chyle8 from "./assets/chylepics/chyle8.jpg";
import chyle9 from "./assets/chylepics/chyle9.jpg";

function Gallery() {
    return (
        <>
            <h1>Chyle Pics</h1>
            <div className="image-gallery">
                <div className="image-container">
                    <img src={chyle1} alt="Image 1 description" />
                    <img src={chyle2} alt="Image 2 description" />
                    <img src={chyle3} alt="Image 3 description" />
                    <img src={chyle4} alt="Image 4 description" />
                    <img src={chyle5} alt="Image 5 description" />
                    <img src={chyle6} alt="Image 6 description" />
                    <img src={chyle7} alt="Image 7 description" />
                    <img src={chyle8} alt="Image 8 description" />
                    <img src={chyle9} alt="Image 9 description" />
                </div>
            </div>
        </>
    );
}

export default Gallery;

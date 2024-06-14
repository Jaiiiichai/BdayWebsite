import "./Videos.css";
import video1 from "./assets/Videos/makeupvid.mp4";
import video2 from "./assets/Videos/neotokyo.mp4";
import video3 from "./assets/Videos/lola amour.mp4";
import video4 from "./assets/Videos/cheez.mp4";


const data = [
  { src: video1, desc: "First make up make over and I also stared at your face, admiring how beautiful you are, I wanna kiss you that time tho " },
  { src: video2, desc: "Neo tokyo bonodori dance with you and jaymes and it was a blast" },
  { src: video3, desc: "First Video in Lola amour concert cause thats the first music you liked " },
  { src: video4, desc: "A shrt clip of us doing our pictures" }

];

function Videos() {
  return (
    <>
    <h1>Some Videos Captured</h1>
    <div className="video-gallery">
      {data.map((item, index) => (
        <div className="video-container" key={index}>
          <video controls className="video" autoPlay>
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="description-video">{item.desc}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Videos;

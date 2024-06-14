import './AboutUs.css';
import us1 from "./assets/OurPics/us1.jpg";
import us2 from "./assets/OurPics/us2.jpg";
import us3 from "./assets/OurPics/us3.jpg";
import us4 from "./assets/OurPics/us4.jpg";
import us5 from "./assets/OurPics/us5.jpg";
import us6 from "./assets/OurPics/us6.jpg";
import us7 from "./assets/OurPics/us7.jpg";
import us8 from "./assets/OurPics/us8.jpg";
import us9 from "./assets/OurPics/us9.jpg";





const data = [
  { src: us1, alt: "Image 1 description", desc: "This is the first ever pic of us thats in a better angle and I am so happy we get to do this and it'll last in my memory forever" },
  { src: us2, alt: "Image 2 description", desc: "The very first concert I have attended with another person, not counting concerts in dalaguete and I had so much fun jud and thanks for the tickets" },
  { src: us3, alt: "Image 3 description", desc: "This is my favorite yet. This is the date that is unforgettable cause many things happened. This is the time we did our first kiss and also the time you slept beside me and it gives me peace and I hope it lasts longer" },
  { src: us4, alt: "Image 4 description", desc: "I dont know if you remember this but this is the time when you and flora went to the seaside like in the plaza and its 11pm and you're still at mcdo so I went to you" },
  { src: us5, alt: "Image 5 description", desc: "This is the first cuddle we did and it soo very perfect like a bottle of beer and a warm cuddle is always the best feeling " },
  { src: us6, alt: "Image 6 description", desc: "This is after we did our make up session and we sat down the bench and talking about random stuffs" },
  { src: us7, alt: "Image 7 description", desc: "This is the second time we met after valentines day and you called your brother and you introduced me to him and after that we played in the arcade" },
  { src: us8, alt: "Image 8 description", desc: "This is during valentines day and our first date together and I am so shocked when you payed for the food and like its the first time a girl paid for my food and also the first prank you did of hiding my phone" },
  { src: us9, alt: "Image 9 description", desc: "Dugyot days,our first pic together during ablayan disco and I really liked you that time, looking at this pic I know why you did not like me HAHAHAHA the fuck is that face" },
];

function AboutUs() {
  return (
    <>
        <div className='aboutus'>
            <h1>Short Story about Us</h1>
            <p>I have never thought that we will be together like I thought it would only stay like a fantasy but it happened.In highschool we barely
talked or even look at each other and when we met in random places like in the otakufest I am so glad that you talked to me, I know you
know this that I prayed for you during santo nino mass wishing that I can be your partner and prayers are so powerful. During dalaguete
concert I have never thought that I will see you and when I looked around I saw you and my heart beats faster cause that a normal
reaction for me everytime I see you like I get excited. At first its so awkward like we are literally just beside each other and 
not talking to each other but I am glad you talked to me first cause if you dont who knows what will happen. That started to build up 
my courage and I asked kristine for help and she did helped me so I am kinda thankful for her. When you came to my life, my life changed
so much and it made me so happy. I get to try new things and adventure with you. You are the best thing thats ever been mine.</p>
        </div>
      <h1>Captured Memories</h1>
      <div className="gallery">
        {data.map((item, index) => (
          <div className="card" key={index}>
            {item.type === "video" ? (
              <video controls className="media">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={item.src} alt={item.alt} className="media" />
            )}
            <p className="description">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs;

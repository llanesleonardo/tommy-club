import "./hero-01.css";

const Hero = () => {
  const view = `
    <div id="hero" class="main-hero">
        <video width="750" height="450" autoplay class="hero-video-1">
          <source src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fhero%2Ftommy-var.mp4" type="video/mp4">
           Your browser does not support the video tag.
        </video>
        <img  loading="lazy" src="https://3lstrategy.nyc3.cdn.digitaloceanspaces.com/tommy%2Fhero%2Fwave%2001.png" class="main-hero-img" id="hero-img-1"/>
    </div>
    `;
  return view;
};

export default Hero;

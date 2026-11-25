import Typing from './Typing.jsx';
import ResumeButton from './ResumeButton.jsx';
import SocialLinks from './SocialLinks.jsx';
import PhotoFrame from './PhotoFrame.jsx';

export default function Hero() {
  return (
    <header className="hero">
      <div>
        <p className="hello">HELLO, I’M</p>
        <h1>Suman Kumar Nayak</h1>
        <Typing />
        <p className="desc">I’m a passionate Full Stack Developer with an MCA background, interested in building modern, scalable, and user-friendly web applications. I enjoy solving real-world problems and continuously improving my development skills.</p>
        <div className="btns">
          <a className="btn main" href="#projects">Explore My Projects</a>
          <ResumeButton />
        </div>
        <SocialLinks />
      </div>
      <PhotoFrame />
    </header>
  );
}
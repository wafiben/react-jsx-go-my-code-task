import logo from './logo.svg';
import './App.css';
import  imageInSrc from'./imageInSrc.jpg';

function App() {
  return (
    <div className="app">
  <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={imageInSrc}  id="first-img"/>
    <br />
    <img src="/imageInPublic.jpg" id="second-img"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>
  );
}

export default App;

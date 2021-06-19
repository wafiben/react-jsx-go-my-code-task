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
  <iframe width="560" height="315" src={'https://www.youtube.com/embed/cpP-fCo8Dn4'} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
  );
}

export default App;

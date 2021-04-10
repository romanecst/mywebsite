import './App.css';
import CV from './assets/CV2021.pdf';
import popotes from './assets/PopotesApp.mp4';

function App() {
  return (
    <div>
      <div className="App-header">
        <div id='gif'>
          <ul>
            <li><a>ABOUT</a> • <a> PROJECTS </a> • <a href={CV} target='blank'> CV </a> • <a href='https://github.com/romanecst' target='blank'> GITHUB</a></li>
          </ul>
          <h1>hi, i'm romane</h1>
        </div>
        <div id='main'>
          <h2>MY MOST RECENT PROJECTS</h2>
          <hr id='divide'/>
          <div className='row'>
            <div className='card'>
              <div className='content'>
                <h3>POPOTES <span className='app'>- Mobile App</span></h3>
                <h4 className='desc'>Description</h4>
                <p>A collaborative grocery shopping app to help organise group shopping lists. I led a team of 5 to develop it from scratch in ten days.</p>
                <h4 className='desc'>Technologies Used</h4>
                <p>React Native, Node,js, MongoDB, REST.</p>
                <h4 className='desc'>Code Link</h4>
                <p>https://github.com/romanecst/popotes</p>
              </div>
            </div>
            <div>
              
            </div>
            <video style={{borderRadius: '5%',  margin: 20, minWidth:450}} width="650" height="368" controls>
              <source src={popotes} type="video/mp4"/>
            Your browser does not support the video tag.
            You can find the video at this link: https://drive.google.com/file/d/1- SpHetGSZVOUEDQBbrO47cYNR2Ar7f2o/vie w?usp=sharing
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

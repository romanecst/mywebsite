import './App.css';
import CV from './assets/CV2021.pdf';
import popotes from './assets/PopotesApp.mp4';
import fly from './assets/fly-with-friends.png';
import rock from './assets/rockarocket.png';
import power from './assets/power-program.png';
import Card from './Card';

function App() {

  const cardContent = [{class:'row',name:'Popotes',type:'Mobile',desc:'A collaborative grocery shopping app to help organise group shopping lists. I led a team of 5 to develop it from scratch in ten days.',tech:'React Native, Node,js, MongoDB, REST.',code:'https://github.com/romanecst/popotes', media:<video style={{borderRadius: '5%', minWidth:450}} width="650" height="368" controls><source src={popotes} type="video/mp4"/>Your browser does not support the video tag. You can find the video at this link: https://drive.google.com/file/d/1- SpHetGSZVOUEDQBbrO47cYNR2Ar7f2o/vie w?usp=sharing</video>},
  {class:'row-reverse',name:'Fly With Friends',type:'Web',desc:'Website for friends who want to travel for a low price. The algorithm computes the common availabilities for a group of friends and finds the cheapest destinations from multiple departures.',tech:'React, Node, MongoDB, REST.',code:'https://github.com/romanecst/flyWithFriends', media:<a href='https://fly-with-friends.herokuapp.com' target='blank'><img style={{borderRadius: '5%', minWidth:450}} width="650" height="368" src={fly}/></a>},
  {class:'row',name:'Rock A Rocket',type:'Web',desc:'Booking website for outer space flights based on real upcoming rocket launches.',tech:'React, Node, MongoDB, REST.',code:'https://github.com/romanecst/Rock-A-Rocket', media:<a href='https://rockarocket.herokuapp.com/' target='blank'><img style={{borderRadius: '5%', minWidth:450}} width="650" height="368" src={rock}/></a>},
  {class:'row-reverse',name:'Power Program',type:'Web',desc:'Website to find gym exercises and programs with a customised program functionality.',tech:'HTML, CSS, Node.js, MongoDB.',code:'https://github.com/romanecst/powerProgram', media:<a href='https://powerprogram.herokuapp.com/' target='blank'><img style={{borderRadius: '5%', minWidth:450}} width="650" height="368" src={power}/></a>},]
  
  return (
    <div>
      <div className="App-header">
        <div id='gif'>
          <ul>
            <li><a>ABOUT</a> • <a href='#gif'> PROJECTS </a> • <a href={CV} target='blank'> CV </a> • <a href='https://github.com/romanecst' target='blank'> GITHUB</a></li>
          </ul>
          <h1>hi, i'm romane</h1>
        </div>
        <div id='main'>
          <h2>MY MOST RECENT PROJECTS</h2>
          <hr id='divide'/>

            {cardContent.map(function(el,i){
            return <Card key={i} class={el.class} name={el.name} type={el.type} desc={el.desc} tech={el.tech} code={el.code} media={el.media}/>
            })}
           
        </div>
      </div>
    </div>
  );
}

export default App;

import React, {useState, useRef} from "react";

import Nav from './Nav';
import solar from './assets/solar2.gif';
import useWindowDimensions from './window'

export default function About() {
 const [tab, setTab] = useState(false);
 const [sports, setSports] = useState({display:'none'});
 const [space, setSpace] = useState({display:'none'});
 const [travel, setTravel] = useState({display:'none'});
 const [cook, setCook] = useState({display:'none'});
 const [popover, setPopover] = useState('block');

 const infoRef = useRef();

 const { height, width } = useWindowDimensions();

 let wdt = (width > 750) ? 600 : width*0.62
 let wdtSports = (width > 750) ? 150 : (width/4)*0.68
 let wdtSpace = (width > 750) ? 160 : (width/3.75)*0.68
 let wdtWorld = (width > 750) ? 130 : (width/4.6)*0.68
 let wdtFood = (width > 750) ? 100 : (width/6)*0.68
 let hgt = (width > 750) ? 150 : (width/4)*0.7

 let general = 'tab';
 let interest = '';
 let dispI = {display:'none'};
 let dispG = {};
 if(tab){
  general = '';
  interest = 'tab';
  dispI = {height:600};
  dispG = {display:'none'};
 }

 let tabStyle = {padding: 5,paddingLeft: 10,paddingRight: 5, marginRight: 5, marginLeft: 10, cursor:'pointer'}
    return (
    <div>
      <div id='about'>
            <Nav/>
            <h2>about me</h2>
            <hr id='divide'/>
      </div>
      <div className='poly' style={{textAlign:'center', backgroundColor:'crimson'}}>
        <div style={{marginTop:150, fontSize: 30, color:'white', paddingBottom:5,borderBottom:'0.5px solid white'}}>
          <span className={general} style={tabStyle} onClick={()=>setTab(false)}>GENERAL</span>
          <span className={interest}style={tabStyle} onClick={()=>setTab(true)}>INTERESTS</span>
        </div>
        <div style={dispI}>
          <h3 style={{color:'white', fontSize:55}}>my interests</h3>
          <p id='small'>Click to find out more</p>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center', }}>
              {/* <div id='popover' style={{position:'relative', bottom:0, right:0, display:popover, width:50}}>
              <p >Click me!</p>
            </div> */}
            <div id='circle-left' style={{minWidth:75, height:hgt}}></div><div id='likes' style={{minWidth:wdt, height:hgt}}>
              <img src='https://media.giphy.com/media/61dkbcuaYYv1ykvJnB/giphy.gif' style={{position:'relative', bottom:20, right:`55px`, cursor:'pointer', width:wdtSports}} onClick={()=>{infoRef.current.scrollIntoView({ behavior: 'smooth' });setPopover('none');setSports({}); setSpace({display:'none'}); setTravel({display:'none'}); setCook({display:'none'});}}/>
              <img src={solar} style={{position:'relative', bottom:15,right:`20px`, cursor:'pointer',width:wdtSpace}} onClick={()=>{infoRef.current.scrollIntoView({ behavior: 'smooth' });setSports({display:'none'}); setSpace({}); setTravel({display:'none'}); setCook({display:'none'});setPopover('none');}}/>
              <img src='https://media.giphy.com/media/ckrbT1rPtrt1rGM19p/giphy.gif' style={{position:'relative', bottom:10,right:`-15px`, cursor:'pointer',width:wdtWorld}} onClick={()=>{infoRef.current.scrollIntoView({ behavior: 'smooth' });setPopover('none');setSports({display:'none'}); setSpace({display:'none'}); setTravel({}); setCook({display:'none'});}}/>
              <img src='https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif' style={{position:'relative', bottom:25, right:`-50px`, cursor:'pointer',width:wdtFood}} onClick={()=>{infoRef.current.scrollIntoView({ behavior: 'smooth' });setPopover('none');setSports({display:'none'}); setSpace({display:'none'}); setTravel({display:'none'}); setCook({});}}/>
              </div>  <div id='circle-right' style={{minWidth:75, height:hgt}}></div>
            </div>
           
           <div ref={infoRef}>
            <div className='info' style={sports}>
              <div className='info-content'>
                
                <h3>Sports</h3>
                <p>I love to play all sorts of sports and to keep fit, I am in the gym at least 4 days a week.<br/>
                  At Warwick University I was part of Athletics, the Football Club and the Barbell Club where I competed locally.
                </p>
              </div>
            </div>
            <div className='info' style={space}>
              <div className='info-content'>
                
                <h3>Space</h3>
                <p>I am fascinated by our solar system and more broadly the universe.
                  I spend a lot of my free time learning more about space and if I had to choose an atypical job to do I would definitely become an astronaut. 
                </p>
              </div>
            </div>
            <div className='info' style={travel}>
              <div className='info-content'>
                
                <h3>Travelling</h3>
                <p>
                  I am very lucky to travelled a lot since a young age and this is probably why I have decided to live abroad.<br/> 
                  One day I hope to have visited at least 3 different countries on each of the continents.
                </p>
              </div>
            </div>
            <div className='info' style={cook}>
              <div className='info-content'>
                
                <h3>Cooking</h3>
                <p>Cooking is another one of my past times and passion.<br/>
                  I especially love baking for the precision it requires. I love to watch and get inspired from the Great British Bakeoff.
                </p>
              </div>
            </div>
            </div>
        </div>
        <div style={dispG}>
          <h3 style={{color:'white', fontSize:55}}>summary</h3>
          <div style={{ marginBottom:100}}>
            <p className='summary'>
              My name is Romane Castera, I am a 21 year-old web and mobile developer.<br/>
              I was born in Paris but I moved to the UK to study when I was 17 and never left since.<br/>
              </p>
              <p className='summary'>
              I am a full stack engineer - I develop and create everything from UI/UX to database implementation.<br/>
              My language of choice is JavaScript (React, React Native, Node, Express) but I also enjoy using Python. 
              As for my training, I completed a professional training course in JavaScript and I learnt Python during my Bachelors at the University of Warwick.
              </p>
              <p className='summary'>
              I am experienced with leading a small team in a fast paced project. And I am able to work on my own initiative or as part of a team.
              In addition, I have strong background in business from my degree at Warwick.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }
import React, { useRef, useEffect } from 'react';
import Card from './Card';
import popotes from './assets/PopotesApp.mp4';
import fly from './assets/fly-with-friends.png';
import rock from './assets/rockarocket.png';
import power from './assets/power-program.png';
import Nav from './Nav';

export default function Projects() {

  const scrollRef = useRef();

  useEffect(()=>{
    setTimeout(function(){
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }, 1000); 
  },[])


  const cardContent = [{id:'popote',img:'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',class:'row',name:'Popotes',type:'Mobile',desc:'A collaborative grocery shopping app to help organise group shopping lists. I led a team of 5 to develop it from scratch in ten days.',tech:'React Native, Node,js, MongoDB, REST.',code:'https://github.com/romanecst/popotes', media:<video style={{borderRadius: '5%', minWidth:450}} width="650" height="368" controls><source src={popotes} type="video/mp4"/>Your browser does not support the video tag. You can find the video at this link: https://drive.google.com/file/d/1- SpHetGSZVOUEDQBbrO47cYNR2Ar7f2o/vie w?usp=sharing</video>},
  {id:'fly',img:'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1093&q=80',class:'row-reverse',name:'Fly With Friends',type:'Web',desc:'Website for friends who want to travel for a low price. The algorithm computes the common availabilities for a group of friends and finds the cheapest destinations from multiple departures.',tech:'React, Node, MongoDB, REST.',code:'https://github.com/romanecst/flyWithFriends', media:<a href='https://fly-with-friends.herokuapp.com' target='blank'><img style={{borderRadius: '5%', minWidth:450}} width="650" height="368" src={fly}/></a>},
  {id:'rock',img:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80',class:'row',name:'Rock A Rocket',type:'Web',desc:'Booking website for outer space flights based on real upcoming rocket launches.',tech:'React, Node, MongoDB, REST.',code:'https://github.com/romanecst/Rock-A-Rocket', media:<a href='https://rockarocket.herokuapp.com/' target='blank'><img style={{borderRadius: '5%', minWidth:450}} width="650" height="368" src={rock}/></a>},
  {id:'power',img:'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',class:'row-reverse',name:'Power Program',type:'Web',desc:'Website to find gym exercises and programs with a customised program functionality.',tech:'HTML, CSS, Node.js, MongoDB.',code:'https://github.com/romanecst/powerProgram', media:<a href='https://powerprogram.herokuapp.com/' target='blank'><img style={{borderRadius: '5%', minWidth:450}} width="650" height="368" src={power}/></a>},]
  
  return (
    <div className="App-header">
      
        <div id='shape' style={{color:'white'}}>
            <Nav />
            <h2 >my most recent projects</h2>
            <hr id='divide'/>
        </div>
        <div className='poly' ref={scrollRef}>
            {cardContent.map(function(el,i){
            return <Card key={i} id={el.id} img={el.img} class={el.class} name={el.name} type={el.type} desc={el.desc} tech={el.tech} code={el.code} media={el.media}/>
            })}
        </div>
    </div>
  );
}
import './App.css';
import useWindowDimensions from './window'

function Card(props) {
  const { height, width } = useWindowDimensions();

  let wdt = (width > 650) ? 650 : width*0.95
  return (   
    <div id={props.id} style={{backgroundImage:`url(${props.img})`, height: 'fit-content', backgroundSize: 'cover'}}> 
      <div className={props.class}>
        <div className='card' style={{width:wdt}}>
            <div className='content'>
            <h3>{props.name} <span className='app'>- {props.type} App</span></h3>
            <h4 className='desc'>Description</h4>
            <p>{props.desc}</p>
            <h4 className='desc'>Technologies Used</h4>
            <p>{props.tech}</p>
            <h4 className='desc'>Code Link</h4>
            <p>{props.code}</p>
            </div>
        </div> 
        {props.media}
      </div>  
    </div>         
  );
}

export default Card;

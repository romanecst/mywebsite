import './App.css';

function Card(props) {
  return (    
    <div className={props.class}>
      <div className='card'>
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
  );
}

export default Card;

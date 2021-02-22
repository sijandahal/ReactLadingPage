const Card = (props) => {
  return ( 
    <div className= "cardcontainer">
      <div className={props.className}>
     <div className="small-div">
                    <img src={props.img} alt=''/>

     </div>
        <div className="big-div">
          <div className="title">
            <h2>
            {props.title}
            </h2>
          </div>
          <div className="description">
            <p>
            {props.description}
            </p>
          </div>
        </div>
    </div>
    </div>
   );
}
 
export default Card;
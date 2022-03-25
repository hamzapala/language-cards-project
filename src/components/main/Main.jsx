import "./Main.css";

const Main = ({data}) => {
  function shoot(e) {
    e.currentTarget.children[0].classList.toggle("hamza");
  }
  return(
    data.map((item, index)=>{
      const {name, img, options} = item;
      return (
        <div onClick={(e) => shoot(e)} className="cardContainer" key={index}>
          <div className="card">
            <img className="image" src={img} alt="" />
            <h4 className="subject">{name}</h4>
          </div>
          <ul className="myList">
            <li>{options[0]}</li>
            <li>{options[1]}</li>
            <li>{options[2]}</li>
          </ul>
        </div>
      );
    })
  )
};

export default Main;





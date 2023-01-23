function Card(props) {
    return (
      <div className="card w-25 mt-5 mx-auto">
        <img className="card-img-top" src={props.imgUrl} alt="Profile" ></img>
        <div className="card-body">
          <h5 className="card-title">{props.titlee}</h5>
          <p className="card-text">{props.paragraph}</p>
          <a href={props.link} className="btn btn-primary">{props.linkText}</a>
        </div>
      </div>
    )
}

export default Card;
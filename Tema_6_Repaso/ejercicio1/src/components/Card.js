import { Fragment } from 'react'

export default function Card(props) {
    return(
        <Fragment>
            <div className="card w-50 m-auto mt-4">
                <img src={props.urlImage} className="card-img-top" alt="Imagen" /> 
                <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.paragraph}</p>
                  <a href={props.url} className="btn btn-primary">Mas Info</a>
                </div>
            </div>
        </Fragment>
    )
};

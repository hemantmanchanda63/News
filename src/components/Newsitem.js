import React from "react";
import {Link} from "react-router-dom"

const Newsitem = (props) => {
  const { title, description, imgurl, url } = props;
  return (
    <>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url}  target="_blank" className="btn btn-primary btn-xl">
            Read More
          </a>
        </div>
      </div>

    </>
  );
};

export default Newsitem;

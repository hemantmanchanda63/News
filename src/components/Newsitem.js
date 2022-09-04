import React from "react";

const Newsitem = (props) => {
  const { title, description, imgurl } = props;
  return (
    <>
      <div className="card mb-3" style={{ width: "18rem" }}>
        <img src={imgurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="/" className="btn btn-primary btn-xl">
            Go somewhere
          </a>
          
        </div>
      </div>
    </>
  );
};

export default Newsitem;

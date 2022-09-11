import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import axios from "axios";

const News = () => {
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  // const [dataperpage, setdataperpage] = useState(10);
  
  const url =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-08-11&sortBy=publishedAt&apiKey=4ba4c4fedf164f869dc5413022222826&pagesize=10";
  const getData = () => {
    axios.get(url).then((resp) => {
      const data = resp.data.articles;
      // console.log("response", resp.data.articles);
      setData(data);
    });
  };
  
  useEffect(() => {
    getData();
  },[]);

  // const indexOfLastpage = page * dataperpage;
  // const indexOfFirstpage = indexOfLastpage - dataperpage;
  // const currentData = data.slice(indexOfFirstpage, indexOfLastpage);
  // console.log("data",data)

  const handleprev= async()=>{
    await setpage(page- 1);
    const url =
    `https://newsapi.org/v2/everything?q=tesla&from=2022-08-11&sortBy=publishedAt&apiKey=4ba4c4fedf164f869dc5413022222826&page=${page}&pagesize=10`;
    axios.get(url).then((resp) => {
      const data = resp.data.articles;
      // console.log("response", resp.data.articles);
      setData(data);
    });
console.log("This is Clicked")  
    
  }
  const handlenext= async()=>{
        // setdataperpage(dataperpage +1 )
        await setpage(page+ 1);
        const url =
        `https://newsapi.org/v2/everything?q=tesla&from=2022-08-11&sortBy=publishedAt&apiKey=4ba4c4fedf164f869dc5413022222826&page=${page}&pagesize=10`;
        axios.get(url).then((resp) => {
          const data = resp.data.articles;
          // console.log("response", resp.data.articles);
          setData(data);
        });
    console.log("This is Clicked")
  }
  return (
    <>
      <div className="container my-3">
        <h1 className="mb-3">News Headlines</h1>
        <div className="row">
          {data.map((item, index) => {
            // console.log("data", item.description);
            return (
              <div key={index} className="col-md-4">
                <Newsitem
                  title={item.title}
                  description={item.description}
                  imgurl={item.urlToImage}
                  url={item.url}
                />
              </div>
            );
          })}
        </div>
        <div className="prev-next d-flex justify-content-between">
          <button disabled={page<=1} type="button" className="btn btn-primary" onClick={handleprev}>
          &larr; Previous
          </button> 
          <button type="button" className="btn btn-primary" onClick={handlenext}>
           Next &rarr;
          </button>
          </div>  
      </div>
    </>
  );
};

export default News;

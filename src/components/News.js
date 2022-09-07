import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem";
import axios from "axios"

const News = () => {
  const url = "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json"
const [data , setData] = useState([])
 const getData =  () =>{
   axios.get(url).then((resp)=>{
    const data =  resp.data.articles
      setData(data);
  })
 }
 
useEffect(()=>{
getData();
},[data])
// console.log("data",data) 
  return (
    <>
      <div className="container my-3">
        <h1 className="mb-3">News Headlines</h1>
        <div className="row">
            {data.map((item,index) => {
              // console.log("data", data)
              return (
                <div key={index} className="col-md-4">
                <Newsitem
                  title={item.title}
                  description={item.description}
                  imgurl="https://thumbs.dreamstime.com/z/d-world-news-background-digital-breaking-studio-report-live-208423108.jpg"
                />
                </div>
              )
             })} 
        </div>
      </div>
    </>
  );
};

export default News;

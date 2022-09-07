import React, { useState, useEffect } from "react";
import axios from "axios";

const Apidata = () => {
  const [data, setdata] = useState([])
  const url="https://data.covid19india.org/data.json";
  const getdata = async () => {
    const response= await axios.get(url)
      // console.log("datas", response.data.statewise);  
      setdata(response.data.statewise)

  };
  useEffect(() => {
    getdata();
  }, [data]);

  // const hell = () => {
  //   setcount(count + 1);
  // };
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">India Covid 19 Cases</h1>
        <table className="table table-responsive table-hover table-dark">
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element,index)=>{
              return(
              <tr key={index}>
              <td>{element.state}</td>
              <td>{element.confirmed}</td>
              <td>{element.recovered}</td>
              <td>{element.deaths}</td>
              <td>{element.active}</td>

            </tr>
              )
            })
            }
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Apidata;

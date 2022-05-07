import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
import "./Apiimg.css";

export default function Apiimg() {
  const [data, setData] = useState([]);

  const api = "https://picsum.photos/v2/list?page=2&limit=10";
  const renderData = () => {
    fetch(api)
      .then((response) => response.json())
      .then((callData) => {
        console.log(callData);
        setData(callData);
      });
  };

  useEffect(() => {
    renderData();
  }, []);
  return (
    // <Table>
    //   <tbody>
    //     {data.map((item, i) => (
    //       <tr key={i}>
    //         <td><img src={item.download_url} width={50} height={50} alt="image"/></td>
    //         <td>{item.author}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </Table>
    <div className="class6">
      <div className="class7">
        <div className="class8">
          {data.map((item, i) => (
            <div className="class9">
              <div className="class10">
                <img
                  src={item.download_url}
                  alt=""
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className="class11">{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';

export const Table = () => {
  const [header, setHeader] = useState([]);
  const [data, setData] = useState([]);

  const getOnlyData = (obj) => {
    setHeader(Object.keys(obj[0]));
    let i = 0;
    let arr = [];
    for (let k in obj) {
      let { address, company, ...other } = obj[k];
      arr.push(other);
    }
    setData(arr);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(async (response) => {
        let resp = await response.json();
        getOnlyData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            {header.map((head) => {
              return <td>{head}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

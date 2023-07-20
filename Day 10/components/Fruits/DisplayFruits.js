import React, { useContext, useEffect, useState } from "react";

import { data } from "./FruitsData";

import "./fruits.css";
import { UserContext } from "../Context";
import { useNavigate } from "react-router";

export default function DisplayFruits() {
  const { name, setName, search } = useContext(UserContext);

  const navigation = useNavigate();

  const [val, setVal] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/")
  //     .then((response) => response.json())
  //     .then((data) => setVal([data]));
  // }, []);

  console.log(data[0]);

  return (
    <>
      <div className="display-main">
        <h1 id="displayTitle">Best Selling Fruits in Coimbatore!</h1>

        <div className="displayFruits">
          {data
            .filter((items) => {
              if (search === "") return items;
              else if (
                items.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return items;
              }
            })
            .map((items) => (
              <>
                <div
                  className="displayImageWrap"
                  key={items.id}
                  onClick={() => {
                    navigation("/fruits/" + items.name.toLowerCase());
                  }}
                >
                  <img src={items.img} />
                  <div className="dipslay-image-text">
                    <h1>{items.name}</h1>
                  </div>
                </div>
              </>
            ))}
        </div>

        {/* {data[0].map((items) => (
          <>
            <div
              className="displayImageWrap"
              key={items.id}
              onClick={() => {
                navigation("/fruits/" + items.name.toLowerCase());
              }}
            >
              <img src={items.img} />
              <div className="dipslay-image-text">
                <h1>{items.name}</h1>
              </div>
            </div>
          </>
        ))} */}
      </div>
    </>
  );
}

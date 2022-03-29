import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { IconContext } from "react-icons";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  console.log(people.length);

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const Random = ()=>{
    setIndex((index)=>{
      let newIndex = Math.floor(Math.random() * people.length)
      return checkNumber(newIndex)
    })
  }

  return (
    <>
      <div className="cardboard">
        <div className="userProfile">
          <img src={image} alt="name" />
          <IconContext.Provider
            value={{ color: "white", className: "global-class-name" }}
          >
            <div className="quote">
              <FaQuoteRight className="mainQuote" />
            </div>
          </IconContext.Provider>
        </div>
        <div className="userName">
          <h4>{name}</h4>
          <p>{job}</p>
        </div>
        <div className="info">
          <p>{text}</p>
        </div>
        <div className="navigation">
          <div className="left" onClick={prevPerson}>
            <FaChevronLeft />
          </div>
          <div className="left" onClick={nextPerson}>
            <FaChevronRight />
          </div>
        </div>
        <div className="button">
          <button className="btn" onClick={Random}>Surprise Me</button>
        </div>
      </div>
    </>
  );
};

export default Review;

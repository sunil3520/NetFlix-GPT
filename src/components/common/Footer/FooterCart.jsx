import React, { useState } from "react";

const FooterCart = ({ heading, name,expandFlag }) => {
  const [showAll, setShowAll] = useState(false);

  const getFirstTwoElement = () => {
    let output = name.filter((el, i) => i < 2);
    return output;
  };
  return (
    <div className="mb-6">
      <h3 className="font-bold mb-2">{heading}</h3>
      {showAll &&
        name.map((el) => {
          return <p className="text-gray-400">{el}</p>;
        })}

      {!showAll && getFirstTwoElement().map((el) => {
        return <p>{el}</p>;
      })}
      {expandFlag && <span
        className=" text-green-400 text-[13px] cursor-pointer"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "View Less ⬆" : "View All ⬇"}
      </span>}
    </div>
  );
};

export default FooterCart;

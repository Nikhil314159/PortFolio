import React from "react";

import python from "../../public/python.webp";
import reactjs from "../../public/reactjs.png";
import mongoDB from "../../public/mongodb.jpg";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
// import java from "../../public/java.png";
import flask from "../../public/flask.png";
// import spring from "../../public/spring.png";
// import springboot from "../../public/springboot.jpg";

const Experiance = () => {
  const cardItem = [
    {
      id: 1,
      logo: python,
      name: "Python",
    },
    {
      id: 2,
      logo: reactjs,
      name: "React JS",
    },
    {
      id: 3,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 4,
      logo: html,
      name: "HTML",
    },
    {
      id: 5,
      logo: css,
      name: "CSS",
    },
    {
      id: 6,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 7,
      logo: flask,
      name: "Flask",
    },
  ];
  return (
    <>
      <div
        name="Experiance"
        className="max-w-screen-2x1 container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="">
          I have more than 1 year of experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] border-gray-300 rounded-full md:w-[200px] md:h-[200px] p-1 curdsor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experiance;

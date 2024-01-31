import React from "react";
import style from "./find.module.scss";
import BlackArrow from "../../../../Assets/Images/BlackArrow.svg";

export const FindCourse = () => {
  return (
    <div>
      <h3>Find Your Dream Course in 3 Easy Steps</h3>

      {/* The Three steps */}

      {/* Take Quiz */}
      <div>
        <p>
          Ready to embark on a personalized experience? Take our quick and
          insightful quiz to uncover possibilities that align with your passion
          and interests
        </p>
        <button className={style.stepsButton}>Take Quiz</button>
      </div>

      {/* Search Now */}
      <div>
        <p>
          Want to speak to someone for guidance?
          <span>
            Talk to renouned industry professionals to help guide this life
            changing decision
          </span>
        </p>
        <button className={style.stepsButton}>Search Now</button>
      </div>

      {/* Talk To Someone */}
      <div>
        <p>
          Already have a course that pikes your interest?
          <span>
            Browse through over 100, watch videos on a day in the life and so
            much more...
          </span>
        </p>

        <button className={style.stepsButton}>Talk To Someone</button>
      </div>
    </div>
  );
};

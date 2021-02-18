import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/button/button";
import { getCountrieHomeRoute } from "../../constants/routes/routes";

const Start = () => {
  const history = useHistory();

  const getStartHandler = () => {
    history.push(getCountrieHomeRoute());
  };

  return (
    <section className="section-start">
      <div className="section-start__content">
        <ion-icon size="large" name="earth-outline"></ion-icon>


        <Button
          className="btn btn--start u-margin-top-medium"
          onClick={getStartHandler}
          name={"START"}
        />
      </div>
    </section>
  );
};

export default Start;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <div className="container">
      <div class="card">
        <div className="zoom">
          <img className="img"
            src={props.cardData.img}
         
          />
        </div>

        <h5>{props.cardData.Name}</h5>
        <p class="price">
          From ₹{props.cardData.From} / <span>{props.cardData.Q}KG</span>
        </p>
        <div className="inbtn">
          <button
            className="pluse"
            onClick={() => {
              props.onAddInc(props.cardData.Name);
            }}
          >
            <FontAwesomeIcon icon={faPlus} fade style={{ color: "green" }} />
          </button>
          <span className="span">
            ₹{parseInt(props.cardData.From) * parseInt(props.cardData.orderedQ)}{" "}
            /
          </span>{" "}
          <span className="span">
            {parseInt(props.cardData.Q) * parseInt(props.cardData.orderedQ)}KG
          </span>
          <button
            className="minus"
            onClick={() => {
              props.onDec(props.cardData.Name);
            }}
          >
            <FontAwesomeIcon icon={faMinus} style={{ color: "red" }} />
          </button>
        </div>
        <p
          className="btn"
          onClick={() => {
            props.onHeadercount(props.cardData.Name);
          }}
        >
          <button>
            <FontAwesomeIcon icon={faCartShopping} /> Add to Cart{" "}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Card;

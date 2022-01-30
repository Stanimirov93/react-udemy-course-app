import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [titleNew, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(titleNew);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titleNew}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;

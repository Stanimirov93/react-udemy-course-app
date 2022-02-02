import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [isEditting, setIsEditting] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Добавяме expenseData array-a от ExpenseForm.js
    // kato параметър при извикването на тази функция с props.onSaveExpenseData(expenseData);
    const expenseData = {
      ...enteredExpenseData, // Adding here the object pulled from the expenseData const,
      // created in our submitHandler function from the FORM component.
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditting(false);
  };

  const startEditingHandler = () => {
    setIsEditting(true);
  };

  const stopEditingHandler = () => {
    setIsEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEditingHandler}>Add New Expense Button</button>
      )}
      {isEditting && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;

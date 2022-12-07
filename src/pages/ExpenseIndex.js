import React, { useEffect, useState } from "react";
import OverViewComponent from "./ExpenseOverview";
import TransactionsComponent from "./ExpenseTxComponent";

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [transactions]);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };
  return (
    <div>
      <OverViewComponent
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      <TransactionsComponent />
    </div>
  );
};
export default HomeComponent;

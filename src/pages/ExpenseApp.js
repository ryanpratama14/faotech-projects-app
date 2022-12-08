import { React, useEffect, useState } from "react";
import ExpenseCard from "./ExpenseCard";
import InputField from "./components/InputField";
import InputFieldInt from "./components/InputFieldInt";

const Expense = (props) => {
  useEffect(() => {
    document.title = "#5: Expense Tracker App";
  }, []);

  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [date, setDate] = useState();
  const [type, setType] = useState("EXPENSE");
  const [data, setData] = useState([
    {
      amount: 2210,
      desc: "Tiket to Tokyo",
      date: "2022-30-12",
      type: "EXPENSE",
    },
    {
      amount: 4990,
      desc: "Monthly salary",
      date: "2023-01-12",
      type: "INCOME",
    },
  ]);
  const [isAddTxnVisible, toggleAddTXn] = useState(false);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    data.map((payload) =>
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [data]);

  return (
    <div className="ceo font-mono">
      <section class=" text-white reviews" id="ceo">
        <div class="px-8 py-12 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-xl text-center mb-12">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">
              Welcome to
              <br />
              <span class="text-sky-300">Expense </span>
              <span class="text-red-300">Tracker </span>App!
            </h2>
          </div>
          <section class="flex flex-wrap justify-around items-center w-full">
            <div>
              <div class="md:w-96 w-80 mx-2 my-2">
                <div class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex justify-between items-center">
                    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white text-right">
                      BALANCE: ${income - expense}
                    </h3>
                    <button
                      className="btn btn-primary"
                      onClick={() => toggleAddTXn((isVisible) => !isVisible)}
                    >
                      {isAddTxnVisible ? "CANCEL" : "ADD"}
                    </button>
                  </div>
                  {isAddTxnVisible && (
                    <div
                      isAddTxnVisible={isAddTxnVisible}
                      class="text-center text-black dark:text-white w-full items-center"
                    >
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
                          Amount
                        </label>
                        <input
                          required
                          type="number"
                          placeholder="2990"
                          className="input input-bordered w-full"
                          onChange={(e) => {
                            setAmount(parseInt(e.target.value));
                          }}
                        />
                      </div>
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
                          Date
                        </label>
                        <input
                          required
                          type="date"
                          placeholder="12/12/2023"
                          className="input input-bordered w-full"
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>
                      <div class="mt-4">
                        <label class="block mb-2 text-m font-medium text-left text-white dark:text-white">
                          Description
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Ticket to Tokyo"
                          className="input input-bordered w-full"
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                        />
                      </div>
                      <div class="flex justify-center items-center mt-4">
                        <input
                          type="radio"
                          id="expense"
                          name="type"
                          value="EXPENSE"
                          className="radio radio-error mx-2"
                          checked={type === "EXPENSE"}
                          onChange={(e) => setType(e.target.value)}
                        />
                        <label htmlFor="expense">Expense</label>
                        <input
                          type="radio"
                          id="income"
                          name="type"
                          value="INCOME"
                          className="radio radio-success mx-2"
                          checked={type === "INCOME"}
                          onChange={(e) => setType(e.target.value)}
                        />
                        <label htmlFor="Expense">Income</label>
                      </div>
                      <button
                        class="btn btn-primary mt-4"
                        onClick={() => {
                          if (
                            (desc.length > 0 &&
                              date.length > 0 &&
                              type === "EXPENSE") ||
                            type === "INCOME"
                          ) {
                            setData([...data, { amount, desc, date, type }]);
                          }
                        }}
                      >
                        ADD TRANSACTION
                      </button>
                    </div>
                  )}
                  <div
                    className="font-extrabold mt-4 border-b-2 mb-2 pb-2 border-indigo-600 flex flex-wrap justify-between items-center w-full
"
                  >
                    <p>💸 Income</p>
                    <p>🛍️ Expense</p>
                  </div>

                  <div
                    className="mt-1 mb-6 flex flex-wrap justify-between items-center w-full
"
                  >
                    <p class=" text-xl font-semibold text-emerald-400">
                      ${income}
                    </p>
                    <p class=" text-xl font-semibold text-red-400">
                      ${expense}
                    </p>
                  </div>
                  <div class="flex justify-between items-center mt-2">
                    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                      History
                    </h3>
                  </div>
                  <input
                    type="text"
                    placeholder="Search..."
                    class="input input-bordered input-sm w-full mt-4"
                  />
                  <div>
                    {data?.map((payload, index) => {
                      return (
                        <ExpenseCard
                          descProps={payload.desc}
                          amountProps={payload.amount}
                          dateProps={payload.date}
                          typeProps={payload.type}
                          index={index}
                          payload={payload}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Expense;

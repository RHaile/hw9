import React, { useState } from "react";

function TipForm({ addTip }) {
  // intialize useState for amount and date
  // returing a pair: current value, and function that updates it(defined later)
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // define function that handles input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && date) {
      addTip({ amount: parseFloat(amount), date });
      setAmount("");
      setDate("");
    }
  };

  return (
    // add event listener to form that calls 'handleSumbit' and runs functions
    // add event listeners to input element that defines 'setAmount' & 'setDate' functions
    <form onSubmit={handleSubmit} className="join">
      <div class="flex justify-center">
        <label>
          $
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="1"
            required
            placeholder="Amount"
            className="input input-bordered join-item"
          />
        </label>

        <div>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input input-bordered join-item"
          />
        </div>

        <div>
          <button type="submit" className="btn join-item">
            Add Tip
          </button>
        </div>
      </div>
    </form>
  );
}

export default TipForm;

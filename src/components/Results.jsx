import React from "react";
import "../styles/results.scss";

function Results({ results }) {
  const { monthlyPayment, totalRepayment } = results;

  if (!monthlyPayment && !totalRepayment) {
    return (
      <div className="container justify-center items-center gap-4">
        <img
          src="/images/illustration-empty.svg"
          alt="Illustration"
          className="mx-auto"
        />
        <h3>Results shown here</h3>
        <p>
          Complete the form and click &quot;calculate repayments&quot; to see
          what your monthly repayments would be.
        </p>
      </div>
    );
  }

  return (
    <div className="container gap-6 md:gap-10 ">
      <div className="title-bar">
        <h3>Your Results</h3>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click &quot;calculate
          repayments&quot; again.
        </p>
      </div>

      <div className="results-container">
        {monthlyPayment && (
          <div>
            <p>Your monthly repayments</p>
            <h2>£{monthlyPayment}</h2>
          </div>
        )}
        <hr />
        {totalRepayment && (
          <div>
            <p>Total you'll repay over the term</p>
            <h3>£{totalRepayment}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Results;

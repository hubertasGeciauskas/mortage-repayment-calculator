import React, { useState } from "react";
import Form from "./components/Form";
import Results from "./components/Results";

const MORTGAGE_TYPES = {
  REPAYMENT: "Repayment",
  INTEREST_ONLY: "Interest Only",
};

function App() {
  const [formData, setFormData] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: MORTGAGE_TYPES.REPAYMENT,
  });

  const [results, setResults] = useState({
    monthlyPayment: null,
    totalRepayment: null,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.mortgageAmount)
      newErrors.mortgageAmount = "Mortgage amount is required.";
    if (!formData.mortgageTerm)
      newErrors.mortgageTerm = "Mortgage term is required.";
    if (!formData.interestRate)
      newErrors.interestRate = "Interest rate is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateRepayments = () => {
    if (!validateForm()) return;
    const { mortgageAmount, mortgageTerm, interestRate, mortgageType } =
      formData;
    const amount = parseFloat(mortgageAmount);
    const term = parseInt(mortgageTerm);
    const rate = parseFloat(interestRate) / 100;

    let monthlyPayment;
    let totalRepayment;

    if (mortgageType === MORTGAGE_TYPES.REPAYMENT) {
      const monthlyRate = rate / 12;
      const numberOfPayments = term * 12;
      monthlyPayment =
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      totalRepayment = monthlyPayment * numberOfPayments;
    } else if (mortgageType === MORTGAGE_TYPES.INTEREST_ONLY) {
      monthlyPayment = (amount * rate) / 12;
      totalRepayment = monthlyPayment * term * 12;
    }

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    });
  };

  const clearForm = () => {
    setFormData({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: MORTGAGE_TYPES.REPAYMENT,
    });
    setResults({
      monthlyPayment: null,
      totalRepayment: null,
    });
    setErrors({});
  };

  return (
    <div className="full-screen">
      <main className="content">
        <Form
          formData={formData}
          setFormData={setFormData}
          clearForm={clearForm}
          calculateRepayments={calculateRepayments}
          errors={errors}
        />
        <Results results={results} />
      </main>
    </div>
  );
}

export default App;

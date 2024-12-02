import React from "react";
import "../styles/form.scss";
import Button from "./Button";

function Form({
  formData,
  setFormData,
  calculateRepayments,
  clearForm,
  errors,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  {
    return (
      <form>
        <div className="title">
          <h1 className="font-bold text-slate-900 leading-tight">
            Mortgage Calculator
          </h1>
          <a onClick={clearForm}>Clear all</a>
        </div>

        <div className="fields">
          <div className="field-group">
            <label htmlFor="mortgageAmount">Mortgage Amount</label>
            <div
              className={`input-container ${
                errors.mortgageAmount ? "error" : ""
              }`}
            >
              <span className="input-prefix">£</span>
              <input
                id="mortgageAmount"
                type="number"
                name="mortgageAmount"
                value={formData.mortgageAmount}
                onChange={(e) =>
                  setFormData({ ...formData, mortgageAmount: e.target.value })
                }
              />
            </div>
            {errors.mortgageAmount && (
              <span className="error-text">{errors.mortgageAmount}</span>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="field-group">
              <label>Mortgage Term</label>
              <div
                className={`input-container ${
                  errors.mortgageTerm ? "error" : ""
                }`}
              >
                <input
                  type="number"
                  name="mortageTerm"
                  value={formData.mortageTerm}
                  onChange={(e) =>
                    setFormData({ ...formData, mortgageTerm: e.target.value })
                  }
                />
                <span className="input-prefix">years</span>
              </div>
              {errors.mortgageTerm && (
                <span className="error-text">{errors.mortgageTerm}</span>
              )}
            </div>
            <div className="field-group">
              <label>Interest Rate</label>
              <div
                className={`input-container ${
                  errors.interestRate ? "error" : ""
                }`}
              >
                <input
                  type="number"
                  name="interestRate"
                  value={formData.interestRate}
                  onChange={(e) =>
                    setFormData({ ...formData, interestRate: e.target.value })
                  }
                />
                <span className="input-prefix">%</span>
              </div>
              {errors.interestRate && (
                <span className="error-text">{errors.interestRate}</span>
              )}
            </div>
          </div>
          <fieldset>
            <legend className="mb-2 font-bold">Mortgage Type</legend>

            <label htmlFor="repayment" className="radio-label">
              <input
                type="radio"
                id="repayment"
                name="mortgageType"
                value="Repayment"
                checked={formData.mortgageType === "Repayment"}
                onChange={handleChange}
              />
              Repayment
            </label>

            <label htmlFor="interest" className="radio-label">
              <input
                type="radio"
                id="interest"
                name="mortgageType"
                value="Interest Only"
                checked={formData.mortgageType === "Interest Only"}
                onChange={handleChange}
              />
              Interest Only
            </label>

            {errors.mortgageType && (
              <span className="error-text">{errors.mortgageType}</span>
            )}
          </fieldset>
        </div>

        <Button
          onClick={(e) => {
            e.preventDefault();
            calculateRepayments();
          }}
          imgSrc="/images/icon-calculator.svg"
        >
          Calculate Repayments
        </Button>
      </form>
    );
  }
}

export default Form;

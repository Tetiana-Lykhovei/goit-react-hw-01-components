import React from "react";
import s from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({ trans }) => {
  return (
    <>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {trans.map((el) => {
            const { id, type, amount, currency } = el;
            return (
              <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

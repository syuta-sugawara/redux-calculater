import React from "react";
import PropTypes from "prop-types";

const PlusBtn = ({ onClick }) => <button onClick={onClick}>+</button>;

PlusBtn.prototypes = {
  onClick: PropTypes.func.isRequired,
};
export default PlusBtn;

import * as actionTypes from "../utils/actionTypes";
//action
export const onNumClick = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});

export const onPlusClick = () => ({
  type: actionTypes.PLUS,
});

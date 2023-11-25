import { combineReducers } from "redux";
import cardsReducer from "../Cards/Redux/Reducers";

export const rootReducer = combineReducers({
  cards: cardsReducer,
  
});

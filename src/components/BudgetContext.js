
import React, { createContext, useReducer, useContext } from 'react';

const BudgetContext = createContext();

const initialState = {
  budget: 30000,
  spent: 0,
};

const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BUDGET':
      return { ...state, budget: action.amount };
    case 'ADD_EXPENSE':
      return { ...state, spent: state.spent + action.amount };
    default:
      return state;
  }
};

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const setBudget = (amount) => {
    dispatch({ type: 'SET_BUDGET', amount });
  };

  const addExpense = (amount) => {
    dispatch({ type: 'ADD_EXPENSE', amount });
  };

  return (
    <BudgetContext.Provider value={{ state, setBudget, addExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }
  return context;
};

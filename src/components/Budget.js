
import React, { useState } from 'react';
import { useBudget } from './BudgetContext';

const Budget = () => {
  const { state, setBudget } = useBudget();
  const [newBudget, setNewBudget] = useState('');

  const handleSetBudget = () => {
    const amount = parseFloat(newBudget);
    if (!isNaN(amount)) {
      setBudget(amount);
      setNewBudget('');
    }
  };

  return (
    <div>
      <h2>Budget Planner</h2>
      <div className='mainContainer'>
        <p class='box'>Total Budget: ₹ {state.budget}</p>
        <p class='box'>Spent: ₹ {state.spent}</p>
        <p class='box'>Remaining: ₹ {state.budget - state.spent}</p>
      </div>
    </div>
  );
};

export default Budget;

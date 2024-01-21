
import React from 'react';
import './App.css';
import Budget from './components/Budget';
import ExpenseForm from './components/ExpenseForm';
import { BudgetProvider } from './components/BudgetContext';

const App = () => {
  return (
    <BudgetProvider>
      <div>
        <Budget />
        <ExpenseForm />
      </div>
    </BudgetProvider>
  );
};

export default App;

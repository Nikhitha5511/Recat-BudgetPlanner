
// import React, { useState } from 'react';
// import { useBudget } from './BudgetContext';

// const ExpenseForm = () => {
//   const { addExpense } = useBudget();
//   const [expenseName, setExpenseName] = useState('');
//   const [expenseCost, setExpenseCost] = useState('');
//   const [expensesList, setExpensesList] = useState([]);

//   const handleAddExpense = () => {
//     const amount = parseFloat(expenseCost);
//     if (!isNaN(amount)) {
//       addExpense(amount);
//       setExpensesList([...expensesList, { name: expenseName, cost: amount }]);
//       setExpenseName('');
//       setExpenseCost('');
//     }
//   };

//   const handleDeleteExpense = (index) => {
//     const updatedExpenses = [...expensesList];
//     updatedExpenses.splice(index, 1);
//     setExpensesList(updatedExpenses);
//   };

//   return (
//     <div>
//       <h3>Add Expense</h3>
//       <div class='secondContainer'>
//         <label>
//           Expense Name:
//           <input
//             type="text"
//             value={expenseName}
//             onChange={(e) => setExpenseName(e.target.value)}
//           />
//         </label>
      
//         <label>
//           Cost:
//           <input
//             type="number"
//             value={expenseCost}
//             onChange={(e) => setExpenseCost(e.target.value)}
//           />
//         </label>
//       </div>
//       <button className='button1' onClick={handleAddExpense}>Add Expense</button>
      
//       <div className='thirdContainer'>
//         {expensesList.map((expense, index) => (
//           <div key={index} className='flexdiv'>
//             <p>{expense.name}</p>
//             <p>₹{expense.cost}</p>
//             <button  className='button2' onClick={() => handleDeleteExpense(index)}>X</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExpenseForm;



// Updated ExpenseForm.js
import React, { useState } from 'react';
import { useBudget } from './BudgetContext';

const ExpenseForm = () => {
  const { addExpense } = useBudget();
  const [expenseName, setExpenseName] = useState('');
  const [expenseCost, setExpenseCost] = useState('');
  const [expensesList, setExpensesList] = useState([]);

  const handleAddExpense = () => {
    const amount = parseFloat(expenseCost);
    if (!isNaN(amount)) {
      addExpense(amount);
      const newExpense = { name: expenseName, cost: amount };
      setExpensesList([...expensesList, newExpense]);
      setExpenseName('');
      setExpenseCost('');
    }
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expensesList];
    updatedExpenses.splice(index, 1);
    setExpensesList(updatedExpenses);
  };

  return (
    <div>
      <h3>Add Expense</h3>
      <div className='secondContainer'>
        <label>
          Expense Name:
          <input
            type="text"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </label>
      
        <label>
          Cost:
          <input
            type="number"
            value={expenseCost}
            onChange={(e) => setExpenseCost(e.target.value)}
          />
        </label>
      </div>
      <button  className='button1' onClick={handleAddExpense}>Add Expense</button>
      
      <div className='thirdContainer' style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
  {expensesList.map((expense, index) => (
    <div key={index} className='expenseEntry'>
      <div className='expenseDetails'>
        <p>{expense.name}</p>
        <p>₹{expense.cost}</p>
      </div>
      <button  className='button2' onClick={() => handleDeleteExpense(index)}>X</button>
    </div>
  ))}
</div>
</div>
  );
};

export default ExpenseForm;

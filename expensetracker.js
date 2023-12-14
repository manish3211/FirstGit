document.addEventListener('DOMContentLoaded', () => {

    const expenses=JSON.parse(localStorage.getItem('expenses')) || [];


    displayExpenses(expenses);
});

function addExpense(){
    const expenseInput=document.getElementById('expenseInput');
    const expenseAmount=parseFloat(expenseInput.value);

    if (isNaN(expenseAmount) || expenseAmount <= 0){
        alert('Please enter a valid expense amount');
        return;
    }

    const expenses=JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expenseAmount);


    localStorage.setItem('expenses', JSON.stringify(expenses));


    displayExpenses(expenses);


    expenseInput.value='';
}

function displayExpenses(expenses){
    const expenseList=document.getElementById('expenseList');
    expenseList.innerHTML='';

    expenses.forEach((expense,index) => {
        const li = document.createElement('li');
        li.className='list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML=`
            Expense #${index + 1}: $${expense.toFixed(2)}
            <div>
                <button class="btn btn-warning btn-sm mr-2" onclick="editExpense(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>
            </div>
        `;
        expenseList.appendChild(li);
    });
}

function editExpense(index){
    const expenses=JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpense=prompt('Enter the updated expense amount:', expenses[index]);

    if (updatedExpense !== null){
        const parsedExpense=parseFloat(updatedExpense);

        if (!isNaN(parsedExpense) && parsedExpense > 0){
            expenses[index]=parsedExpense;


            localStorage.setItem('expenses',JSON.stringify(expenses));


            displayExpenses(expenses);
        } else {
            alert('Please enter a valid expense amount');
        }
    }
}

function deleteExpense(index) {
    const confirmDelete=confirm('Are you sure you want to delete this expense?');

    if (confirmDelete){
        const expenses=JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.splice(index,1);


        localStorage.setItem('expenses',JSON.stringify(expenses));


        displayExpenses(expenses);
    }
}
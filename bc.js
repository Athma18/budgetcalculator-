function storeData(event) {
    event.preventDefault();  

    
    const username = document.getElementById('username').value;
    const accountno = document.getElementById('accountno').value;
    const password = document.getElementById('password').value;

    
    let users = JSON.parse(localStorage.getItem('users')) || [];

    
    const userExists = users.some(user => user.accountno === accountno);
    
    if (userExists) {
        alert('Account number already exists!');
        return;
    }

   
    const newUser = {
        username: username,
        accountno: accountno,
        password: password,
        balance: 0 
    };

    
    users.push(newUser);

   
    localStorage.setItem('users', JSON.stringify(users));

   
    alert("User has been registered successfully!");

    window.location.href = './login.html';
}


function validateLogin(event) {
    event.preventDefault(); 
    
    const accountno = document.getElementById('accountno').value;
    const password = document.getElementById('password').value;

    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const user = users.find(user => user.accountno === accountno && user.password === password);

    
    if (user) {
        
        localStorage.setItem('loggedInUser', JSON.stringify(user));

      
        window.location.href = './dashboard.html';
    } else {
    
        document.getElementById('error-message').textContent = "Invalid account number or password!";
    }
}


//dashboard



    function calculateBudget() {
        // Get the salary input
        const salaryInput = parseFloat(document.getElementById('salaryInput').value);

        if (isNaN(salaryInput) || salaryInput <= 0) {
            alert("Please enter a valid salary amount.");
            return;
        }

        // Get all the expense inputs
        const foodExpense = parseFloat(document.getElementById('FexpenseInput').value) || 0;
        const rentExpense = parseFloat(document.getElementById('RexpenseInput').value) || 0;
        const entertainmentExpense = parseFloat(document.getElementById('EexpenseInput').value) || 0;
        const transportationExpense = parseFloat(document.getElementById('TexpenseInput').value) || 0;
        const groceriesExpense = parseFloat(document.getElementById('GexpenseInput').value) || 0;
        const utilitiesExpense = parseFloat(document.getElementById('UexpenseInput').value) || 0;
        const otherExpense = parseFloat(document.getElementById('OexpenseInput').value) || 0;

        // Calculate total expenses
        const totalExpenses = foodExpense + rentExpense + entertainmentExpense + transportationExpense + groceriesExpense + utilitiesExpense + otherExpense;

        // Calculate the remaining budget
        const remainingBudget = salaryInput - totalExpenses;

        // Update the display
        document.getElementById('totalSalary').textContent = salaryInput.toFixed(2);
        document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
        document.getElementById('remainingBudget').textContent = remainingBudget.toFixed(2);

        // Optionally, you can alert the user if they've overspent
        if (remainingBudget < 0) {
            alert(`You have overspent by ₹${Math.abs(remainingBudget.toFixed(2))}`);
        } else {
            alert(`You have saved ₹${remainingBudget.toFixed(2)}`);
        }
    }

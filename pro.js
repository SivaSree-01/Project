let salary = 0;
let balance = 0;

function setSalary() {
    salary = Number(document.getElementById('salaryInput').value);
    balance = salary;
    document.getElementById('salary').innerText = salary;
    document.getElementById('balance').innerText = balance;
    document.getElementById('salaryInput').value = '';
}

function addTransaction() {
    const desc = document.getElementById('desc').value;
    const amount = Number(document.getElementById('amount').value);
    
    if (desc.trim() === '' || isNaN(amount) || amount <= 0) return;

    balance -= amount;
    document.getElementById('balance').innerText = balance;

    if (balance < 0) {
        alert("Warning: Your expenses exceed your salary!");
    }

    const li = document.createElement('li');
    li.innerHTML = `${desc} <span class="expense">$${amount}</span>`;
    document.getElementById('transactions').appendChild(li);

    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}

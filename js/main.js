let balance = 1000;

function withdraw() {
  const amount = parseFloat(document.getElementById("withdraw-amount").value);

  if (isNaN(amount) || amount < 0) {
    alert("Invalid input. Please enter a positive value.");
    return;
  }

  if (amount > balance) {
    alert("Insufficient balance.");
    return;
  }

  balance -= amount;
  document.getElementById("balance").textContent = `Balance: ${balance} USD`;
  alert(`${amount} money was withdrawn. Balance: ${balance} USD`);
}

function deposit() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);

  if (isNaN(amount) || amount < 0) {
    alert("Invalid input. Please enter a positive value.");
    return;
  }

  balance += amount;
  document.getElementById("balance").textContent = `Balance: ${balance} USD`;
  alert(`${amount} money was deposited. Balance: ${balance} USD`);
}

document.getElementById("withdraw-button").addEventListener("click", withdraw);
document.getElementById("deposit-button").addEventListener("click", deposit);

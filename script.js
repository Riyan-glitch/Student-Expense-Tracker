let total = 0;

window.onload = function () {
    loadExpenses();
};

function addExpense() {

    const name =
    document.getElementById("expenseName").value;

    const amount =
    parseFloat(
    document.getElementById("expenseAmount").value
    );

    const category =
    document.getElementById("category").value;

    if(name === "" || isNaN(amount)){
        alert("Please enter valid details");
        return;
    }

    const li =
    document.createElement("li");

    li.innerHTML = `
        ${name} (${category}) - ₹${amount}

        <button
        class="delete-btn"
        onclick="deleteExpense(this, ${amount})">

        Delete

        </button>
    `;

    document
    .getElementById("expenseList")
    .appendChild(li);

    total += amount;

    document
    .getElementById("total")
    .textContent = total;

    updateProgress();

    saveExpenses();

    document
    .getElementById("expenseName")
    .value = "";

    document
    .getElementById("expenseAmount")
    .value = "";
}

function deleteExpense(button, amount){

    button.parentElement.remove();

    total -= amount;

    document
    .getElementById("total")
    .textContent = total;

    updateProgress();

    saveExpenses();
}

function updateProgress(){

    const budget =
    parseFloat(
    document.getElementById("budget").value
    );

    if(!budget || budget <= 0){
        return;
    }

    let percent =
    (total / budget) * 100;

    if(percent > 100){
        percent = 100;
    }

    document
    .getElementById("progressBar")
    .style.width = percent + "%";
}

function searchExpenses(){

    const input =
    document
    .getElementById("searchBox")
    .value
    .toLowerCase();

    const items =
    document
    .querySelectorAll("#expenseList li");

    items.forEach(item => {

        const text =
        item.textContent.toLowerCase();

        item.style.display =
        text.includes(input)
        ? "flex"
        : "none";
    });
}

function saveExpenses(){

    localStorage.setItem(
        "expenses",
        document
        .getElementById("expenseList")
        .innerHTML
    );

    localStorage.setItem(
        "total",
        total
    );
}

function loadExpenses(){

    const savedExpenses =
    localStorage.getItem("expenses");

    const savedTotal =
    localStorage.getItem("total");

    if(savedExpenses){

        document
        .getElementById("expenseList")
        .innerHTML =
        savedExpenses;
    }

    if(savedTotal){

        total =
        parseFloat(savedTotal);

        document
        .getElementById("total")
        .textContent =
        total;
    }
}saveExpenses();

}

function saveExpenses(){

localStorage.setItem(
    "expenses",
    document.getElementById("expenseList").innerHTML
);
localStorage.setItem("total", total);

}

function loadExpenses(){

const savedExpenses = localStorage.getItem("expenses");
const savedTotal = localStorage.getItem("total");
if(savedExpenses){
    document.getElementById("expenseList").innerHTML = savedExpenses;
}
if(savedTotal){
    total = parseFloat(savedTotal);
    document.getElementById("total").textContent = total;
}

}    const savedTotal = localStorage.getItem("total");

    if (savedExpenses) {
        document.getElementById("expenseList").innerHTML = savedExpenses;
    }

    if (savedTotal) {
        total = parseFloat(savedTotal);
        document.getElementById("total").textContent = total;
    }
}

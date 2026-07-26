// Task 1 : Student Registration Form requirements

let studentName = "Mandela";
let age = 24;
let department = "Computer Science Engineering";
let cgpa = 7.9;

console.log("Student Name: " + studentName);
console.log("Age: " + age);
console.log("Department: " + department);
console.log("CGPA: " + cgpa);

// Task 2 : Employee Details Requirement

let employee = {
    employeeId: 1100,
    employeeName: "Madhuvanthu",
    department: "IT",
    salary: 50000
};

console.log("Employee Name:", employee.employeeName);
console.log("Salary:", employee.salary);

// Task 3 : Shopping Cart Requirement

let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"];

console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Number of Products:", products.length);

// Task 4 : Student Marks

let Tamil = 90;
let English = 80;
let Maths = 83;
let Science = 79;
let Social = 95;

let total = Tamil + English + Maths + Science + Social;

let average = total / 5;

console.log("Total Marks:", total);
console.log("Average Marks:", average);

// Task 5 : Age Checker

let age1 = 20;

if (age1 >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

let age2 = 16;

if (age2 >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// Task 6 : Login System

let username = "Madhuvanthu";
let password = "5050";

if (username === "Madhuvanthu" && password === "5050") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// Task 7 : calculator

let num1 = 77;
let num2 = 7;

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);

// Task 8 : Electricity Bill

let customerName = "Madhuvanthu";
let units = 165;
let billAmount;

if (units <= 100) {
    billAmount = units * 2;
} else if (units <= 200) {
    billAmount = units * 4;
} else {
    billAmount = units * 6;
}

console.log("Customer Name:", customerName);
console.log("Units Consumed:", units);
console.log("Bill Amount: ₹" + billAmount);

// Task 9 : Employee Salary

let basicSalary = 43000;
let bonus = 8000;

let grossSalary = basicSalary + bonus;

console.log("Basic Salary:", basicSalary);
console.log("Bonus:", bonus);
console.log("Gross Salary:", grossSalary);

// Task 10 : Movie Ticket Price

let ticketPrice = 180;
let numberOfTickets = 5;

let totalAmount = ticketPrice * numberOfTickets;

console.log("Movie Ticket Bill");
console.log("Ticket Price: ₹" + ticketPrice);
console.log("Number of Tickets: " + numberOfTickets);
console.log("Total Amount: ₹" + totalAmount);

// Task 11 : Product Discount

let productName = "Laptop";
let price = 67000;
let discount;
let finalPrice;

if (price > 12000) {
    discount = price * 20 / 100;
} else {
    discount = price * 10 / 100;
}

finalPrice = price - discount;

console.log("Product Name:", productName);
console.log("Original Price: ₹" + price);
console.log("Discount: ₹" + discount);
console.log("Final Price: ₹" + finalPrice);

// Task 12 : Function Practice

function studentDetails(name, department, cgpa) {
    console.log("Student Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}

studentDetails("Madhuvanthu", "CSE", 8.7);

// Task 13 : Bank Balance 

let accountHolder = "Madhuvanthu";
let currentBalance = 25000;
let withdrawAmount = 5000;

let remainingBalance = currentBalance - withdrawAmount;

console.log("Account Holder:", accountHolder);
console.log("Current Balance: ₹" + currentBalance);
console.log("Withdraw Amount: ₹" + withdrawAmount);
console.log("Remaining Balance: ₹" + remainingBalance);

// Task 14 : Mobile Recharge

let mobileNumber = "9597082789";
let rechargeAmount = 999;

console.log("Mobile Number:", mobileNumber);
console.log("Recharge Amount: ₹" + rechargeAmount);
console.log("Recharge Successful");

// Task 15 : Restaurent Bill

let foodName = "Chicken Tikka Biriyani";
let quantity = 2;
let Foodprice = 250;

let totalBill = quantity * price;

console.log("***** Restaurant Bill *****");
console.log("Food Name:", foodName);
console.log("Quantity:", quantity);
console.log("Price per Item: ₹" + Foodprice);
console.log("Total Bill: ₹" + totalBill);

// Mini Project

function addEmploye(id, name, age, department, basicSalary, bonus, experience) {

    let skills = ["HTML", "CSS", "JavaScript", "React"];

    let employe = {
        employeId: id,
        employeName: name,
        employeAge: age,
        department: department,
        basicSalary: basicSalary,
        bonus: bonus,
        experience: experience,
        skills: skills
    };

    return employe;
}

function displayEmploye(employe) {
    console.log("========== Employe Details ==========");
    console.log("Employe ID:", employe.employeId);
    console.log("Employee Name:", employe.employeName);
    console.log("Age:", employe.employeAge);
    console.log("Department:", employe.department);
    console.log("Skills:", employe.skills);
}

function calculateSalary(employe) {
    let grossSalary = employe.basicSalary + employe.bonus;

    console.log("Basic Salary: ₹" + employe.basicSalary);
    console.log("Bonus: ₹" + employe.bonus);
    console.log("Gross Salary: ₹" + grossSalary);
}

function checkExperience(employe) {

    if (employe.experience >= 5) {
        console.log("Experience: Experience");
    } else {
        console.log("Experience: Fresher");
    }
}

let employe = addEmploye(
    1100,
    "Madhuvanthu",
    24,
    "IT",
    50000,
    5000,
    3
);

displayEmploye(employe);

calculateSalary(employe);

checkExperience(employe);
/*
   JavaScript 7th Edition
   Chapter 2
   Hands-On Project 2-4
   Author: Arion Thomas
   Date: 10/15/2026
*/

// Declare the food prices
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Format numbers as currency
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

// Calculate the total cost, tax, and bill
function calcTotal() {
   let cost = 0;

   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   cost += buyChicken * CHICKEN_PRICE;
   cost += buyHalibut * HALIBUT_PRICE;
   cost += buyBurger * BURGER_PRICE;
   cost += buySalmon * SALMON_PRICE;
   cost += buySalad * SALAD_PRICE;

   document.getElementById("foodTotal").innerHTML =
      formatCurrency(cost);

   let tax = cost * SALES_TAX;

   document.getElementById("foodTax").innerHTML =
      formatCurrency(tax);

   let totalCost = cost + tax;

   document.getElementById("totalBill").innerHTML =
      formatCurrency(totalCost);
}

// Update the bill when a menu item is clicked
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

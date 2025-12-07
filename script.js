// // chapter 5 task 1
// var num1 = 3;
// var num2 = 5;
// document.write("The sum of " + num1 + " and " + num2 + " is: " + (num1 + num2) + "<br>");


// // chapter 5 task 2
// var num1 = 3;
// var num2 = 5;
// document.write("The sum of " + num1 + " and " + num2 + " is: " + (num1  - num2) + "<br>");

// var num1 = 3;
// var num2 = 5;
// document.write("The sum of " + num1 + " and " + num2 + " is: " + (num1  * num2) + "<br>");

// var num1 = 3;
// var num2 = 5;
// document.write("The sum of " + num1 + " and " + num2 + " is: " + (num1  / num2) + "<br>");

// var num1 = 3;
// var num2 = 5;
// document.write("The sum of " + num1 + " and " + num2 + " is: " + (num1  % num2) + "<br>");

// // chapter 5 task 3
// var num3;
// document.write("Value after variable declaration is: " + num3 + "<br>");
// num3 = 5;
// document.write("Initial value: " + num3 + "<br>");
// num3++;
// document.write("Value after increment is: " + num3 + "<br>");
// num3 += 7;
// document.write("Value after addition is: " + num3 + "<br>");    
// num3--;
// document.write("Value after decrement is: " + num3 + "<br>");
// num3 %= 3;
// document.write("The remainder is: " + num3 + "<br>");   

// // chapter 5 task 4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + " PKR<br>");


// // chapter 5 task 5
// var tableNumber = 4;
// document.write("Table of " + tableNumber + ":<br>");    
// for (var i = 1; i <= 10; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }

// // chapter 5 task 6
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");
// var fahrenheit2 = 70;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.write(fahrenheit2 + "°F is " + celsius2 + "°C<br>");


// // chapter 5 task 7
// var item1Price = 650;
// var item2Price = 100;   
// var item1Quantity = 3;
// var item2Quantity = 7;
// var shippingCharges = 100;
// var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;  
// document.write("Total cost of your order is: " + totalCost + " PKR<br>");


// // chapter 5 task 8 
// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained / totalMarks) * 100;
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%<br>");


// // chapter 5 task 9
// var usDollarToPkr = 104.80;     
// var saudiRiyalToPkr = 28;
// var usDollars = 10;
// var saudiRiyals = 25;
// var totalPkr = (usDollars * usDollarToPkr) + (saudiRiyals * saudiRiyalToPkr);  
// document.write("Total Currency in PKR: " + totalPkr + " PKR<br>");

// // chapter 5 task 10
// var number = 10;
// var result = ((number + 5) * 10) / 2;
// document.write("The final result is: " + result + "<br>");


// // chapter 5 task 11    
// var currentYear = 2023; 
// var birthYear = 1998;
// var age = currentYear - birthYear;  
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age: " + age + "<br>");

// // chapter 5 task 12
// var radius = 20;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius;
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
// document.write("The area is: " + area.toFixed(2) + "<br>");


// // chapter 5 task 13
// var snack = "Chocolate Chip";
// var currentAge = 15;
// var maxAge = 65;
// var amountPerDay = 3;
// var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;  
// document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + "<br>");

// // End of code pdf5


// // chapter 6-9 task 1
// var a = 10;
// document.write("The value of a is: " + a + "<br>");
// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("The value of a++ is: " + (a++) + "<br>");   
// document.write("Now the value of a is: " + a + "<br>");
// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("The value of a-- is: " + (a--) + "<br>");   
// document.write("Now the value of a is: " + a + "<br>");



// // chapter 6-9 task 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write("The result is: " + result + "<br>");  
// // Explanation:
// // --a = 1
// // --b = 0
// // ++b = 1
// // b-- = 1 (but after this operation, b becomes 0)
// // So, result = 1 - 0 + 1 + 1 = 3
// document.write("Value of a is: " + a + "<br>");
// document.write("Value of b is: " + b + "<br>");
// document.write("Value of result is: " + result + "<br>");
// // chapter 6-9 task 3
// var userName = prompt("Enter your name:");
// alert("Welcome " + userName + "!"); 
// // chapter 6-9 task 4
// var tableNumber = prompt("Enter a number to show its multiplication table:", "5");
// tableNumber = parseInt(tableNumber);
// if (isNaN(tableNumber)) {
//     tableNumber = 5;
// }
// document.write("Table of " + tableNumber + ":<br>");    
// for (var i = 1; i <= 10; i++) {
//     document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
// }   
// // chapter 6-9 task 5
// var subject1 = prompt("Enter name of subject 1:");
// var subject2 = prompt("Enter name of subject 2:");
// var subject3 = prompt("Enter name of subject 3:");
// var totalMarksPerSubject = 100;
// var marksObtained1 = parseInt(prompt("Enter marks obtained in " + subject1 + ":"));
// var marksObtained2 = parseInt(prompt("Enter marks obtained in " + subject2 + ":"));
// var marksObtained3 = parseInt(prompt("Enter marks obtained in " + subject3 + ":"));
// var totalMarks = totalMarksPerSubject * 3;  
// var totalObtained = marksObtained1 + marksObtained2 + marksObtained3;
// var percentage = (totalObtained / totalMarks) * 100;
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th></tr>");  
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksObtained1 + "</td><td>" + ((marksObtained1 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksObtained2 + "</td><td>" + ((marksObtained2 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + marksObtained3 + "</td><td>" + ((marksObtained3 / totalMarksPerSubject) * 100).toFixed(2) + "%</td></tr>");
// document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");
// // End of code pdf6-9




















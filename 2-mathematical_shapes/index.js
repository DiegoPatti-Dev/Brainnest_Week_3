// Assignment 2 - Mathematical shapes

// a. JavaScript program to find the diagonal of a square where the length of each side is 9.
let side = 9;
const diagonal = side * Math.sqrt(side);

// b. JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7
let sideA = 5,
sideB = 6,
sideC = 7;
const semiPerimeter = (sideA + sideB + sideC) / 2;
const triangleArea = Math.sqrt(
  semiPerimeter * 
  (semiPerimeter - sideA) * 
  (semiPerimeter - sideB) * 
  (semiPerimeter - sideC));

// c. JavaScript program to find the circumference and surface area of a circle whose radius is 4.
let radius = 4;
const circumference = 2 * Math.PI * radius;
const surfaceArea = Math.PI * (Math.pow(radius,2))

//Results
alert(`The diagonal of the square is ${diagonal}.` +
`\nThe triangle area is ${triangleArea}.` +
`\nThe cicumference of the circle is ${circumference}.` +
`\nThe suface area of the circle is ${surfaceArea}.`)
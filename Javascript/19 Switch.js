// Syntax of Switch Case

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

const month = 6
switch (month) {  // key gives value what i want 
  case 1:
    console.log("January")
    break; // If condition match without using break then it will run code behind it until default code will come
  case 2:
    console.log("Febraury")
    break;
  case 3:
    console.log("March")
    break;
  case 4:
    console.log("April")
    break;
  case 5:
    console.log("May")
    break;
  case 6:
    console.log("June")
    break;
  case 7:
    console.log("July")
    break;
  case 8:
    console.log("Agust")
    break;
  case 1:
    console.log("September")
    break;
  case 1:
    console.log("October")
    break;
  case 1:
    console.log("November")
    break;
  case 1:
    console.log("December")
    break;

  default:
    console.log("Not matching...")
    break;
}
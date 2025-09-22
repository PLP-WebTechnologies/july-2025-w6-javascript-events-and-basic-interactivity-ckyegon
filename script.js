/*Part 1: JavaScript Event Handling and Interactive Elements*/

let title = document.getElementById("title");
let intro = document.getElementById("intro");

/*changing color of title onmouseover*/
title.onmouseover = () => {
  title.style.color = "orange";
};
/*changing text content on clicking button*/
let txtButton = document.getElementById("txtButton");
txtButton.addEventListener("click", () => {
  title.textContent = "I just replaced the previous title. I was not here!";
  title.style.color = "beige";
});

/*using event listener method*/
/*This method changes paragraph color on mouseover to teal*/
intro.addEventListener("mouseover", () => {
  intro.style.color = "teal";
});
/*This method changes paragraph color back to black on mouseout*/
intro.addEventListener("mouseout", () => {
  intro.style.color = "#000";
});

/* Capturing keystroke with keydown*/
let inputArea = document.getElementById("inputArea");
inputArea.addEventListener("keydown", (event) => {
  console.log("You pressed this key: ", event.key);
});

/*Part 2: Building Interactive Elements*/

/*js to toggle dark and light mode of webpage*/

let darkTheme = document.getElementById("darkTheme");
darkTheme.addEventListener("click", (event) => {
  document.body.classList.toggle("darkTheme");
});

/*js to hide and show menu items*/
let dropDownButton = document.getElementById("dropDownButton");
let dropDownContent = document.getElementById("dropDownContent");

dropDownButton.addEventListener("click", () => {
  dropDownContent.style.display =
    dropDownContent.style.display === "block" ? "none" : "block";
});

/*Part 3: Form Validation with JavaScript*/
let validSignUp = () => {
  let userName = document.getElementById("username").value.trim();
  let passWord = document.getElementById("password").value.trim();
  let email = document.getElementById("email").value.trim();

  let isValidUser = (userName) => {
    let format = "/^[a-zA-Z0-9_-]{3,16}$/";
    return format.test(userName);
  };
  isValidPass = (passWord) => {
    let format = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$";
    return format.test(passWord);
  };
  isValidEmail = (email) => {
    let format = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";
    return format.test(email);
  };
  // ensures values are not empty
  if (!userName || !email || !passWord) {
    alert("All fields are required!");
    return false; //prevent form submission
  }

  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return false; //prevent form submission
  }

  if (!isValidPass(passWord)) {
    alert(
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
    );
    return false; //prevent form submission
  }

  alert("Form submitted successfully!");
  return true; //allow form submission
};

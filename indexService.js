const users = [
  { username: "admin", pwd: "admin23", name: "osher" },
  { username: "admin1", pwd: "admin73", name: "shira" },
  { username: "admin2", pwd: "admin43", name: "natalia" },
  { username: "admin3", pwd: "admin23", name: "ben" },
  { username: "admin4", pwd: "admin53", name: "sharon" },
  { username: "admin5", pwd: "admin90", name: "lior" },
];

let welcomeName = document.getElementById("welcome-name");
let dataDiv = document.getElementById("data-div");
let ageH3 = document.getElementById("age");
let genderH3 = document.getElementById("gender");
const lsUserName = window.localStorage.getItem("user_name");
const lsPass = window.localStorage.getItem("pass");

// logout gets you out and clear ls
$("#logout").on("click", function (e) {
  window.localStorage.clear();
  window.location = "http://127.0.0.1:5501/login.html";
  e.preventDefault();
});
// simple authentication check
// need to call it after the "changeWelcomeName" function
function checkForAuth(welcomeName) {
  if (welcomeName.innerText == "undefined") {
    window.location = "http://127.0.0.1:5501/login.html";
  }
}
// get the name for the welcome
let user_name = window.localStorage.getItem("user_name");
let Name;
function setNameToWelcome(user_name) {
  for (let i = 0; i < users.length; i++) {
    if (user_name == users[i].username) {
      Name = users[i].name;
    }
  }
  welcomeName.innerText = Name;
  dataDiv.firstElementChild.innerText = `Welcome ${Name}`;
  return Name;
}
setNameToWelcome(user_name);
checkForAuth(welcomeName);

// get the age and the gender of the user

fetch(`https://api.genderize.io/?name=${setNameToWelcome(user_name)}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    genderH3.innerText = `and your gender is: ${data.gender}`;
  })
  .catch((error) => console.log(error));

fetch(`https://api.agify.io/?name=${setNameToWelcome(user_name)}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    ageH3.innerText = `your age is: ${data.age}`;
  })
  .catch((error) => console.log(error));

const users = [
  { username: "admin", pwd: "admin23", name: "osher" },
  { username: "admin1", pwd: "admin73", name: "shira" },
  { username: "admin2", pwd: "admin43", name: "natalia" },
  { username: "admin3", pwd: "admin23", name: "ben" },
  { username: "admin4", pwd: "admin53", name: "sharon" },
  { username: "admin5", pwd: "admin90", name: "lior" },
];

let userName = document.getElementById("user-name");
let password = document.getElementById("password");
let form = document.getElementById("form");
let errorDiv = document.getElementById("error-div");
let errorElement_h4 = document.createElement("h4");
var currentdate = new Date();
var datetime =
  "Last Sync: " +
  currentdate.getDate() +
  "/" +
  (currentdate.getMonth() + 1) +
  "/" +
  currentdate.getFullYear() +
  " @ " +
  currentdate.getHours() +
  ":" +
  currentdate.getMinutes() +
  ":" +
  currentdate.getSeconds();
// login event + save to ls
$("#login-button").on("click", function (e) {
  for (let i = 0; i < users.length; i++) {
    if (userName.value == users[i].username && password.value == users[i].pwd) {
      window.localStorage.setItem("user_name", users[i].username);
      window.localStorage.setItem("pass", users[i].pwd);
      window.localStorage.setItem("enteranceTime", datetime);
      window.location = "http://127.0.0.1:5501/index.html";
    }
  }

  e.preventDefault();
});

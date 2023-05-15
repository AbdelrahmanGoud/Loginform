let loginemail = document.getElementById("Lmail");
let loginpass = document.getElementById("Lpassword");
let signupename = document.getElementById("Suname");
let signupemail = document.getElementById("Smail");
let signuppass = document.getElementById("Spassword");
let buttonsign = document.querySelector(".sign");

let Uname = localStorage.getItem("recordnaem");
if (Uname) {
  document.getElementById("username").innerHTML = `Welcome ${Uname}`;
}

let dataOfusar;
if (localStorage.getItem("users") == null) {
  dataOfusar = [];
} else {
  dataOfusar = JSON.parse(localStorage.getItem("users"));
}

function haveaccu() {
  if (localStorage.getItem("users") == null) { // تم تعديل هنا
    return false;
  }
  return true; // تم إضافة هذه السطر
}

function signup() {
  if (isempty() == false) {
    document.getElementById("exist").innerHTML =
      `<span class="m-3 text-danger">All input areas are required</span> `;
    return false;
  }

  let containerofdata = {
    sname: signupename.value,
    semail: signupemail.value,
    spass: signuppass.value,
  };

  if (dataOfusar.length == 0) {
    dataOfusar.push(containerofdata);
    localStorage.setItem("users", JSON.stringify(dataOfusar));
    document.getElementById("exist").innerHTML =
      `<span class="m-3 text-success">Success</span> `;
    return true;
  } else if (ifemailexist() === false) {
    document.getElementById("exist").innerHTML =
      `<span class="m-3 text-danger">Email already exists</span> `;
  } else {
    dataOfusar.push(containerofdata);
    localStorage.setItem("users", JSON.stringify(dataOfusar));
    document.getElementById("exist").innerHTML =
      `<span class="m-3 text-success">Success</span> `;
    return true;
  }
}

function isempty() {
  if (signupename.value == "" || signupemail.value == "" || signuppass.value == "") { // تم تعديل هنا
    return false;
  } else {
    return true;
  }
}

function ifemailexist() {
  for (let i = 0; i < dataOfusar.length; i++) {
    if (dataOfusar[i].semail == signupemail.value) {
      return false;
    }
  }
  return true;
}

function login() {
  if (haveaccu() === false) {
    document.getElementById("logiexsist").innerHTML =
      `<span class="text-danger m-3">You do not have an account. Please sign up.</span>`;
    return false;
  }

  if (loginempty() === false) {
    document.getElementById("logiexsist").innerHTML =
      `<span class="text-danger m-3">All input areas are required.</span>`;
      return false;
      }
      
      let lemai = loginemail.value;
      let lpass = loginpass.value;
      
      for (let i = 0; i < dataOfusar.length; i++) {
      if (dataOfusar[i].semail == lemai && dataOfusar[i].spass == lpass) {
      localStorage.setItem("recordnaem", dataOfusar[i].sname);
      location.href = "nextpage/home.html";
      return true; // تم إضافة هذا السطر
      } 
    }
    
    document.getElementById("logiexsist").innerHTML = `<span class="text-danger m-3">Incorrect email or password.</span>`; // تم تعديل هنا
    return false;
}

function loginempty() {
  if (loginemail.value == "" || loginpass.value == "") { // تم تعديل هنا
    return false;
  } else {
    return true;
  }
}

function logout() {
  localStorage.removeItem("recordnaem");
  location.href = "../index.html";
}

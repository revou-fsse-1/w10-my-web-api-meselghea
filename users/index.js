const getData = localStorage.getItem("data");
const data = JSON.parse(getData) || [
  { id: 1, email: "admin@gmail.com", password: "Admin123" },
];

function store() {
  var email = document.getElementById('email');
  var password = document.getElementById('pw');
  var validEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  var validPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const dataFind = data.find((a) => a.email === email.value);
  if (email.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (email.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (!pw.value.match(validPw)) {
    alert('Password must Max 8 character, 1 number, 1 uppercase letter & 1 lowercase letter!');
  } else if (!email.value.match(validEmail)) {
    alert('Please fill correct your E-mai!');
  } else if (dataFind !== undefined) {
    alert("Email already registered");
  } else if (dataFind === undefined) {
      data.push({
        id: data[data.length - 1].id + 1,
        email: email.value,
        password: password.value,
      });
      localStorage.setItem("data", JSON.stringify(data));
      alert('Your account has been created!');
      window.location.href = "/login/";
    }
}

//checking
function check(){
  var email = document.getElementById('email');
  var password = document.getElementById('pw');
  var validEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  var validPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const dataFind = data.find((a) => a.email === email.value);
  var userRemember = document.getElementById("rememberMe");

  if (email.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (email.value.length == 0) {
    alert("Please fill in email");
  } else if (password.value.length == 0) {
    alert("Please fill in password");
  } else if (dataFind === undefined) {
    alert("Your email and password not registered");
  } else if (!pw.value.match(validPw)) {
    alert('Password must Max 8 character, 1 number, 1 uppercase letter & 1 lowercase letter!');
  } else if (!email.value.match(validEmail)) {
    alert('Please fill correct your E-mai!');
  } else if (dataFind !== undefined) {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    window.location.href = "/homepage/";
  }
}

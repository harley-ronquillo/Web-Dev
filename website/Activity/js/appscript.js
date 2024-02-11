function toggleSemesterChange() {
    var semesterChangeSelect = document.getElementById('semesterChangeSelect').value;
    var changedElements = document.querySelectorAll('.changed');
    var otherElements = document.querySelectorAll('.other');
   
    if (semesterChangeSelect === 'changed') {
        changedElements.forEach(element => element.style.display = 'block');
        otherElements.forEach(element => element.style.display = 'none');
    } else {
        changedElements.forEach(element => element.style.display = 'none');
        otherElements.forEach(element => element.style.display = 'block');
    }
}

  
document.addEventListener("DOMContentLoaded", function() {
  var signinBtn = document.getElementById("signinBtn");
  signinBtn.addEventListener("click", function() {
      var studentid = document.getElementById("studentid").value;
      var password = document.getElementById("password").value;

      google.script.run.withSuccessHandler(onLoginSuccess).login(studentid, password);
  });

  function onLoginSuccess(result) {
      if (result) {
          window.location.href = 'form.html';
      } else {
          alert('Invalid credentials');
          console.log("error");
      }
  }
});








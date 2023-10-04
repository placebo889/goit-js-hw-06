document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const formData = new FormData(loginForm); 
  
      const userData = {};

      for (const [name, value] of formData.entries()) {
        userData[name] = value;
      }
      if (userData.email && userData.password) {
        console.log(userData);
        loginForm.reset();
      } else {
        alert('Усі поля повинні бути заповнені');
      }
    });
  });
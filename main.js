// This object holds my personal student information
const student = {
  name: 'Sanyerlis "Vanessa" Camacaro',
  major: 'Bachelor of Science in Artificial Intelligence and Master of Software Engineering',
  email: 'sancamac@uat.edu',
  graduation: 'December 22nd, 2025'
};

// Shows my name in the HTML by changing the text of the element with id "name"
document.getElementById('name').textContent = 'Name: ' + student.name;

// Shows my major in the HTML by changing the text of the element with id "major"
document.getElementById('major').textContent = 'Major: ' + student.major;

// Shows my email in the HTML by changing the text of the element with id "email"
document.getElementById('email').textContent = 'UAT Email: ' + student.email;

// Shows my graduation date in the HTML by changing the text of the element with id "graduation"
document.getElementById('graduation').textContent = 'Expected Graduation: ' + student.graduation;

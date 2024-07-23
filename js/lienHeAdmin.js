
window.onload = function() {
  
  var username = localStorage.getItem('loggedInUser') || [];
  var user = JSON.parse(username);
  var name = user.name;
  
  if(username) {
    
    document.getElementById('username').innerText = name;
  }
}
function logo(){
    window.location.href ="trangchuAdmin.html";
  }
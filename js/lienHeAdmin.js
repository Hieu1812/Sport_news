
window.onload = function() {
  
  var username = localStorage.getItem('loggedInUser') || [];
  var user = JSON.parse(username);
  var name = user.name;
  
  if(username) {
    
    document.getElementById('username').innerText = name;
  }
}
var dx = document.getElementById('dangXuat').addEventListener('click',()=>{
  localStorage.removeItem('loggedInUser')
})
function logo(){
    window.location.href ="trangchuAdmin.html";
  }
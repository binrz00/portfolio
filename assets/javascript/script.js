const links = document.getElementById("links");
let size = window.matchMedia("(max-width: 768px)")
function myFunction(size) {
    if (size.matches) { 
      links.setAttribute("class","nav justify-content-center")
    } else {
     links.setAttribute("class","nav justify-content-end")
    }
  }
  
  
  myFunction(size) 
  size.addListener(myFunction)
  const button = document.getElementById("button");
  button.addEventListener("click",function(){
    const userName = document.getElementById("nameInput").value;
    const userEmail = document.getElementById("emailInput").value;
    const userMessage = document.getElementById("messageInput").value;
    alert(`thank you ${userName} for submitting ${userMessage} I will respnd to you at ${userEmail} `);

  })
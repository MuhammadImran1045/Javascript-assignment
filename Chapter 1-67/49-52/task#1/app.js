function addMessage(){
    var val=document.getElementById("val")
    var p=document.createElement("p")
    var textNode=document.createTextNode(val.value+" | ")
    p.appendChild(textNode)
    var messages=document.getElementById("messages")
    messages.appendChild(p)


    var cal=document.getElementById("cal")
    var p1=document.createElement("p")
    var textNode1=document.createTextNode(cal.value+" | ")
    p.appendChild(textNode1)
    var messages=document.getElementById("messages")
    messages.appendChild(p1)



    var cal=document.getElementById("mal")
    var p4=document.createElement("p")
    var textNode4=document.createTextNode(mal.value+" | ")
    p.appendChild(textNode4)
    var messages4=document.getElementById("messages")
    messages4.appendChild(p4)


    document.getElementById("str").disabled = true;
}


function myFunction() {
    var x = document.getElementById("cal");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

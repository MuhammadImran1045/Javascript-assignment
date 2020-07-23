// Task (i)
alert(document.getElementById("form-content").nodeType)

// Task(ii)

var a,b;
a=document.getElementById("lastName").nodeType
console.log(a)
b=document.getElementById("lastName").childNodes
for(var i=0; i<=b.length; i++){
    console.log(b[i])
}

// Task (iii)

var node;
node=document.createElement("p")
var text=document.createTextNode("How are you")
node.appendChild(text)
document.getElementById("lastName").appendChild(node)

// Task (iv)

var a,b;
a=document.getElementById("main-content").firstChild
console.log(a)
b=document.getElementById("main-content").lastChild
console.log(b)

// Task (v)

var a,b;
a=document.getElementById("lastName").nextSibling
console.log(a)
b=document.getElementById("lastName").previousSibling
console.log(b)

// Task (vi)

var a,b;
a=document.getElementById("email").nodeType
console.log(a)
b=document.getElementById("email").parentNode
console.log(b)
// Task (i)
var a=document.getElementById("main-content")

// Task (ii)

console.log(a)
console.log(a.innerHTML)

// Task (iii)

var b=document.getElementsByClassName("render")
for(var i=0; i<=b.length; i++){
    console.log(b[i])
}

// Task (iv)

var target;
target=document.getElementById("first-name")
target.setAttribute("value","Saylani")

// Task (v)

target=document.getElementById("last-name")
target.setAttribute("value","welfare")
target=document.getElementById("email")
target.setAttribute("value","saylaniwelfare@email.com")

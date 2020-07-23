// Assignment # 38-42
// JAVASCRIPT

//Q1

// function pow(a,b)
// {

//      var z =a**b;
//      return z;




// }

// var g=pow(5,2)

// console.log(g)


//Q2


// q=prompt("enter a year")

// function leapyear(y)
// {


    
//     if (y%400==0){
//             document.write(y," is a leap year");



//     }
//     else if (y%100==0){
//         document.write(y," is not leap year");


//     }

//     else if(y%4==0){



//         document.write(y," is a leap year");

//     }
//     else{
//         document.write(y," is not leap year");


//     }

// }

// leapyear(q)




//Q3
// var a=parseInt(prompt("enter the value of a"));
// var b=parseInt(prompt("enter the value of b"));
// var c=parseInt(prompt("enter the value of c"));



// function f1(a,b,c)
// {

//     var s=(a+b+c)/2;
 
//     return s 
   

// }


// function f2(a,b,c){
//     var s 
//     s=f1(a,b,c)
//     var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     return area
// }
// z=f2(a,b,c)

// document.write("Area=",z;




//Q4
// var st1=parseInt(prompt("enter the student 1 subject mark"));
// var st2=parseInt(prompt("enter the student 2 subject mark"));
// var st3=parseInt(prompt("enter the student 3 subject mark"));

// function per(s1,s2,s3){

//         var a,s1,s2,s3;
//         a= ((s1+s2+s3)/300)*100;
//         return a 


// }

// function avg(s1,s2,s3){
    
//       var b,s1,s2,s3;
//       b = (s1+s2+s3)/3;
//       return b 

   

// }


// function main(s1,s2,s3){

//             var q,w;
//             q= avg (s1,s2,s3)
//             w= per (s1,s2,s3)
//             document.write("The Percantage: "+w+"<br>")
//            document.write("The Average: "+q+"<br>")
      
// }

// main(st1,st2,st3)





//Q5

//slice has two parameters. Parameter 1 is the starting position. Parameter 2 is the ending position. It is used to intercept the string. The intercepted area does not include the ending position.
// function select(a,b){
// 	let al = a.length, bl = b.length;
	
// 	for(let i = 0;i<bl;i++){
// 		if(b.slice(i,i+al)==a){
// 			document.write("-->"+i)
// 			break;
// 		}
// 		/*document.write("<br/>"+i)*/
// 	}
// }
// let str1 = "w"
 
// let str2 = "qwertyabcefgthyua"
// window.onload=function(){
// 	select(str1,str2)
// }


//Q6
// text_truncate = function(str, length, ending) {
//     if (length == null) {
//       length = 100;
//     }
//     if (ending == null) {
//       ending = '...';
//     }
//     if (str.length > length) {
//       return str.substring(0, length - ending.length) + ending;
//     } else {
//       return str;
//     }
//   };
  
// console.log(text_truncate('We are doing JS string exercises.'))

// er=text_truncate('We are doing JS string exercises.',20)
// console.log(er)
// var string = er;

// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// console.log(string);
// //hello wrld





// Q7

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity"
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());


// Q# 8

// function KmtoMeter(a){
//     var a,b;
//     b=a*0.621371
//     return b
// }

// function KmtoInch(a){
//     var a,b;
//     b=a*39370.07874
//     return b
// }

// function KmtoFeet(a){
//     var a,b;
//     b=a*3280.839895
//     return b
// }

// function KmtoCentimeter(a){
//     var a,b;
//     b=a* 100000
//     return b
// }

// var ans1,ans2,ans3,ans4;
// ans1=KmtoMeter(3.5)
// ans2=KmtoInch(3.5)
// ans3=KmtoFeet(3.5)
// ans4=KmtoCentimeter(3.5)

// console.log("The Kilometer to Meter: "+ans1)
// console.log("The Kilometer to Inch: "+ans2)
// console.log("The Kilometer to Feet: "+ans3)
// console.log("The Kilometer to Centimeter: "+ans4)


// Q#9

// var count=1,working_hours, over_time,over_time_pay;

// while(count<=10){
//     working_hours=+prompt("Enter the working hours of employe: "+count+": ")
//     if(working_hours>40){
//         over_time = working_hours - 40;
//         over_time_pay = over_time * 12.00;
//         console.log("Employe No."+count+"overtime pay is: "+over_time_pay)
//     }
//     else{
//         console.log("You have to work for more than 40 hours to get over time pay")
//     }
//     count++
// }


// Task # 10

// var amount,a,b,c;
// amount=+prompt("Enter Amount to Withdarw!!")
// a=Math.floor(amount/100);
// b=Math.floor((amount % 100)/50);
// c=Math.floor(((amount % 100) % 50 ) / 10);

// document.write("You will have "+a+" hunderdes notes "+b+" fifty notes "+c+" ten notes")

//challange 1

function dayTime(){

var today = new Date();
var day = today.getDay();
var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour>=12)? 'PM ':' AM';
hour = (hour>=12)? hour -12: hour;
if(hour === 0 && prepand === 'PM')
{
    if(minute === 0 && second === 0)
    {
        hour = 12;
        prepand = 'noon';
    }
else
{
    hour = 12;
    prepand = 'PM';
}
}
if(hour === 0 && prepand === 'AM')
{
    if(minute === 0 && second === 0)
    {
        hour = 12;
        prepand = 'Midnight';
    }
    else
    {
        hour = 12;
        prepand = 'AM';
    }
    
}
alert("Today is :" + " " + dayList[day] + "\nCurrent Time :" + " " + hour + prepand + ":" + minute + ":" + second);
}

// challange 2

function getURL(){

alert(document.URL);
}

// Challange 3

function wordOne(){
    var  w = prompt("enter sentence");
    var r = w.startsWith('java');
    window.alert("This is " + r);
}

// Challange 4



function myFunction(){
    var a =  prompt("enter number");
    var b =  prompt("enter number");
    var c =  prompt("enter number");
    if(a>=b && a>=c)
    {
        alert(a);
    }
         if(b>=a && b>=c)
            {
                alert(b);
            }
             if(c>=a && c>=b)
            {
                alert(c);
            }
        }
    
// Challange 5

/*function capitalLetter(){
    var str = prompt("enter sentence");
    str = str.split(" ");
    for(var i = 0,x = str.length;i<x;i++){
        str[i] =str[i][0].toUpperCase() + str[i].subStr(1);
    }
    return str.join(" "); {
        document.write(capitalLetter()).innerHTML=str;
    }
}
window.alert(capitalLetter());*/

// Challange 6

num = prompt("enter number");

function time_convert(num){

    var hours = Math.floor(num / 60);
    var minutes = num % 60;

    return hours + ":" + minutes;
}
window.alert(time_convert(num));


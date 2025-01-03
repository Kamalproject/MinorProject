// var time=new Date().getHours();
// if(time<12){
//     alert("Good Morning");
// }
// else if(time==12){
//     alert("Good Noon");
// }
// else if(time>12 && time<20){
//     alert("Good Evening");
// }
// else{
//     alert("Good Night");
// }




function resetContent(){
    document.getElementById("search").value="";
}

function searchContent(){
    // Get the input value
    var input = document.getElementById("search").value;
  
    // Display the input value on the screen
    document.getElementById("searchResult").innerHTML = "You searched for: " + input;
  }
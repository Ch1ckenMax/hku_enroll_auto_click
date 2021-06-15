function proceedStep2Of3(){ //Click function
  let frame = document.getElementById("ptifrmtgtframe");
  frame.contentDocument.getElementById("DERIVED_REGFRM1_LINK_ADD_ENRL$82$").click();
  frame.onload = function() { 
    frame.contentDocument.getElementById("somerandombutton").click();
  }
}
var miliseclater;
do{
  alert("Please input the click time. Make sure that the time is later than current time.");
  //Prompt the click time
  var year = parseInt(prompt("Input Year"));
  var month = parseInt(prompt("Input Month"));
  var day = parseInt(prompt("Input Day"));
  var hour = parseInt(prompt("Input hour"));
  var minute = parseInt(prompt("Input minute"));
  var timeNow = new Date(); //Retrieve current time
  var clickTime = new Date(year,month - 1,day,hour,minute,0, 150); //Delay for 0.15 second as buffer
  miliseclater = clickTime - timeNow;
}while(miliseclater <= 0);
var timer = setTimeout(proceedStep2Of3, miliseclater);


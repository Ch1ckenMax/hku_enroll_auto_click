function proceedStep2Of3(){ //Click function
  let frame = document.getElementById("ptifrmtgtframe");
  frame.contentDocument.getElementById("DERIVED_REGFRM1_LINK_ADD_ENRL$82$").click();
  frame.onload = function() { 
    frame.contentDocument.getElementById("DERIVED_REGFRM1_SSR_PB_SUBMIT").click();
  }
}
var miliseclater;
do{
  alert("Please input the click time. Make sure that the time is later than current time.");
  //Prompt the click time
  let hour = parseInt(prompt("Input hour (24-hour format)"));
  let minute = parseInt(prompt("Input minute"));
  let timeNow = new Date(); //Retrieve current time
  let clickTime = new Date(timeNow.getFullYear(),timeNow.getMonth(),timeNow.getDate(),hour,minute,0, 100); //Delay for 0.1 second as buffer
  miliseclater = clickTime - timeNow;
}while(miliseclater <= 0);
var timer = setTimeout(proceedStep2Of3, miliseclater);

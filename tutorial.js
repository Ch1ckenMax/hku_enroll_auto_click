function enrollTutorial(classNum){ //Click function
  
}

var miliseclater, classNumber;

//Prompt for class num and verify the existence of the class
do{
  let temp = prompt("Input class Number");
 
  //Remove zeros at start of string
  if(temp[0] == '0')
    temp = temp.substr(1);
  if(temp[0] == '0')
    temp = temp.substr(1);
  
  //
}
  
do{
  alert("Please input the click time. Make sure that the time is later than current time.");
  //Prompt the click time
  let hour = parseInt(prompt("Input hour (24-hour format)"));
  let minute = parseInt(prompt("Input minute"));
  let timeNow = new Date(); //Retrieve current time
  let clickTime = new Date(timeNow.getFullYear(),timeNow.getMonth(),timeNow.getDate(),hour,minute,0, 100); //Delay for 0.1 second as buffer
  miliseclater = clickTime - timeNow;
}while(miliseclater <= 0);

var timer = setTimeout( () => { enrollTutorial(classNumber); }, miliseclater);

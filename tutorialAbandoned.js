//For testing purpose
//for(let i = 0; i < 12; i++){
//  document.getElementById("choice"+i).onclick = ()=>{alert("doggo"+i)};
//  document.getElementById("choice"+i).removeAttribute("disabled");
//}

var miliseclater = 0, classNumber = -1;

//Prompt for class num, validate format, and verify the existence of the class
do{
  let temp = prompt("Input class Number (3-digit format)");
  
  //Validate format (is number, string length 3)
  if(temp.length != 3 || isNaN(temp)){
    alert("Wrong format")
    continue;
  }
 
  //Remove zeros at start of string
  if(temp[0] == '0')
    temp = temp.substr(1);
  if(temp[0] == '0')
    temp = temp.substr(1);
  
  //verify existence
  if(document.getElementById("choice"+ (parseInt(temp) - 1).toString()) != null)
    classNumber = parseInt(temp) - 1;
  else
    alert("Class does not exist");
  
}while(classNumber == -1); //-1 represents wrong input

while(miliseclater <= 0){
  alert("Please input the click time. Make sure that the time is later than current time.");
  //Prompt the click time
  let hour = prompt("Input hour (24-hour format)");
  let minute = prompt("Input minute");
  
  //Validation
  if(hour.length == 0 || minute.length == 0 || isNaN(hour) || isNaN(minute)){
    alert("invalid input");
    continue;
  }

  hour = parseInt(hour);
  minute = parseInt(minute);
  
  if( (hour < 0 || hour >= 24) || (minute < 0 || minute >= 60) ){
    alert("invalid time");
    continue;
  }
  
  let timeNow = new Date(); //Retrieve current time
  let clickTime = new Date(timeNow.getFullYear(),timeNow.getMonth(),timeNow.getDate(),hour,minute,0, 50); //Delay for 0.05 second as buffer
  miliseclater = clickTime - timeNow;
}

var timer = setTimeout( () => { document.getElementById("choice"+classNumber.toString()).click(); }, miliseclater);

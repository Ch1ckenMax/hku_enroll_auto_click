var miliseclater, classNumber = -1;

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
    alert("Class does not exist")
  
}while(classNumber == -1); //-1 represents wrong input
  
do{
  alert("Please input the click time. Make sure that the time is later than current time.");
  //Prompt the click time
  let hour = parseInt(prompt("Input hour (24-hour format)"));
  let minute = parseInt(prompt("Input minute"));
  let timeNow = new Date(); //Retrieve current time
  let clickTime = new Date(timeNow.getFullYear(),timeNow.getMonth(),timeNow.getDate(),hour,minute,0, 100); //Delay for 0.1 second as buffer
  miliseclater = clickTime - timeNow;
}while(miliseclater <= 0);

var timer = setTimeout( () => { document.getElementById("choice"+classNumber.toString()).click(); }, miliseclater);

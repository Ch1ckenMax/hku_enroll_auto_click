    window.addEventListener("load",() => {
        //The button on the webpage cannot be clicked until the specified time. Therefore, the page has to be reloaded
        //However, when the page is reloaded the chrome console clears all the javascript code
        //To keep the code running, a status variable and the class to be clicked will be saved in Tampermonkey storage
        //And this status varaible will determine which part of the code should be run
        //Specifically, when the variable is true, the browser clicks the button
        //otherwise(false/null), the browser asks for the input
        if(GM_getValue("status",false)){
            let classNum = GM_getValue("classNum",false);
            if(classNum){
                //The following commented section is for testing purpose
                //document.getElementById(classNum).removeAttribute("disabled");
                //document.getElementById(classNum).onclick = ()=>{alert(classNum)};
              
                document.getElementById(classNum).click();
                document.getElementById("confirmToSubmit").click(); //Dialog box containing this button appears after the above click action. Need async? UNTESTED
                
            }
            else{
                alert("error. cant find class variable");
            }
            GM_deleteValue("status");
            GM_deleteValue("class");
        }
        else{
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
                if(temp[0] == '0'){
                    temp = temp.substr(1);}
                if(temp[0] == '0'){
                    temp = temp.substr(1);}

            //verify existence
            if(document.getElementById("choice"+ (parseInt(temp) - 1).toString()) != null){
                classNumber = parseInt(temp) - 1;}
            else{
                alert("Class does not exist");}

            }while(classNumber == -1); //-1 represents wrong input

            while(miliseclater <= 0){
                alert("Please input the click time. Make sure that the time is later than current time.");
                //Prompt the click time
                let month = prompt("Input month");
                let day = prompt("Input day");
                let hour = prompt("Input hour (24-hour format)");
                let minute = prompt("Input minute");

                //Validation
                if(month.length == 0 || day.length == 0 || hour.length == 0 || minute.length == 0 || isNaN(month) || isNaN(day) || isNaN(hour) || isNaN(minute)){
                    alert("invalid input");
                    continue;
                }

                hour = parseInt(hour);
                minute = parseInt(minute);
                month = parseInt(month);
                day = parseInt(day);

                if( (hour < 0 || hour >= 24) || (minute < 0 || minute >= 60) || (month < 1 || month > 12) || (day < 1 || day > 31) ){
                    alert("invalid time/date");
                    continue;
                }

                let timeNow = new Date(); //Retrieve current time
                let clickTime = new Date(timeNow.getFullYear(),month - 1,day,hour,minute,0, 150); //Delay for 0.15 second as buffer
                miliseclater = clickTime - timeNow;
                console.log(timeNow);
                console.log(clickTime);
                console.log(miliseclater);
            }

            var timer = setTimeout( () => {GM_setValue("status",true); GM_setValue("classNum","choice"+classNumber.toString()); window.location.reload(); } , miliseclater);
        }


    });

var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);

  if(century == "" || century < 0 || century > 2100 ){
    alert("Please Enter A Valid Century");
    return false;
  }else if (year == "" || year > 2021){
    alert("Please Enter A Valid Year");
    return false;
  }else if (month == "" || month <= 0 || month > 12){
    alert("Please Enter A Valid Month");
    return false;
  }else if(dayOfMonth == "" || dayOfMonth <=0  || dayOfMonth > 31){
    alert("Please Enter A Valid Day Of The Month");
    return false;
  }
}
//Calculate func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
}

//main caller func
function checkDayOfWeek(){
    day = calculateDay();
     checkGender();
     console.log("The function runs");//Test chackDayOfWeek function
}

//get selected radio button
function checkGender()
{
    var gen = document.getElementsByName("rads");
    if(gen[0].checked == true){
        var gender = "male";
    }else if(gen[1].checked == true){
        var gender = "female";
    }else {
      console.log("pass");//Test the radio buttons
    }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "The day was a Monday." + " " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "The day was a Monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "The day was a Tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "The day was a Wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "The day was a Thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "The day was a Friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "The day was a Saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:
                // console.console.log("Pass");//Test male case
              }
        break;

        case gender = "female":
            switch(day){
              case 0 || -0:
                document.getElementById("result").innerHTML = "The day was a Sunday." + "  " + "Your akan name is " + femaleNames[0];
              break;
              case 1 || -1:
                document.getElementById("result").innerHTML = "The day was a Monday." + " " + "Your akan name is "  + femaleNames[1];
              break;
              case 2 || -2:
                document.getElementById("result").innerHTML = "The day was a Tuesday." + " " + "Your akan name is " + femaleNames[2];
              break;
              case 3 || -3:
                document.getElementById("result").innerHTML = "The day was a Wednesday." + " " + "Your akan name is " + femaleNames[3];
              break;
              case 4 || -4:
                document.getElementById("result").innerHTML = "The day was a Thursday." + " " + "Your akan name is " + femaleNames[4];
              break;
              case 5 || -5:
                document.getElementById("result").innerHTML = "The day was a Friday." + " " + "Your akan name is " + femaleNames[5];
              break;
              case 6 || -6:
                document.getElementById("result").innerHTML = "The day was a Saturday." + " " + "Your akan name is " + femaleNames[6];
              break;

          }
    break
    default:
    console.log("pass");//Test gender switch
        }
    }
// --------------------------------------------------------------(assignmentNo:1-Start)--------------------------------
function feetToMile(feet){

    var mile = feet/5280;
    return mile;
}
// --------------------------------------------------------------(assignmentNo:1-Finish)--------------------------------




// --------------------------------------------------------------(assignmentNo:2-Start)--------------------------------

function woodCalculator(chair, table, bed){

    var chairCount = chair * 1;
    var tableCount = table * 5;
    var bedCount   = bed * 12;
    var totalWood  = chairCount + tableCount + bedCount;
    return totalWood;
}

// --------------------------------------------------------------(assignmentNo:2-Finish)--------------------------------




// --------------------------------------------------------------(assignmentNo:3-Start)--------------------------------

function brickCalculator(floor){

     
      if(floor<=0){
        var warning = "Sorry!This programe doesn't work for this input";
        return warning;
      }
       
      else if(floor<=10){

                     return floor*(15*1000);
      }
      else if(floor>10 && floor<=20){

                    floor1To10 = (10*15*1000);
                    floor11To20 = (floor-10)*(12*1000);
                    totalBrick = floor1To10 + floor11To20;

                    return totalBrick;
      }
      else if(floor>20){
                    
                    floor1To10 = (10*15*1000);
                    floor11To20 = (10*12*1000);
                    floorAbove20 = (floor-20)*(10*1000);
                    totalBrick = floor1To10 + floor11To20 + floorAbove20;

                    return totalBrick;
                    
      }
    
}

// --------------------------------------------------------------(assignmentNo:3-Finish)--------------------------------


// --------------------------------------------------------------(assignmentNo:4-Start)--------------------------------



function tinyFriend(names){

    var tiny =names[0];
    for(var i=0; i<names.length; i++){
    var friendList = names[i];
    if(friendList.length < tiny.length){
    tiny = friendList;
    
    }
    }
    return tiny;
    }

    // --------------------------------------------------------------(assignmentNo:4-Finish)--------------------------------

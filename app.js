var number = [01,02,03,04,05,06,07,08,09,10,
              11,12,13,14,15,16,17,18,19,20,
              21,22,23,24,25,26,27,28,29,30,
              31,32,33,34,35,36,37,38,39,40,
              41,42,43,44,45,46,47,48,49,50,
              51,52,53,54,55,56,57,58,59,60,
              61,62,63,64,65,66,67,68,69,70,
              71,72,73,74,75,76,77,78,79,80,
              81,82,83,84,85,86,87,88,89,90];

//For displaying number
    function getNumber(){
    var preval=document.getElementById("preval");
    var index;
    preval.innerHTML=document.getElementById("num").innerHTML
    if (number.length!=0){
        index= Math.floor(Math.random() * number.length);
     document.getElementById("num").innerHTML=number[index];
        //console.log(number[index]);
        for(var i=0;i<90;i++){
            var x=document.getElementById('tab').getElementsByTagName('td');
            var bg=x[i].innerHTML;
            if(bg==number[index]){
                x[i].style.backgroundColor="brown";
            } 
        }
        number.splice(index, 1);
    if(document.getElementById("sound").checked){
        var msg=document.getElementById("num").innerHTML;
        const numbr = new SpeechSynthesisUtterance();
        numbr.volume = 1;
        numbr.lang="en-ind";
        numbr.rate=0.5;
        numbr.pitch= 2;
        numbr.text= msg;
        window.speechSynthesis.speak(numbr);
    }
 
    }else{
        window.alert("Game Over..!");
    }
}


//For displaying board
function displayBoard(){
    var chart=document.getElementById("board");
    var val=document.getElementById("num");
    //var button=document.getElementsByTagName("span");
    //var h=

   if(chart.classList.contains("boardClass")&&val.classList.contains("numberClass")){
        chart.classList.remove("boardClass");
        val.classList.remove("numberClass");
    }else{
        chart.classList.add("boardClass");
        val.classList.add("numberClass");
    }
}


//For auto reading of numbers
var autoNum;
function coin(){
    var count=false;

    if(document.getElementById("btn").checked){
        count=true;
    }else{
        count=false;
    }
    if(count){
        autoNum = setInterval(getNumber,2500);
        console.log(checked)
    }else {
        clearInterval(autoNum);
        console.log(unchecked);
    }
}

// on back and window refresh
window.onbeforeunload = function (){
    return ''
}
      //  window.onbeforeunload= alert("are sure you want to exit?");
    

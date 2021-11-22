

function checkExc(){
    const textArea = document.getElementById("exampleInput");

    const numExc = textArea.value.split('').filter(i => i == '!').length

    const finalText = document.getElementById("finalText")

    if(numExc == 1){

        finalText.style.color = "red";
    }

     else if(numExc == 2){
        finalText.style.color = "blue"
    }

    else if(numExc == 3){
        finalText.style.color = "green"
    }
    else{
        finalText.style.color = "black"
    };

    finalText.value = textArea.value
}


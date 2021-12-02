
function setup(){
    console.log(letterCapitalise("hello world"));
}

function letterCapitalise(str) { 
    
    let strArray = str.split(" ");
    //console.log(strArray);
    let strNewArray = [];

    for (let i = 0; i < strArray.length; i++) {
        let strWord = strArray[i];
        let strLetter = strArray[i].substring(0,1);
        strLetter = strLetter.toUpperCase();
        //console.log(strLetter);
        let strReplace = strWord.replace(strWord[0],strLetter);
        //console.log(strReplace);
        strNewArray.push(strReplace);
        //console.log(strNewArray);
    }

    str = strNewArray.join(" ");
    return str;   
}
function reverseString(stringParameter){
    reversed = ""
    for(let i = stringParameter.length-1; i >= 0; i--){
        reversed += (stringParameter[i])
    }
    console.log(reversed)
}
reverseString("Hello")

function title(stringParameter){
    titleString = ""
    titleString += (stringParameter[0].toUpperCase())
    for(let i = 1; i < stringParameter.length; i++){
        if(stringParameter[i] === " "){
            titleString += " "
            titleString += (stringParameter[i+1].toUpperCase())
            i++
        }
        else{
            titleString += stringParameter[i]
        }
    }
    console.log(titleString)
}

title("hello world all this should work")



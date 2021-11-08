function reverseString(stringParameter){
    reversed = ""
    for(i = stringParameter.length-1; i >= 0; i--){
        reversed += (stringParameter[i])
    }
    console.log(reversed)
}
reverseString("Hello")


function generateName(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i = 0; i < 5; i++){
        text += possible.charAt(Math.floor(Math.random()*possible.length));
    }
    return text;
}

function genereatePhoneNumber(i){
    var num = "";
    var numbers = "1234567890";
    for(var j = 0; j < i; j++){
        num += numbers.charAt(Math.floor(Math.random()*numbers.length));
    }
    return num;
}

function generatePrice(){
    var num = "";
    var numbers = "1234567890";
    for(var j = 0; j < 4; j++){
        num += numbers.charAt(Math.floor(Math.random()*numbers.length));
    }
    return num;
}

function generatePassword(){
    var text = "";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var LowerCase = "abcdefghijklmnopqrstuvwxyz"
    var specialCharacters = "!@#$%^&*";
    var numbers = "1234567890"
    for(var i = 0; i < 3; i++){
        text += upperCase.charAt(Math.floor(Math.random()*upperCase.length));
        text += LowerCase.charAt(Math.floor(Math.random()*LowerCase.length));
        text += specialCharacters.charAt(Math.floor(Math.random()*specialCharacters.length));
        text += numbers.charAt(Math.floor(Math.random()*numbers.length));
    }
    return text;
}

function generateOTP(i){
    var num = "";
    var numbers = "1234567890";
    for(var j = 0; j < i; j++){
        num += numbers.charAt(Math.floor(Math.random()*numbers.length));
    }
    return num;
}

export default {generateName,generatePassword,genereatePhoneNumber,generateOTP,generatePrice}
let input = document.querySelector('input');
let LowerCase = 'abcdefghijklmnopqrstuvwxyz';
let UpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
let password = ""
function generatePassword(){
    for(let i=0; i<3; i++){
        password += Math.floor(Math.random() * 10)
        password += LowerCase.charAt(Math.random() * LowerCase.length)
        password += UpperCase.charAt(Math.random() * UpperCase.length)
        password += symbols.charAt(Math.random() * symbols.length)
        input.value = password
    }
    password = ""
} 
function copyPassword(){
    input.select();
    input.setSelectionRange(0,999)
    document.execCommand("copy")
}









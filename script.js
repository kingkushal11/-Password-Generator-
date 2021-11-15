// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var choosenletters = "";
  var uppercaseletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
  var numericletters = "1234567890";
  var specialletters = "!@#$%^&*()_+{}|:?><,./';[]=-";
 
  var length = prompt("What is the length of the password?");
  console.log(length);
  
  if (length < 8){
    return "Too Short";
 }
  if (length > 128){
    return "Too Long";
  } 
  
  var uppercase = confirm("Do you want uppercase letter.");
  if (uppercase === true){
   choosenletters = choosenletters+uppercaseletters;
  }
  var lowercase = confirm("Do you want lowercase letter.");
  if (lowercase === true){
    choosenletters = choosenletters+lowercaseletters;
  }
  var numeric = confirm("Do you want numeric.");
  if (numeric === true){
    choosenletters = choosenletters+numericletters;
  }
  var special = confirm("Do you want special characters.");
  if (special === true){
    choosenletters = choosenletters+specialletters;
  }
 
  console.log(uppercase, lowercase, numeric, special);
  var pw = ""

  for(var i = 0; i < length; i++){
   
   var randomIndex = Math.floor(Math.random() * choosenletters.length); 
   var randomElement = choosenletters[randomIndex];
   pw = pw + randomElement
  
  }
  
  
  return pw
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


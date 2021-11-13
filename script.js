// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var choosenletters = ""
  var uppercaseletters = "ABCD"
  var lowercaseletters = "abcd"
  var numericletters = "1234"
  var specialletters = "!@#$" 
  var length = prompt("What is the length of the password?")
  console.log(length);
  if (length < 8){
    return "Too Short";
 }
  if (length > 128){
    return "Too Long";
  } 
  var uppercase = confirm("Do you want uppercase letter.");
  var lowercase = confirm("Do you want lowercase letter.");
  var numeric = confirm("Do you want numeric.");
  var special = confirm("Do you want special characters.");
  console.log(uppercase, lowercase, numeric, special);
  var pw = ""

  for(var i = 0; i < length; i++){
   
   var randomIndex = Math.floor(Math.random() * uppercaseletters.length); 
   var randomElement = uppercaseletters[randomIndex];
   pw = pw + randomElement
  
  }
  
  
  return pw
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

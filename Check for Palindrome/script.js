

const input = document.getElementById("input");

function check(){

    let value = input.value;

    let reverse = value.split("").reverse().join("" )

    if (value === reverse){
        // alert("congrats your word is Palindrome")
        document.getElementById("render").textContent = "congrats your word is palindrome ";

    } else {
        //alert("word is not a palindrome")
        document.getElementById("render").textContent = "word is not a palindrome";
    }

    input.value = "";
}
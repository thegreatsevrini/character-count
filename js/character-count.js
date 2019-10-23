//gets text area
var textArea = document.querySelector('#text');

//gets the character counter on the page
var count = document.querySelector('#character-count');

// listens for changes to textArea
textArea.addEventListener('input', function(event){
    //display the character counter
    count.textContent = text.value.length;

}, false);


/* CODE BELOW IS MY OLD CODE aka: what was I thinking? LOL*/
// //listens for key pressing in the textBox
// textArea.addEventListener('keydown', function (event){
//     //gets value of textbox
//     var text = textArea.value;
    
//     //grabs keycode of key being pressed
//     var x = event.keyCode;
    
//     //if x equals 8 (the delete key) minus one from the text length
//     //otherwise, add one to the text length
//     if (x === 8) {
//         count.textContent = text.length - 1;
//     } else {
//         count.textContent = 1 + text.length;
//     }
    
    
    
    
    
//  }, false);

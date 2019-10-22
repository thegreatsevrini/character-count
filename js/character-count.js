var textBox = document.querySelector('#text');

//listens for key pressing in the textBox
textBox.addEventListener('keydown', function (event){
    //gets value of textbox
    var text = textBox.value;
    //gets the character counter on the page
    var count = document.querySelector('#character-count');
    //grabs keycode of key being pressed
    var x = event.keyCode;
    //if x equals 8 (the delete key) minus one from the text length
    //otherwise, add one to the text length
    if (x === 8) {
        count.textContent = text.length - 1;
    } else {
        count.textContent = 1 + text.length;
    }
    
    
    
    
    
}, false);

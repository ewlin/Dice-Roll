var DIE_FACES = ['Dice1.svg','Dice2.svg','Dice3.svg','Dice4.svg','Dice5.svg','Dice6.svg'],
    NUM_OF_FACES = DIE_FACES.length,
    FRAME_MAX = 10;

var currentFace,
    currentFrame = 0;

    
    
//UTILITIES 
function genRandomInteger(max) {
    return Math.floor(Math.random()*max); 
}

function imageFilePath(index) {
    return "<img class='current-face' alt='dieface' src='assets/images/" + DIE_FACES[index] + "'>"; 
}



//GAME SETUP
function renderGame() {
    
    //If player has not rolled the die yet, placeholder image
    if (!currentFace) {
        $('.die').append(imageFilePath(0)); 
    }
    
    //Roll Die
    $('.roll-die').click(function(e){
            
            var randomNumber = genRandomInteger(NUM_OF_FACES),
                dieImage = imageFilePath(randomNumber); 
        
            currentFace = randomNumber + 1;
            
            var animate = setInterval(function() {
                $('.die').html(imageFilePath(genRandomInteger(NUM_OF_FACES)));
                currentFrame++; 
                
                if (currentFrame == FRAME_MAX) {
                    clearInterval(animate);
                    currentFrame = 0; 
                    
                    //Render die face
                    $('.die').html(dieImage); 
                    //Display rolled value
                    $('.value span').html(currentFace); 
                }
                
            }, 100); 
    
    
    });
    
}


$(document).ready(renderGame); 

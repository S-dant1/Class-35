class Game{

    constructor(){
    
    }
    //rread the gameState valur from the databse
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value", function (data){
            gameState=data.val();
        })

    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        });
    }
//this will be called for starting the game 
    start(){
        if(gameState ===0){
            player=new Player();
            player.getCount();
            form =new Form ();
            form.display();
        }
    }
//helps us to play the game when the game state is chnged to 1 
     play(){}
    
    }
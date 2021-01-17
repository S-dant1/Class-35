class Player{

    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    
    }
    //read the palyercount from the database
    getCount(){
       var playerCountRef=database.ref('playerCount');
       playerCountRef.on("value",function (data) {
           playerCount=data.val();
       })
    }
    //update the changed playercount value in to he databease
    updateCount(count){
      database.ref('/').update({
          playerCount:count
      })
    }

    update(){
       
        
    }
    
    }
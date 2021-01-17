class Form{

constructor(){
    this.input =createInput('name');
    this.button=createButton("SUBMIT");
    this.greeting =createElement("h3");
}


display(){
 //.ref .on .set .update
    var title=createElement("h2");
    title.html(" CAR  RACING GAME!!");
    title.position (400,200);

    this.input.position (450,300);
    this.button.position(480,350);
    
//it will trigger the button clicking event 
this.button.mousePressed(function () {
       this.input.hide();
       this. button.hide();
//what ever is in input box is saved in name .
        var name = this.input.value();
//player name is to be saved in database against player that logged in 
       player.update(name);
       playerCount+=1;
       player.index=playerCount;
//update the playerCount in the database
        player.updateCount(playerCount);
        this.greeting.html("hello"+ name +"wait");
        this.greeting.position(380,480);

    });
}


}
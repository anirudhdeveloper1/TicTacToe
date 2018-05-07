var checkWin = function(){ 
    var winners = new Array();
    
    var Player = Array.from(arguments);

    Player = Player.map(Number);
    
    console.log(arguments);
    winners.push([0, 1, 2]);
    winners.push([3, 4, 5]);
    winners.push([6, 7, 8]);
    winners.push([0, 3, 6]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([0, 4, 8]);
    winners.push([2, 4, 6]);

//var Player1 = arguments;
var isWin = "";


 winners.forEach(function(innerArray){
    var counter =0;
    Player.forEach(function(id){
       
       if(innerArray.indexOf(id) >=0){
           counter +=1;
           if(counter == 3){
               isWin = "Win";
           };
       }
        
    });

});


return isWin;

};

exports.checkWin = checkWin;




var f=prompt("First player - rock, paper, scissors");
var s=prompt("First player - rock, paper, scissors");

alert(rpc(f,s));

function rpc(first, second){
	var options = ["rock", "sciccors", "paper", "r", "s", "p"];
	var x=options.indexOf(first.toLowerCase());
    var y=options.indexOf(second.toLowerCase());
    if(x==-1 || y==-1) return "wrong values";
    if(x%3==y%3) return "draw";
    var win=0;
    for(i=0;i<3;i++){
        if((x+i)%3<(y+i)%3) win++;
    }
    if(win==2) return "first player won";
    return "second player won";
}

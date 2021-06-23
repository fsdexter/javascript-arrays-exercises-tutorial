let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
var newArray = []
theBools.map((valeu)=>{
    if ( valeu === 1){
        newArray.push("wiki");
    }
    else if( valeu === 0){
        newArray.push("woko");
    }
});
console.log(newArray);
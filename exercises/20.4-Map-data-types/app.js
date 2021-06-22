
let arrayOfStrings = ['1','5','45','34','343','34',6556,323];

let newArray = arrayOfStrings.map(function(val){
     let type = typeof val;
	return (type);
});

console.log(newArray);


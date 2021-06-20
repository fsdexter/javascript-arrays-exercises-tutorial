let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
var mergeTwoList = () => {
    let oddArr = [];
    let evenArr = [];
   
    for(let i = 0; i < list_of_numbers.length; i++){
        if( list_of_numbers[i] % 2 == 0){
            evenArr.push(list_of_numbers[i]);           
        }
        else if(list_of_numbers[i] % 2 !== 0){
            oddArr.push(list_of_numbers[i]);
        }
    };
     //let arrAux = [].concat(oddArr,evenArr);
     let arrAux = [...oddArr,...evenArr];
    return arrAux
};
   


console.log(mergeTwoList(list_of_numbers))

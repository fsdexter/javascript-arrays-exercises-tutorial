var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for ( let i = 0; i < chunk_one.length + chunk_two.length; i++){
        if (i < chunk_one.length){
            newArray.push(chunk_one[i]);
        }
        else{
            newArray.push(chunk_two[i-chunk_one.length]);
        }
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));
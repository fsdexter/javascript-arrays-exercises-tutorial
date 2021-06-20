var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    //first try
    //let a = []
    //for(let i = 0; i < people.length; i++){
    //    if (people[i] !== personName){
    //        a.push(people[i])
    //    };
    //}
    //return a
    //second try
    //const a = people.filter(function(people){
    //    if (people !== personName){
    //        return true;
    //    }
    //});

    //return a

    const a = people.filter(people => people !== personName);
    return a
    
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
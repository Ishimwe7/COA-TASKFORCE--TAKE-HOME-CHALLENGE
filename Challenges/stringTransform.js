const transformString=(myString)=>{
    const stringLength = myString.length;
    if(stringLength % 3 === 0 && stringLength % 5 === 0){

        myString = myString.split('').reverse().join('');
        myString = Array.from(myString).map(character => character.charCodeAt(0)).join(' ');
    } else if(stringLength%3===0){
        myString=myString.split('').reverse().join('');
    }
    else if(stringLength%5===0){
        myString=Array.from(myString).map(character=>character.charCodeAt(0)).join(' ');
    }

    return myString;
}

//Testing codes

const str = "Hello World two";
console.log(transformString(str));
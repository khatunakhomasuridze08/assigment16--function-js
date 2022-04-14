function isEven(value) {
	if (value%2 == 0){
		return true;
    }
	else {
		return false;
    }
}
console.log(isEven(10))
console.log(isEven(39))


function areaOfSquare (number){
    return number*number;
}
console.log(areaOfSquare(8))
console.log(areaOfSquare(13))



function areaOfRectangle(width,height){
    return width*height;
}
console.log(areaOfRectangle(15,16))
console.log(areaOfRectangle(25,20))



let userArr = [
    	{
    		name: "ia",
    		age: 25,
    	},
        {
    		name: "david",
    		age: 29,
    	},
        {
    		name: "marta",
    		age: 28,
    	},
        {
    		name: "saba",
    		age: 21,
    	},
        {
    		name: "artur",
    		age: 33,
    	},
 ];

const findYoungest = (arr) => {
   let minimumAge = arr[0].age;

   for (let i = 1; i<arr.length; i++) {
      if(arr[i].age < minimumAge){
          minimumAge = arr[i].age
      }
   }

   return arr.find(person => person.age === minimumAge)
}

let youngest = findYoungest(userArr)
console.log(youngest)

 
// ----------------------------------


const getRandomNumber = ()=>{
    return Math.floor(Math.random() * 101)
}


console.log(getRandomNumber())



const getCurrencySymbolFromCode = (currencyName)=>{
    if (currencyName === 'EUR') {
        return `€`;  
    } else if (currencyName === 'USD') {
        return `$`;  
    } else if (currencyName === 'GEL') {
        return `ლ`;  
    }
    else {
        return `error`;
    }
}
console.log(getCurrencySymbolFromCode('USD'))
console.log(getCurrencySymbolFromCode('GEL'))
console.log(getCurrencySymbolFromCode('TL'))




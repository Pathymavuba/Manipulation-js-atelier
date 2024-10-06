let myArray = ["pathy"]

function AddChild(child) {
  // return myArray.push(child)
  return (myArray = [...myArray, child]);
}

let myObject = {
  nom: null,
  postnom: null,
};


/**
 * 
 * @param {Object} object object to update
 * @param {string} enterKey key serached
 * @param {*} newValue new value for key
 * @returns 
 */
const updateObject = (object,enterKey,newValue) =>{
 return object[Object.keys(object).find(key=>key === enterKey)] = newValue
}

/**
 * 
 * @param {string} str  string 
 * @returns {string}
 */
const palindrome = (str) =>{
 return str.split('').reverse().join('')=== str ? `le mot ${str} est un palindrome`:`le mot ${str} n'est pas un palindrome`;
}

// console.log(updateObject(myObject,"nom","pathy"))
// console.log(palindrome('ada'))
    ``
/**
 * 
 * @param {Array} arr 
 */
function essai (arr){
 return arr.slice(2,4)
}

const schedull = [
  {
    date:'lundi',
    cours:{
      field:{
        name:'little',
      }
    }
  },
  {
    date:'lundi',
    cours:{
      field:{
        name:'math',
      }
    }
  },
  {
    date:'lundi',
    cours:{
      field:{
        name:'franc',
      }
    }
  },
  {
    date:'mardi',
    cours:{
      field:{
        name:'ttc',
      }
    }
  },
  {
    date:'mardi',
    cours:{
      field:{
        name:'rere',
      }
    }
  },
  {
    date:'mercredi',
    cours:{
      field:{
        name:'cours du mercredi',
      }
    }
  }
]

function formatSchedul(data){
  let lundi = [];
  let mardi = [];
  let mercredi = [];
  let horraire = [];


data.filter(a=>a.date === 'lundi').map(d=>{
  lundi.push({date:d.date,cours:d?.cours?.field?.name})
})
data.filter(a=>a.date === 'mardi').map(d=>{
  mardi.push({date:d.date,cours:d?.cours?.field?.name})
})
data.filter(a=>a.date === 'mercredi').map(d=>{
  mercredi.push({date:d.date,cours:d?.cours?.field?.name})
})
 horraire.push(lundi)
 horraire.push(mardi)
 horraire.push(mercredi)

 return horraire

}


console.log(formatSchedul(schedull))
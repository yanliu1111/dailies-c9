const someFunctions = {
    addOddElementsInArray: (array) => {
        return array.filter(entry=>(entry%2 === 1)).reduce((a,b)=>a+b,0);
    },

    date: () => {
        return Date.now()
    }
}

module.exports = someFunctions;
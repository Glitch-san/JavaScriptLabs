function generateArray(array) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (typeof element === "object" && !Array.isArray(element) && element !== null){
            let valuesArray = [];
            for (let key in element) {
                valuesArray.push(element[key]);
            }
            array[i] = valuesArray;
        }
    }
    return array;
}

let arrai = [[1], {id: 40}, [100], [300], {part: 10}];
console.log(generateArray(arrai));

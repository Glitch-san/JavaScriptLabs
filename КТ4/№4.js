function checkObj(obj) {
    for (let key in obj) {
        if (key === "particle") {
            return true;
        }
    }
    return false;
}
console.log(checkObj({id: 1, particle: 10}))
console.log(checkObj({id: 2, name: "ta]g"}))

function logString(...worlds) {
    let result = "";
    for(let i = 0; i < worlds.length; i++) {
        result += worlds[i] + " ";
    }
    console.log(result)
}
logString("Hello", "my", "world!")

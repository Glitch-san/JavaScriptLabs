function kingSayd(string) {
    let main = "Король сказал: ";
    let notneed = true;
    
    if (string.length < main.length) {
        notneed = false;
    } else {
        for (let i = 0; i < main.length; i++) {
            if (string[i] !== main[i]) {
                notneed = false;
                break;
            }
        }
    }
    
    if (notneed) {
        console.log(string);
    } else {
        console.log(main + string);
    }
}

kingSayd("сегодня хорошая погода");

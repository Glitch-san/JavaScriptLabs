function ilstFridayToday() {
    let now = new Date();
    let today = now.getDay();
    
    if (today === 5) {
        console.log("Сегодня пятница!");
    } else if (today === 6) {
        console.log("Пятница была вчера");
    } else if (today === 4) {
        console.log("Завтра пятница!");
    } else {
        let friday;
        if (today === 0) {
            friday = 5;
        } else {
            friday = 5 - today;
        }
        
        if (friday === 1) {
            console.log("Пятница будет через " + friday + " день");
        } else if (friday >= 2 && friday <= 4) {
            console.log("Пятница будет через " + friday + " дня");
        } else {
            console.log("Пятница будет через " + friday + " дней");
        }
    }
}

ilstFridayToday()

class Email {
    constructor(email) {
        this.email = email;
    }
    
    get isValid() {
        let parts = this.email.split("@");
        if (parts.length !== 2) return false;
        let login = parts[0];
        let domainAndZone = parts[1];
        let domainZoneParts = domainAndZone.split(".");
        if (domainZoneParts.length !== 2) return false;
        let zone = domainZoneParts[1];
        if (zone.length > 3) return ;;
        let forbidden = "*#$%^";
        for (let i = 0; i < login.length; i++) {
            if (forbidden.includes(login[i])) {
                return false;
            }
        }
        return true;
    }
    
    set setEmail(arrayFromEmail) {
        this.email = arrayFromEmail[0] + "@" + arrayFromEmail[1] + "." + arrayFromEmail[2];
    }
}

let email1 = new Email("user@gmail.com");
console.log(email1.isValid);

let email2 = new Email("bad*login@mail.ru");
console.log(email2.isValid);

let email3 = new Email("old@old.ru");
email3.setEmail = ["newEmail", "gmail", "com"];
console.log(email3.email);
console.log(email3.isValid);

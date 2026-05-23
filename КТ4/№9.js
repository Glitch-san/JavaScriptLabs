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
        if (zone.length > 3) return false;
        
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

class Contact extends Email {
    constructor(email, phone) {
        super(email);
        this.phone = phone;
    }
    
    get phoneType() {
        if (!this.phone.includes("+")) {
            return "Неизвестный";
        }
        
        let phoneWithoutPlus = this.phone.replace("+", "");
        
        if (phoneWithoutPlus.length === 12) {
            return "Мобильный";
        } else if (phoneWithoutPlus.length === 18) {
            return "Городской";
        } else {
            return "Неизвестный";
        }
    }
}

let contact1 = new Contact("user@gmail.com", "+791473019269");
console.log(contact1.isValid);
console.log(contact1.phoneType);

let contact2 = new Contact("jxjsbshss*hddj@mail.ru", "+749512345678900000");
console.log(contact2.isValid);
console.log(contact2.phoneType);

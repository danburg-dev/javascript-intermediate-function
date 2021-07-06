// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getTask(indexNumber) {
    console.log("----------Opdracht " + indexNumber + "----------");
}

getTask(1)

function getEmailDomain(email) {
    const domain = email.substring(email.lastIndexOf("@") + 1); // kijkt vanaf @ plus 1
    console.log(domain); // example.com
}
getEmailDomain("n.eeken@novi-education.nl");
getEmailDomain("t.mellink@novi.nl");
getEmailDomain("a.wiersma@outlook.com");

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

getTask(2)

function typeOfEmail(getEmail) {
    const mail = getEmail.substring(getEmail.lastIndexOf("@") + 1); // kijkt vanaf @ plus 1
    if (mail === "novi-education.nl") {
        console.log("Student");
    }
    if (mail === "novi.nl") {
        console.log("Medewerker");
    }
    if (mail === "outlook.com") {
        console.log("Extern");
    }
}
typeOfEmail("n.eeken@novi-education.nl");
typeOfEmail("t.mellink@novi.nl");
typeOfEmail("novi.nlaapjesk@outlook.com");
typeOfEmail("a.wiersma@outlook.com");
typeOfEmail("daniel.burgemeestre@novi-education.nl");

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

getTask(3)

function checkEmailValidity(inputMail) {
    if (checkAt = inputMail.includes("@")); {
        console.log("Het mailadres: " + inputMail + " bevat een @: " + checkAt);
    }
    if (checkFullStop = inputMail.includes(",")); {
        console.log("Het mailadres: " + inputMail + " bevat een komma: " + checkFullStop);
    }
    if (checkComma = inputMail.includes(".")); {
        console.log("Het mailadres: " + inputMail + " bevat een punt: " + checkComma);
    }
    if (checkDot = inputMail.endsWith(".")); {

        console.log("Het mailadres: " + inputMail + " heeft als laatste karakter een punt: " + checkDot);
    }
}
checkEmailValidity("n.eeken@novi.nl");
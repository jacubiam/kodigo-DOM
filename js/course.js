let course = localStorage.getItem("value");
localStorage.removeItem("value");
//Delete This afeter testing
course = "Matemáticas"
//Delete This after testing

let user = {}

const userPhoneLocation = () => {
    let userLocation = document.getElementById('user-phone-select-id').value
    let flag = document.getElementById('user-phone-country-id')
    switch (userLocation) {
        case "SV":
            flag.src = "https://flagcdn.com/w80/sv.png"
            break;
        case "CO":
            flag.src = "https://flagcdn.com/w80/co.png"
            break;
        case "RD":
            flag.src = "https://flagcdn.com/w80/do.png"
            break;
        case "US":
            flag.src = "https://flagcdn.com/w80/us.png"
            break;
        default:
            break;
    }
}

//Post error cleaners
const userNameChange = () => {
    return document.getElementById('user-name-error').innerHTML = ""
}
const userAgeChange = () => {
    return document.getElementById('user-age-error').innerHTML = ""
}
const userPhoneChange = () => {
    return document.getElementById('user-phone-error').innerHTML = ""
}
const userEmailChange = () => {
    return document.getElementById('user-email-error').innerHTML = ""
}
const userPasswordChange = () => {
    return document.getElementById('user-password-error').innerHTML = ""
}

const getUser = () => {
    let inputFields = document.querySelectorAll('.user-collector input')
    let emptyFormat = ""
    switch (true) {
        case (inputFields[0].value == ""):
            emptyFormat = "Llena el campo de nombre"
            return document.getElementById('user-name-error').innerHTML = emptyFormat;
        case (inputFields[1].value == ""):
            emptyFormat = "Llena el campo de edad"
            return document.getElementById('user-age-error').innerHTML = emptyFormat;
        case (inputFields[2].value == ""):
            emptyFormat = "Llena el campo de teléfono"
            return document.getElementById('user-phone-error').innerHTML = emptyFormat;
        case (inputFields[3].value == ""):
            emptyFormat = "Llena el campo de correo"
            return document.getElementById('user-email-error').innerHTML = emptyFormat;
        case (inputFields[4].value == ""):
            emptyFormat = "Llena el campo de contraseña"
            return document.getElementById('user-password-error').innerHTML = emptyFormat;
    }

    if (onlyLetters(inputFields[0].value.trim())) {
        user.name = inputFields[0].value.trim()
    } else {
        let format = "El nombre debe llevar solo letras"
        return document.getElementById('user-name-error').innerHTML = format;
    }

    let ageNumber = Number(inputFields[1].value)
    if (validAge(ageNumber)) {
        user.age = ageNumber;
    } else {
        let format = "La edad debe ser realista"
        return document.getElementById('user-age-error').innerHTML = format;
    }

    let country = document.getElementById('user-phone-select-id').value
    if (isCellNumber(inputFields[2].value.trim(), country)) {
        user.phone = inputFields[2].value.trim()
    } else {
        let format;
        switch (country) {
            case "SV":
                format = "Formato sugerido: 0000 0000"
                break;
            case "CO":
                format = "Formato sugerido: 000 0000000"
                break;
            case "RD":
                format = "Formato sugerido: 000 000 0000"
            case "US":
                format = "Formato sugerido: 000 000 0000"
                break;
        }
        return document.getElementById('user-phone-error').innerHTML = format;
    }

    if (isEmail(inputFields[3].value.trim())) {
        user.email = inputFields[3].value.trim()
    } else {
        let format = "Formato ugerido: 'usuario123@dominio.xxx'"
        return document.getElementById('user-email-error').innerHTML = format;
    }

    user.password = inputFields[4].value.trim()
    user.course = course;

    return timer();
}

const timer = () => {
    //Change timer visibility
    document.getElementById('timer-container-id').style.display = "block"
    document.getElementById('user-container-id').style.display = "none"
    document.getElementById('user-info-id').style.display = "none"

    let courseSelect = user.course;

    document.getElementById('timer-info-description-id').innerHTML = `Te has inscrito a ${courseSelect} `
    document.getElementById('timer-data-header-id').innerHTML = `${courseSelect} iniciara en:`


    // Set the date we're counting down to
    let countDownDate;
    let dateText;
    switch (courseSelect) {
        case "Matemáticas":
            countDownDate = new Date("Jan 1, 2024 08:00:00").getTime();
            dateText = "El 1 de enero de 2024"
            break;
        case "Física":
            countDownDate = new Date("Feb 1, 2024 08:00:00").getTime();
            dateText = "El 1 de febrero de 2024"
            break;
        case "Medicamento":
            countDownDate = new Date("Mar 1, 2024 08:00:00").getTime();
            dateText = "El 1 de marzo de 2024"
            break;
        case "Inglés":
            countDownDate = new Date("Apr 1, 2024 08:00:00").getTime();
            dateText = "El 1 de abril de 2024"
            break;
        case "Tecnología":
            countDownDate = new Date("May 1, 2024 08:00:00").getTime();
            dateText = "El 1 de mayo de 2024"
            break;
        case "Ingenieria":
            countDownDate = new Date("Jun 1, 2024 08:00:00").getTime();
            dateText = "El 1 de junio de 2024"
            break;
        default:
            break;
    }


    // Update the count down every 1 second
    let time = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("timer-data-value-id").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(time);
            document.getElementById("timer-data-value-id").innerHTML = "Finalizado";
        }
    }, 1000);

    document.getElementById('timer-data-text').innerHTML = dateText
}


//Func that check if a string have only letters
const onlyLetters = (letters) => {
    return /^([a-zA-Z\u00C0-\u017F]+[ '-]?)+[a-zA-Z\u00C0-\u017F]+$/.test(letters)

}

//Func that detects a valid age
const validAge = (age) => {
    if (!Number.isInteger(age)) {
        return false
    } else return (age >= 5) && (age <= 100)
}

//Func that detects a standar cellphone number for each country
const isCellNumber = (cell, country) => {
    switch (country) {
        case "SV":
            return /^((\+|\s)?\(?\d{3}\)?(\s|\-)?)?\d{4}(\s|\-)?\d{4}$/.test(cell)
        case "CO":
            return /^((\+|\s)?\d{2}(\s|\-)?)?(\(?\d{3}\)?)(\s|\-)?\d{7}$/.test(cell)
        case "RD":
            return /^((\+|\s)?1(\s|\-)?)?(\(?\d{3}\)?(\s|\-)?)?\d{3}(\s|\-)?\d{4}$/.test(cell)
        case "US":
            return /^((\+|\s)?1(\s|\-)?)?(\(?\d{3}\)?(\s|\-)?)?\d{3}(\s|\-)?\d{4}$/.test(cell)
    }

    return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(cell)
    //RD y USA:       ^((\+|\s)?1(\s|\-)?)?(\(?\d{3}\)?(\s|\-)?)?\d{3}(\s|\-)?\d{4}$
    //Centro America: ^((\+|\s)?\(?\d{3}\)?(\s|\-)?)?\d{4}(\s|\-)?\d{4}$
    //Colombia:       ^((\+|\s)?\d{2}(\s|\-)?)?(\(?\d{3}\)?)(\s|\-)?\d{7}$
}

//Func that detects a standar email string
const isEmail = (email) => {
    return /^(\w[.-]?)+@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$/.test(email)
}

//Danger Zone
//If the user access directly to this page and didn't select any course
const noCourse = () => {
    let undefinedCourse = document.createElement('section')
    undefinedCourse.classList.add("course-undefined")
    undefinedCourse.id = "course-undefined-id"
    undefinedCourse.innerHTML = `
    <div class="course-undefined-info">
        <h2 class="course-undefined-title">No has seleccionado ningún curso, vuelve a la página principal</h2>
        <a class="course-undefined-link" href="../index.html">Volver</a>
    </div>
    `
    return document.body.appendChild(undefinedCourse);
}

if (course == undefined) {
    document.getElementById('user-info-id').innerHTML = ""
    document.getElementById('user-container-id').innerHTML = ""
    noCourse();
} else {
    document.getElementById("user-title-id").innerHTML = `Has seleccionado ${course}`
}

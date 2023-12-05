//On card click, gets user choice and stores the value in the browser
const courseChoice = (paren) => {
    let course = paren.parentElement.id
    let courseValue;

    switch (course) {
        case "cards-math":
            courseValue = "Matemáticas"
            break;
        case "cards-physics":
            courseValue = "Física"
            break;
        case "cards-meds":
            courseValue = "Medicamento"
            break;
        case "cards-english":
            courseValue = "Inglés"
            break;
        case "cards-tech":
            courseValue = "Tecnología"
            break;
        case "cards-engineer":
            courseValue = "Ingeniería"
            break;
    }
    //Stores the value
    return localStorage.setItem("value", courseValue)
}

const courseChoice = (paren) => {
    let course = paren.parentElement.id
    let courseValue;
    console.log(course);

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

    return localStorage.setItem("value", courseValue)
}

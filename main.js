let studentsList = [
    {name: "Halie",
    house: "Hufflepuff"},
];
const houses = ["Ravenclaw", "Gryffindor", "Hufflepuff", "Slytherin"];

/*Render to DOM function*/
const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

/*loads name form*/
const loadForm = () => {
    let form = `
        <div class="form">
          <input type="text" class="form-control" id="name" placeholder="Student's Name" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="btn sortMe">Sort Me</button>
        </div>
    `;
    renderToDom("#formHolder", form);
};

/*returns a random house*/
const randomizer = () => {
    let randomHouse = houses[Math.floor(Math.random()*houses.length)];
    return randomHouse;
};


const cardBuilder = (studentsArray) => {
    let domString = "";
    studentsArray.forEach(student => {
        domString += `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="house colors will go here if I get to that">
        <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <a href="#" type="expelbutton" class="btn btn-primary">Expel</a>
        </div>
        </div>`
});
renderToDom('#studentsHolder', domString);
};

const handleFormSubmit = (event) => {
    event.preventDefault(); //clears text input
    const newStudent = {
        name: document.querySelector('#name').value,
        house: randomizer()
    };
    studentsList.push(newStudent);
    cardBuilder(studentsList);
};

//  const expel = (event) => {
//     const targetId = event.target.id;
//     const targetType = event.type;
//     if (targetType === "expelbutton") {
//         studentsList.splice(targetID, 1);
//         cardBuilder(studentsList);
//     }
//  };

const buttonEvents = () => {
    document.querySelector('#sortButton').addEventListener('click', loadForm); /*makes sort button open form*/
    document.querySelector('#btn sortMe').addEventListener('click', handleFormSubmit); /*makes student card*/
    //document.querySelector('#btn btn-primary').addEventListener('click', ); /*expels student to Voldemort's Army*/

}

console.log(studentsList);

const loadPage = () => {
    buttonEvents();

};

loadPage();
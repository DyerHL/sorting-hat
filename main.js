let studentsList = [];
let voldysArmy = [];
const houses = ["Ravenclaw", "Gryffindor", "Hufflepuff", "Slytherin"];

/*Render to DOM function*/
const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

/*loads name input form*/
const loadForm = () => {
  let form = `
        
        <form id="sortingForm">
          <input type="text" class="form-control" id="name"placeholder="Student's Name" required>
          <button class="btn btn-outline-secondary" type="submit" id="sortMe">Sort Me</button>
        </form>  
        
    `;
 renderToDom("#formHolder", form);
  document
    .querySelector("#sortMe")
    .addEventListener("click", handleFormSubmit); /*makes student card*/
};

/*returns a random house*/
const randomizer = () => {
  let randomHouse = houses[Math.floor(Math.random() * houses.length)];
  return randomHouse;
};

/*builds student card*/
const cardBuilder = (studentsArray) => {
  let domString = "";
  studentsArray.forEach((student, i) => {
    domString += `
        <div class="card" style="width: 10rem;">
        <img src="..." class="card-img-top" alt="house colors">
        <div class="card-body">
            <h5 class="card-title">${student.name}</h5>
            <p class="card-text">${student.house}</p>
            <a href="#" type="button" id="${i}" class="btn btn-primary">Expel</a>
        </div>
        </div>`;
  });
  renderToDom("#studentsHolder", domString);
};

/*adds student to array, displays card*/
const handleFormSubmit = (event) => {
  event.preventDefault();
  const newStudent = {
    name: document.querySelector("#name").value,
    house: randomizer(),
  };
  studentsList.push(newStudent);
  cardBuilder(studentsList);
  document.querySelector('#sortingForm').reset();
};

/*Removes student from array, adds to Voldemort's army*/
const expel = (event) => {
  const targetId = event.target.id;
  const targetType = event.target.type;
  if (targetType === "button") {
    let expelled = studentsList.splice(targetId, 1);
    voldysArmy.push(...expelled);

    cardBuilder(studentsList);
  }
};

const buttonEvents = () => {
  document
    .querySelector("#sortButton")
    .addEventListener("click", loadForm); /*makes sort button open form*/
  document
    .querySelector("#studentsHolder")
    .addEventListener("click", expel); /*expels student to Voldemort's Army*/
};

const loadPage = () => {
  buttonEvents();
};

loadPage();

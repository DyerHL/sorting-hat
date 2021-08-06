let studentsList = [];
let voldysArmy = [];
// const houses = ["Ravenclaw", "Gryffindor", "Hufflepuff", "Slytherin"];

/*Render to DOM function*/
const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

/*loads name input form*/
const loadForm = () => {
  let form = `
        
        <form id="sortingForm" class="form">
          <input type="text" class="form-control" id="name"placeholder="Student's Name" required />
          <input class="btn btn-outline-secondary" type="submit" id="sortMe"></input>
        </form>  
        
    `;
 renderToDom("#formHolder", form);
  document
    .querySelector("#sortingForm")
    .addEventListener("submit", handleFormSubmit); /*makes student card*/
};

/*returns a random house*/
const randomizer = () => {
  let randomHouse = Math.floor(Math.random() * 4) + 1;
   if (randomHouse === 1) {
     return 'Slytherin';
   } else if (randomHouse === 2) {
     return 'Ravenclaw';
   } else if (randomHouse === 3) {
     return 'Hufflepuff';
   } else {
     return 'Gryffindor';
   };
};

/*assigns image to house*/
const assignImage = (house) => {
  if (house === 'Slytherin') {
    return "https://m.media-amazon.com/images/I/71jTE5obH-L._AC_SL1200_.jpg";
  } else if  (house === 'Ravenclaw') {
    return "https://i.pinimg.com/originals/d9/7e/c1/d97ec181eb6a1503be859ca3743e2e1b.jpg";
  } else if (house === 'HufflePuff') {
    return "https://i.pinimg.com/originals/14/49/2a/14492ad1ab4718672aa32926d3abef52.jpg";
  } else {
    return "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/original/products/88361/91122/Harry-Potter-Gryffindor-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__95823.1507640354.jpg?c=2";
  }
};



/*builds student card*/
const cardBuilder = (studentsArray) => {
  let domString = "";
  studentsArray.forEach((student, i) => {
    domString += `
        <div class="card" style="width: 10rem;">
        <img src="${student.image}" class="card-img-top" alt="house colors">
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
  const img = assignImage();
  const newStudent = {
    name: document.querySelector("#name").value,
    house: randomizer(),
    image: img,
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
    armyCardBuilder(voldysArmy);
  }
};

/*Creates card annoucing entering Voldemort's Army*/
const armyCardBuilder = (voldysArmy) => {
  let domString = "";
  voldysArmy.forEach((student, i) => {
    domString += `
        <div class="card" style="width: 10rem;">
        <div class="card-body">
            <h5 class="card-title">"${student.name} has joined Voldemort's Army."</h5>
        </div>
        </div>`;
  });
  renderToDom("#deathEaterHolder", domString);
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

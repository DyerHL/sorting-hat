let studentsArrays = [];

const renderToDom = (divId, textToPrint) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = textToPrint;
};

const loadForm = () => {
    let form = `
        <div class="form">
          <input type="text" class="form-control" placeholder="Student's Name" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-secondary" type="button" id="btn sortMe">Sort Me</button>
        </div>
    `;
    renderToDom("#formHolder", form);
};











const buttonEvents = () => {
    document.querySelector('#sortButton').addEventListener("click",loadForm); /*makes sort button open form*/
    document.querySelector('#btn sortMe').addEventListener('click',); /*makes student card*/
}

const loadPage = () => {
    buttonEvents();
};

loadPage();
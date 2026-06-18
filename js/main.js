const apiManager = new APIManager();
const model = new Model();
const renderer = new Renderer();

async function renderAndLoadPage(e) {
  if (e && e.preventDefault) e.preventDefault();

  try {
    const rawData = await apiManager.getAllData();

    const currentState = model.cleanData(rawData);

    renderer.render(currentState);
  } catch (error) {
    console.error("Error while loading data:", error.message);

    renderer.renderError(
      "We couldn't load the profiles. Please check your internet connection and try again.",
    );
  }
}

function displayCurrentData() {
  const currentState = model.loadAllFromLocalStorage();

  if (currentState) {
    renderer.render(currentState[0]);
    console.log("Loaded page from Local Storage:", currentState);
  } else {
    alert("No saved profile found. Please click 'Load User Data' first!");
  }
}

function saveCurrentData(e) {
  if (e && e.preventDefault) e.preventDefault();

  if (model.state && Object.keys(model.state).length > 0) {
    model.saveToLocalStorage();
    renderer.renderDropdown(model.savedUsers);
    alert("Profile saved successfully to Local Storage!");
  } else {
    alert("Nothing to save. Please load data first.");
  }
}

function onDropdownChange(e) {
  const selectedName = e.target.value;
  const selectedUserState = model.getSavedUserByName(selectedName);

  if (selectedUserState) {
    renderer.render(selectedUserState);
  }
}

document
  .querySelector("#load-btn")
  .addEventListener("click", displayCurrentData);

document.querySelector("#save-btn").addEventListener("click", saveCurrentData);

document
  .querySelector("#generate-btn")
  .addEventListener("click", renderAndLoadPage);

document
  .querySelector("#saved-users-dropdown")
  .addEventListener("change", onDropdownChange);

renderer.renderDropdown(model.savedUsers);
renderAndLoadPage();

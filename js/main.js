const apiManager = new APIManager();
const model = new Model();
const renderer = new Renderer();

async function renderAndLoadPage() {
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
  const currentState = model.loadFromLocalStorage();

  if (currentState) {
    renderer.render(currentState);
    console.log("Loaded page from Local Storage:", currentState);
  } else {
    alert("No saved profile found. Please click 'Load User Data' first!");
  }
}

function saveCurrentData() {
  if (model.state && Object.keys(model.state).length > 0) {
    model.saveToLocalStorage();
    alert("Profile saved successfully to Local Storage!");
  } else {
    alert("Nothing to save. Please load data first.");
  }
}

document
  .querySelector("#load-btn")
  .addEventListener("click", renderAndLoadPage);

document.querySelector("#save-btn").addEventListener("click", saveCurrentData);

document
  .querySelector("#generate-btn")
  .addEventListener("click", displayCurrentData);

renderAndLoadPage();

const apiManager = new APIManager();

async function run() {
  try {
    const users = await apiManager.fetchMeatText();
    console.log(users);
  } catch (error) {
    console.error("something went wrong...", error);
  }
}

run();

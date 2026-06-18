class APIManager {
  async getAllData() {
    const [users, quote, pokemon, meatText] = await Promise.all([
      this.fetchUsers(),
      this.fetchQuote(),
      this.fetchPokemon(),
      this.fetchMeatText(),
    ]);

    return {
      users,
      quote,
      pokemon,
      meatText,
    };
  }

  async fetchUsers() {
    const response = await axios.get("https://randomuser.me/api/?results=7");
    return response.data?.results || [];
  }

  async fetchQuote() {
    const response = await axios.get("https://api.kanye.rest");
    return response.data?.quote || [];
  }

  async fetchPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`,
    );
    return {
      name: response.data?.name || "Unknown",
      image: response.data?.sprites?.front_default || "",
    };
  }

  async fetchMeatText() {
    const response = await axios.get(
      "https://baconipsum.com/api/?type=meat-and-filler&paras=1&start-with-lorem=1&format=text",
    );
    return response.data || [];
  }
}

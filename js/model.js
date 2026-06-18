class Model {
  constructor() {
    this.state = {};
  }

  cleanData(rawData) {
    const allUsers = rawData.users || [];

    this.state = {
      user: this._MainUser(allUsers[0]),
      friends: this._Friends(allUsers.slice(1)),
      quote: rawData.quote || "No quote available",
      pokemon: rawData.pokemon
        ? {
            name: rawData.pokemon.name,
            image: rawData.pokemon.image,
          }
        : null,
      meatText: rawData.meatText || "No text available",
    };

    return this.state;
  }

  _MainUser(user) {
    if (!user) return null;
    return {
      name: `${user.name.first} ${user.name.last}`,
      city: user.location.city,
      country: user.location.country,
      phone: user.phone,
      image: user.picture.large,
    };
  }

  _Friends(users) {
    return users.map((user) => ({
      name: `${user.name.first} ${user.name.last}`,
    }));
  }

  saveState() {
    localStorage.setItem("appState", JSON.stringify(this.state));
  }

  loadState() {
    const saved = localStorage.getItem("appState");
    if (saved) this.state = JSON.parse(saved);
    return this.state;
  }
}

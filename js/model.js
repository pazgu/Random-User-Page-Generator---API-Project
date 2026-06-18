class Model {
  constructor() {
    this.state = {};
    this.savedUsers = this.loadAllFromLocalStorage() || [];
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

  saveToLocalStorage() {
    if (!this.state.user) return;

    const exists = this.savedUsers.some(
      (u) => u.user.name === this.state.user.name,
    );

    if (!exists) {
      this.savedUsers.push(this.state);
      localStorage.setItem("allSavedUsers", JSON.stringify(this.savedUsers));
    }
  }

  loadAllFromLocalStorage() {
    const saved = localStorage.getItem("allSavedUsers");
    return saved ? JSON.parse(saved) : [];
  }

  getSavedUserByName(name) {
    return this.savedUsers.find((u) => u.mainUser.name === name) || null;
  }
}

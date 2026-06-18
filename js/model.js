class Model {
  cleanData(rawData) {
    const allUsers = rawData.users || [];

    const currentState = {
      user: this._formatMainUser(allUsers[0]),
      friends: this._formatFriends(allUsers.slice(1)),
      quote: rawData.quote || "No quote available",
      pokemon: rawData.pokemon
        ? {
            name: rawData.pokemon.name,
            image: rawData.pokemon.image,
          }
        : null,
      meatText: rawData.meatText || "No text available",
    };

    return state;
  }

  _formatMainUser(user) {
    if (!user) return null;
    return {
      name: `${user.name.first} ${user.name.last}`,
      city: user.location.city,
      country: user.location.country,
      phone: user.phone,
      image: user.picture.large,
    };
  }

  _formatFriends(users) {
    return users.map((user) => ({
      name: `${user.name.first} ${user.name.last}`,
    }));
  }
}

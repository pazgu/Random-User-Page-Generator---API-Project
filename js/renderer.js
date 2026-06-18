class Renderer {
  _clearAll() {
    document.querySelector(".user-info-container").innerHTML = "";
    document.querySelector(".quote-container").innerHTML = "";
    document.querySelector(".pokemon-container").innerHTML = "";
    document.querySelector(".about-container").innerHTML = "";
    document.querySelector(".friends-container").innerHTML = "";
  }

  render(state) {
    this._clearAll();

    if (state.user) {
      document.querySelector(".user-info-container").innerHTML = `
        <div class="user-profile">
          <img src="${state.user.image}" alt="User Image">
          <h2>${state.user.name}</h2>
          <p>${state.user.city}, ${state.user.country}</p>
          <p>${state.user.phone}</p>
        </div>
      `;
    }

    if (state.quote) {
      document.querySelector(".quote-container").innerHTML = `
        <div class="quote-card">
          <p>"${state.quote}"</p>
        </div>
      `;
    }

    if (state.pokemon) {
      document.querySelector(".pokemon-container").innerHTML = `
        <div class="pokemon-card">
          <h3>${state.pokemon.name}</h3>
          <img src="${state.pokemon.image}" alt="${state.pokemon.name}">
        </div>
      `;
    }

    if (state.meatText) {
      document.querySelector(".about-container").innerHTML = `
        <div class="about-text">
          <p>${state.meatText}</p>
        </div>
      `;
    }

    if (state.friends && state.friends.length > 0) {
      const friendsHTML = state.friends
        .map(
          (friend) => `
        <div class="friend-card">
          <p>${friend.name}</p>
        </div>
      `,
        )
        .join("");

      document.querySelector(".friends-container").innerHTML = friendsHTML;
    }
  }

  renderDropdown(savedUsers) {
    const dropdown = document.querySelector("#saved-users-dropdown");

    dropdown.innerHTML =
      '<option value="" disabled selected>Select a saved user...</option>';

    savedUsers.forEach((user) => {
      if (user.mainUser) {
        dropdown.innerHTML += `<option value="${user.mainUser.name}">${user.mainUser.name}</option>`;
      }
    });
  }

  renderError(message) {
    this._clearAll();
    const errorContainer = document.querySelector(".user-container");
    errorContainer.innerHTML = `
      <div class="error-message">
        <h2>Oops! Something went wrong...</h2>
        <p>${message}</p>
      </div>
    `;
  }
}

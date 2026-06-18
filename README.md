# 🌐 RUPG - Random User Page Generator

An interactive, dynamic, Facebook-like profile dashboard that generates fresh content entirely from 4 different public APIs at the click of a button. Built from scratch using clean code principles and the **MVC (Model-View-Controller)** architectural pattern.

---

## 🛠️ Tech Stack & Concepts Applied
* **Architecture:** MVC Modularity (Strict separation of Data, DOM Rendering, and Event Handling)
* **JavaScript (ES6+):** Object-Oriented Programming (OOP), Promises, `fetch` API / Async-Await
* **Web APIs:** Integration with multiple asynchronous data sources
* **UI/UX & DOM:** Dynamic DOM manipulation using Vanilla JS (or jQuery), custom CSS grid/flexbox layouts
* **Storage (Extensions):** `localStorage` state management for persistent data saving and loading

---

## 📡 APIs Integrated
This multi-million-dollar application utilizes the following data streams to construct a user page without hardcoded text:
1.  **Random User Generator API:** Fetches 7 random profiles—1 primary user (profile picture, full name, location) and 6 users for the "Friends" section.
2.  **Kanye Rest API:** Pulls an inspirational (or chaotic) random quote from Kanye West.
3.  **PokeAPI:** Requests data for a random Pokemon, rendering its name (in proper Title Case) and sprite graphic.
4.  **Bacon Ipsum API:** Generates appetizing, meat-themed placeholder text for the "About Me" section.

---

## ✨ Features & Extensions Implemented
* **Generate User Button:** Instantly fires asynchronous parallel/serial requests to all 4 APIs and re-renders the complete layout.
* **Proper Casing:** Dynamic string formatting to capitalize the Pokemon's name beautifully (`pikachu` ➡️ `Pikachu`).
* **Save & Load System (Local Storage):** Allows saving snapshots of currently generated user pages.
* **Multi-User Dropdown:** Save multiple profiles to local storage and dynamically reload any historical profile via a responsive dropdown menu.
* **Graceful Error Handling:** Handled potential API request failures gracefully within the UI layer to protect user experience.

---

## 📐 Project Structure (MVC)
* `model.js` (Model) – Manages the state, local storage operations, and API call aggregations independently of the UI.
* `render.js` (View) – Responsible strictly for cleaning the DOM and injecting fresh template-literal HTML elements based on incoming data.
* `main.js` (Controller) – Attaches event listeners, delegates dynamic DOM events, and acts as the central brain binding the Model and View.

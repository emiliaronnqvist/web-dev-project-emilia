// Fetch the stores
// Displays stores in the console
/*fetch("/api/stores")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Stores loaded:", data);

    // Displays stores on the webpage
    const list = document.getElementById("storelist");
    data.forEach((store) => {
      const li = document.createElement("li");
      li.innerText = `${store.name}`;
      list.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching stores:", error);
  });
*/
function fetchStores() {
  fetch("/stores.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Stores:", data);

      // create list
    });
}
fetchStores();

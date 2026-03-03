// Fetch the stores
// Displays stores in the console
fetch("/api/stores")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log("Stores loaded:", data);

    // Displays stores on the webpage
    const ul = document.getElementById("storelist");
    data.forEach((store) => {
      const li = document.createElement("li");

      const h2 = document.createElement("h2");
      h2.innerText = `${store.name}`;

      const p = document.createElement("p");
      p.innerText = `${store.district}`;

      const a = document.createElement("a");
      a.innerText = `${store.url}`;

      /*const button = document.createElement("button");
      button.innerText = "Read more";

      button.addEventListener("click", () => {
        window.open("http://"`{$store.url}`);
      }); */

      li.appendChild(h2);
      li.appendChild(p);
      li.appendChild(a);
      li.appendChild(button);

      ul.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching stores:", error);
  });

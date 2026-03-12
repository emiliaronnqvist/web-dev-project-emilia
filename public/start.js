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
      li.classList.add("listItem");

      const h2 = document.createElement("h2");
      h2.innerText = store.name;

      // District Pin Image
      //Following 4 lines was inspired by https://www.google.com/search?q=javascript+h%C3%A4mta+bild&oq=javascript+h%C3%A4mta+bild&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigAdIBCDkwMDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
      const img = document.createElement("img");
      img.src = "img/mappin.png";
      img.alt = "district_pin";
      img.width = 20;
      img.classList.add("pin");

      if (store.district === null) {
        store.district = "Jönköping";
      }

      const p = document.createElement("p");
      p.innerText = store.district;
      p.classList.add("ditrict");

      const pin_district_div = document.createElement("div");
      pin_district_div.classList.add("pin_district_div");
      pin_district_div.appendChild(img);
      pin_district_div.appendChild(p);

      // Following 5 lines was inspired by https://stackoverflow.com/questions/4772774/how-do-i-create-a-link-using-javascript
      const a = document.createElement("a");
      const linkText = document.createTextNode("Läs mer");
      a.appendChild(linkText);
      a.href = "https://" + store.url;
      a.classList.add("link");

      li.appendChild(h2);
      li.appendChild(pin_district_div);
      li.appendChild(a);

      ul.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Error fetching stores:", error);
  });

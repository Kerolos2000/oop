import { Details } from "./Details.js";
import { Ui } from "./Ui.js";
export class Games {
  constructor() {
    this.ui = new Ui();
    this.Details = new Details();
    this.loader = this.Details.loader;
    this.apiGames("mmorpg");
    this.li = document.querySelectorAll("#mainLi li");
    this.li.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.loader[0].classList.add("show-loading");
        this.ui.mainDiv.innerHTML = "";
        this.li.forEach((el) => {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
        this.apiGames(el.innerHTML);
      });
    });
  }
  apiGames(category) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ea7fc75fe9msh3308651bf0aad03p17ea04jsned5e3f84eca1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        this.loader = document.querySelectorAll("#loader");
        this.loader[0].classList.remove("show-loading");
        this.ui.displayData(response);
        this.cardX = document.querySelectorAll(".cardX");
        this.changeCategory();
      })
      .catch((err) => console.error(err));
  }
  changeCategory() {
    let cards = document.querySelectorAll(".cardX");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        this.displayDetails(card.id);
      });
    });
  }
  displayDetails(id) {
    let main = document.querySelector("#mainSec");
    let detailsx = document.querySelector("#details");
    // this.loader[1].classList.add("show-loading")
    const details = new Details(id);
    main.style.display = "none";
    detailsx.style.display = "block";
  }
}

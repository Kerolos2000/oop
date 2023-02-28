import { Ui } from "./Ui.js";
// import { Ui } from "./Ui.js";
export class Details {
  constructor(id) {
    this.ui = new Ui();
    this.apiDetails(id);
  }
  apiDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ea7fc75fe9msh3308651bf0aad03p17ea04jsned5e3f84eca1",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    if (id) {
      fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          this.ui.displayDetails(response);
          this.closeFN();
        })
        .catch((err) => console.error(err));
    }
  }
  closeFN() {
    let closebtn = document.querySelector("#close");
    function close() {
      let main = document.querySelector("#mainSec");
      let detailsx = document.querySelector("#details");
      detailsx.style.display = "none";
      main.style.display = "block";
    }
    closebtn.addEventListener("click", () => {
      close();
    });
    document.body.addEventListener("keyup", (e) => {
      if (e.code == "Escape") {
        close();
      }
    });
  }
}

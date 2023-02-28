export class Ui {
  constructor() {
    this.mainDiv = document.querySelector("#main-div");
  }
  displayData(data) {
    this.mainDiv.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      this.mainDiv.innerHTML += `
        <div class="all-card col-sm-6 col-lg-4 col-xl-3">
            <div class="cardX" id="${data[i].id}">
              <div class="img">
                <img src="${data[i].thumbnail}">
              </div>
              <div class="text">
                <h5>${data[i].title}</h5>
                <span class="badge text-bg-dark p-2">Free</span>
              </div>
              <p class="text-center">${data[i].short_description}</p>
              <div class="text">
                <span class="badge text-bg-danger p-2">${data[i].genre}</span>
                <span class="badge text-bg-danger p-2">${data[i].platform}</span>
              </div>
            </div>
        </div>
      `;
    }
  }
  displayDetails(data) {
    let temp = ""
    const details = document.querySelector("#details");
    temp = `
      <div class="container py-5">
        <div class="details-header">
          <h3>Details Game</h3>
          <div class="icon" id="close">
            <i class="fa-solid fa-xmark fa-2x"></i>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 mb-2 left">
            <div class="img">
              <img src="${data.thumbnail}" class="w-100" alt="">
            </div>
          </div>
          <div class="col-md-7 right">
            <h4>Title: ${data.title}</h4>
            <p>Category: <span class="badge text-bg-danger p-2"> ${data.genre}</span></p>
            <p>Platform: <span class="badge text-bg-danger p-2"> ${data.platform}</span></p>
            <p>Status: <span class="badge text-bg-danger p-2"> ${data.status}</span> </p>
            <p class="small">${data.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
          </div>
        </div>
      </div>
    `;
    details.innerHTML = temp
  }
}

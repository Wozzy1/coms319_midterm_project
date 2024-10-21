const button1 = document.getElementById("programs-button-1");
button1.addEventListener("click", function () {
  buttonClicked(1);
});

const button2 = document.getElementById("programs-button-2");
button2.addEventListener("click", function () {
  buttonClicked(2);
});

const button3 = document.getElementById("programs-button-3");
button3.addEventListener("click", function () {
  buttonClicked(3);
});

const button4 = document.getElementById("programs-button-4");
button4.addEventListener("click", function () {
  buttonClicked(4);
});

function buttonClicked(num) {
  const cardContainer = document.getElementById("dynamic-card");

  fetch("./programs.json") // Adjust the path to your JSON file if necessary
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const programData = data[num - 1];

      if (programData) {
        console.log(`Button ${num} was pressed`);

        // var src = "./images/rack.jpg";
        switch (num) {
          case 1:
            var src = "./images/bench_press_2.jpg";
            var extra_style = "object-position: 0% 70%";
            break;

          case 2:
            var src = "./images/bench_2.jpg";
            var extra_style = "object-position: 0% 65%";
            break;

          case 3:
            var src = "./images/thr33_cards.jpg";
            var extra_style = "object-position: 0% 70%";
            break;

          case 4:
            var src = "./images/items_3.jpg";
            var extra_style = "object-position: 0% 70%";

            break;
        }

        var alt = programData.program;
        var title = programData.program;

        // Create the description list
        let descriptionList = programData.description
          .map((item) => `<p>${item}</p>`)
          .join("");

        // Create the card item
        let item = `
                    <div
                        class="card mb-3 text-center mx-auto"
                        style="width: 900px; max-width: 80vw; min-height: 30vh; object-position: center; background-color: #feffe9"
                        >
                        <img
                            class="card-img-top"
                            src="${src}"
                            alt="${alt}"
                            style="width: 100%; max-height: 50vh; object-fit: cover; ${extra_style}"
                        />
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <div class="card-text">
                                ${descriptionList}
                            </div>
                        </div>
                    </div>`;

        // Update the card container with the new item
        cardContainer.innerHTML = item;
      } else {
        console.error("Program not found!");
      }
    })
    .catch((error) => {
      console.error("There was a problem in the fetch call: " + error);
    });
}

const input = document.querySelector("#search");
const form = document.querySelector("form");
const results = document.querySelector(".results");
const grid = document.querySelector(".grid");

let inputValue = input.value;
let mealsResults;
let meal = [];
let modalContainer = [];

const openModal = () => {
  meal.forEach((e) => {
    e.addEventListener("click", () => {
      //   e.querySelector(".modalcontainer").style.display = "block";
      e.querySelector(".modalcontainer").classList.toggle("hidden");
    });
  });
};

const closeModal = () => {
  modalContainer = document.querySelectorAll(".modalcontainer");
  modalContainer.forEach((e) => {
    e.addEventListener("click", (f) => {
      if (f.target == e) {
        e.style.display = "none";
      }
    });
  });
};

const displayResults = () => {
  for (i = 0; i < mealsResults.length; i++) {
    // console.log(mealsResults[i].strMeal);
    // console.log(mealsResults[i].strMealThumb);
    grid.innerHTML += `<div class="meal">
    <div class="text">
        <img src="${mealsResults[i].strMealThumb}" alt="">
        <h4>${mealsResults[i].strMeal}</h4>
    </div>
    <div class="modalcontainer hidden">
    <div class="modal">
        <div class="close">╳</div>
        <img src="${mealsResults[i].strMealThumb}" alt="">
        <h4>${mealsResults[i].strMeal}</h4>
        <div class="flex">
        <div class="ingredients">
            <h5>Ingredients</h5>
            <ul>
                <li>${mealsResults[i].strMeasure1} ${mealsResults[i].strIngredient1}</li>
                <li>${mealsResults[i].strMeasure2} ${mealsResults[i].strIngredient2}</li>
                <li>${mealsResults[i].strMeasure3} ${mealsResults[i].strIngredient3}</li>
                <li>${mealsResults[i].strMeasure4} ${mealsResults[i].strIngredient4}</li>
                <li>${mealsResults[i].strMeasure5} ${mealsResults[i].strIngredient5}</li>
                <li>${mealsResults[i].strMeasure6} ${mealsResults[i].strIngredient6}</li>
                <li>${mealsResults[i].strMeasure7} ${mealsResults[i].strIngredient7}</li>
                <li>${mealsResults[i].strMeasure8} ${mealsResults[i].strIngredient8}</li>
                <li>${mealsResults[i].strMeasure9} ${mealsResults[i].strIngredient9}</li>
                <li>${mealsResults[i].strMeasure10} ${mealsResults[i].strIngredient10}</li>
                <li>${mealsResults[i].strMeasure11} ${mealsResults[i].strIngredient11}</li>
                <li>${mealsResults[i].strMeasure12} ${mealsResults[i].strIngredient12}</li>
                <li>${mealsResults[i].strMeasure13} ${mealsResults[i].strIngredient13}</li>
                <li>${mealsResults[i].strMeasure14} ${mealsResults[i].strIngredient14}</li>
                <li>${mealsResults[i].strMeasure15} ${mealsResults[i].strIngredient15}</li>
                <li>${mealsResults[i].strMeasure16} ${mealsResults[i].strIngredient16}</li>
                <li>${mealsResults[i].strMeasure17} ${mealsResults[i].strIngredient17}</li>
                <li>${mealsResults[i].strMeasure18} ${mealsResults[i].strIngredient18}</li>
                <li>${mealsResults[i].strMeasure19} ${mealsResults[i].strIngredient19}</li>
                <li>${mealsResults[i].strMeasure20} ${mealsResults[i].strIngredient20}</li>
            </ul>
        </div>
        <div class="instructions">
            <h5>Instructions</h5>
            <p>${mealsResults[i].strInstructions}</p>
        </div>
        </div>
    </div>
</div>
</div>`;
    const emptyLi = document.querySelectorAll("ul li");
    emptyLi.forEach((element) => {
      if (element.innerText == "null null") {
        element.innerText = "";
      }
    });
  }
};

const fetchData = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
  );
  const data = await res.json();
  mealsResults = data.meals;
  //   console.log(mealsResults);
  displayResults();
  meal = document.querySelectorAll(".meal");
  openModal();
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

input.addEventListener("change", (event) => {
  grid.innerHTML = "";
  inputValue = input.value;
  input.value = "";
  results.innerText = `These are the results for "${inputValue}" ↴`;
  fetchData();
});

/* const button = document.querySelectorAll("button");

button.forEach((elem) =>
  elem.addEventListener("click", () => {
    elem.nextElementSibling.classList.toggle("hidden");
    elem.innerText !== "Open tab"
      ? (elem.innerText = "Open tab")
      : (elem.innerText = "Close tab");
  })
); */

/* const button = document.querySelector("button");
const modal = document.querySelector(".modalcontainer");
const closeBtn = document.querySelector(".close");

button.addEventListener("click", (e) => {
  modal.style.display = "block";
  document.body.classList.add("noscroll");
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
  document.body.classList.remove("noscroll");
});

modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("noscroll");
  }
}); */

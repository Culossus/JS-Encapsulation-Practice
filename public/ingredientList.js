// The array of ingredients the user can add to a sandwich

var ingredientList = {
  ingridents: [],
  renderIngredientList: function () {
    const ingredientUl = document.querySelector(".ingredient-list");

    // Empty the ingredientList before adding any content to it.
    ingredientUl.innerHTML = "";

    this.ingredients.forEach((ingredient) => {
      const ingredientDiv = this.renderIngredientCard(ingredient);
      ingredientUl.append(ingredientDiv);
    });
  },
  renderIngredientCard: function (ingredient) {
    const ingredientCard = document.createElement("div");
    ingredientCard.className = "card";

    const sandwichHasIngredient = selectedSandwich.ingredients.includes(
      ingredient.name
    );
    ingredientCard.innerHTML = `
        <div class="card-body">
            <div class="row g-0">
                <div class="col-sm-4">
                    <img src="${ingredient.imageURL}" alt="${
      ingredient.name
    }" style="width: 100%">
                </div>
                <div class="col-sm-8">
                    <h5 class="card-title">${ingredient.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${
                      ingredient.calories
                    } Calories</h6>
                    <p class="card-text">${ingredient.description}</p>
                    ${
                      sandwichHasIngredient
                        ? `
                        <button class="btn btn-danger toggle-button">Remove</button>
                    `
                        : `
                        <button class="btn btn-primary toggle-button">Add</button>
                    `
                    }
                </div>
            </div>
        </div>
    `;
    const toggleButton = ingredientCard.querySelector(".toggle-button");
    toggleButton.addEventListener("click", () => {
      this.toggleIngredient(ingredient);
    });

    return ingredientCard;
  },
  toggleIngredient: function (ingredient) {
    let sandwichHasIngredient = selectedSandwich.ingredients.includes(
      ingredient.name
    );
    if (sandwichHasIngredient) {
      selectedSandwich.ingredients = selectedSandwich.ingredients.filter(
        (x) => x !== ingredient.name
      );
    } else {
      sandwichHasIngredient = true;
      selectedSandwich.ingredients.push(ingredient.name);
    }
    saveSelectedSandwich();
    renderCart();
    this.renderIngredientList();
  },
};

//  This will be updated after we fetch.
// let ingredients = [];

// Updates the DOM to display a list of ingredients
// function renderIngredientList() {}

// Creates a DIV to display a single ingredient
// function renderIngredientCard(ingredient) {}

// Runs when the user clicks 'Add' or 'Remove' on a ingredient card
// function toggleIngredient(ingredient) {}

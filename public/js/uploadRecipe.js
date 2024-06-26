async function upload(event) {
  event.preventDefault();

  const recipeName = document.querySelector("#recipe-name").value;
  const recipeIngredients = document.querySelector("#recipe-ingredients").value;
  const recipeInstructions = document.querySelector(
    "#recipe-instructions",
  ).value;
  const recipePhoto = document.querySelector("#recipe-photo");

  const formData = new FormData();
  formData.append("recipePhoto", recipePhoto.files[0]);
  formData.append("recipeName", recipeName);
  formData.append("recipeIngredients", recipeIngredients);
  formData.append("recipeInstructions", recipeInstructions);

  const response = await fetch(`/api/recipes`, {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Your recipe was not posted. Please try again.");
  }
}

const recipeForm = document.querySelector("#recipe-form");
recipeForm.addEventListener("submit", upload);

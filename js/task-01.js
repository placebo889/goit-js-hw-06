document.addEventListener("DOMContentLoaded", () => {
  const categoriesList = document.querySelector("#categories");

  if (categoriesList) {
    const categoryItems = categoriesList.querySelectorAll("li.item");

    console.log(`Number of categories: ${categoryItems.length}`);

    categoryItems.forEach((category) => {
      const categoryName = category.querySelector("h2").textContent;
      const categoryElements = category.querySelectorAll("ul li").length;
      console.log(`Category: ${categoryName}`);
      console.log(`Elements: ${categoryElements}`);
    });
  } else {
    console.error("Categories list not found.");
  }
});

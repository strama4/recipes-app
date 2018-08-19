const data = JSON.parse('[{"title":"Recipe Puppy","version":0.1,"href":"http:\/\/www.recipepuppy.com\/","results":[{"title":"Ginger Champagne","href":"http:\/\/allrecipes.com\/Recipe\/Ginger-Champagne\/Detail.aspx","ingredients":"champagne, ginger, ice, vodka","thumbnail":"http:\/\/img.recipepuppy.com\/1.jpg"},{"title":"Potato and Cheese Frittata","href":"http:\/\/allrecipes.com\/Recipe\/Potato-and-Cheese-Frittata\/Detail.aspx","ingredients":"cheddar cheese, eggs, olive oil, onions, potato, salt","thumbnail":"http:\/\/img.recipepuppy.com\/2.jpg"},{"title":"Eggnog Thumbprints","href":"http:\/\/allrecipes.com\/Recipe\/Eggnog-Thumbprints\/Detail.aspx","ingredients":"brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar","thumbnail":"http:\/\/img.recipepuppy.com\/3.jpg"},{"title":"Succulent Pork Roast","href":"http:\/\/allrecipes.com\/Recipe\/Succulent-Pork-Roast\/Detail.aspx","ingredients":"brown sugar, garlic, pork chops, water","thumbnail":"http:\/\/img.recipepuppy.com\/4.jpg"},{"title":"Irish Champ","href":"http:\/\/allrecipes.com\/Recipe\/Irish-Champ\/Detail.aspx","ingredients":"black pepper, butter, green onion, milk, potato, salt","thumbnail":"http:\/\/img.recipepuppy.com\/5.jpg"},{"title":"Chocolate-Cherry Thumbprints","href":"http:\/\/allrecipes.com\/Recipe\/Chocolate-Cherry-Thumbprints\/Detail.aspx","ingredients":"cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract","thumbnail":"http:\/\/img.recipepuppy.com\/6.jpg"},{"title":"Mean Woman Pasta","href":"http:\/\/allrecipes.com\/Recipe\/Mean-Woman-Pasta\/Detail.aspx","ingredients":"garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato","thumbnail":"http:\/\/img.recipepuppy.com\/7.jpg"},{"title":"Hot Spiced Cider","href":"http:\/\/allrecipes.com\/Recipe\/Hot-Spiced-Cider\/Detail.aspx","ingredients":"allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt","thumbnail":"http:\/\/img.recipepuppy.com\/8.jpg"},{"title":"Isa\'s Cola de Mono","href":"http:\/\/allrecipes.com\/Recipe\/Isas-Cola-de-Mono\/Detail.aspx","ingredients":"cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar","thumbnail":"http:\/\/img.recipepuppy.com\/9.jpg"},{"title":"Amy\'s Barbecue Chicken Salad","href":"http:\/\/allrecipes.com\/Recipe\/Amys-Barbecue-Chicken-Salad\/Detail.aspx","ingredients":"barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato","thumbnail":"http:\/\/img.recipepuppy.com\/10.jpg"}]}]')

const recipes = data[0].results // Array of recipes
document.getElementById('title').innerHTML = data[0].title

// Create and populate each recipe with own box containing info

const generateDOMElements = () => {
    let recipeEl = document.createElement('div')
    let headerEl = document.createElement('div')
    let titleEl = document.createElement('p')
    let imageEl = document.createElement('img')
    let ingredientsEl = document.createElement('p')

    headerEl.classList.add('grid-x')
    recipeEl.classList.add('recipe', 'cell')
    titleEl.classList.add('recipe-title', 'auto')
    imageEl.classList.add('recipe-image', 'shrink')
    ingredientsEl.classList.add('recipe-ingredients')

    return {
        recipeEl, headerEl, titleEl, imageEl, ingredientsEl
    }
}

const unorderedIngredients = (ingredients) => {
    let list = document.createElement('ul')
    let ingredientsArray = ingredients.split(',').map((x) => x.trim())

    for (let i = 0; i < ingredientsArray.length; i++) {
        let newItem = document.createElement('li')
        newItem.innerHTML = ingredientsArray[i]
        list.appendChild(newItem)
    }
    console.log(list)
    return list
}

// Add each recipe in JSON data
for (let i = 0; i < recipes.length; i++) {
    let nextRecipe = generateDOMElements()
    nextRecipe.imageEl.src = recipes[i].thumbnail
    nextRecipe.titleEl.innerHTML = "<a href=" + recipes[i].href + ">" + recipes[i].title + "</a>"
    nextRecipe.ingredientsEl.innerText = unorderedIngredients(recipes[i].ingredients)

    nextRecipe.headerEl.appendChild(nextRecipe.imageEl)
    nextRecipe.headerEl.appendChild(nextRecipe.titleEl)
    nextRecipe.recipeEl.appendChild(nextRecipe.headerEl)
    nextRecipe.recipeEl.appendChild(nextRecipe.ingredientsEl)
    document.getElementById('recipe-list').appendChild(nextRecipe.recipeEl)
}





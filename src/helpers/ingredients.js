const manageIngredients = (object) => {
  const ingredientsObject = {};
  const restObject = {};
  restObject.ingredients={}
  
  for (const key in object) {
    if (key.startsWith("Ingreditent")) {
      const ingredientNumber = key.split(" ")[1];

      if (!key.endsWith(" amount")) {
        const ingredientName = object[`Ingreditent ${ingredientNumber}`];
        const amountKey = `Ingreditent ${ingredientNumber} amount`;
        const amount = object[amountKey];

        ingredientsObject[ingredientName] = amount;
      }
    } else if(key==="decoration"){
        
        restObject.ingredients.decoration=object[key];
        
    }else {
        restObject[key]= object[key];
    }
  }
  restObject.ingredients.spirits=ingredientsObject
  return restObject;
};

export default manageIngredients;

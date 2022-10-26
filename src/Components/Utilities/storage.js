

function addToDb(id){
    let mealCart = JSON.parse(localStorage.getItem('meal-cart') || '{}');
    mealCart[id] = 1;
    localStorage.setItem('meal-cart', JSON.stringify(mealCart));
    console.log(mealCart);
}










export{
    addToDb
}
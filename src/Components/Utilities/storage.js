

function addToDb(id){
    let mealCart = JSON.parse(localStorage.getItem('meal-cart') || '{}');    
    if(id in mealCart){
        mealCart[id] = mealCart[id] + 1;
    }else{
        mealCart[id] = 1;
    }
    localStorage.setItem('meal-cart', JSON.stringify(mealCart));
}

function getMealCart(){
    let mealCart = JSON.parse(localStorage.getItem('meal-cart') || '{}');
    return mealCart;
}


function decreaseDb(x){
    let mealCart = JSON.parse(localStorage.getItem('meal-cart') || '{}');
    if(mealCart[x]>0){
        mealCart[x] = mealCart[x] - 1;
    }    
    localStorage.setItem('meal-cart', JSON.stringify(mealCart));
}




export{
    addToDb,
    getMealCart,
    decreaseDb
}
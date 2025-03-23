//EX1

//async function getChefBirthday(id) {
//    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
//    const recipe = await recipeResponse.json();
//    const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
//    const chef = await chefResponse.json();
//    return chef.birthDate;
    
//}

//(async () => {
//    try{
//        const birthday = await getChefBirthday(1);
//        console.log("Data di nascita dello chef:", birthday);
//    }catch(error){
//        console.error("Errore:", error.message)
//    }
//})();

//BONUS1

//async function getChefBirthday(id) {
    
//    let recipe;
//    try{
//        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
//        recipe = await recipeResponse.json(); 
//    }catch(error){
//        console.error(error);
//        throw new Error(`Non recupero la ricetta id: ${id}`);
//    }
//    if(!recipe){
//        throw new Error(`Ricetta con id ${id} non trovata!`);
//    }

//    let chef;
//    try{
//        const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
//        chef = await chefResponse.json();
//    }catch(error){
//        console.error(error);
//        throw new Error(`Non recupero lo chef id ${id}`);
//    }
//    if(!chef){
//        throw new Error(`Chef con id ${id} non trovato!`);
//    }

//    return chef.birthDate;
    
//}

//(async () => {
//    try{
//        const birthday = await getChefBirthday(1);
//        console.log("Data di nascita dello chef:", birthday);
//    }catch(error){
//        console.error("Errore:", error.message)
//    }
//    console.log('Fine codice!');
//})();

//BONUS2

//async function getChefBirthday(id) {
//        const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
//        const recipe = await recipeResponse.json();
//        const chefResponse = await fetch(`https://dummyjson.com/users/${recipe.userId}`);
//        const chef = await chefResponse.json();
//        const formattedDate = dayjs(chef.birthDate).format("DD/MM/YYYY");
//        return formattedDate;
//        
//    }
    
//    (async () => {
//        try{
//            const birthday = await getChefBirthday(1);
//            console.log("Data di nascita dello chef:", birthday);
//        }catch(error){
//            console.error("Errore:", error.message)
//        }
//        console.log('Fine codice!');
//    })();
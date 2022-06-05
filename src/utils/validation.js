export const validate = (game) => {
    let errors = {};
    
    if (!game.name.trim()) {
      errors.name = "Fill is required";
    } else if (!/^[A-Za-z0-9\s]+$/g.test(game.name)) {
      errors.name = "Name must contain only letters";
    } 
    if (!game.description) {
        errors.description = "Fill is required";
    }
    if (!game.rating) {
        errors.rating = "Rating is required";
    }
    if (!/(jpg|jpeg|png)/i.test(game.image)){
        errors.image = "Only jpg, jpeg, and png urls are allowed";
    }
    if (game.platforms.length===0){
        errors.platforms = "Choose at least one";
    }   
    if (game.genres.length===0){
        errors.genres= "Choose at least one";
    }   

    return errors;
    
}
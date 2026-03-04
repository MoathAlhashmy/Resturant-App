const testUserController = (req,res) => {
    try{
        res.status(200).send('<h1> This is a test user route </h1>')
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    testUserController 
}
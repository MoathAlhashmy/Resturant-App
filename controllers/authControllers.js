const userModel = require('../models/userModel');

const registerController = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;
    //validation
    if (!userName || !email || !password || !address || !phone ) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    // chekc user
    const exisiting = await userModel.findOne({ email });
    if (exisiting) {
      return res.status(500).send({
        success: false,
        message: "Email Already Registerd please Login",
      });
    }
    //create new user 
    const user = await userModel.create({
      userName,
      email,
      password,
      address,
      phone,
    });
    res.status(201).send({
      success: true,
      message: "Successfully Registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};

const loginController = async (req, res)=>{
  try{
    const {email, password} = req.body
    if(!email || !password){
      return res.status(500).send({
        success:false,
        message:'Please Provide All Fields'
      })
    }
    const user = await userModel.findOne({email})
    if(!user){
      return res.status(404).send({
        success:false,
        message:'Email is not registerd'
      })
    }
    res.status(200).send({
      success:true,
      message:'Login Successfully',
      user,
    })
  }catch(error){
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Login API",
      error,
    })
  }
}
module.exports = { registerController, loginController };
  const Users = require("../models/user")
  module.exports = {
    createUser: async (req, res) => {
      try {
        console.log("hellooooooooo")
        console.log(req.body)
        const { name, email, phoneNumber,address} = req.body;
        var user = new Users();
        user.name = name;
        user.email =email;
        user.phoneNumber = phoneNumber; 
        user.address =address;
        user.save().then((value)=>{
                console.log(value)
        });
           res.send("Success")
      } catch (err) {
        console.log(err)
        res.send("something went to wrong")
      }
    },
    getUser: async (req, res) => {
        try {
         const users=await Users.find({})
         res.send(users)
        } catch (err) {
          console.log(err)
          res.send("something went to wrong")
        }
      },
    updateUser:async(req,res)=>{
      try{
        const users=await Users.updateOne({_id:req.query.id},{$set:req.body})
        const upadted = await Users.find({_id:req.query.id})
        res.send(upadted)
        console.log(users)
      }catch(err){
        console.log(err)
          res.send("something went to wrong")
      }
    },
    deleteUser: async(req,res) => {
      try {
        const users= await Users.deleteOne({_id:req.query.id})
        const deleted = await Users.find({_id:req.query.id})
        res.send(deleted)
        console.log(users)
      }catch(err){
        console.log(err)
          res.send("something went to wrong")
      }
    }
}
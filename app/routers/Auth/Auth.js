const express = require('express')
const router = express.Router()
const JWT = require("jsonwebtoken")

const {CovertToHash,Genrate_JWT_Token,Token_JWT_Verify} = require("../../config/jwt.config.js")
const UserModel = require('../../models/UserModel.js')

router.get('/signin',Token_JWT_Verify, (req, res) => {
    res.send(req.Email);
})
  


// router.post('/signin', (req, res) => {
//     const username = req.body.username
//     const user = {name:username}
//     res.json(Genrate_JWT_Token(user))
// })

router.post('/SignUp', (req, res) => {
    const NewUser = new UserModel(req.body);
    NewUser.save().then(()=>{
        const token = Genrate_JWT_Token({Email :req.body.Email})
        res.json(token)
    }).catch(()=>{
        res.sendStatus(401);
    })

})


module.exports = router
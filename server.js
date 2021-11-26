require('dotenv').config()
const express = require('express')
// const path = require('path')
// const config = require('config')
// const sequelize = require('./utils/config/db.config')
const app = express()

// sequelize.sync({force:true}).then(()=>{
//     console.log('connecter')
// })
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.'))
//     })
// }
app.get('/serve',(req,res)=>{
    res.json({
        message:"moussa"
    })
})
const PORT = process.env.PORT

app.listen(PORT,()=>console.log(`connecté avec succes sur ${PORT}`))
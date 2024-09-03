const express = require("express")
const app = express()
const connectDB = require("./config/db")
const cors = require("cors")
const usersRouter = require("../server/routes/users")
const postsRouter = require("../server/routes/post")


connectDB()
app.use(cors())
app.use(express.json())
app.use("/users", usersRouter)
app.use("/posts", postsRouter)


app.get("/", (req,res)=>{
    res.send("Api Working")
})

app.listen(process.env.PORT || 5000,()=>{
    console.log("Server working")
})
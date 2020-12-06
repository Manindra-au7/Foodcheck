import express from "express"
import ejs from "ejs"

const app = express()

//middlewares
app.set("view engine","ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))



app.get("/",(req,res)=>{
	res.render("index")
})

app.post("/",(req,res)=>{
	const itemsList = req.body.itemsbox
	const items = itemsList.split(',')
	console.log(items[0].length)
	res.render("home",{items})
})

app.listen(3000,console.log("Server is running"))
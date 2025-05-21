import express from "express";
import path from "path"
import { fileURLToPath } from "url";
import sequelize from "./config/db.js";
import homeRouter from "./routes/home.routes.js";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;
//making path to files (views & public), hbs engine set for broswers & serving static files to browser.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "hbs")
app.set("/views", path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, "/views")))
app.use(express.static('views'));
app.use(express.static('public'));

app.use(express.json())

app.use("/ui", homeRouter);
app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.get('/bibooks', (req, res)=>{
  res.render('bibooks')
})
app.get('/bibooks/adminpage', (req, res)=>{
  res.render('pages/adminpage')
})
app.get('/bibooks/createpage', (req, res)=>{
  res.render('pages/createpage')
})
app.get('/bibooks/editpage', (req, res)=>{
  res.render('pages/editpage')
})
app.get('/bibooks/userpage', (req, res)=>{
  res.render('pages/userpage')
})
app.get('/bibooks/viewpage', (req, res)=>{
  res.render('pages/viewpage')
})

async function main() {
  await sequelize.sync({
  });

  app.listen(port, () => {
    console.log("application running!");
  });
}

main();

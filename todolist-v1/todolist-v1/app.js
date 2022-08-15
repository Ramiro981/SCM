//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
//the below code requires the date module. The code in the date.js file and attach it to date const.
const date = require(__dirname+"/date.js")
const app = express();

//the below arrays can be defined as const because items can be added to arrays using push method even if the are Const
//But you cannot assign a value to a const array using array[1]=value. This is only for javascript and change depending of
//the language.
const items = ["Buy food", "Cook food", "Eat food"];
const workItems = [];
//This line below is necessary to use ejs. All lowercase between the ''
app.set("view engine", "ejs");
//USE THIS LINE OF CODE BELOW TO SETUP bodyParser OWTHERWISE YOU WILL NOT BE ABLE TO RETRIEVE VALUES OF THE INPUT FIELDS OF FORMS
//THE WAY TO RETRIEVE THE VALUE IS through the name of the input.
app.use(express.urlencoded({
  extended: true
}));
//This line below tells express to use public as route for static folders.
app.use(express.static("public"));

app.get("/", function(req, res) {
//day will not change so it is defined as const.
const day = date.getDate();
  //It renders the page with the value that it is sent through variable kindOfDay which is the same used in the list.ejs file.
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});
app.post("/", function(req, res) {

var item = req.body.newItem;

if (req.body.list==="work")
{
  workItems.push(item);
res.redirect("/work");
}
else {
  items.push(item);
res.redirect("/");
}


  // console.log(item);

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "work",
    newListItems: workItems
  })
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});

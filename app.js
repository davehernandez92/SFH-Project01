import express from "express";
import bodyParser from "body-parser";

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));


app.get('/', function(req, res){
    res.render("index")
});

app.get('/bookTrip', function(req, res) {
    res.render("bookTrip")
})

app.post('/submit', function(req, res) {
   
    let userEmail = req.body.Email;
    let location = req.body.locations;
    let date = req.body.tripDate;
    res.render("sucess", {email: userEmail, location: location, tripDate: date});
    
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server up and running");
});
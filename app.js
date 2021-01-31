const express  = require('express');

const session  = require('express-session');

const bodyParser = require('body-parser');

const app = express();

const config = require("./config.json");


function checkHttps(req, res, next){
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
} else {
    res.redirect('https://' + req.hostname + req.url);
}
}
  app.all('*', checkHttps)
  app.use(express.static("public"));
  app.set('view engine', 'ejs')

app.get('/', function (req, res) {
res.render('index.ejs', {
  botavatar: config.botavatarlink,
  botname: config.botname,
  botdescription: config.botdescription,
  creatorname: config.creatorname,
  creatoravatarlink: config.creatoravatarlink,
  supportserverinvite: config.supportserverinvite,
  botinvitelink: config.botinvitelink,
  botlogolink: config.botlogolink,
  prefix: config.prefix,
  language: config.language
}) 
});

app.get('/features', function (req, res) {
res.render('features.ejs', {
  botavatar: config.botavatarlink,
  botname: config.botname,
  botdescription: config.botdescription,
  creatorname: config.creatorname,
  creatoravatarlink: config.creatoravatarlink,
  supportserverinvite: config.supportserverinvite,
  botinvitelink: config.botinvitelink,
  botlogolink: config.botlogolink,
  prefix: config.prefix,
  language: config.language
}) 
});

app.get('/about', function (req, res) {
res.render('about.ejs', {
  botavatar: config.botavatarlink,
  botname: config.botname,
  botdescription: config.botdescription,
  creatorname: config.creatorname,
  creatoravatarlink: config.creatoravatarlink,
  supportserverinvite: config.supportserverinvite,
  botinvitelink: config.botinvitelink,
  botlogolink: config.botlogolink,
  prefix: config.prefix,
  language: config.language
}) 
});

app.get('/commands', function (req, res) {
res.render('commands.ejs', {
  botavatar: config.botavatarlink,
  botname: config.botname,
  botdescription: config.botdescription,
  creatorname: config.creatorname,
  creatoravatarlink: config.creatoravatarlink,
  supportserverinvite: config.supportserverinvite,
  botinvitelink: config.botinvitelink,
  botlogolink: config.botlogolink,
  prefix: config.prefix,
  language: config.language
}) 
});

 app.get("/style.css", (request, response) => {
   response.sendFile(__dirname + "/style.css");
});
 app.get("/css/bootstrap.min.css", (request, response) => {
   response.sendFile(__dirname + "/css/bootstrap.min.css");
});
 app.get("/css/now-ui-kit.css", (request, response) => {
   response.sendFile(__dirname + "/css/now-ui-kit.css");
});

app.listen(3000, function (err) {
   console.log("Listening on: 3000");
})

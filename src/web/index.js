var express = require('express');
var app = express();

//this will set up current folder as the one where index.html exists
app.use(express.static('public/'));

app.listen(3000, function () {
  console.log('[Express] Shout.Web started on 3000');
});
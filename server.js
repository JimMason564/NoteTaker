const express = require('express');
const path = require('path');
const fs = require('fs');

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const app = express();
const PORT = process.env.PORT || 3001;

require('./paths')

app.listen(PORT,function(){
    console.log("App listening on PORT: " + PORT)
})

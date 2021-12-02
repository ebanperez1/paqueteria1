const express = require('express');
const path = require('path');
const http = require('htttp');

const app = express();
app.set('views',path.join(__dirname,'views'));
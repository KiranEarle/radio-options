// import express from 'express'
// import html from './template'
// import path from 'path'

const express = require('express')
const path = require('path')
const html = require('./template')

const app = express()


const DIST_DIR = path.join(__dirname, "../../assets"),
    PORT = 3000;

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get("/*", (req, res) => res.send(html));

app.listen(PORT, () => console.log('Example app listening on port 3000!'));
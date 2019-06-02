const fetch = require("node-fetch"); //be able to  pull from the website 
const cheerio = require("cheerio");
const db = require("./db");


const getData = async() =>{
const url = "https://www.jeopardy.com/contestant-zone/james-holzhauer-tracker"; // load in the website

const response = await fetch(url); //get the data from the url
const body = await response.text(); // get the body of the html

const $ = cheerio.load(body);

var numGames = $(".field--name-field-games-won .field__item").text();
var totalMoney = $(".field--name-field-total-money-earned .field__item").text();
var currentDate = $(".field--name-field-as-of .field__item").text();

console.log(currentDate)
const jamesData = { 
	numGames,
	totalMoney,
	currentDate
}

const gamesWon = db.collection("James Info").doc();
gamesWon.set(jamesData);

};

getData();
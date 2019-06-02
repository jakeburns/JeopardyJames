const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
	apiKey: 'AIzaSyBUGKXNXbB6nqCa9LLrxPtFiKZcjv0ZAJc',
	authDomain: 'jeopardy-james.firebaseapp.com',
	databaseURL: "https://jeopardy-james.firebaseio.com",
	projectId: 'jeopardy-james'
});

const db = firebase.firestore();

db.settings({

});

module.exports = db;
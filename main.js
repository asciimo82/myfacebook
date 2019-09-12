var userList = [
	{
		userName : "John",
		password : "1234"
	},
	{
		userName : "Bob",
		password : "4444"
	},
	{
		userName : "Mike",
		password : "3333"
	},
];
var newsFeedList = [
	{
		creator : "Sally",
		news: "Hi, it\'s a hurrican in Boston!"
	},
	{
		creator : "Ingrid",
		news: "New little animals were born is the UK!"
	},
];

function isValidUser(userName, password){
	for (var i = 0; i < userList.length; i++) {
		if (userList[i].userName === userName 
			&& userList[i].password === password){
			return true;
		}
	}
	return false;

};

function signIn(userName, password){
 if (isValidUser(userName, password)){
 	console.log(userName + " " + password);
 	console.log(newsFeedList);
 }
 else {
 	console.log(userName + " " + password);
	console.log("Wrong username or password");
 }
}

var userName = prompt("What\'s your name?");
var password = prompt("What\'s yout password?");

signIn(userName, password);
angular.module('scotchTodo', ['todoController', 'todoService']);

var messages = null;
var failedTestsCount = 0;

function getTestsCountFromMessage()
{
	return document.querySelectorAll("span.mojaClassa");
}
function setFailedTests()
{
		messages = getTestsCountFromMessage();
	var elements = document.querySelectorAll("span.label.label-danger");
	for (var i = 0 ; i< elements.length; i++)
	{
		if (messages[i].innerHTML.match(/\d+/g)[0] != 0)
		{	
			elements[i].innerHTML = messages[i].innerHTML.match(/\d+/g)[0];
		}	
	}
}

function setPassedTests()
{
		messages = getTestsCountFromMessage();

	var elements = document.querySelectorAll("span.label.label-success");
	for (var i = 0 ; i< elements.length; i++)
	{
	elements[i].innerHTML = messages[i].innerHTML.match(/\d+/g)[1] - messages[i].innerHTML.match(/\d+/g)[0];
	}
}

function countFailedTests()
{
	var elements = document.querySelectorAll("span.label.label-danger");
	for (var i = 0 ; i< elements.length; i++)
	{
			failedTestsCount += parseInt(messages[i].innerHTML.match(/\d+/g)[0]);
	}
	document.getElementById("failedTestsNumber").innerHTML = "Failed Tests: " + failedTestsCount;
	failedTestsCount = 0;
}

function populateTestResults()
{
	setFailedTests();
	setPassedTests();
//	countFailedTests();
}
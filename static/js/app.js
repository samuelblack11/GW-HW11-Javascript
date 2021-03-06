// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
var table_element = d3.select("table");

 // Step 5: Use d3 to update each cell's text with
 // UFO sighting values (weekday, date, high, low)
 data.forEach(function(UFO) {
   //console.log(UFO);
   var row = tbody.append("tr");
   Object.entries(UFO).forEach(function([key, value]) {
    // console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = tbody.append("td");
     cell.text(value);
   });
 });


// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() 


{

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateElement = d3.select("#datetime");
  var cityElement = d3.select("#city");
  var stateElement = d3.select("#state");
  var countryElement = d3.select("#country");
  var shape_aElement = d3.select("#shape_a");
  var durationElement = d3.select("#durationMinutes");


    // Get the value property of the input element
  var inputDate = dateElement.property("value");
  var inputCity = cityElement.property("value");
  var inputState = stateElement.property("value");
  var inputCountry = countryElement.property("value");
  var inputshape_a = shape_aElement.property("value");
  var inputDuration = durationElement.property("value");



sighting_array = ["sighting.datetime","sighting.city","sighting.state","sighting.country","sighting.shape_a","sighting.durationMinutes" ]
input_array = [inputDate, inputCity, inputState, inputCountry, inputshape_a, inputDuration]

not_null_array = []
array_2 = []

function ifFalsy(val){

    if(val!== null){
    not_null_array.push(val)
      }
  }
//console.log(not_null_array)

input_array.forEach(ifFalsy);

//console.log(sighting_array[0])


var obj = {}
for (i=0; i <sighting_array.length; i++){
  //console.log(sighting_array[i]);
  //console.log(not_null_array[i]);
  if(not_null_array[i] !== ""){
  //console.log(not_null_array[i]);
  obj[sighting_array[i]]=not_null_array[i]
  //obj[not_null_array[i]]=sighting_array[i]

  }
  else {continue;}
}

//console.log(obj)
//console.log(obj["sighting.city"])

const keys = Object.keys(obj)

const values = Object.values(obj)
//console.log(values)

//console.log(values[0])


function theFUNNEL(){


console.log(keys.length)

// THIS IS KEY!!!!! The if statements will just undo each other if you use tableData.filter. This way it funnels over every attribute and overwrites filteredData
var filteredData = tableData

if (keys.includes("sighting.datetime")){
  //console.log(obj["sighting.datetime"])
  var filteredData = filteredData.filter(sighting => (sighting.datetime == obj["sighting.datetime"]))
}

if (keys.includes("sighting.city")){
var filteredData = filteredData.filter(sighting => (sighting.city == obj["sighting.city"]))
}

if (keys.includes("sighting.state")){
var filteredData = filteredData.filter(sighting => (sighting.state == obj["sighting.state"]))
}

if (keys.includes("sighting.country")){
var filteredData = filteredData.filter(sighting => (sighting.country == obj["sighting.country"]))
}

if (keys.includes("sighting.shape_a")){
var filteredData = filteredData.filter(sighting => (sighting.shape_a == obj["sighting.shape_a"]))
}

if (keys.includes("sighting.durationMinutes")){
  //console.log(obj["sighting.durationMinutes"])
    var filteredData = filteredData.filter(sighting => (sighting.durationMinutes == obj["sighting.durationMinutes"]))
}

console.log(filteredData)

//var table_div = d3.select("tbody")
//var tale_div = filteredData

 // CLEAR TABLE CONTENTS BEFORE APPENDING FILTERED DATA
data.forEach(function(UFO) {
  //console.log(UFO);
  var row = tbody.remove("tr");
//for (i = 1; i <data.length; i++){
//document.getElementById("ufo-table").deleteRow(i)
});


table_element.append("tbody")
var tbody_2 = d3.select("tbody");


 // Step 5: Use d3 to update each cell's text with
 // UFO sighting values (weekday, date, high, low)

 filteredData.forEach(function(UFO) {
   //console.log(UFO);
   var row = tbody_2.append("tr");
   Object.entries(UFO).forEach(function([key, value]) {
    // console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = tbody_2.append("td");
     cell.text(value);
   });
 });


}


theFUNNEL()

// onchange update <table id="ufo-table" to filteredData

});


var show_all = d3.select("#show-all");

show_all.on("click", function() 
{

 });




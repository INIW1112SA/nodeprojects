var northEurope = ['United Kingdom', 'Denmark', 'Sweden', 'Norway'];
 var centralEurope = ['France', 'Belgium', 'Germany', 'Switzerland', 'Netherlands'];
 var southEurope = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia', 'Albania'];


const fs = require('fs');
let input = fs.createReadStream('../inputdata/FoodFacts.csv','utf-8');
let r1=require('readline').createInterface({
	input:input,
	terminal : false
});
r1.on('line',function(line)
{
   lines = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
   var heading = lines[0].split(",");
   var countryIndex = heading.indexOf('countries_en');
   var fatIndex = heading.indexOf('fat_100g');
   var proteinIndex = heading.indexOf('proteins_100g');
   var carboIdex = heading.indexOf('carbohydrates_100g');
   var northEurope = ['United Kingdom', 'Denmark', 'Sweden','Norway'];
   var centralEurope  = ['France', 'Belgium', 'Germany', 'Switzerland','Netherlands'];
   var southEurope = ['Portugal', 'Greece', 'Italy', 'Spain', 'Croatia','Albania'];
   var northEurope_Fat = [0,0,0,0];
   var centralEurope_Fat = [0,0,0,0,0];
   var southEurope_Fat = [0,0,0,0,0,0];
   var northEurope_protein = [0,0,0,0];
   var centralEurope_protein = [0,0,0,0,0];
   var southEurope_protein = [0,0,0,0,0,0];
   var northEurope_carbo = [0,0,0,0];
   var centralEurope_carbo = [0,0,0,0,0];
   var southEurope_carbo = [0,0,0,0,0,0];
   

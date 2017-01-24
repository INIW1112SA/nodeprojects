//foodfacts json creation code
var csv = ../inputdata/FoodFacts.csv;
var json = sugarsalt3.json;
var check=function(csv,json){
	if(!s){
		throw Error('Not a number');
	}
	if(typeof s=="number"){
		throw Error('Not a number');
	}
const fs = require('fs');
let input = fs.createReadStream('csv');
let r1=require('readline').createInterface({
	input:input,
	terminal : false
});
let lines = [];
let head;
let array = [];

let countries = ['Netherlands','Canada','UK/USA','Australia','France','Germany','Spain','South Africa'];
let sugar = [0,0,0,0,0,0,0,0];
let salt = [0,0,0,0,0,0,0,0];
function indexFind(cindex)
{ 
	let index = -1;
	if(cindex)
	{
		for(let i = 0; i < countries.length; i = i +1)
		{
			 if(cindex.includes(countries[i]))
			 {
			 	index = i;
			 }

		}
	}
	return index;


}
r1.on('line',function(line)
{
   lines = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
   let valueIndex = indexFind(lines[33]);//countries index
   if(valueIndex !==-1)
   {
   	sugar[valueIndex]  = sugar[valueIndex] + Number(lines[102]);
   	salt[valueIndex] = salt[valueIndex] + Number(lines[116]);
   }
   // let countryIndex = lines.indexOf('countries_en');
   // let saltIndex = lines.indexOf('salt_100g');
   // let SugarIndex = lines.indexOf('sugars_100g');
});

r1.on('close',function(){
	
for( let i=0; i < countries.length; i=i+1){
let obj = {};
 obj.country = countries[i];
 obj.sugar = sugar[i];
 obj.salt = salt[i]; 
 array.push(obj);}
 fs.writeFile("json",JSON.stringify(array));
});
return "JSON written successfully";
}
module.exports=check;
var student ={
    name:"krishna",
    id:101,
    city:"hyderabad"
//  key : value 


};
console.log(student);
 var mobileproduct ={
     brandName:"Apple",
     modelName:"Iphone 14 pro max",
     price:90000,
     storage:"128gb",
     ram:"12gb",
     rating:4.7,
    //  review:"good"
 };
 console.log(mobileproduct);
//Accessing particularr property in the object
// syntax: <objectname>.<keyname>
 console.log(mobileproduct.modelName);
 console.log(mobileproduct.ram);
 //create employee object add 5 properties like id,name,des,city,emailid
// How to insert new property inside object using js code 
// syntax: <objectname>.<new property key name> =<new Value>
mobileproduct.review ="good";
console.log(mobileproduct);
var object={
    name:"rahul",
    name:101
};
console.log(object)
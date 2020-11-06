//starting button
onEvent("start", "click", function( ) {
  setScreen("screen1");
});
//database
//mask
onEvent("submit2", "click", function( ) {
  var name = getText("text_input2");
  var age = getText("text_input3");
  var address = getText("text_input4");
  var mobile = getText("text_input5");
  createRecord("Mask Name", {NAME:name}, function(record) {
    console.log("Record Created");
  });
  createRecord("Mask Age", {AGE:age}, function(record) {
    console.log("Record Created");
  });
  createRecord("Mask Address", {Address:address}, function(record) {
    console.log("Record Created");
  });
  createRecord("Mask Mobile", {MOBILE:mobile}, function(record) {
    console.log("Record Created");
  });
  setScreen("screen6");
});
//healthcare
onEvent("Submit1", "click", function( ) {
  var name = getText("nameInput1");
  var age = getText("ageInput1");
  var address = getText("addressInput1");
  var mobile = getText("mobileInput1");
  createRecord("Health Name", {NAME:name}, function(record) {
    console.log("Record Created");
  });
  createRecord("Health Age", {AGE:age}, function(record) {
    console.log("Record Created");
  });
  createRecord("Health Address", {Address:address}, function(record) {
    console.log("Record Created");
  });
  createRecord("Health Mobile", {MOBILE:mobile}, function(record) {
    console.log("Record Created");
  });
  setScreen("screen6");
});

//Basic medicine
onEvent("submit3", "click", function( ) {
  var name = getText("nameInput11");
  var age = getText("ageInput12");
  var address = getText("addressInput13");
  var mobile = getText("mobileInput14");
  createRecord("Baisc Medicine Name", {NAME:name}, function(record) {
    console.log("Record Created");
  });
  createRecord("Baisc Medicine Age", {AGE:age}, function(record) {
    console.log("Record Created");
  });
  createRecord("Baisc Medicine Address", {Address:address}, function(record) {
    console.log("Record Created");
  });
  createRecord("Baisc Medicine Mobile", {MOBILE:mobile}, function(record) {
    console.log("Record Created");
  });
  setScreen("screen6");
});
//Nutritional Supplement
onEvent("submit4", "click", function( ) {
  var name = getText("nameInput15");
  var age = getText("ageInput16");
  var address = getText("addressInput17");
  var mobile = getText("mobileInput18");
  createRecord("Nutritional Supplement Name", {NAME:name}, function(record) {
    console.log("Record Created");
  });
  createRecord("Nutritional Supplement Age", {AGE:age}, function(record) {
    console.log("Record Created");
  });
  createRecord("Nutritional Supplement Address", {Address:address}, function(record) {
    console.log("Record Created");
  });
  createRecord("Nutritional Supplement Mobile", {MOBILE:mobile}, function(record) {
    console.log("Record Created");
  });
  setScreen("screen6");
});
//Mask
onEvent("mask2", "click", function( ) {
  setScreen("screen2");
});
//Healthcare
onEvent("health2", "click", function( ) {
  setScreen("screen3");
});
//medicine
onEvent("medicine2", "click", function( ) {
  setScreen("screen4");
});
//Malnutrition
onEvent("malnutrition2", "click", function( ) {
  setScreen("screen5");
});

//backfunction
onEvent("back1", "click", function( ) {
  setScreen("screen1")
});
onEvent("back2", "click", function( ) {
  setScreen("screen1")
});
onEvent("back3", "click", function( ) {
  setScreen("screen1")
});
onEvent("back4", "click", function( ) {
  setScreen("screen1")
});

onEvent("Home1", "click", function(event) {
  console.log("GO TO HOME");
  setScreen("screen0");
});




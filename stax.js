if (Meteor.isClient) {

  Template.info.helpers({
  
  });

  Template.info.events({
    "submit form": function(event) {
      event.preventDefault();
      console.log("Form submitted");
      var company = event.target.company.value;
      console.log(company); 
      var city = event.target.city.value;
      console.log(city);
      var salary = document.getElementById("sal"); 
      console.log(salary);
      var boolK = event.target.boolK.value;
      if(boolK == "No") 
        var kZero = 0;
      else
        var kZero = event.target.matched.value;
      console.log(kZero);
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

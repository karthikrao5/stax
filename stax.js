if (Meteor.isClient) {

  Template.info.helpers({
  
  });

  Template.info.events({
    "submit form": function(event) {
      event.preventDefault();
      console.log("Form submitted");
      var company = event.target.company.value;
      var salary = event.target.salary.value;
      var city = document.getElementById('cities').value;
      var boolK = document.getElementById('401k').value;
      if(boolK == No) 
        var kZero = 0;
      else
        var kZero = event.target.matched.value;
      }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

if (Meteor.isClient) {
  $( document ).ready(function() {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myLineChart").getContext("2d");
    var myLineChart = new Chart(ctx).Line(data,null);

    Template.info.events({
        "submit form": function(event) {
            event.preventDefault();
            console.log("Form submitted");
            var company = event.target.company.value;
            console.log(company);
            var city = event.target.city.value;
            console.log(city);
            var salary = event.target.sal.value;
            console.log(salary);
            var boolK = event.target.boolK.value;
            if(boolK == "No")
                var kZero = 0;
            else
            var kZero = event.target.matched.value;
            console.log(kZero);
        }
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

var data = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,100,90,81,56,55,40]
    },
    {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(151,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,27,100]
    }
  ]
}

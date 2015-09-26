if (Meteor.isClient) {

  // counter starts at 0
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myLineChart").getContext("2d");
    // var myNewChart = new Chart(ctx).Line(data,null);
    var data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: "My Second dataset",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              pointColor: "rgba(151,187,205,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [28, 48, 40, 19, 86, 27, 90]
          }]}

    var lineChart = new Chart(ctx).Line(data, null);


  // if (Meteor.isServer) {
  //   Meteor.startup(function () {
  //   // code to run on server at startup
  //   });
  // }


  // new Chart(ctx).Line(data, {bezierCurve: false);

  Template.myLineChart.rendered = function() {

  }
};



if (Meteor.isServer) {
  Meteor.startup(function () {

    // drawChart();
    // code to run on server at startup
  });
}

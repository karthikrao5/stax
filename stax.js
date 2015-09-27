
if (Meteor.isClient) {
  var fedTax = 0.3;
  var calTax = 0.123;
  var washTax = 0;
  var illiTax = 0.05;
  var nyTax = 0.0665;
  var gaTax = 0.06;
  var txTax = 0;
  var maTax = .0515;

  var wealth = [];
  var rent;
  var stateTax;
  var transportationCostMonthly;
  var foodCostMonthly;
  var utilityCostMonthly;
  var healthInsuranceMonthly;


  Template.info.helpers({
//    "dataStorage": function(){
      // vars to change: stateTax, foodCostMonthly, utility cost Monthly, healthInsuranceMonthly


});

  Template.info.events({
    "submit form": function(event) {
      event.preventDefault();
      console.log("Form submitted");

      company = event.target.company.value;
      console.log(company);

      city = event.target.city.value;
      console.log(city);

      salary = event.target.sal.value;
      console.log(salary);

      stock = event.target.stock.value;

      boolK = event.target.boolK.value;

      if(boolK == "No") {
        k = 0;
      } else {
        k = event.target.matched.value;
      }

      console.log(k);

      boolT = event.target.transportation.value;
      if(boolT == "No") {
        transportationCostMonthly = 500;
      } else {
        transportationCostMonthly = 200;
      }

      boolH = event.target.hi.value;
      if(boolH == "No") {
        healthFactor = 1;
      } else {
        healthFactor = 1 - (event.target.health.value)/100;
      }

      console.log("started");

      if(city == "Seattle") {
        stateTax = washTax;
        rent = 1615
        foodCostMonthly = 372; // source: numbeo.com
        utilityCostMonthly = 157;
        healthInsuranceMonthly = 228;

      } else if (city == "San Francisco") {
        stateTax = calTax;
        rent = 2965
        foodCostMonthly = 518; // source: numbeo.com
        utilityCostMonthly = .2 * rent;
        healthInsuranceMonthly = 331;

      } else if (city == "Chicago") {
        stateTax = illiTax;
        rent = 1717
        foodCostMonthly = 372; // source: numbeo.com
        utilityCostMonthly = 198;
        healthInsuranceMonthly = 244;

      } else if (city == "Dallas") {
        stateTax = txTax;
        rent = 1263
        foodCostMonthly = 284; // source: numbeo.com
        utilityCostMonthly = 174;
        healthInsuranceMonthly = 239;

      } else if (city == "New York") {
        stateTax = nyTax;
        rent = 3245
        foodCostMonthly = 392; // source: numbeo.com
        utilityCostMonthly = .2 * rent;
        healthInsuranceMonthly = 290;

      } else if (city == "Boston") {
        stateTax = maTax;
        rent = 2224
        foodCostMonthly = 361; // source: numbeo.com
        utilityCostMonthly = .2 * rent;
        healthInsuranceMonthly = 345;

      } else if (city == "Atlanta") {
        console.log("atlanta entered");
        console.log(gaTax + "gatech tax");
        stateTax = gaTax;
        rent = 1223
        foodCostMonthly = 312; // source: numbeo.com
        utilityCostMonthly = 244;
        healthInsuranceMonthly = 253;
      }

      boolBuy = event.target.house.value;
      if(boolBuy == "Buying") {
        rent = 0;
      }

      for (t = 1; t < 11; t++) {
         y = ((salary*(1 - (k/100))) * (1 - (fedTax + stateTax)))*t + parseFloat(stock) + (salary* (k/100) * (1+k/100) * Math.pow((1+k/100), t))
            - ((12 * rent * t)) - (12 * transportationCostMonthly*t) - (12 * foodCostMonthly * t) - (12 * utilityCostMonthly * t) - (12 * healthInsuranceMonthly * t * healthFactor);
        y = Math.round(y * 100) / 100;
        stock = stock * 1.07;
        console.log(y + "--------y");
        wealth[t] = y;
        console.log(wealth);
      }
    }
});


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

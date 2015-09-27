if (Meteor.isClient) {
  var fedTax = 0.3;
  var calTax = 0.123;
  var washTax = 0;
  var illiTax = 0.05;
  var nyTax = 0.0665;
  var gaTax = 0.06;
  var txTax = 0;
  var maTax = .0515;

  var stateTax;
  var transportationCostMonthly;
  var foodCostMonthly;
  var utilityCostMonthly;
  var healthInsuranceMonthly;


  Template.info.helpers({
    "dataStorage": function(){
      // vars to change: stateTax, foodCostMonthly, utility cost Monthly, healthInsuranceMonthly
      if(city.equals("Seattle")) {
        stateTax = washTax;
        rent = 1615
        foodCostMonthly = 372.11; // source: numbeo.com
        utilityCostMonthly = 157;
        healthInsuranceMonthly = 228;

      } else if (city.equals("San Francisco")) {
        stateTax = calTax;
        rent = 2965
        foodCostMonthly = 518.43; // source: numbeo.com
        utilityCostMonthly = .2 * rent;
        healthInsuranceMonthly = 331;

      } else if (city.equals("Chicago")) {
        stateTax = illiTax;
        rent = 1717
        foodCostMonthly = 372.11; // source: numbeo.com
        utilityCostMonthly = 198;
        healthInsuranceMonthly = 244;

      } else if (city.equals("Dallas")) {
        stateTax = txTax;
        rent = 1263
        foodCostMonthly = 284.52; // source: numbeo.com
        utilityCostMonthly = 174;
        healthInsuranceMonthly = 239;

      } else if (city.equals("New York")) {
        stateTax = nyTax;
        rent = 3245
        foodCostMonthly = 392.02; // source: numbeo.com
        utilityCostMonthly = .2 * rent;
        healthInsuranceMonthly = 290;

      } else if (city.equals("Boston")) {
        stateTax = maTax;
        rent = 2224
        foodCostMonthly = 361.14; // source: numbeo.com
        utilityCostMonthly = .2 * rent;
        healthInsuranceMonthly = 345;
      } else if (city.equals("Atlana")) {
        stateTax = gaTax;
        rent = 1223
        foodCostMonthly = 312.62; // source: numbeo.com
        utilityCostMonthly = .2 * rent;
        healthInsuranceMonthly = 253;
      }
      for (t = 1; t < 11; t++) {
        //(salary(1-k)*(1-(fed++)));
      }
  }
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
      boolK = event.target.boolK.value;
      if(boolK == "No")
        k = 0;
      else
        k = event.target.matched.value;
      console.log(kZero);
      }

  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

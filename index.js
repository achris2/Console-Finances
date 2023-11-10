var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];

// Result 

// Financial Analysis 
// ----------------
// Total Months: 86
// Total: $38382578
// Average Change: -2315.12
// Greatest Increase in Profits/Losses: Feb-2012 ($1926159)
// Greatest Decrease in Profits/Losses: Sep-2013 ($-2196167)




// initialise vars for totalMonths, netChangeProfits, averageChangeInProfits
// var greatestProfit = ['date', 0] (['feb-2012', 12321321])]

// to get total change between months 
// loop through the finances array 
// var for change between the current month and past month 
// compare finances [i][i] to finances [i-i][i]
// netChange = netChange + difference 


// The total number of months included in the dataset 

var netChangeProfits = 0; 
var averageChangeInProfits = 0; 
var greatestMonthlyDifference = ['',0];
var greatestMonthlyDecrease = ['',0];
var currentMonth = ['',0];


// for loop that goes from i = 1 to length of finances array 
for (var i = 1; i < finances.length; i++) {
  monthlyDifference = finances[i][1] - finances[i-1][1];
  var currentMonth = finances [i][0]
  netChangeProfits = netChangeProfits + monthlyDifference;
  if (monthlyDifference >= greatestMonthlyDifference[1]) {
    greatestMonthlyDifference = [currentMonth, monthlyDifference];    
  }
  else if (monthlyDifference <= greatestMonthlyDecrease[1]) {
    greatestMonthlyDecrease = [currentMonth, monthlyDifference];    
  }

  }


// The total number of months included in the dataset 
totalMonths = finances.length; 
console.log ('Total Months: ' + totalMonths);
//
console.log('Greatest Increase in Profits/Losses:'+ greatestMonthlyDifference[0] + ' ($ ' + greatestMonthlyDifference[1] + ')' );
console.log('Greatest Decrease in Profits/Losses:'+ greatestMonthlyDecrease[0] + ' ($ ' + greatestMonthlyDecrease[1] + ')' );


// initalize vars for 
// totalMonths,
//  netChangeProfits = 0, 
// averageChangeInProfits, 
// var greatestProfit = ['date', 0] (['feb-2012', 123234])
// var greatestLoss = ['date', 0]
// to get total change between months
// loop through the finaces array at index 1, instead of 0, 
// current date = finances[i][0]
// var difference for change between the current month and past month
// difference = finaces[i][1] - finaces[i -1][1]
// netChange = netChange + difference
// netChangeProfits / finances.length - 1
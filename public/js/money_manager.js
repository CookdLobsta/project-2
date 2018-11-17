// var NameData = require("../js/splash");

var total = 0;
var saveTotal = 0;
var userID = 0;

//onload get user balance, put on page
$(document).on("click", ".money", function(event) {
  // alert("hit");
  var money = $(this).attr("data-value");
  console.log(money);
  (total += parseFloat(money)).toFixed(2);
  console.log(total);

  $(".newTotal").html(total.toFixed(2));

  var audio = new Audio("../images/chaching.mp3");
  audio.play();

  var userName = {
    user_balance: total
  };

  $.ajax("/money_manager_post", {
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify(userName)
  }).then(function(res) {
    console.log("added money", res);
    window.location = res;
  });
});

// Send the POST request.
// $.ajax("/money_manager_post", {
// 	type: "POST",
// 	contentType: 'application/json',
// 	data: JSON.stringify(userName)
// }).then(
// 	function (res) {
// 		console.log("added money", res);
// 		window.location = res;
// 	}
// );


// post user_balance to database

$(document).on("click", ".submitTotal", function (event) {
	var userTotal = parseFloat($(".newTotal").text());
	// console.log("total "+ userTotal);
	// console.log(typeof(userTotal));
	// var userMoney = {
	// 	user_balance: userTotal 
	// } 

	// $.ajax("/money_manager_money", {
	// 	type: "POST",
	// 	contentType: 'application/json',
	// 	data: JSON.stringify(userMoney)
	// }).then(
	// 	function (res) {
	// 		console.log("added money", res);
	// 		window.location = res;
	// 	}
	// );

	var userMoney = {
		user_balance: userTotal,
	}

	$.ajax({
		method: "PUT",
		url: "/money_manager_put",
		contentType: "application/json",
		data: JSON.stringify(userMoney)
	  }).then(
			function (res) {
				console.log("added money to john", res);
				window.location = res;
			})
})

//$(document).on("click", ".submitTotal", function(event) {
//  var userTotal = parseFloat($(".newTotal").text());
  // console.log("total "+ userTotal);
  // console.log(typeof(userTotal));
//  var userMoney = {
//    user_balance: userTotal
//  };

 // $.ajax("/money_manager_money", {
 //   type: "POST",
 //   contentType: "application/json",
 //   data: JSON.stringify(userMoney)
 // }).then(function(res) {
 //   console.log("added money", res);
 //   window.location = res;
 // });
//});


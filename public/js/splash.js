$(function() {

  $(document).on("click", "#submit", function(event) {
    event.preventDefault();
    console.log("hit");
    var name = $("#username")
      .val()
      .trim();
    console.log(name);

    var userName = {
      user_name: name
		};

    // Send the POST request.
    $.ajax("/money_manager_post", {
			type: "POST",
      contentType: "application/json",
      data: JSON.stringify(userName)
    }).then(function(res) {
			console.log("created new user", res);
      window.location = res;
		});
	});
})
	
// $("#startingForm").submit(function(event){
// 	event.PreventDefault();

// 	var userName = req.body.userName;
// 	var addFunds = req.body.addFunds;
// 	var type = req.body.type;

// 	models.Table.build({
// 		user_name: userName,
// 		user_balance: addFunds,
// 		type: type
// 	}).save()
// 	.then(anotherTask=>{
// 		console.log("added to database for next time");
// 	}).catch(error => {
// 		console.log("Ouch! That hurts");
// 		console.log(error);
// 		//handle more errors? 
// 	})
// });
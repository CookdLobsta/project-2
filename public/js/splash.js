var idNumber = 0

// $(document).ready(function () {
// $("#myBtn").click(function () {
// 	$("#myModal").modal();
// });
$(function () {
	$(document).on("click", "#submit", function (event) {
		event.preventDefault();
		var name = $("#username").val().trim();
		console.log(name);
		idNumber++;
		console.log("idNumber ", idNumber);
		var userName = {
			user_name: name
		};

		// Send the POST request.
		$.ajax("/money_manager_post", {
			type: "POST",
			contentType: 'application/json',
			data: JSON.stringify(userName)
		}).then(
			function (res) {
				console.log("created new user", res);
				window.location = res;
			}
		);
	});
})

modules.export = nameData;
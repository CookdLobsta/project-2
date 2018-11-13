



$(document).ready(function () {
	// $("#myBtn").click(function () {
	// 	$("#myModal").modal();
	// });

	$("#submit").on("click", function(event) {
		event.preventDefault();
		var name = $("#username").val().trim();
		console.log(name);
	})
});
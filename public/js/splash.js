<<<<<<< HEAD
=======

			 
>>>>>>> master
$(document).ready(function () {
	// $("#myBtn").click(function () {
		// $("#myModal").modal();
		
	// });

	$("#submit").on("click", function(event) {
		event.preventDefault();
		var name = $("#username").val().trim();
		console.log(name);
		
		$.post("/api/name", {user_name: name}, function(res){
			console.log(res);
		})
	})
});

modules.export = nameData;
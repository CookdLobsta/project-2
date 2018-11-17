$(document).on("click","#submitToy", function(event){
	event.preventDefault();
	console.log("Retrieving Data...");

	
	function walmartItem(search) {
		var search = $("#searchInput").val().trim();
		console.log(search);
		var walmartRequest = "http://api.walmartlabs.com/v1/search?query="+search+"&format=json&apiKey=g5eyb7eyu32n6atjb8k9eq9x";
		$.ajax({
			type: 'GET',
			url: walmartRequest
		})
		.then(function (data) {
			console.log('data', data);
			// walmartRequest, function (error, response, json) {
			if(!error && response.statusCode === 200) {
				var itemInfo = JSON.parse(json);
				console.log();
				let output = {
					"image":itemInfo.items.mediumImage,
					"upc":itemInfo.items.upc,
					"sale price":itemInfo.items.salePrice,
					"name":itemInfo.items.name
				}
				
			} else {
				console.log("You broke it!: " + error);
				return;
			}
		})
	};
	walmartItem();
});
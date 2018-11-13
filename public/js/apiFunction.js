$(document).on("click","#submitToy", function(event){
	var count;
		event.preventDefault();
		console.log("test");

		$("#walmartDiv").empty()
		search = $(".searchInput").val()
		count = 1
		walmartCall(search, count)
	});
		
	function walmartCall() {
		$.ajax({
			url: `http://api.walmartlabs.com/v1/search?`,
			method: "GET",
			data: {
				"query": search,
				"format": "json",
				"apiKey": "p3dsfmf2vhm67rj2ed4xhhaa",
				"start": count,
				"numItems": 1
			}
		}).then(function (response) {
			console.log(response);
			for (i = 0; i < response.items.length; i++) {
				var card = $("<div>")
				card.attr({
					class: "card d-inline-block m-2",
					style: "width: 100%, margin: 0; margin-top: 0; margin-bottom: 0;"
				});
			}; // end for loop

				var image = $("<img>")
				image.attr({
					src: response.items[i].mediumImage,
					class: "card-img-top"
				});
					var cardBody = $("<div>")
					cardBody.attr("class", "card-body")

					var name = $("<h5>")
					name.attr("class", "card-title")
					name.append(response.items[i].name)
					cardBody.append(name)

					msrp = "$" + response.items[i].msrp
					walmartPrice = response.items[i].salePrice;
					walmartApiReturned = true;
					if (msrp === "$undefined")
						msrp = ""

					var name = $("<h5>")
					name.attr("class", "card-title")
					name.append("$" + response.items[i].salePrice + " <s>" + msrp + "</s>")
					cardBody.append(name)
					
					var name = $("<h5>")
					name.attr("class", "card-title")
					name.append("UPC: " + response.items[i].upc)
					cardBody.append(name)
					card.append(image)
					card.append(cardBody)
					
					$("#walmartDiv").append(card)
					
		}); // end .then function










	// $('submit').on('click', event =>{
	// 	event.preventDefault();
	// 	var goalSearch = $('#searchInput').val();
	
		
	// 	function walmartDisplay() {
			
	// 		var queryURL = "http://api.walmartlabs.com/v1/search?apiKey={yjrkwv9phtddy72qkfxg4v33}&lsPublisherId={romanghans}&query=" + goalSearch + "&categoryId=3944&sort=price&order=asc";
	// 		//linking our search bar "searchInput" into our queryURL 
			
	// 		$.ajax({
	// 			url: queryURL,
	// 			method: "GET"
	// 		}).then(function (response) {
				
	// 			var walmartDiv = $("<div class='walmartDiv'");
				
	// 			var walmartPrice = response.salesPrice;
				
	// 			var walmartPriceText = $("<p>").text(walmartPrice);
				
	// 			walmartDiv.append(walmartPriceText);
	// 		});
	// 	};
	// 	walmartDisplay();
	// });
$(document).on("click", "#submitToy", function(event) {
  event.preventDefault();
  console.log("Retrieving Data...");

  function walmartItem(search) {
    var search = $("#searchInput")
      .val()
      .trim();
    var walmartRequest =
      "http://api.walmartlabs.com/v1/search?query=" +
      search +
      "&format=json&apiKey=g5eyb7eyu32n6atjb8k9eq9x";

    $.ajax({
      url: walmartRequest,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      //response location on page
      var walmartDiv = $(".result");
      //readable format
      var itemInfo = response.items[0];

      //response item image
      var goalImage = itemInfo.mediumImage;
      //put that image in element
      var walImage = $(".resultImage").attr("src", goalImage);
      //put same image in different element
      var topImage = $(".topImage").attr("src", goalImage);
      //display on page
      walmartDiv.append(walImage);
      //display at top of page also
      var topDiv = $(".loadingBar");
      topDiv.prepend(topImage);

      //response item name
      var goalName = itemInfo.name;
      //put that name in element
      var walName = $(".resultName").text(goalName);
      //display on page
      walmartDiv.prepend(walName);

      //response item price
      var goalPrice = itemInfo.salePrice;
      //put that price in element
      var walPrice = $(".resultPrice").text("$ " + goalPrice);
      console.log("WalMart Price: ", goalPrice);
      //display on page
      walmartDiv.append(walPrice);
      // var topPrice = $(".apiItemAmount").text("$ " + goalPrice);

      //response item upc
      var goalUpc = itemInfo.upc;
      //no need to display UPC, console.log it
      console.log(goalUpc);
			// $(".apiItemAmount").text(goalPrice);
			



			//============================== IN PROGRESS

			function remove_character(str, char_pos) 
			{
			 part1 = str.substring(0, char_pos);
			 part2 = str.substring(char_pos + 1, str.length);
			 return (part1 + part2);
			}



      // var price = $(".resultPrice").text();
			var balance = $(".user_balance").text();
			console.log("Balance: ", balance); //its failing because of $
			// remove character takes away the $ from the character length
			var yourBalance = parseInt(remove_character(balance, 0));
      var remainder = goalPrice - yourBalance;
			var percent = Math.ceil((yourBalance / goalPrice)*100);
			console.log("Percent: ", percent);
      console.log("Remainder: ", remainder);
      var thing = toString(remainder);
			// $(".difference").text("You need $" + remainder.toFixed(2) + "!");
			
			if (goalPrice <= yourBalance) {
				$(".difference").text("You have enough to purchase! With an additional $" + Math.abs(remainder).toFixed(2));
			}
			else {
				$(".difference").text("You need $" + remainder.toFixed(2) + "!");
			}
    });
  }
  walmartItem();
  //end on.click
});

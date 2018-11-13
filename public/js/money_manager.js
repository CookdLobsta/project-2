var total = 0;
		var saveTotal = 0;

		$(document).on("click", ".money", function (event) {
			alert("hit");
			var money = $(this).attr("data-value");
			console.log(money);
			(total += parseFloat(money)).toFixed(2);
			console.log(total);

			$(".user_balance").html(total.toFixed(2));
		})

		$(document).on("click", ".clear", function (event) {
			total = 0
			$(".user_balance").html(total);
		})

		$(document).on("click", ".save", function (event) {
			if (total === 0) {
				alert("You don't have any money to save.  Bummer!")
				return;
			}
			else {
				save = prompt("how much would you like to save?");
				if (save > total) {
					alert("you can't save more money than you have in your account.  Nice try!")
					return;
				}
				else {
					total -= save;
					(saveTotal += parseFloat(save)).toFixed(2);
					console.log("total ", total);
					console.log("saveTotal ", saveTotal);
					$(".user_balance").html(total).toFixed(2);
					$(".user_savings").html(saveTotal).toFixed(2);
				}
			}
		})
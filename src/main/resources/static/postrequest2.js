$(document).ready(
		
		function() {
			// SUBMIT FORM
			$("#peliculaForm").submit(function(event) {
				// Prevent the form from submitting via the browser.
				event.preventDefault();
				var genres=[];
				$.each($("input[name='genre']:checked"), function(){            
	                genresNames.push($(this).val());
	            });
				console.log("me llamaste");
				ajaxPost(genresNames);
			});

			function ajaxPost(genresNames) {

				// PREPARE FORM DATA objeto
				var formData = {
					genres : genresNames,
					name : $("#movieName").val()
				}

				// DO POST
				$.ajax({
					type : "POST",
					contentType : "application/json",
					url : "addMovie",
					data : JSON.stringify(formData),
					dataType : 'json',
					success : function(result) {
						if (result.status == "success") {
							$("#postResultDiv").html(
									"" + result.data.name
											+ " Post Successfully! <br>"
											+ "---> Congrats !!" + "</p>");
						} else {
							$("#postResultDiv").html("<strong>Error</strong>");
						}
						console.log(result);
					},
					error : function(e) {
						alert("Error!")
						console.log("ERROR: ", e);
					}
				});

			}

		})
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script type="text/javascript">
		function formvalidation() {
			
			var email=document.getElementById('email').value;
			
			var x=/^([0]([789])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/;
			var a=/[\da-zA-Z0-9._!]@[\da-zA-Z].[A-Za-z]/;


			 if (email.trim()  == " ") {
				alert("Empty value in email");
				return false;

			
				}else{
					alert("email is not true");
					return false;
				}


		}
	</script>
</head>
<body>
	<h2>Enter email to validate</h2>
	<form>
		
		<input type="text" name="" id="email"><br><br>

		
		<button type="button" value="validate" onclick="formvalidation()">validate</button>
	</form>
</body>
</html>
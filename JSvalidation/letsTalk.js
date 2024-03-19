function formValidation() {
	const nameCheck = document.forms["formValid"]["name"].value;
	const nameError = document.getElementById("nameError");
	const lastCheck = document.forms["formValid"]["last"].value;
	const lastError = document.getElementById("lastError");
	const emailCheck = document.forms["formValid"]["emailInput"].value;
	const emailError = document.getElementById("emailError");
	let hasError = false;

	if (nameCheck == "") {
		nameError.textContent = "שם פרטי: הינו שדה חובה";
		hasError = true;
		alert(לא);
	} else {
		nameError.textContent = "";
	}
	if (lastCheck == "") {
		lastError.textContent = "שם משפחה: הינו שדה חובה";
		hasError = true;
		alert(לא);
	} else {
		lastError.textContent = "";
	}
	if (emailCheck === "") {
		emailError.textContent = "אימייל: הינו שדה חובה";
		hasError = true;
		alert(לא);
	} else {
		emailError.textContent = "";
	}
	if (!hasError) {
		alert(עובד);
	}
}

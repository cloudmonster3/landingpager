// alert the user when pressed.
// to use these functions in code:
// <button type="button" onclick="INSERT_FUNCTION_NAME">BUTTON_NAME</button>
function button_alert(print) {
	alert(print)
}

// ask the user for an answer, then compare to correct answer
// and reply accordingly
function button_prompt(prompt, answer, response, nullresponse) {
	var question = prompt(prompt)
	if (question == answer) {
		alert(response)
	} else {
		alert(nullresponse)
	}
}
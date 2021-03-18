const eventListenerTarget = document.querySelector("main")
//select the element on the DOM
												   
eventListenerTarget.addEventListener("click", event => {
// listen for a click
	if(event.target.id === "eatery"){
	// if click occurs on details button
		const dialogElementTarget = document.querySelector("#eatery")
		// select the dialog element
		dialogElementTarget.innerHTML = `${<div>Here are some details</div>}`
		// add innerHTML to the dialog element
		dialogElementTarget.showModal()
		// show the dialog element
	}
})


let pageNumber = -1;

//Select for all of the buttons
let navButtons = document.getElementsByClassName('nav-button');
console.log(navButtons);

//Access the prayers json file that I created

let button = document.getElementById("prayer-button");
let reloader = document.getElementById("title");

// I want my explainer text to disappear after the home screen
let explainerText = document.getElementById("explainer");

// reload page when I click on title 
reloader.addEventListener("click", function() {
	reloader = location.reload();
})

button.addEventListener("click", function () {
	let inputText = document.getElementById("prayer-input").value;
	//Checking if the button works
	console.log('button was clicked');

	//Capturing the prayer that is inputted
	console.log("The prayer available is: " + inputText);

	fetch('prayers.json')
		.then(function (response) {
			return response.json();
		})

		.then(function (data) {
			//Check if its working
			console.log(data.prayers);
			let prayerArray = data.prayers;
			let randomNum = Math.floor(Math.random() * prayerArray.length);

			// Check if its working
			console.log(prayerArray.length);

			let prayerElement = document.getElementById("prayer-text");
			prayerElement.innerHTML = data.prayers[randomNum].prayer;
		})
}
)

//Attach an event listener to all of the buttons
for (let i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener('click', function (evt) {

		// Loop through all of the buttons 
		// Set the background to all buttons to white which is what they are right now
		// And then navButton to black only 
		
		explainerText.style.display = "none";
		pageNumber = i;

		for (let j = 0; j < navButtons.length; j++) {
			navButtons[j].style.backgroundColor = "white";
			navButtons[j].style = "teal";
		}
		
		// **** TO-DO I want the text color to remain white when the button is black. 
		navButtons[i].style.backgroundColor = "black";	

		// Hide all of the content
		let allContent = document.getElementsByClassName('content');
		
		for (let k = 0; k < allContent.length; k++) {
			allContent[k].style.display = "none";
		}

		//Create the specific content ID
		let contentID = "content-" + evt.target.id;

		//Show the specific content
		let contentToShow = document.getElementById(contentID);
		contentToShow.style.display = "block";

		// The below code was used to hide my initial p5 sketch when any of the buttons were clicked. Now that I have a diff sketch for each button, this will be different. 
		// let backgroundSketch = document.getElementById("canvas-container");
		// backgroundSketch.style.display = "none";
	});
}





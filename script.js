//your JS code here. If required.
const elements = document.getElementsByTagName("li");

for(let i=0; i<elements.length; i++) {
	if(elements[i].id == "level") {
	alert("The level of the element is: " + (i+1));
	}
}

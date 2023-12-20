/** @format */

let dragArea = document.getElementById('dragArea');
let icon = document.getElementById('icon');
let dragText = document.getElementById('dragText');
let showBtn = document.getElementById('showBtn');
let inputBtn = document.getElementById('inputBtn');
let img = document.getElementById('img');
let myFiles;

showBtn.addEventListener('click', () => {
	inputBtn.click();
});

inputBtn.addEventListener('change', function () {
	myFiles = this.files[0];
	showFile();
});

dragArea.addEventListener('dragover', (e) => {
	e.preventDefault();
	dragArea.style.border = '3px solid blue';
	dragText.textContent = 'Relese to upload file';
});

dragArea.addEventListener('dragleave', (e) => {
	e.preventDefault();
	dragText.textContent = 'Drag and drop here';
	dragArea.style.border = 'light';
});

dragArea.addEventListener('drop', (e) => {
	e.preventDefault();
	dragArea.style.border = '3px solid blue';
	// dragArea.style.backgroundColor = 'white';
	myFiles = e.dataTransfer.files[0];

	showFile();
});

function showFile() {
	let fileTipe = myFiles.type;

	let validText = ['image/jpeg', 'image/jpg', 'image/png'];

	if (validText.includes(fileTipe)) {
		let readFiles = new FileReader();
		readFiles.onload = () => {
			let fileName = readFiles.result;
			let imgTaker = `<img src="${fileName}" id="imgg" alt="Uploaded Images" >`;
			dragArea.innerHTML = imgTaker;
		};
		readFiles.readAsDataURL(myFiles);
	} else {
		alert('You inputed a invalid file.');
	}
}

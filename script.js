function cost() {
	let costOfApples= 10;
	let costOfMangoes= 8;
	let costOfBananas= 15;
	let noOfApple=parseInt(document.querySelector("#Apples").value); 
	let noOfMangoes=parseInt(document.querySelector("#Mangoes").value);
	let noOfBananas=parseInt(document.querySelector("#Bananas").value);
	let totalCost= costOfApples*noOfApple+costOfMangoes*noOfMangoes+costOfBananas*noOfBananas;
	alert(totalCost);

}

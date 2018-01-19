(function(){
	document.getElementById("buttonSort").addEventListener("click", StartParse);

	let stepsCounter = 0;

	function StartParse(){
		stepsCounter = 0;
		let inputString = document.getElementById('strInput').value;

		if (inputString != ""){
			let arr = inputString.split(',').map(element => parseInt(element));

			arr = QSort(arr);

			let SortedFieldAns = document.getElementById('Sorted');
			SortedFieldAns.innerHTML = arr;

			let StepsField = document.getElementById("StepsNumber");
			StepsField.innerHTML = stepsCounter.toString();

		} else {
			alert("Wrong format! Requared \'1,2,3,4...\' ");
		}
	}

	function	QSort(arr){
		if (arr.length <= 1) {
	    return arr;
	  }

	  let pivot = arr[0];
	  
	  let left = []; 
	  let right = [];

	  for (var i = 1; i < arr.length; i++) {
	  		stepsCounter++;
		  	if (arr[i] < pivot){
		     	left.push(arr[i]);
		   	} else {
		   		right.push(arr[i]);
		   	}
	 	}

  	return QSort(left).concat(pivot, QSort(right));
	}
}());
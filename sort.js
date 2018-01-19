var globalBadVar = 0;

function StartParse(){
	globalBadVar = 0;
	var inputSting = document.getElementById('strInput').value;
	var arr = [];

	inputSting = NormolizeStr(inputSting);
	if (inputSting != ""){

		var i = 0;
		while (inputSting.length > 0){
			var substr = inputSting.slice(0, inputSting.indexOf(","));
			arr[i] = parseInt(substr);
			inputSting = inputSting.replace(substr + ",",'');
			i++;
		}

		arr = QSort(arr);

		var SortedFieldAns = document.getElementById('Sorted');
		SortedFieldAns.innerHTML = arr;

		var StepsField = document.getElementById("StepsNumber");
		StepsField.innerHTML = globalBadVar.toString();

	} else {
		alert("Wrong format! Requared \'1,2,3,4...\' ");
	}
}

function NormolizeStr(str){
	str = str + ',';
	return str; //return empty if error when normolize 
}

function	QSort(arr){
	if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < arr.length; i++) {
  		globalBadVar++;
	  	if (arr[i] < pivot){
	     	left.push(arr[i]);
	   	} else {
	   		right.push(arr[i]);
	   	}
 	}


  return QSort(left).concat(pivot, QSort(right));
}

var addBtn = document.getElementById("add");
var index = 5;
addBtn.onclick = function(){
	var initTable = document.querySelector("table");
	var newTr = document.createElement("tr");
	var html = '<th scope="row">Activity '+index+'</th>'+
               '<td>A'+index+'</td>'+
			   '<td><input type ="text" name="weight" style="width:30px"></td>'+
               '<th scope="input">'+
			   '<input type ="text" name="grade" style="width:30px" onchange="showResult('+(index-1)+')">'+
			   ' / '+
			   '<input type ="text" name="tgrade" style="width:30px" onchange="showResult('+(index-1)+')"></td>'+
               '<td id="percent'+(index-1)+'"></td>';
	newTr.innerHTML=html;
	initTable.appendChild(newTr);
	index++;
}



let grades = document.getElementsByName("grade");
let tgrades = document.getElementsByName("tgrade");
let weights = document.getElementsByName("weight");

function showResult(index){
	grades = document.getElementsByName("grade");
	var nowPercent = document.getElementById("percent"+index);
	if(grades[index].value=="" || grades[index].value==undefined || grades[index].value==null){
		nowPercent.innerHTML = "<span style='color:red'>Dividend cannot be empty</span>";
		return;
	}
	if(tgrades[index].value=="" || tgrades[index].value==undefined || tgrades[index].value==null){
		nowPercent.innerHTML = "<span style='color:red'>Divisor cannot be empty</span>";
		return;
	}
	if(tgrades[index].value==0){
		nowPercent.innerHTML = "<span style='color:red'>Divisor cannot be 0</span>";
		return;
	}
	var result = parseFloat(grades[index].value)/parseFloat(tgrades[index].value)*100;
	var startIndex = result.toString().indexOf(".")+3;
	if(startIndex==2){
		nowPercent.innerHTML = result+"%";
		return;
	}
	result = result.toString().substring(0,startIndex);
	nowPercent.innerHTML = result+"%";
}



var meanBtn = document.getElementById("mean");
meanBtn.onclick = function(){
	var length = 0;
	var count = 0;
	for(var i=0; i<grades.length; i++){
		if(grades[i].value=="" && tgrades[i].value==""){
			// alert("the"+(i+1)+"row data is empty, please enter number!");
			continue;
		}
		if(grades[i].value=="" && tgrades[i].value!=""){
			alert("the "+(i+1)+" row incomplete data！");
			return;
		}
		if(grades[i].value!="" && tgrades[i].value==""){
			alert("the "+(i+1)+" row incomplete data!");
			return;
		}
		var data = document.getElementById("percent"+i).innerText;
		count += parseFloat(data);
		length++;
	}
	var result = count/length;
	var startIndex = result.toString().indexOf(".")+3;
	if(startIndex==2){
		document.getElementById("resultShow").innerText = result+"%";
		return;
	}
	result = result.toString().substring(0,startIndex);
	document.getElementById("resultShow").innerText = result+"%";
}



var weightedBtn = document.getElementById("weighted");
weightedBtn.onclick = function(){
	var count = 0;
	var sum = 0;
	for(var i=0; i<weights.length; i++){
		if(grades[i].value=="" && tgrades[i].value!=""){
			alert("the "+(i+1)+" row incomplete data!");
			return;
		}
		if(grades[i].value!="" && tgrades[i].value==""){
			alert("the "+(i+1)+" row incomplete data!");
			return;
		}
		if(grades[i].value!="" ||tgrades[i].value!="" ){
			if(weights[i].value==""){
				alert("the "+(i+1)+" row Weight value cannot be empty");
				return;
			}
		}
		if(grades[i].value=="" ||tgrades[i].value=="" ){
			if(weights[i].value!=""){
				alert("the "+(i+1)+" row weight value is invalid!");
				return;
			}
		}
		if(grades[i].value=="" ||tgrades[i].value=="" ){
			if(weights[i].value==""){
					continue;
			}
		}
		var data = document.getElementById("percent"+i).innerText;
		sum += parseFloat(weights[i].value);
		count += parseFloat(data)*parseFloat(weights[i].value);
	}
	
	var result = count/sum;
	var startIndex = result.toString().indexOf(".")+3;
	if(startIndex==2){
		document.getElementById("resultShow").innerText = result+"%";
		return;
	}
	result = result.toString().substring(0,startIndex);
	document.getElementById("resultShow").innerText = result+"%";
}

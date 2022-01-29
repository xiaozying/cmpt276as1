$( document ).ready(function() {

    //Calculate Tip
  function calculateTip(id = 0) {
    var montcost = 500;
    var kamera = document.getElementById('kamera['+id+']').value;
    var anzahl = document.getElementById('anzahl['+id+']').value;
    var laufzeit = document.getElementById('laufzeit').value;
    var datccost = 30;
  
    //Calculate tip
    var total = ((montcost + (kamera * anzahl)) / laufzeit) + (datccost);
    return Math.round(total * 100);
  }
  function getTotalSum() {
    var totalSum = 0;
    var nbr = getCounter();
    for (var cid = 0; cid <= nbr; cid++) {
     //we add sums as integers to avoid floating point errors
     totalSum += calculateTip(cid);
    }
    //Display the tip
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = (totalSum / 100).toFixed(2); //the final number is presented as it should be rounded to 2 digits after zero!
  }
  
  //Hide the tip amount on load
  //document.getElementById("totalTip").style.display = "none";
  //document.getElementById("each").style.display = "none";
  
  //click to call function
  document.getElementById("calculate").onclick = function() {
    getTotalSum();
  };
  
  function numberingTableRow(){
    $.each($('#numberingTable tbody tr'), function (i, v) {
         $(this).find('td:eq(0)').html(i+1);
    });
  }
  
  var counter = 0; //we can start counting rows from zero, as we like having fun ;)
  // Function to increment counter
  function addRow() {
    counter += 1;
  }
  function removeRow() {
    counter -= 1;
  }
  function getCounter() {
    return counter;
  }
  //' + counter +'
  $(document).on('click','.btnAddRowTable',function(e){
    e.stopPropagation();
    addRow(); //we increase the counter as we are about to add a new row
    counter = getCounter();
    $('#numberingTable tbody').append('<tr><td></td><td><select id="kamera['+counter+']"><option selected value="0">Kamera auswählen</option><option value="500">Kamera 1</option><option value="600">Kamera 2</option><option value="700">Kamera 3</option><option value="800">Kamera 4</option><option value="900">Kamera 5</option></select></td><td><select id="anzahl['+counter+']"><option selected value="0">Anzahl</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></td><td><button type="button" class="btn btn-xs btn-danger btnDeleteRowTable">Delete</button></td></tr>');
    numberingTableRow();
  });
  
  $(document).on('click','.btnDeleteRowTable',function(e){
    e.stopPropagation();
    $(this).parent().parent().remove();
    removeRow();
    numberingTableRow();
  });
  });
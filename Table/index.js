function fillTable () {
  var table = document.getElementById('Mytable')
  var row = table.insertRow()
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  var cell3 = row.insertCell(2)
  var cell4 = row.insertCell(3)
  cell1.innerHTML = document.getElementById('Name').value
  cell2.innerHTML = document.getElementById('Id').value
  cell3.innerHTML = document.getElementById('Section').value
  cell4.innerHTML = document.getElementById('Fav').value
  return false
}

document.getElementById('button1').addEventListener('click', fillTable)

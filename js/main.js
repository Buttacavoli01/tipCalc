function getTotal() {
   let bill = document.getElementById('bill').value;
       tip = document.getElementById('tip').value,
       tipElem = document.getElementById('tiptotal'),
       total = document.getElementById('totalAmount'),
       people = document.getElementById('people').value,
       tipTotal = ( ((tip * bill) / 100) / people );
   tipElem.innerHTML = tipTotal.toFixed(2) + ' each';
}

document.getElementById('calculate').onclick = function(e) {
   e.preventDefault();
   getTotal();
};

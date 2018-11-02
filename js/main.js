function getTotal() {
  let splitTotal = document.getElementById('split');
  // selecting bill from the dom
  let bill = document.getElementById('bill').value;
  // converting bill to number
  let Bill = Number(bill);
  // selector to inject the total
  let billTotal = document.getElementById('billTotal');
  // selecting tip percent from dom
  let tip = document.getElementById('tip').value;
  // converting tip to percent and number
  let tipPercent = Number(tip) / 100;
  // where to inject the tip amount
  let tipElem = document.getElementById('tiptotal');
  // amount of people
  let people = document.getElementById('people').value;
  // calculating the tip per person
  let tipTotal =  (Bill * tipPercent) / people;
  // calculating the whole bill per person
  let billEach = (Bill / people) + tipTotal;
  let split = Bill / people;

  // inputting the amounts back into the dom
  splitTotal.innerHTML = split.toFixed(2)
  tipElem.innerHTML = tipTotal.toFixed(2);
  billTotal.innerHTML = billEach.toFixed(2)
}

document.getElementById('calculate').onclick = function(e) {
  e.preventDefault();
  getTotal();
};

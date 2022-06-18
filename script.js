const container = document.getElementById("container");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
makeRows(5, 5);
const dd = document.querySelector('button');
dd.addEventListener('click', () => {

    var x = document.getElementById("val");
    var t = x.value;
    const container = document.querySelector('#container');
    removeAllChildNodes(container);
    
    makeRows(t, t);
    const items = document.querySelectorAll('.grid-item');
 
  for (var i = 0; i < items.length; i++){
    items[i].addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = 'yellow';
      e.target.style.color = 'black';
    });
  };
});
  

  
  const items = document.querySelectorAll('.grid-item');
  
  for (var i = 0; i < items.length; i++){
    items[i].addEventListener("mouseover", function (e) {       
      e.target.style.backgroundColor = 'yellow';
      e.target.style.color = 'black';
    });
  };


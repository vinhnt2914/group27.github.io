window.onload = function() {
  var params = new URLSearchParams(window.location.search);
  var query = params.get('query');
  var filter = query ? query.toUpperCase() : '';
  var itemsDiv = document.getElementById('items');
  var items = itemsDiv.getElementsByClassName('item');
  var count = 0;

  for (i = 0; i < items.length; i++) {
      var item = items[i];
      if (item.innerHTML.toUpperCase().indexOf(filter) > -1) {
          item.style.display = "";
          count++;
      } else {
          item.style.display = "none";
      }
  }
}
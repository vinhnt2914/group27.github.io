// Add event listeners to dropdown items
var dropdownItems = document.querySelectorAll('.dropdown-menu .btn');
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent event propagation
    // Perform any additional actions when a dropdown item is clicked
    // For example, you can update the input field with the selected item
    var selectedItem = e.target.textContent;
    document.getElementById('myInput').value = selectedItem;
  });
});

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

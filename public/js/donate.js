$("#submit").on("click", function (event) {
  event.preventDefault();

  var newDonation = {
    item: $("#item")
      .val()
      .trim(),
    area: $("#area")
      .val()
      .trim(),
    description: $("#item-describe")
      .val()
      .trim(),
    pickup: $("#item-pickup")
      .val()
      .trim(),
    availableUntil: $("#item-availability")
      .val()
      .trim()
  };
  console.log(newDonation);
  // send an AJAX POST-request with jQuery
  $.post("/api", newDonation)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding an item.
      alert("Adding Donation...");
    });

  // empty each input box by replacing the value with an empty string
  $("#item").val("");
  $("#area").val("");
  $("#item-describe").val("");
  $("#item-pickup").val("");
  $("#item-availability").val("");
});

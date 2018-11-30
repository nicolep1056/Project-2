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
      //alert("Adding Donation...");
    });

  // empty each input box by replacing the value with an empty string
  $("#item").val("");
  $("#area").val("");
  $("#item-describe").val("");
  $("#item-pickup").val("");
  $("#item-availability").val("");
});

//Goodwill API
let value;
            let lat;
            $('#entercitystate').on('click', function () {
                value = $('#goodwills').val();
                let placeUrl = "https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=us&municipality=" + value + "&key=6ZjigwGGx4YCL1iYYttvgO5TIAwXFL17";
                console.log(placeUrl)
                $.ajax({
                    url: placeUrl,
                    method: "GET"
                }).then(data2 => {
                    let latitude = data2.results[0].position.lat;
                    let longitude = data2.results[0].position.lon;
                    let url = "https://places.cit.api.here.com/places/v1/autosuggest?at=" + latitude + "," + longitude + "&q=goodwill&app_id=fYrrvBAlqXvmPoQalRfh&app_code=bYQ6P3Z6w2bfK5mxckdHgg";
                    console.log(url);
                    $.ajax({
                        url: url,
                        method: "GET"
                    }).then(data => {
                        console.log(data.results[1].title)
                        $("#goodwill").html(`${data.results[1].title}<br>
                        ${data.results[1].vicinity}<br><br>
                        ${data.results[2].title}<br>
                        ${data.results[2].vicinity}<br><br>
                        ${data.results[3].title}<br>
                        ${data.results[3].vicinity}`);
                    })
                })
            })
            $('#clear').on('click', function () {
                $('#goodwills').val('');
                $('#goodwill').html('');
            })


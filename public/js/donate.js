var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/grandmasattic/upload';
var CLOUDINARY_UPLOAD_PRESET = 'dnvff9t2'

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');
let userImg;

getImgUrl = function (cb) {
  fileUpload.addEventListener('change', function (event) {
    var file = event.target.files[0];
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    console.log(file);

    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    }).then(function (res) {
      console.log("Res", res);
      imgPreview.src = res.data.url;
      console.log("imgprev", imgPreview.src);
      userImg = res.data.url;
      cb(userImg)
    }).catch(function (err) {
      console.error(err)
    })
  })
}

getImgUrl(function (value) {
  console.log("??", value);
});
console.log(userImg, "userimg");

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
    image: userImg,
    availableUntil: $("#item-availability")
      .val()
      .trim()
  };
  console.log("NEW donation:",newDonation);
  // send an AJAX POST-request with jQuery
  $.post("/api", newDonation)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log("Data going to the API",data);
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
  let placeUrl = "https://api.tomtom.com/search/2/structuredGeocode.json?countryCode=us&postalCode=" + value + "&key=6ZjigwGGx4YCL1iYYttvgO5TIAwXFL17";
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
      //Determine if there's a Goodwill location within 80km (approx. 50 mi. of user's city/ZIP)
      if (data.results[1].distance > 80000) {
        $("#goodwill").html("Sorry, no Goodwill locations within 50 miles.")
      }
      else {
        $("#goodwill").html(`${data.results[1].title}<br>
                        ${data.results[1].vicinity}<br><br>
                        `)
        if (data.results[2].distance > 80000) {
          $("#goodwill").append("No more results.")
        }
        else {
          $("#goodwill").append(`${data.results[2].title}<br>
                            ${data.results[2].vicinity}<br><br>`)
          if (data.results[3].distance > 80000) {
            $("#goodwill").append("No more results.")
          }
          else {
            $("#goodwill").append(`${data.results[3].title}<br>
                                ${data.results[3].vicinity}`)
          }
        }
      }
    })
  })
})
$('#clear').on('click', function () {
  $('#goodwills').val('');
  $('#goodwill').html('');
})



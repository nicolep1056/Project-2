
/*console.log("Loaded")
$(".cat").on("click", function () {

    let clickVal = $(this).html().split(" ").join("").toLowerCase();
    console.log('Value clicked on is: ', clickVal);

    $.get("/api/holidays/" + clickVal, function (items) {
        // items is your data from the back end to use to build your html like...
        //$().append html here
    })
})*/



//Determine which occasion is clicked on and direct to the appropriate page.
$('.card-img-top').on('click', function () {
    let seasonSelected = $(this).attr("id");
    console.log('Season clicked', seasonSelected)
    if (seasonSelected === undefined) {
        console.log('no season selected')
    }
    else {
        location.href = "./" + seasonSelected + '.html'
    }
})

//Testing (Not currently using) Google Authentication
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

//Handle click for each Claim button dynamically generated when available items load.
$(document).on('click', '.claimBtn', function () {
    let itemClaimed = $(this).attr("id");
    console.log('Item Claimed (id): ', itemClaimed);
    // Reload the page to get the updated list (not currently working)
    location.reload()
    $.ajax("/api/id/" + itemClaimed, {
        type: "PUT"
    }).then(
        function () {
            console.log("claimed item", id);
        }
    );
    //if time allows, create modal to ask if user is sure they want to claim a specific item

    // Send the DELETE request.
    /*$.ajax("/api/id/" + itemClaimed, {
      type: "DELETE"
    }).then(
      function() {
        console.log("claimed item", id);
        // Reload the page to get the updated list
        //location.reload();
      }
    );*/
});






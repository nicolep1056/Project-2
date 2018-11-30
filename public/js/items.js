
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

//Claim item button
$(document).on('click','.claimBtn',function(){
    let itemClaimed = $(this).attr("id");
        console.log('Item Claimed (id): ', itemClaimed) 
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




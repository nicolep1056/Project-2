console.log("Loaded")
$(".cat").on("click", function () {

    let clickVal = $(this).html().split(" ").join("").toLowerCase();
    console.log('Value clicked on is: ', clickVal);

    $.get("/api/holidays/" + clickVal, function (items) {
        // items is your data from the back end to use to build your html like...
        //$(.).append html here
    })
})

// var = `<h1>${}<h1>`
// });
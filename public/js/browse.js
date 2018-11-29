//Get all data to display on main items page
$.get("/api", function (data) {
  console.log("Data: ", data);
  // for each item that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var itemSection = $("<div>");
    // add a class to this div: 'this'
    itemSection.addClass("this");
    // add an id to the this to mark which this it is
    itemSection.attr("id", "item-this-" + i);
    // append the this to the this section
    $("#item-section").append(itemSection);

    // Adds all the items to the page

    $("#item-this-" + i).append("<h2><i class='fas fa-cat'></i>" + data[i].item + "</h2>");

    //$("#item-this-" + i).append("<h3>Area: " + data[i].area + "</h3>");

    $("#item-this-" + i).append(
      "<h3>" + data[i].description + "</h3>"
    );

    // $("#item-this-" + i).append(
    // "<h4>Pickup Instructions: " + data[i].pickup + "</h4>"
    //);

  }
});

//Get data for one specific season/occasion
$.get("/api", function (seasons) {
  console.log("seasons: ", seasons);
  console.log(window.location.href);
  let seasonName = window.location.href;
  seasonName = seasonName.substring(seasonName.lastIndexOf("/") + 1);
  seasonName = seasonName.split("?")[0].split("#")[0].split(".")[0];
  console.log(seasonName);

  var result = seasons.filter(obj => {
    return obj.routeName === seasonName;
  })
  for (let i = 0; i < result.length; i++) {

    // create a parent div for the oncoming elements
    var itemSection = $("<div>");
    var itemBtn = $("<button>");
    // add a class to this div: 'this'
    itemSection.addClass("this");
    itemBtn.addClass("claimBtn");
    // add an id to the this to mark which it is
    itemSection.attr("id", "item-this-" + i);
    itemBtn.attr("id", result[i].id);
    itemBtn.text("Claim");
    // Display filtered list
    $("#" + seasonName + "-items").append(itemSection);
    $("#" + seasonName + "-items").append(itemBtn);

    $("#item-this-" + i).append("<h2><i class='fas fa-cat'></i> " + result[i].item + "</h2>");

    $("#item-this-" + i).append("<h3>Area: " + result[i].area + "</h3>");

    $("#item-this-" + i).append(
      "<h3>Description of Item: " + result[i].description + "</h3>"
    );

    $("#item-this-" + i).append(
      "<h4>Pickup Instructions: " + result[i].pickup + "</h4>"
    );

  }
});





$.get("/api", function(data) {
  console.log(data);
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
    
    $("#item-this-" + i).append("<h3>Area: " + data[i].area + "</h3>");
    
    $("#item-this-" + i).append(
      "<h3>Description of Item: " + data[i].description + "</h3>"
    );
    
    $("#item-this-" + i).append(
      "<h4>Pickup Instructions: " + data[i].pickup + "</h4>"
    );
    
  }
});

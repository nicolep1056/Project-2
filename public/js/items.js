document.getElementById("christmas").addEventListener("click", function () {
    app.get("/api/christmas/:christmas"){
        Item.findAll({
            where: {
                season: req.params.season
            }
        }).then(function (result) {
            return res.json(result);
        });
    }

    var = `<h1>${}<h1>`
});
document.getElementById("christmas").addEventListener("click", function () {
    app.get("/api/christmas/:christmas", function(req, res){
        Item.findAll({
            where: {
                routeName: req.params.season
            }
        }).then(function (result) {
            return res.json(result);
        });
    });

/*     var item = `<h1>${}<h1>` */
});
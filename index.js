$("#tagText").on("keyup", function() {
  $("#tag").text($("#tagText").val());
})

$("#show").on("click", function () {
  var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
  var tag = $("#tagText").val();
  $.getJSON( flickrAPI, {
    tags: tag,
    tagmode: "any",
    format: "json"
  })
    .done(function (data, textStatus, jqXHR) {
      $('#photos').text("");
      var photos = data.items;
      for (var i = 0; i < photos.length; i++) {
        var div = document.createElement("div");
        div.className = "photo";
        div.innerHTML = photos[i].description;
        $('#photos').append(div);
      }
    })
    .fail(function (data, textStatus, jqXHR) {
      $('#photos').text("Couldn't load doc");
    });
});

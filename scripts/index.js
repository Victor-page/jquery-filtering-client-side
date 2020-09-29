import data from "./data.js";

var template = $("#flowerTmpl");
template.tmpl(data).appendTo(".js-list");

var cards = $(".list__item");
var tagsArray = [];
var bigTagsList = $(".js-tag-list");
var tagElement = $(".tag-list__item");

tagElement.click(tagElementClickHandler);

function tagElementClickHandler(e) {
  var tagText = $(e.target).text();

  cards
    .hide()
    .filter("." + tagText)
    .show();
}

cards.each(function (index) {
  var cardTagsArr = $(this).attr("class").split(" ");

  for (var i = 0; i < cardTagsArr.length; i++) {
    if (
      cardTagsArr[i] != "list__item" &&
      tagsArray.indexOf(cardTagsArr[i]) < 0
    ) {
      tagsArray.push(cardTagsArr[i]);
    }
  }
});

for (var i = 0; i < tagsArray.length; i++) {
  //clone any tagElement with the event
  $(tagElement[0]).clone(true).text(tagsArray[i]).appendTo(bigTagsList);
}

var Cat = function(data) {

  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  //Store nicknames for the cat
  this.nicknames = ko.observableArray(data.nicknames);

  // this.level = ko.observable("New Born");
  this.level = ko.computed(function() {
    var level = "Newborn";
    var clicks = this.clickCount();

    if (clicks <10) {
      level = "Newborn";
    } else if (clicks < 20) {
      level = "Infant";
    } else if (clicks < 30) {
      level = "Toddler";
    } else {
      level = "I'm growing up!";
    }
    return level;
  }, this);

};


var viewModel = function() {
  var self = this;

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
  }));

  //Logic of click interation on the cat image
  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new viewModel());

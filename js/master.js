var Links = {
  setColor: function(color) {
    var alist = $('a').css('color', color);

    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i = i + 1;
    }
  }
};

var Body = {
  setColor: function(color) {
    $('body').css('color', color);
  },
  setBGColor: function(color) {
    $('body').css('background-color', color);
  }

};

function linkButton(word1, word2) {
  if (night_day2.value == word1) {
    night_day2.value = word2;
  }
  if (night_day.value == word1) {
    night_day.value = word2;
  }
}



function nightDayHandler(self) {
  if (self.value == 'night') {
    Body.setBGColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('Yellow');
    linkButton('night', 'day');


  } else {
    Body.setBGColor('white');
    Body.setColor('black');
    self.value = 'night';
    Links.setColor('blue');
    linkButton('day', 'night');


  }
}

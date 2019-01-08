var monthStone = {
  January: 'garnet',
  February: 'amethyst',
  March: 'aquamarine or bloodstone' ,
  April: 'diamond',
  May: 'emerald',
  June: 'pearl, moonstone, or alexandrite',
  July: 'ruby',
  August: 'peridot',
  September: 'opal or tourmaline',
  October: 'sapphire',
  November: 'topaz or citrine',
  December: 'turquoise, zircon, or tanzanite',
}

$(function() {
  $("nav a").on("mouseenter", function() {
    $(this).next("ul").addClass('opened');
  });

  $("nav").on("mouseleave", function() {
    $(this).find("ul ul").removeClass('opened');
  });

  $(".button, button").on("click", function(e) {
    e.preventDefault();

    $(this).addClass("clicked");
  });

  $(".toggle").on("click", function(e) {
    e.preventDefault();

    $(this).next('.accordion').toggleClass('opened');
  });

  function getCreditCardTotal(number) {
    var odd_total = 0;
    var even_total = 0
    var sum;

    number = number.split("").reverse();
    for (var i = 0, len = number.length; i < len; i++) {
      if (i % 2 == 1) {
        number[i] = (+number[i] * 2) + "";
        if (number[i].length > 1) {
          number[i] = +number[i][0] + +number[i][1];
        }
        else {
          number[i] = +number[i];
        }
        odd_total += number[i];
      }
      else {
        even_total += +number[i];
      }
    }

    sum = odd_total + even_total;
    return sum;
  }

  $("form").on("submit", function(e) {
    e.preventDefault();
    var cc_number = $(this).find("[type=text]").val(),
        total = getCreditCardTotal(cc_number);
        isValid = (total % 10 == 0)

      $(this).find(".success").toggle(isValid);
      $(this).find(".error").toggle(!isValid);
  });

  $("ul a").on("click", function(e) {
    e.preventDefault();

    var month = $(this).text(),
      phrase = 'Your birthstone is ',
      $stone = $("#birthstone");

    $stone.text(phrase + monthStone[month]);
  });
});




// switch (month) {
//       case "January":
//         $stone.text("Your birthstone is garnet");
//         break;
//       case "February":
//         $stone.text("Your birthstone is amethyst");
//         break;
//       case "March":
//         $stone.text("Your birthstone is aquamarine or bloodstone");
//         break;
//       case "April":
//         $stone.text("Your birthstone is diamond");
//         break;
//       case "May":
//         $stone.text("Your birthstone is emerald");
//         break;
//       case "June":
//         $stone.text("Your birthstone is pearl, moonstone, or alexandrite");
//         break;
//       case "July":
//         $stone.text("Your birthstone is ruby");
//         break;
//       case "August":
//         $stone.text("Your birthstone is peridot");
//         break;
//       case "September":
//         $stone.text("Your birthstone is sapphire");
//         break;
//       case "October":
//         $stone.text("Your birthstone is opal or tourmaline");
//         break;
//       case "November":
//         $stone.text("Your birthstone is topaz or citrine");
//         break;
//       case "December":
//         $stone.text("Your birthstone is turquoise, zircon, or tanzanite");
//         break;

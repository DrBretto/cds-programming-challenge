$(document).ready(function () {

  $("#firstName").on("input", function () {
    let input = $(this);
    let firstName = input.val();
    if (firstName) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $("#lastName").on("input", function () {
    let input = $(this);
    let lastName = input.val();
    if (lastName) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $("#lastName").on("input", function () {
    let input = $(this);
    let name = input.val();
    if (name) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });


  $("#email").on("input", function () {
    let input = $(this);
    let re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let is_email = re.test(input.val());
    if (is_email) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $("#promo").on("input", function () {
    let input = $(this);
    let promo = input.val();

    let

    if (promo) {
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

});

function validateAll() {
  let numberValid = $(".valid").length;
  console.log(numberValid);
  if (numberValid === 7) {
    $("#successBox").removeClass("unsuccessful").addClass("success");
  } else {
    $("#successBox").removeClass("success").addClass("unsuccessful");
  }
}

$(document).ready(function () {
  $("#firstName").on("input", function () {
    let input = $(this);
    let firstName = input.val();
    if (firstName) {
      input
        .next()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      input
        .next()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });

  $("#lastName").on("input", function () {
    let input = $(this);
    let lastName = input.val();
    if (lastName) {
      input
        .next()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      input
        .next()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });

  $("#phone").on("input", function () {
    let input = $(this);
    let phone = input.val();
    if (!!phone.match(/^[0-9]+$/)) {
      input
        .next()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      input
        .next()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });

  $("#email").on("input", function () {
    let input = $(this);
    let re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let is_email = re.test(input.val());
    if (is_email) {
      input
        .next()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      input
        .next()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });

  $("#promo").on("input", function () {
    let input = $(this);
    let promo = input.val();
    if (!!promo.match(/^[0-9a-z]+$/) || promo.length === 0) {
      input
        .next()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
      if (promo.length > 0) {
        input
          .nextAll("#howDidYouHear")
          .next()
          .removeClass("hidden")
          .removeClass("invalid")
          .addClass("valid");
      } else if (!input.nextAll("#howDidYouHear").val()) {
        input
          .nextAll("#howDidYouHear")
          .next()
          .removeClass("hidden")
          .removeClass("valid")
          .addClass("invalid");
      }
    } else {
      input
        .next()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });

  $("#howDidYouHear").on("input", function () {
    let input = $(this);
    let howDidYouHear = input.val();
    if (input.find(":selected").text() === "Other") {
      input.next().removeClass("valid");
      input.next().addClass("hidden");
      input.next().next().next().removeClass("hidden");
      input.next().next().next().find("#specify").val("");
    } else input.next().next().next().removeClass("valid").addClass("hidden");
    if (howDidYouHear) {
      input
        .next()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
    } else if (!input.prevAll("#promo").val()) {
      input
        .next()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });

  $("#specify").on("input", function () {
    let input = $(this);
    let specify = input.val();
    if (specify) {
      input
        .parent()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      input
        .parent()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });

  $("#terms").change(function () {
    let input = $(this);
    let terms = input.is(":checked");
    console.log(terms);
    if (terms) {
      input
        .next()
        .next()
        .removeClass("hidden")
        .removeClass("invalid")
        .addClass("valid");
    } else {
      input
        .next()
        .next()
        .removeClass("hidden")
        .removeClass("valid")
        .addClass("invalid");
    }
    validateAll();
  });
});

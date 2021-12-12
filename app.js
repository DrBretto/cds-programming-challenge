function validateAll() {
  let numberValid = $(".valid").length;
  console.log(numberValid);
  if (numberValid === 6) {
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
      input.next().removeClass("hidden").addClass("valid");
    } else {
      input.next().removeClass("hidden").removeClass("valid");
    }
    validateAll();
  });

  $("#lastName").on("input", function () {
    let input = $(this);
    let lastName = input.val();
    if (lastName) {
      input.next().removeClass("hidden").addClass("valid");
    } else {
      input.next().removeClass("hidden").removeClass("valid");
    }
    validateAll();
  });

  $("#phone").on("input", function () {
    let input = $(this);
    input.val(input.val().replace(/[^0-9]/g, ""));
    if (phone) {
      input.addClass("valid");
    } else input.removeClass("valid");
    validateAll();
  });

  $("#email").on("input", function () {
    let input = $(this);
    let re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let is_email = re.test(input.val());
    if (is_email) {
      input.next().removeClass("hidden").addClass("valid");
    } else {
      input.next().removeClass("hidden").removeClass("valid");
    }
    validateAll();
  });

  $("#promo").on("input", function () {
    let input = $(this);
    let promo = input.val();
    input.val(input.val().replace(/[^0-9a-zA-Z]/g, ""));

    if (promo.length > 0) {
      input
        .nextAll("#howDidYouHear")
        .next()
        .removeClass("hidden")
        .addClass("valid");
    } else if (!input.nextAll("#howDidYouHear").val()) {
      console.log(input.nextAll("#howDidYouHear").val());
      input
        .nextAll("#howDidYouHear")
        .next()
        .removeClass("hidden")
        .removeClass("valid");
    }
    validateAll();
  });

  $("#howDidYouHear").on("input", function () {
    let input = $(this);
    let howDidYouHear = input.val();
    if (howDidYouHear) {
      input.next().removeClass("hidden").addClass("valid");
    } else if (!input.prevAll("#promo").val()) {
      input.next().removeClass("hidden").removeClass("valid");
    }
    if (input.find(":selected").text() === "Other") {
      input.next().removeClass("valid").addClass("hidden");
      input.next().next().next().removeClass("hidden").find("#specify").val("");
    } else input.next().next().next().removeClass("valid").addClass("hidden");
    validateAll();
  });

  $("#specify").on("input", function () {
    let input = $(this);
    let specify = input.val();
    if (specify.length > 0) {
      input.parent().prev().prev().removeClass("hidden").addClass("valid");
    } else {
      input.parent().prev().prev().removeClass("valid");
    }
    validateAll();
  });

  $("#termsLink").mousemove(function (e) {
    $("#popup").removeClass("hidden");
    let mouseX;
    let mouseY;
    mouseX = e.pageX - 120;
    mouseY = e.pageY - 120;
    $("#popup").css({ "top": mouseY, "left": mouseX });
  });

  $("#termsLink").mouseout(function () {
    $("#popup").addClass("hidden");
  });

  $("#terms").change(function () {
    let input = $(this);
    let terms = input.is(":checked");
    console.log(terms);
    if (terms) {
      input.next().next().removeClass("hidden").addClass("valid");
    } else {
      input.next().next().removeClass("hidden").removeClass("valid");
    }
    validateAll();
  });
});

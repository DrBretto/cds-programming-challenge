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
      input.next().addClass("hidden");
      input.addClass("valid");
    } else {
      input.next().removeClass("hidden");
      input.removeClass("valid");
    }
    validateAll();
  });

  $("#lastName").on("input", function () {
    let input = $(this);
    let lastName = input.val();
    if (lastName) {
      input.next().addClass("hidden");
      input.addClass("valid");
    } else {
      input.next().removeClass("hidden");
      input.removeClass("valid");
    }
    validateAll();
  });

  $("#phone").on("input", function () {
    let input = $(this);
    let phone = input.val();
    input.val(input.val().replace(/[^0-9]/g, ""));
    if (phone) {
      input.next().addClass("hidden");
      input.addClass("valid");
    } else {
      input.next().removeClass("hidden");
      input.removeClass("valid");
    }
    validateAll();
  });

  $("#email").on("input", function () {
    let input = $(this);
    let re =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let is_email = re.test(input.val());
    if (is_email) {
      input.next().addClass("hidden");
      input.addClass("valid");
    } else {
      input.next().removeClass("hidden");
      input.removeClass("valid");
    }
    validateAll();
  });

  $("#promo").on("input", function () {
    let input = $(this);
    let promo = input.val();
    input.val(input.val().replace(/[^0-9a-zA-Z]/g, ""));
    if (promo.length > 0) {
      input.nextAll("#howDidYouHear").addClass("valid");
      input.nextAll("#howDidYouHear").next().addClass("hidden");
    } else if (!input.nextAll("#howDidYouHear").val()) {
      input.nextAll("#howDidYouHear").removeClass("valid");
      input.nextAll("#howDidYouHear").next().removeClass("hidden");
    }
    validateAll();
  });

  $("#howDidYouHear").on("input", function () {
    let input = $(this);
    let howDidYouHear = input.val();
    if (howDidYouHear) {
      input.addClass("valid");
      input.next().addClass("hidden");
    } else if (!input.prevAll("#promo").val()) {
      input.removeClass("valid");
      console.log("remove validation here");
      input.next().removeClass("hidden");
    }
    if (input.find(":selected").text() === "Other") {
      input.removeClass("valid");
      input.next().addClass("hidden");
      input.next().next().next().removeClass("hidden").find("#specify").val("");
    } else {
      input.next().next().next().addClass("hidden");
    }
    validateAll();
  });

  $("#specify").on("input", function () {
    let input = $(this);
    let specify = input.val();
    if (specify.length > 0) {
      input.next().addClass("hidden");
      $("#howDidYouHear").addClass("valid");
    } else {
      input.next().removeClass("hidden");
      $("#howDidYouHear").removeClass("valid");
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
      input.addClass("valid");
      input.next().next().addClass("hidden");
    } else {
      input.removeClass("valid");
      input.next().next().removeClass("hidden");
    }
    validateAll();
  });
});

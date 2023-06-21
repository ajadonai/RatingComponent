$(document).ready(function () {
  const starButtons = $(".star");
  const submit = $(".submit");
  const rating = $(".rating");
  const thankYou = $(".thankYou");
  const ratingNo = $("#rate");

  let selectedValue = null; // Variable to store the selected value

  starButtons.on("click", function () {
    selectedValue = $(this).data("value");

    starButtons.removeClass("active"); // Remove "active" class from all star buttons
    $(this).addClass("active"); // Add "active" class to the clicked star button

    // Enable or disable the submit button based on the selectedValue
    updateSubmitButton();
  });

  submit.on("click", function () {
    rating.addClass("hide");
    thankYou.removeClass("hide");

    // Update ratingNo with the selected value
    ratingNo.text(selectedValue);
  });

  // Function to enable or disable the submit button based on the selectedValue
  function updateSubmitButton() {
    if (selectedValue !== null) {
      submit.prop("disabled", false);
    } else {
      submit.prop("disabled", true);
    }
  }
});

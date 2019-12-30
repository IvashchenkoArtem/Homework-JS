$(".body").hide().prev().click(function () {
    $(".body").not(this).slideUp();
    $(this).next().not(":visible").slideDown();
});
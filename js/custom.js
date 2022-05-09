$(".ss_Searchbox").focus(function() {
    $(".dropdownss").show();
});

$(".ss_Searchbox").on("change, blur", function() {
    $(".dropdownss").hide(250);
});

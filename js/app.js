$(document).ready(function () {

$(".toggle").on("click" , function(){
    $(".c-header__menu").toggleClass("open");
});



    $(".c-filter .c-filter__body").hide();

    $(".c-filter .c-filter__title").on("click", function () {
        var thisFilter = $(this).parents(".c-filter");
        var wasOpen = thisFilter.hasClass('open');
        closeFilter($(".c-filter.open"));

        if (!wasOpen) {
            openFilter(thisFilter);
        }
    });

    var openFilter = function(filter) {
        filter.addClass("open")
        filter.focus();
        filter.find(".c-filter__body").stop().slideDown(400);
        filter.find(".c-filter__body").stop().slideDown(400);
    };

    var closeFilter = function(filter) {
        filter.removeClass("open");
        filter.find(".c-filter__body").stop().slideUp(400);
    };
});
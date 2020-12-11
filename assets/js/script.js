/* Author: 

*/

$(document).ready(function () {

    // adding click on list
    $(".list").click(function () {
        // console.log(this);
        let value = $(this).attr("data-filter");
        console.log(value);

        if (value == "all") {
            $(".image-list-li").show();
        } else {
            $(".image-list-li").not("." + value).hide();
            $(".image-list-li").filter("." + value).show();
            // console.log($(".image-list-li").not("." + value).hide());
            // console.log($(".image-list-li").filter("." + value).show());

        }
    })

    // adding active class
    $(".list").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })

    // ---------------back to top js
    $(".top-btn").hide();
    $(window).scroll(() => ($(window).scrollTop() >= 150 ? $(".top-btn").show(100) : $(".top-btn").hide(100)));
    $(".top-btn").click(() => $(window).scrollTop(0));

     // -----------------------hamburger
     $(".hamburger").click( function() {
        $(this).toggleClass("active-hamburger");
        $(".navigation").toggleClass("active-navigation");
    })








})



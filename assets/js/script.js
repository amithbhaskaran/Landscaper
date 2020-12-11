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
})



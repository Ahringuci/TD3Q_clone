(function () {
    const _ = $(".left_lists__open");

    _.on("click", function () {
        const __ = $(this);
        if (__.hasClass("actived")) {
            __.removeClass("actived");
        } else {
            __.addClass("actived");
        }
    });
})();

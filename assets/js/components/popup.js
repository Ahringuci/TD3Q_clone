(function () {
    const open = () => {
        const _ = $(".open_popup");
        _.on("click", function () {
            let _id = $(this).attr("data-id");
            $(_id).addClass("actived");
        });
    };

    const mask = () => {
        const _ = $(".popup_mask");
        _.on("click", function () {
            let _id = $(this).parents(".popup");
            _id.removeClass("actived");
        });
    };
    const init = () => {
        open();
        mask();
    };

    init();
})();

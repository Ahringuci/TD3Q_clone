(function () {
    const PopUpMainBuilding = () => {
        const _ = $(".popup_main_building");
        const buttons = _.find(".tab_buttons button");
        const items = _.find(".tab_content .tab_item");

        buttons.on("click", function () {
            if (!$(this).hasClass("actived")) {
                let _i = $(this).index();

                buttons.removeClass("actived");
                items.removeClass("actived");

                $(this).addClass("actived");
                items.eq(_i).addClass("actived");
            }
        });
    };
    PopUpMainBuilding();
    /**
 * tab_auto
> tab_buttons_auto .tab_button
> tab_lists_auto tab_list
 */
    const TabButtonAutoInit = () => {
        const TabButtons = $(".tab_buttons_auto .tab_button");

        TabButtons.on("click", function () {
            const _ = $(this),
                parent = _.parents(".tab_auto"),
                button = parent.find(".tab_button"),
                target = parent.find(".tab_list"),
                tab = _.attr("data-tab");

            let _index = _.index();

            if (_.hasClass("actived")) return false;

            button.removeClass("actived");
            target.removeClass("actived");

            ResetUI();
            TabState.tab = tab;

            _.addClass("actived");
            target.eq(_index).addClass("actived");
        });
    };
    TabButtonAutoInit();
})();

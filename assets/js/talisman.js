(function () {
    const EnhancementAmuletRateInit = () => {
        const _ = $(".enhacement_rate_talisman .item"),
            target = $(".enhacement_rate .add"),
            talisman = $(".enhacement_rate .enhancement_talisman");

        _.on("click", function () {
            let _val = $(this).attr("data-item"),
                _bonus = `(+${_val}%)`,
                _txt = `Tỉ lệ +${_val}%`,
                _myParent = $(this).parents(".talisman");

            _myParent.removeClass("actived");

            target.text(_bonus);
            talisman.text(_txt);
        });
    };

    const init = () => {
        EnhancementAmuletRateInit();
    };

    init();
})();

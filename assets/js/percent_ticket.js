(function () {
    const PercentTicket = () => {
        const _ = $(".percent_ticket .item"),
            myParent = $(".percent_ticket"),
            myTarget = $(".add_rate_enhancement"),
            myRate = $(".enhacement_rate .add");

        _.on("click", function () {
            let _val = $(this).attr("data-item"),
                _per = `+${_val}%`;

            myParent.removeClass("actived");

            myTarget.text(_per);
            myRate.text(`(${_per})`);
        });
    };

    PercentTicket();
})();

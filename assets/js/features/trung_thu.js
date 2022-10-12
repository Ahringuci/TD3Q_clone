(function () {
    // collect_silver
    /** ------------ note ---------------- 
        Trưng Thu = base * 1.2 * cấp người choi
        Bạo Thu = 25% x2 Trưng Thu,
    */
    const Collect = (sta = "") => {
        const vip = VIPState.vip;
        let _get = Game.collect_silver.origin * 1.2 * Game.player.level,
            _get_by_vip = 1 + 0.01 * Game.collect_silver.bonus[vip];

        if (sta === "10") {
            console.info("bao thu: ", _get * _get_by_vip * 10);
            console.info("bao thu max: ", _get * _get_by_vip * 20);
        } else {
            console.info("trung thu: ", _get * _get_by_vip);
        }
    };
    const init = () => {
        const collect = $(".popup_collect_silver .collect");
        const collectx10 = $(".popup_collect_silver .collectx10");

        collect.on("click", function () {
            Collect();
        });
        collectx10.on("click", function () {
            Collect("10");
        });
    };

    init();
})();

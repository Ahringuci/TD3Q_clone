(function () {
    const Enhacement = () => {
        const _ = $(".button_enhancement");
        _.on("click", function () {
            console.log(Game.silver);
        });
    };

    Enhacement();
    function aa(e) {
        let _e = 100 + (2 * e) ** 2 + e * 100 * 0.5;
        // console.log(e ** 2 * 10);
        console.log(_e | 0);
    }

    for (let i = 100; i < 150; i++) {
        aa(i);
    }
})();

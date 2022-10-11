(function () {
    const Exp = {
        origin: 50,
        visible: 50,
        level: 1,
        each_level: 0.8,
        each_level_ori: 0.8,
    };
    const render = $(".user .level");
    const updateUI = (e) => {
        render.html(`<span>Lv ${e}</span>`);
    };

    render.on("click", function () {
        let _x = Exp.origin * (1 + Exp.each_level * (Exp.level - 1)),
            _next = Exp.level + 1;
        if (_next % 2 === 0) {
            Exp.each_level *= 1.18;
        }

        Exp.visible = _x;
        Exp.level = _next;
        updateUI(_next);
        console.log(Exp.visible);
    });

    const Re = {
        origin: 10,
        visible: 10,
        level: 1,
        each_level: 10,
        each_level_ori: 2,
    };
})();

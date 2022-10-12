(function () {
    const render = $(".user .level");
    const updateUI = (e) => {
        render.html(`<span>Lv ${e}</span>`);
    };

    render.on("click", function () {
        const Exp = Game.player;

        let _x = Exp.origin * (1 + Exp.el * (Exp.level - 1)),
            _next = Exp.level + 1;
        if (_next % 2 === 0) {
            Exp.el *= 1.18;
        }

        Exp.visible = _x;
        Exp.level = _next;
        updateUI(_next);

        Game.player_exp = Exp;
    });
})();

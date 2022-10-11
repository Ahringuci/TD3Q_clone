(function () {
    const stickExp = 1;
    const _default = [
        // max 150 tôc
        {
            name: "Nhanh nhẹn",
            lv: 1,
            exp: 0,
            max: 10,
            el: 2,
            ori: 1,
            add: 1,
        },
        // max
        { name: "Sức mạnh", lv: 1, exp: 0, max: 10, el: 2, ori: 100, add: 100 },

        {
            name: "Dẻo dai",
            lv: 1,
            exp: 0,
            max: 10,
            el: 2,
            ori: 1000,
            add: 1000,
        },
        { name: "Trí Tuệ", lv: 1, exp: 0, max: 10, el: 2, ori: 100, add: 100 },
        { name: "May Mắn", lv: 1, exp: 0, max: 10, el: 2, ori: 1.2, add: 0.16 },
    ];

    const upgrade = (e) => {
        let _x = (Math.random() * 5) | 0,
            _cz = Math.random() * 100;

        let _d = _default[_x],
            _x100 = 2,
            _x10 = 1;

        if (_d.lv >= 150) return false;

        if (e === "100") {
            _x10 = 10;
            _x100 = 100;
        }

        let _next =
            _cz < 15 ? _d.exp + stickExp * _x100 : _d.exp + stickExp * _x10;

        while (_next >= _d.max) {
            _next -= _d.max;

            _d.lv += 1;

            if (_d.lv % 10 === 0) {
                _d.el += 20;
            } else {
                _d.el += 2;
            }
            _d.ori += _d.add;
            _d.max = _d.el;

            if (_d.lv >= 150) {
                _next = 0;
                break;
            }
        }
        _d.exp = _next;

        _default[_x] = _d;
    };

    const updateUI = () => {
        const _ = $(".popup_research .items"),
            __ = $(".popup_research .items_add");

        let _html1 = "",
            _html2 = "";
        _default.map((a, b) => {
            let { name, lv, exp, max, ori } = a;
            _html1 += `<div><span class="button_nor b1 b0" data-hover='${exp}/${max}'>${name}</span>Lv${lv}</div>`;

            if (b === 0) {
                _html2 += `<dl class="stat__inline c_white"><dt>Nhanh nhẹn</dt><dd>+ Tốc ${ori}</dd></dl>`;
            }
            if (b === 1) {
                _html2 += `<dl class="stat__inline c_white"><dt>Sức mạnh</dt><dd>+ Công ${ori} ( Vật lí )</dd></dl>`;
            }
            if (b === 2) {
                _html2 += `<dl class="stat__inline c_white"><dt>Dẻo dai</dt><dd>+ Sinh lực ${ori}</dd></dl>`;
            }
            if (b === 3) {
                _html2 += `<dl class="stat__inline c_white"><dt>Trí Tuệ</dt><dd>+ Công ${ori} ( Phép thuật )</dd></dl>`;
            }
            if (b === 4) {
                _html2 += `<dl class="stat__inline c_white"><dt>May Mắn</dt><dd>+ Bạo ${ori}</dd></dl>`;
            }
        });

        _.html(_html1);
        __.html(_html2);
    };

    updateUI();
    const researchX10 = $(".research_x");
    researchX10.on("click", function () {
        let _x = $(this).attr("data-x");
        for (let i = 0; i < 10; i++) {
            upgrade(_x);
        }
        updateUI();
    });
})();

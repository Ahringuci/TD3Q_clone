(function () {
    const render = $(".popup_attacker .items");
    let _items = [...MAP];

    const renderItem = (e) => {
        let _ret = "";
        e.maps.map((a) => {
            let _m = "";
            for (let i = 0; i < 10; i++) {
                let _sil = e.silver + e.el * i,
                    _exp = e.exp + e.el * i;

                _m += `<span>bạc ${_sil}, exp ${_exp}</span>`;
            }
            e.el += e.el_el;
            e.exp += e.exp_el;
            e.silver += e.silver_el;
            _ret += `<dl><dt>${a}</dt><dd>${_m}</dd></dl>`;
        });

        return _ret;
    };

    const renderInit = () => {
        let _html = "";
        _items.map((a) => {
            let _item = renderItem(a);
            _html += `<div class="item">
                        <p>${a.name}</p>
                        ${_item}
                        </div>`;
        });

        render.html(_html);
    };

    const init = () => {
        renderInit();
    };
    /**
 <div class="item">
                                <p>Stage 1</p>
                                <dl>
                                    <dt>Map1</dt>
                                    <dd>
                                        <span>bạc 240, exp 100</span>
                                    </dd>
                                </dl>
                            </div> */
    init();
})();

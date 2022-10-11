(function () {
    const render = $(".popup_shop .items");
    let _items = [...ITEMS];

    const renderItem = (e) => {
        return `<div class="button_nor b0 b1" data-hover="${e.desc}"><p>${e.name}</p><p>${e.price}</p></div>`;
    };
    const renderInit = () => {
        let _html = "";
        _items.map((a) => {
            _html += renderItem(a);
        });

        render.html(_html);
    };

    const init = () => {
        renderInit();
    };

    init();
})();

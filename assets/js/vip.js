(function () {
    const VIPUI = $(".user .vip");
    const VIPPopUp = $(".popup_vip .popup_heading");
    const VIPPopUpInfo = $(".popup_vip .vip_info");
    const VIPPopUpGift = $(".popup_vip .vip_gift");
    const VIPPopUpDailyInfo = $(".popup_vip .vip_daily_info");
    const VIPRightInfo = $(".vip_right_info");
    const VIPTabButton = $(".vip_right_tab .button");
    const VIPUpSubmit = $(".popup_vip .vip_up_submit");

    const UpdateUI = () => {
        let _vip = VIPState.vip;
        VIPUI.text(`VIP${_vip}`);
        VIPPopUp.text(`VIP${_vip}`);

        VIPPopUpGift.text(VipGift[+_vip]);
        let _next = Game.coin - VIPState.cost[_vip];

        let _txt = `nạp thêm ${VIPState.cost[_vip]} sẽ đạt VIP ${_vip + 1}`;
        if (_next < 0) {
            _txt = `nạp thêm ${Math.abs(_next)} sẽ đạt VIP ${_vip + 1}`;
        }
        VIPPopUpDailyInfo.text(_txt);

        $(".gold_card").text(Game.coin);

        VIPInit();
    };

    VIPTabButton.on("click", function () {
        const _ = $(this);
        if (_.hasClass("actived")) return false;

        const VIPTab = $(".vip_right_info .block");

        let _id = _.index();

        VIPTabButton.removeClass("actived");
        VIPTab.removeClass("actived");

        _.addClass("actived");
        VIPTab.eq(_id).addClass("actived");
    });

    VIPUpSubmit.on("click", function () {
        let _x = Game.coin - VIPState.cost[VIPState.vip];
        if (_x < 0 || VIPState.vip === VIPState.max) {
            Notification(false);
            return false;
        }
        let { vip } = VIPState;
        Game.coin = _x;
        VIPState.vip = vip + 1;
        UpdateUI();
        Notification(true);
    });

    const VIPGift = (e) => {
        if (e >= 12) return false;
        let _e = VipGift[e].join(" , ");

        return `<div class="gift">
                    <p>Quà hằng ngày:</p>
                    <p>${_e}</p>
                </div>`;
    };
    const VIPRight = (e) => {
        if (e >= 12) return false;
        let _e = VipRight[e],
            _ret = "";
        _e.map((a) => {
            _ret += `<li>${a}</li>`;
        });

        return _ret;
    };

    const VIPRightBlock = (e) => {
        let _gift = VIPGift(e),
            _right = VIPRight(e),
            _actived = e === VIPState.vip ? "actived" : "",
            _html = `<div class="block ${_actived}">
                    ${_gift}
                    <hr class="hr_custom">
                    <div class="advantage">
                        <ul class="ul_num ul_flex">
                            ${_right}
                        </ul>
                    </div>
                </div>`;
        return _html;
    };

    const VIPInit = () => {
        let { vip } = VIPState;
        let _html = "";

        for (let _i = 0; _i < 5; _i++) {
            VIPTabButton.eq(_i).text(`VIP ${_i + vip}`);
            _html += VIPRightBlock(_i + vip);
        }
        VIPRightInfo.html(_html);
    };

    VIPInit();
})();

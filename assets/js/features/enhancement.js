(function () {
    const Upgrade = ({
        cuonghoa_origin,
        tangsao,
        thanghoa,
        each_thanghoa,
        level,
        all_stat,
    }) => {
        let _level = level + 1,
            _cuonghoa = cuonghoa_origin * (1 + 0.5 * _level),
            _cuonghoa_back = _cuonghoa * 0.6;
        if (thanghoa) {
            for (let _s of all_stat) {
                let { ori, each_level } = _s.stat;
                let _perStar = UpgradeStarRule[tangsao],
                    _ori = ori * (1 + _perStar * 0.01),
                    _visible = _ori + (_level - 1) * each_level * each_thanghoa;

                _s.stat.visible = _visible;
            }
        } else {
            for (let _s of all_stat) {
                let { ori, each_level } = _s.stat;
                let _perStar = UpgradeStarRule[tangsao],
                    _ori = ori * (1 + _perStar * 0.01),
                    _visible = _ori + (_level - 1) * each_level;

                _s.stat.visible = _visible;
            }
        }
        return {
            cuonghoa: _cuonghoa | 0,
            cuonghoa_back: _cuonghoa_back | 0,
            level: _level,
            all_stat,
        };
    };

    const UpdateItemsSelect = (e) => {
        switch (e.rank) {
            case "white": {
                White[e.type] = { ...White[e.type], ...e.target };
                break;
            }
            case "green": {
                Green[e.type] = { ...Green[e.type], ...e.target };
                break;
            }
            case "red": {
                return Red[sort];
            }
            case "yellow": {
                return Yellow[sort];
            }
            case "orange": {
                return Orange[sort];
            }
            case "ahri": {
                return Ahri[sort];
            }

            default:
                break;
        }

        return false;
    };

    const EnhacementUpdateUI = ({
        cuonghoa,
        cuonghoa_back,
        tangsao,
        thanghoa,
        each_thanghoa,
        level,
        all_stat,
    }) => {
        const levelInsert = $(".enhacement_level"),
            statInsert = $(".enhacement_stat"),
            costInsert = $(".enhancement_cost"),
            deCostInsert = $(".enhancement_decost"),
            starInsert = $(".upgrade_star"),
            rateInsert = $(".enhacement_rate");

        levelInsert.text(level);
        switch (TabState.tab) {
            case "cuonghoa": {
                let _statInsert = "";
                if (thanghoa) {
                    for (let _s of all_stat) {
                        _statInsert += `<dl class="stat__inline c_white"><dt>${
                            _s.type
                        }</dt><dd><span class="ori">${
                            _s.stat.visible
                        }</span><span class="next">${
                            _s.stat.visible +
                            _s.stat.each_level * _s.each_thanghoa
                        }</span></dd></dl>`;
                    }
                }

                statInsert.html(_statInsert);
                costInsert.text(cuonghoa);
                deCostInsert.text(cuonghoa_back);
                break;
            }
            case "tangsao": {
                let _ori = UpgradeStarRule[tangsao],
                    _next = UpgradeStarRule[tangsao + 1],
                    _per = UpgradeStarRate[tangsao];

                let _html = "full * rồi má ơi";
                if (_next) {
                    _html = `<dt>Thuộc tính</dt>
                        <dd><span class="ori">${_ori}%</span><span class="next">${_next}%</span></dd>`;
                }
                starInsert.find(".stat__inline").html(_html);
                rateInsert.find(".rate").text(`${_per}%`);
                break;
            }

            default:
                break;
        }
    };

    const Enhacement = () => {
        const _ = $(".button_enhancement");

        _.on("click", function () {
            let _check = Object.keys(StateEnhacement.target).length;
            if (!_check) {
                alert("chua chon trang bi");
                return false;
            }

            let _upgrade = Upgrade(StateEnhacement.target);

            StateEnhacement.target = { ...StateEnhacement.target, ..._upgrade };

            EnhacementUpdateUI(StateEnhacement.target);
            UpdateItemsSelect(StateEnhacement);
        });
    };
    Enhacement();

    const ItemsSelect = (rank = "white", sort = "vukhi", isGod = false) => {
        switch (rank) {
            case "white": {
                return White[sort];
            }
            case "green": {
                return Green[sort];
            }
            case "red": {
                return Red[sort];
            }
            case "yellow": {
                return Yellow[sort];
            }
            case "orange": {
                return Orange[sort];
            }
            case "ahri": {
                return Ahri[sort];
            }

            default:
                break;
        }

        return false;
    };

    const EnhacementItemsInit = () => {
        const __ = $(".enhacement_items .item"),
            name = $(".enhacement__name");
        __.on("click", function () {
            const _ = $(this);
            let _rank = _.attr("data-rank"),
                _type = _.attr("data-type");

            let a = ItemsSelect(_rank, _type);
            StateEnhacement.target = a;
            StateEnhacement.type = _type;
            StateEnhacement.rank = _rank;

            name.text(a.name);
            EnhacementUpdateUI(a);
        });
    };
    EnhacementItemsInit();

    // > UpgradeStar

    const UpgradeStar = ({ level, tangsao, all_stat }) => {
        let _tangsao = tangsao + 1;

        for (let _s of all_stat) {
            let { ori, each_level } = _s.stat,
                _per = UpgradeStarRule[_tangsao],
                _ori = ori * (1 + _per * 0.01),
                _visible = _ori + (level - 1) * each_level;

            console.log(_ori);
            _s.stat.visible = _visible;
        }

        return {
            tangsao: _tangsao,
            all_stat,
        };
    };

    const UpgradeStarUI = () => {
        // <dd><span class="ori">5%</span><span class="next">10%</span></dd>
    };

    const UpgradeStarInit = () => {
        const _ = $(".button_upgrade_star");

        _.on("click", function () {
            let _check = Object.keys(StateEnhacement.target).length;
            if (!_check) {
                alert("chua chon trang bi");
                return false;
            }
            if (StateEnhacement.target.tangsao >= 10) {
                alert("max roi má ơi");
                return false;
            }

            let _up = UpgradeStar(StateEnhacement.target);

            console.log(_up);
            StateEnhacement.target = { ...StateEnhacement.target, ..._up };

            EnhacementUpdateUI(StateEnhacement.target);
            UpdateItemsSelect(StateEnhacement);
        });
    };

    const UpgradeStarArea = () => {
        UpgradeStarInit();
    };
    UpgradeStarArea();
})();

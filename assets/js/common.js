const Game = {
    coin: 10000,
    coin_in_game: 0,
    silver: 1000,

    // vip
    vip: {
        map_bonus: [
            0, 0, 0, 5, 10, 15, 20, 25, 30, 40, 50, 80, 100, 110, 130, 150,
        ],
        collect_bonus: [
            0, 0, 0, 5, 10, 15, 20, 25, 30, 40, 50, 80, 100, 110, 130, 150,
        ],
    },

    // player
    player: {
        origin: 50,
        visible: 50,
        level: 1,
        el: 0.8,
        el_origin: 0.8,
    },

    //collect_silver
    collect_silver: {
        origin: 160,
        bonus: [0, 0, 0, 0, 0, 5, 10, 15, 20, 30, 40, 55, 70, 90, 120, 150],
    },
};

const Submit = () => {
    const _ = $(".button_submit");
    _.on("click", function () {
        const __ = $(this);

        let _yn = __.attr("data-submit");
        if (_yn === "yes") {
            Notification(true);
        }
        __.parents(".popup").removeClass("actived");
    });
};
Submit();

const StateEnhacement = {
    target: {},
    type: "",
    rank: "",
};
const UpgradeStarRule = [0, 5, 10, 15, 20, 30, 40, 50, 60, 80, 100];
const UpgradeStarRate = [100, 80, 60, 50, 40, 30, 20, 15, 10, 5, 0];

/**
 reset
 */
const ItemNameHTML = $(".enhacement__name"),
    ItemLevelHTML = $(".enhacement_level");

const ResetUI = () => {
    StateEnhacement.target = {};
    StateEnhacement.type = "";
    StateEnhacement.rank = "";

    ItemNameHTML.html("");
    ItemLevelHTML.html("0");
};
const TabState = {
    tab: "cuonghoa",
};
const WeaponsItem = [
    {
        id: "w1",
        name: "w1 vl roi",
        cost_start: 100,
        cost_each: 100,
        cost_next: function (e) {
            return e * this.cost_each + this.cost_start;
        },
    },
];

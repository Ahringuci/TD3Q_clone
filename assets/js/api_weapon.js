const White = {
    vukhi: {
        name: "white - vu khi",
        cuonghoa: 75,
        cuonghoa_back: 0,
        cuonghoa_origin: 75,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Công",
                stat: {
                    ori: 15,
                    each_level: 3,
                    visible: 15,
                },
            },
        ],
    },

    non: {
        name: "white - non",
        cuonghoa: 50,
        cuonghoa_back: 0,
        cuonghoa_origin: 50,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Cong",
                stat: {
                    ori: 8,
                    each_level: 1,
                    visible: 8,
                },
            },
            {
                type: "Pvi",
                stat: {
                    ori: 5,
                    each_level: 0.5,
                    visible: 5,
                },
            },
        ],
    },

    ao: {
        name: "white - ao",
        cuonghoa: 50,
        cuonghoa_back: 0,
        cuonghoa_origin: 50,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Máu",
                stat: {
                    ori: 200,
                    each_level: 40,
                    visible: 200,
                },
            },
        ],
    },

    tay: {
        name: "white - tay",
        cuonghoa: 50,
        cuonghoa_back: 0,
        cuonghoa_origin: 50,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Cong",
                stat: {
                    ori: 7,
                    each_level: 1,
                    visible: 7,
                },
            },
            {
                type: "Toc",
                stat: {
                    ori: 5,
                    each_level: 0.25,
                    visible: 5,
                },
            },
        ],
    },

    giay: {
        name: "white - giay",
        cuonghoa: 50,
        cuonghoa_back: 0,
        cuonghoa_origin: 50,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Toc",
                stat: {
                    ori: 10,
                    each_level: 0.5,
                    visible: 10,
                },
            },
            {
                type: "Mau",
                stat: {
                    ori: 50,
                    each_level: 20,
                    visible: 50,
                },
            },
        ],
    },
};

const Green = {
    vukhi: {
        name: "green - vu khi",
        cuonghoa: 75,
        cuonghoa_back: 0,
        cuonghoa_origin: 75,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Công",
                stat: {
                    ori: 15,
                    each_level: 3,
                    visible: 15,
                },
            },
        ],
    },
};

const Red = {
    vukhi: {
        name: "Sư Phiến",
        cuonghoa: 75,
        cuonghoa_back: 0,
        cuonghoa_origin: 75,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Công",
                stat: {
                    ori: 15,
                    each_level: 3,
                    visible: 15,
                },
            },
        ],
    },
};

const Yellow = {
    vukhi: {
        name: "Sư Phiến",
        cuonghoa: 75,
        cuonghoa_back: 0,
        cuonghoa_origin: 75,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: false,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Công",
                stat: {
                    ori: 15,
                    each_level: 3,
                    visible: 15,
                },
            },
        ],
    },
};

const Orange = {
    vukhi: {
        name: "orange vukhi",
        cuonghoa: 75,
        cuonghoa_back: 0,
        cuonghoa_origin: 75,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: true,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Công",
                stat: {
                    ori: 15,
                    each_level: 3,
                    visible: 15,
                    each_teluyen: 15,
                    each_thanghoa: 15,
                },
            },
        ],
    },
};

const Ahri = {
    vukhi: {
        name: "ahri vukhi",
        cuonghoa: 405,
        cuonghoa_back: 0,
        cuonghoa_origin: 75,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: true,
        each_thanghoa: 2.5,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Công",
                stat: {
                    ori: 150,
                    each_level: 10,
                    visible: 150,
                    each_teluyen: 15,
                },
            },
            {
                type: "Toc",
                stat: {
                    ori: 25,
                    each_level: 0.2,
                    visible: 15,
                    each_teluyen: 15,
                },
            },
        ],
    },
    giay: {
        name: "ahri vukhi",
        cuonghoa: 405,
        cuonghoa_back: 0,
        cuonghoa_origin: 75,

        level: 1,

        tangsao: 0,
        tangsao_next: 0,

        thanghoa: true,
        thanghoa_is_ok: false,

        teluyen: 0,
        teluyen_need: 0,

        all_stat: [
            {
                type: "Toc",
                stat: {
                    ori: 40,
                    each_level: 2,
                    visible: 40,
                    each_teluyen: 15,
                    each_thanghoa: 15,
                },
            },
            {
                type: "Mau",
                stat: {
                    ori: 300,
                    each_level: 84,
                    visible: 300,
                    each_teluyen: 15,
                    each_thanghoa: 15,
                },
            },
        ],
    },
};

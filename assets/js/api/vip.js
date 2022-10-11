const VIPState = {
    vip: 0,
    max: 15,
    cost: 10,
    cost: [
        10, 20, 50, 100, 150, 200, 300, 500, 1000, 2000, 3000, 4000, 6000, 8500,
        12000, 16000,
    ],
};

const VipGift = [
    // vip 0
    ["thẻ 1k bạc ", "thẻ 1k gỗ", "thẻ 1k đá"],
    // vip 1
    ["thẻ 1k bạc x10 ", "thẻ 1k gỗ x10", "thẻ 1k đá x10"],
    // vip 2
    ["thẻ 1k bạc x20 ", "thẻ 1k gỗ x20", "thẻ 1k đá x20"],
    // vip 3
    ["thẻ 1k bạc x40 ", "thẻ 1k gỗ x40", "thẻ 1k đá x40"],
    // vip 4
    ["thẻ 1k bạc x60 ", "thẻ 1k gỗ x60", "thẻ 1k đá x60"],
    // vip 5
    ["thẻ 1k bạc x100 ", "thẻ 1k gỗ x100", "thẻ 1k đá x100"],
    // vip 6
    ["thẻ 1k bạc x140 ", "thẻ 1k gỗ x140", "thẻ 1k đá x140"],
    // vip 7
    ["thẻ 1k bạc x200 ", "thẻ 1k gỗ x200", "thẻ 1k đá x200"],
    // vip 8
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
    // vip 9
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
    // vip 10
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
    // vip 11
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
    // vip 12
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
    // vip 13
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
    // vip 14
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
    // vip 15
    ["thẻ 1k bạc x300 ", "thẻ 1k gỗ x300", "thẻ 1k đá x300"],
];

const VipRight = [
    // vip 0
    [
        "tướng tối đa: 10",
        "giới hạn cướp: 10",
        "giới hạn kho gỗ: 200000",
        "giới hạn kho đá: 200000",
    ],
    // vip 1
    [
        "tướng tối đa: 14",
        "giới hạn cướp: 15",
        "giới hạn kho gỗ: 300000",
        "giới hạn kho đá: 300000",
        "thu tài nguyên +5%",
    ],
    // vip 2
    [
        "tướng tối đa: 18",
        "giới hạn cướp: 20",
        "giới hạn kho gỗ: 400000",
        "giới hạn kho đá: 400000",
        "thu tài nguyên +7%",
    ],
    // vip 3
    [
        "tướng tối đa: 22",
        "giới hạn cướp: 25",
        "giới hạn kho gỗ: 500000",
        "giới hạn kho đá: 500000",
        "thu tài nguyên +10%",
        "cướp tài nguyên +5%",
    ],
    // vip 4
    [
        "tướng tối đa: 26",
        "giới hạn cướp: 30",
        "giới hạn kho gỗ: 600000",
        "giới hạn kho đá: 600000",
        "thu tài nguyên +14%",
        "cướp tài nguyên +10%",
    ],
    // vip 5
    [
        "tướng tối đa: 30",
        "giới hạn cướp: 35",
        "giới hạn kho gỗ: 700000",
        "giới hạn kho đá: 700000",
        "thu tài nguyên +19%",
        "tỉ lệ cường hóa + 1%",
        "cướp tài nguyên +15%",
    ],
    // vip 6
    [
        "tướng tối đa: 34",
        "giới hạn cướp: 40",
        "giới hạn kho gỗ: 800000",
        "giới hạn kho đá: 800000",
        "thu tài nguyên +25%",
        "tỉ lệ cường hóa + 1.5%",
        "cướp tài nguyên +20%",
    ],
    // vip 7
    [
        "tướng tối đa: 38",
        "giới hạn cướp: 45",
        "giới hạn kho gỗ: 900000",
        "giới hạn kho đá: 900000",
        "thu tài nguyên +32%",
        "tỉ lệ cường hóa + 2%",
        "cướp tài nguyên +25%",
    ],
    // vip 8
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
    // vip 9
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
    // vip 10
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
    // vip 11
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
    // vip 12
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
    // vip 13
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
    // vip 14
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
    // vip 15
    [
        "tướng tối đa: 45",
        "giới hạn cướp: 55",
        "giới hạn kho gỗ: 1200000",
        "giới hạn kho đá: 1200000",
        "thu tài nguyên +40%",
        "tỉ lệ cường hóa + 3%",
        "cướp tài nguyên +35%",
    ],
];

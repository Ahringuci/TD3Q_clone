const Notification = (e = true, txt = "Lorem ipsum dolor sit amet") => {
    const _ = $(".notice");
    let _txt = `<span class="fail">no access</span>`;
    if (e) {
        _txt = `<span class="notice_item success">${txt}</span>`;
    } else {
        _txt = `<span class="notice_item fail">${txt}</span>`;
    }

    _.append(_txt);
    setTimeout(() => {
        $(".notice_item").eq(0).remove();
    }, 1000);
};

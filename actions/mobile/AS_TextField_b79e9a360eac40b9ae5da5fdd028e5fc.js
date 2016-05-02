function AS_TextField_b79e9a360eac40b9ae5da5fdd028e5fc(eventobject, changedtext) {
    if (frmLoginKA.tBoxEmailLoginKA.text != "" && frmLoginKA.tBoxPasswordLoginKA.text != "") {
        frmLoginKA.btnLoginKA.skin = sknBtnOpenSLFFFFFFB0033a1OnKA;
    } else {
        frmLoginKA.btnLoginKA.skin = sknBtnOpenSL808285BFFFFFFOffKA;
    }
}
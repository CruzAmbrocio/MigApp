function AS_TextField_b79e9a360eac40b9ae5da5fdd028e5fc(eventobject, changedtext) {
    if (frmLoginKA.tBoxEmailLoginKA.text != "" && frmLoginKA.tBoxPasswordLoginKA.text != "") {
        frmLoginKA.btnLoginSectionKA.skin = sknBtnOpenSLFFFFFFB2b49b1125OnKA;
    }
    if (frmLoginKA.tBoxEmailLoginKA.text == "" && frmLoginKA.tBoxPasswordLoginKA.text == "") {
        frmLoginKA.btnLoginSectionKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
function AS_TextField_b96a75ee067d4c85bf771e7dbe6e4172(eventobject, changedtext) {
    if (frmLoginKA.tBoxEmailLoginKA.text != "" && frmLoginKA.tBoxPasswordLoginKA.text != "") {
        frmLoginKA.btnLoginSectionKA.skin = sknBtnOpenSLFFFFFFB2b49b1125OnKA;
    }
    if (frmLoginKA.tBoxEmailLoginKA.text == "" && frmLoginKA.tBoxPasswordLoginKA.text == "") {
        frmLoginKA.btnLoginSectionKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
function AS_TextField_b96a75ee067d4c85bf771e7dbe6e4172(eventobject, changedtext) {
    if (frmLoginKA.tBoxEmailLoginKA.text != "" && frmLoginKA.tBoxPasswordLoginKA.text != "") {
        frmLoginKA.btnLoginKA.skin = sknBtnOpenSLFFFFFFB0033a1OnKA;
    } else {
        frmLoginKA.btnLoginKA.skin = sknBtnOpenSL808285BFFFFFFOffKA;
    }
}
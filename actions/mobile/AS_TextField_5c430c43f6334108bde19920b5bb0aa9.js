function AS_TextField_5c430c43f6334108bde19920b5bb0aa9(eventobject, changedtext) {
    if (frmLoginKA.tBoxEnterEmailKA.text != "" && frmLoginKA.tBoxPasswordKA.text != "" && frmLoginKA.tBoxVerifyPasswordKA.text != "") {
        frmLoginKA.btnDoneSingKA.skin = sknBtnOpenSLFFFFFFB2b49b1125OnKA;
    }
    if (frmLoginKA.tBoxEnterEmailKA.text == "" && frmLoginKA.tBoxPasswordKA.text == "" && frmLoginKA.tBoxVerifyPasswordKA.text == "") {
        frmLoginKA.btnDoneSingKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
function AS_TextField_58a4dc5948704ffd96d3698ddbfcfed9(eventobject, changedtext) {
    if (frmLoginKA.tBoxEnterEmailKA.text != "" && frmLoginKA.tBoxPasswordKA.text != "" && frmLoginKA.tBoxVerifyPasswordKA.text != "") {
        frmLoginKA.btnDoneSingKA.skin = sknBtnOpenSLFFFFFFB2b49b1125OnKA;
    }
    if (frmLoginKA.tBoxEnterEmailKA.text == "" && frmLoginKA.tBoxPasswordKA.text == "" && frmLoginKA.tBoxVerifyPasswordKA.text == "") {
        frmLoginKA.btnDoneSingKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
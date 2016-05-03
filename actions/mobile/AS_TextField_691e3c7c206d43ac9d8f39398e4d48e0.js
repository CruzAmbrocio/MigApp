function AS_TextField_691e3c7c206d43ac9d8f39398e4d48e0(eventobject, changedtext) {
    if (frmLoginKA.tBoxEnterEmailKA.text != "" && frmLoginKA.tBoxPasswordKA.text != "" && frmLoginKA.tBoxVerifyPasswordKA.text != "") {
        frmLoginKA.btnDoneSingKA.skin = sknBtnOpenSLFFFFFFB2b49b1125OnKA;
    }
    if (frmLoginKA.tBoxEnterEmailKA.text == "" && frmLoginKA.tBoxPasswordKA.text == "" && frmLoginKA.tBoxVerifyPasswordKA.text == "") {
        frmLoginKA.btnDoneSingKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
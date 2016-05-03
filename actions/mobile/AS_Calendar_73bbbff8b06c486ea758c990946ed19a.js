function AS_Calendar_73bbbff8b06c486ea758c990946ed19a(eventobject, isValidDateSelected) {
    if (frmLoginKA.tBoxFullNameKA.text != "" && frmLoginKA.flxContainerCheckFemaleKA.skin != skn3ae8a1R100KA) {
        frmLoginKA.btnNextSingUpKA.skin = sknBtnOpenSLFFFFFFB2b49b1125OnKA;
    }
    if (frmLoginKA.tBoxFullNameKA.text != "" && frmLoginKA.flxContainerCheckMaleKA.skin != skn3ae8a1R100KA) {
        frmLoginKA.btnNextSingUpKA.skin = sknBtnOpenSLFFFFFFB2b49b1125OnKA;
    }
    if (frmLoginKA.tBoxFullNameKA.text == "" && frmLoginKA.flxContainerCheckFemaleKA.skin == skn3ae8a1R100KA) {
        frmLoginKA.btnNextSingUpKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
    if (frmLoginKA.tBoxFullNameKA.text == "" && frmLoginKA.flxContainerCheckMaleKA.skin == skn3ae8a1R100KA) {
        frmLoginKA.btnNextSingUpKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
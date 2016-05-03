function AS_TextField_8097f1cee8274b78a5d4d2eedbb1923b(eventobject, changedtext) {
    frmConfigDataAppKA.btnToogleImFromKA.isVisible = true;
    if (frmConfigDataAppKA.tBoxNameCityKA.text == "          ") {
        frmConfigDataAppKA.flxIndicatorCityMainKA.isVisible = false;
        frmConfigDataAppKA.tBoxNameCityKA.text = "";
        frmConfigDataAppKA.btnNextImFromKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
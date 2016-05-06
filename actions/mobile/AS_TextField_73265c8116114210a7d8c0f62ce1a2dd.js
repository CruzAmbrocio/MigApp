function AS_TextField_73265c8116114210a7d8c0f62ce1a2dd(eventobject, changedtext) {
    frmConfigDataAppKA.btnToogleImFromKA.isVisible = true;
    if (frmConfigDataAppKA.tBoxNameCityKA.text == "          ") {
        frmConfigDataAppKA.flxIndicatorCityMainKA.isVisible = false;
        frmConfigDataAppKA.tBoxNameCityKA.text = "";
        frmConfigDataAppKA.btnNextImFromKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
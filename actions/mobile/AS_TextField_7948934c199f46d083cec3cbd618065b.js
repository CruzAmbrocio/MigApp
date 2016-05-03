function AS_TextField_7948934c199f46d083cec3cbd618065b(eventobject, changedtext) {
    frmConfigDataAppKA.flxContainerToogleNowCityKA.isVisible = true;
    if (frmConfigDataAppKA.tBoxNameCityNowKA.text == "          ") {
        frmConfigDataAppKA.flxIndicatorCityNowKA.isVisible = false;
        frmConfigDataAppKA.tBoxNameCityNowKA.text = "";
        frmConfigDataAppKA.btnDoneConfigKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
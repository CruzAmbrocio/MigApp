function AS_TextField_93d0e49e1453416b8aebb6f665841101(eventobject, changedtext) {
    frmConfigDataAppKA.flxContainerToogleNowCityKA.isVisible = true;
    if (frmConfigDataAppKA.tBoxNameCityNowKA.text == "          ") {
        frmConfigDataAppKA.flxIndicatorCityNowKA.isVisible = false;
        frmConfigDataAppKA.tBoxNameCityNowKA.text = "";
        frmConfigDataAppKA.btnDoneConfigKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
    }
}
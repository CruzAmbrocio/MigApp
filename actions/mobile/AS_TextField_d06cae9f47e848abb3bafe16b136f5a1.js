function AS_TextField_d06cae9f47e848abb3bafe16b136f5a1(eventobject, changedtext) {
    frmNewsKA.flxSelectorToKA.isVisible = true;
    if (frmNewsKA.tBoxToNewsKA.text == "         ") {
        frmNewsKA.flxIndicatorToKA.isVisible = false;
        frmNewsKA.tBoxToNewsKA.text = "";
    }
}
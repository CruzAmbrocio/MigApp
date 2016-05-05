function AS_TextField_db2ac38e68044969891f9916f3b47c9f(eventobject, changedtext) {
    frmNewsKA.flxSelectorToKA.isVisible = true;
    if (frmNewsKA.tBoxToNewsKA.text == "         ") {
        frmNewsKA.flxIndicatorToKA.isVisible = false;
        frmNewsKA.tBoxToNewsKA.text = "";
    }
}
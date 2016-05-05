function AS_TextField_da0ff0cf455d4cc2ab8b2bc4cb16eae5(eventobject, changedtext) {
    frmNewsKA.flxSelectorFromKA.isVisible = true;
    if (frmNewsKA.tBoxFromNewsKA.text == "         ") {
        frmNewsKA.flxIndicatorCommunityKA.isVisible = false;
        frmNewsKA.tBoxFromNewsKA.text = "";
    }
}
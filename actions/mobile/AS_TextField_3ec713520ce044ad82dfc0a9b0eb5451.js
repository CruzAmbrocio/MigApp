function AS_TextField_3ec713520ce044ad82dfc0a9b0eb5451(eventobject, changedtext) {
    frmNewsKA.flxSelectorFromKA.isVisible = true;
    if (frmNewsKA.tBoxFromNewsKA.text == "         ") {
        frmNewsKA.flxIndicatorCommunityKA.isVisible = false;
        frmNewsKA.tBoxFromNewsKA.text = "";
    }
}
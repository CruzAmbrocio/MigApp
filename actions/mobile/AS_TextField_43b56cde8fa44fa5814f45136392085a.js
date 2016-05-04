function AS_TextField_43b56cde8fa44fa5814f45136392085a(eventobject, changedtext) {
    frmNewsKA.flxSelectorFromKA.isVisible = true;
    if (frmNewsKA.tBoxFromNewsKA.text == "          ") {
        frmNewsKA.flxIndicatorCommunityKA.isVisible = false;
        frmNewsKA.tBoxFromNewsKA.text = "";
    }
}
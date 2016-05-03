function AS_Button_60dde11f5ed1438aa10b4df347a83889(eventobject) {
    trancitionLeft("17%", "lblLineIndicatorKA", 0, 0.5);
    trancitionLeft("0%", "flxContainerLoginPartKA", 0, 0.5);
    trancitionLeft("100%", "flxContainerSingUpPartKA", 0, 0.5);
    frmLoginKA.tBoxEmailLoginKA.text = "";
    frmLoginKA.tBoxPasswordLoginKA.text = "";
    frmLoginKA.lblNameAppKA.isVisible = true;
    frmLoginKA.flxProfilePhotoKA.isVisible = false;
    frmLoginKA.imgUploadImageKA.isVisible = false;
    frmLoginKA.imgCameraKA.isVisible = true;
    frmLoginKA.btnNextSingUpKA.skin = sknBtnOpenSLc4c4c4BFFFFFFOffKA;
}
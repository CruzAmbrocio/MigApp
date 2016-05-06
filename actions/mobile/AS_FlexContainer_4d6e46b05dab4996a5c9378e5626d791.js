function AS_FlexContainer_4d6e46b05dab4996a5c9378e5626d791(eventobject) {
    if (frmNewsKA.flxHealthKA.skin == skn3ae8a1R100KA && frmNewsKA.flxInformationKA.skin == skn3ae8a1R100KA) {
        frmNewsKA.flxHealthKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.flxInformationKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.flxIomKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.imgHealthKA.src = "hospital.png";
        frmNewsKA.imgInfoKA.src = "mig.png";
        frmNewsKA.imgIomKA.src = "iom.png";
        //frmNewsKA.lblTimeInMinKA.isVisible = false;
    } else {
        frmNewsKA.flxIomKA.skin = skn3ae8a1R100KA;
        frmNewsKA.imgIomKA.src = "iomactive.png";
    }
}
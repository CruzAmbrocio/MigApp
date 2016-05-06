function AS_FlexContainer_30955361cd9d46dba0a44c0c01ec6a33(eventobject) {
    if (frmNewsKA.flxHealthKA.skin == skn3ae8a1R100KA && frmNewsKA.flxInformationKA.skin == skn3ae8a1R100KA) {
        frmNewsKA.flxHealthKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.flxInformationKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.flxIomKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.imgHealthKA.src = "hospital.png";
        frmNewsKA.imgInfoKA.src = "mig.png";
        frmNewsKA.imgIomKA.src = "iom.png";
        //frmNewsKA.Label067379a9013d449.isVisible = false;
    } else {
        frmNewsKA.flxHealthKA.skin = skn3ae8a1R100KA;
        frmNewsKA.imgHealthKA.src = "iomactive.png";
        //frmNewsKA.Label067379a9013d449.isVisible = true;
    }
}
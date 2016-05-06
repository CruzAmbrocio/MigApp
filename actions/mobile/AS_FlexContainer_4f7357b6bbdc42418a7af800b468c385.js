function AS_FlexContainer_4f7357b6bbdc42418a7af800b468c385(eventobject) {
    if (frmNewsKA.flxHealthKA.skin == skn3ae8a1R100KA && frmNewsKA.flxInformationKA.skin == skn3ae8a1R100KA) {
        frmNewsKA.flxHealthKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.flxInformationKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.flxIomKA.skin = sknFlxFFFFFFR100KA;
        frmNewsKA.imgHealthKA.src = "hospital.png";
        frmNewsKA.imgInfoKA.src = "mig.png";
        frmNewsKA.imgIomKA.src = "iom.png";
        //frmNewsKA.lblTimeInMinKA.isVisible = false;
    } else {
        frmNewsKA.flxInformationKA.skin = skn3ae8a1R100KA;
        frmNewsKA.imgInfoKA.src = "migactive.png";
    }
}
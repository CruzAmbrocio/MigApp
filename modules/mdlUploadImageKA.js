/**
 * @module File04e90ce45d07247
 *
 * @author Cruz Ambrocio <cruzambrocio1409@gmail.com>
 */

function opnMd()
{
var querycontext = {mimetype:"image/*"};
    returnStatus = kony.phone.openMediaGallery(onselectioncallback, querycontext);
    //alert("Status is :" +returnStatus);
}

function onselectioncallback(rawbytes){
	// alert("in selection callback");
	if (rawbytes == null){
      //alert("nothing selected");
      return;
	}
    //alert("return status is "+returnStatus);
    var pForm = kony.application.getCurrentForm();
    var base64 = kony.convertToBase64(rawbytes);
    pForm.imgUploadImageKA.isVisible = true;
    pForm.imgCameraKA.isVisible = false;
  	pForm.imgUploadImageKA.base64 = base64;
}
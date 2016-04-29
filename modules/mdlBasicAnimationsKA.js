/**
 * @module File04e90ce45d07247
 *
 * @author Cruz Ambrocio <cruzambrocio1409@gmail.com>
 */

function trancitionLeft(distance, form, delay, duration){
 var pForm = kony.application.getCurrentForm();
 try {
   pForm[form].animate(
   kony.ui.createAnimation(
   {"100":{
     "left": distance, "stepConfig":{
       "timingFunction": kony.anim.EASE
         }
     }
   }
   ),
     {"delay": delay, "iterationCount": 1, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration":duration},
     {"animationEnd": function(){ }
     }
    );
 } catch (e) {
 }
}

function trancitionTop(distance, form, delay, duration){
 var pForm = kony.application.getCurrentForm();
 try {
   pForm[form].animate(
   kony.ui.createAnimation(
   {"100":{
     "top": distance, "stepConfig":{
       "timingFunction": kony.anim.EASE
         }
     }
   }
   ),
     {"delay": delay, "iterationCount": 1, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration":duration},
     {"animationEnd": function(){ }
     }
    );
 } catch (e) {
 }
}

function appearShadow(form, opacity){
var pForm = kony.application.getCurrentForm();
    pForm[form].animate(
     kony.ui.createAnimation(
       {"100":
        {"stepConfig":
         {"timingFunction":kony.anim.EASE
         },
         "opacity": opacity
        }
       } 
     ),
     {"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.2},
     {"animationEnd" : function(){ }
     }
   );
}



function trancitionTopSplash(distance, form, delay, duration){
 var pForm = kony.application.getCurrentForm();
 try {
   pForm[form].animate(
   kony.ui.createAnimation(
   {"100":{
     "top": distance, "stepConfig":{
       "timingFunction": kony.anim.EASE
         }
     }
   }
   ),
     {"delay": delay, "iterationCount": 1, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration":duration},
     {"animationEnd": function(){
       frmLoginKA.show();
     }
     }
    );
 } catch (e) {
 }
}

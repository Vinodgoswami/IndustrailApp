// cc.IAButtonDelegate = cc.Class.extend({
//    buttonPressed: function(sender){
//    }
// });

var IAButton = ccui.Button.extend({
    mDelegate : null,

  ctor: function (buttonImage, buttonPosition, buttonTag) {
      this._super();
      this.initWithData(buttonImage,buttonPosition, buttonTag);
      return true;
   },

  onEnter: function(){
       this._super();
  },

  initWithData : function(buttonImage, buttonPosition, buttonTag) {
      this.loadTextures(buttonImage, buttonImage);
      this.setPosition(cc.p(buttonPosition.x, buttonPosition.y));
      this.setTag(buttonTag);
      this.addTouchEventListener(this.buttonCallback, this);
    },

  buttonCallback : function (sender, type) {
        switch (type) {
          case ccui.Widget.TOUCH_BEGAN:
              cc.log("Button pressed");
              //this.mDelegate.buttonPressed(sender);
            break;
        }

    },
  onExit: function () {
      this._super();
    },
});

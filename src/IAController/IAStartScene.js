var kStartLayerTag                =                                 100;
var IAStartLayer = IABaseLayer.extend({

    ctor: function () {
        var size  = cc.winSize;
        this._super(size, (size.width/2, size.height/2), kStartLayerTag);
        return true;
    },

    onEnter: function () {
       this._super();
       this.createUI();
    } ,

    createUI: function () {
        var startButton = new IAStartButton();
        //startButton.mDelegate = this;
        this.addChild(startButton, 1);
    },

    onExit: function () {
        this._super();

    },
    startButtonPressed: function () {
        cc.log("start Button Pressed");
    }

});

var IaStartScene = cc.Scene.extend({
    onEnter: function () {
      this._super();
      var IaStartLayer = new IAStartLayer();
      this.addChild(IaStartLayer);
    },
});
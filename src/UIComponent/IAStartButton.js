
var kStartButtonTag               =                                 101;

size = cc.winSize;
var IAStartButton = IAButton.extend({
     mDelegate : null,

    ctor: function () {
        this._super(res.startBTN_png, cc.p(size.width/2, size.height/2), kStartButtonTag);
        return true;
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    },

});
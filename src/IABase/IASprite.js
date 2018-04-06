
var IASprite = cc.Sprite.extend({
    ctor: function (spriteName, spritePosition, spriteTag) {
        this._super();
        this.initWithData(spriteName, spritePosition, spriteTag);
        return true;
    },

    onEnter: function(){
        this._super();
    },

    initWithData: function(spriteName, spritePosition, spriteTag) {
        this.setTexture(spriteName);
        this.setPosition(cc.p(spritePosition.x, spritePosition.y));
        this.setTag(spriteTag);
    },

    onExit: function () {
        this._super();
    }

});
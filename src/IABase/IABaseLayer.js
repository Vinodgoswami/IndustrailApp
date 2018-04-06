
/**
 * IABaseLayer:
 * IABaseLayer is the super class of every layer of project except self.
 */
var IABaseLayer = cc.LayerColor.extend({

    ctor: function(size, position, tag){
        this._super();
        this.initWithData(size, position, tag);
        return true;
    },

    onEnter: function () {
      this._super();
    },

    /**
     * initWithData : This will customised the base layer properties.
     * @param size: Size of the layer.
     * @param position: position of the layer.
     * @param tag: Tag of the layer.
     */
    initWithData: function (size, position, tag) {
      this.setContentSize(size);
      this.setPosition(cc.p(position.x, position.y));
      this.setTag(tag);
      this.setColor(cc.color(200,200,200));
    },

    onExit(){
      this._super();
    },

});
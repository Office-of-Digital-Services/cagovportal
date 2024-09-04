document.addEventListener("DOMContentLoaded", function () {
  init();
});

(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];
  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:
  // helper functions:
  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }
  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }
  (lib.star2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#C0A05C")
      .s()
      .p("AAAIEIp6HNIDyrqIp6nNIMRAAIDxrqIDzLqIMQAAIp7HNIDzLqg");
    this.shape.setTransform(0, 0.025);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-102.7, -97.6, 205.4, 195.3);
  (lib.star = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // timeline functions:
    this.frame_35 = function () {
      this.stop();
    };
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1)
    );
    // Layer_1_copy_copy_copy_copy_copy_copy_copy
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("rgba(192,160,92,0)")
      .s()
      .p("AAAIEIp6HNIDzrqIp7nNIMQAAIDyrqIDyLqIMRAAIp7HNIDzLqg");
    this.shape.setTransform(111.6818, 0.0185, 0.0117, 0.0117, 90);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("rgba(192,160,92,0.071)")
      .s()
      .p("AgEAIIgPAFIAKgNIgKgMIAPAFIAJgNIAAAQIAPAEIgPAFIAAAQg");
    this.shape_1.setTransform(104.225, 0);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("rgba(192,160,92,0.141)")
      .s()
      .p("AgGAMIgVAHIANgTIgNgRIAVAGIANgSIAAAYIAVAFIgVAHIAAAXg");
    this.shape_2.setTransform(96.8, 0);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("rgba(192,160,92,0.216)")
      .s()
      .p("AgIAPIgcAJIASgYIgSgWIAcAJIARgZIAAAeIAcAIIgcAKIAAAdg");
    this.shape_3.setTransform(89.35, 0);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("rgba(192,160,92,0.286)")
      .s()
      .p("AgKASIgiAMIAVgeIgVgcIAiALIAVgeIAAAlIAiAKIgiALIAAAlg");
    this.shape_4.setTransform(81.925, 0.025);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("rgba(192,160,92,0.357)")
      .s()
      .p("AgMAWIgpANIAZgjIgZgiIApANIAZgjIAAAsIApAMIgpANIAAAsg");
    this.shape_5.setTransform(74.5, 0.025);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("rgba(192,160,92,0.427)")
      .s()
      .p("AgOAZIgvAQIAdgpIgdgnIAvAPIAdgpIAAAzIAvAOIgvAQIAAAyg");
    this.shape_6.setTransform(67.05, 0.025);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("rgba(192,160,92,0.502)")
      .s()
      .p("AgQAdIg2ARIAiguIgigtIA2ASIAhgvIAAA6IA2AQIg2ASIAAA5g");
    this.shape_7.setTransform(59.625, 0.025);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("rgba(192,160,92,0.573)")
      .s()
      .p("AgSAgIg9AUIAmg0IgmgzIA9AUIAlg0IAABAIA9ATIg9AUIAABAg");
    this.shape_8.setTransform(52.175, 0.025);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("rgba(192,160,92,0.643)")
      .s()
      .p("AgUAkIhDAVIAqg5Igqg4IBDAWIApg6IAABHIBDAVIhDAWIAABHg");
    this.shape_9.setTransform(44.725, 0.025);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("rgba(192,160,92,0.714)")
      .s()
      .p("AgWAnIhKAYIAug/Igug+IBKAYIAtg/IAABOIBKAXIhKAYIAABOg");
    this.shape_10.setTransform(37.3, 0.025);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("rgba(192,160,92,0.784)")
      .s()
      .p("AgYAqIhQAbIAxhFIgxhEIBQAaIAxhDIAABUIBQAZIhQAaIAABUg");
    this.shape_11.setTransform(29.875, 0.05);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("rgba(192,160,92,0.859)")
      .s()
      .p("AgaAtIhXAdIA2hKIg2hJIBXAcIA1hJIAABbIBXAbIhXAcIAABbg");
    this.shape_12.setTransform(22.425, 0.05);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("rgba(192,160,92,0.929)")
      .s()
      .p("AgcAxIhdAfIA6hQIg6hPIBdAfIA5hPIAABiIBeAdIheAeIAABig");
    this.shape_13.setTransform(15, 0.05);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#C0A05C")
      .s()
      .p("AAAIEIp6HNIDzrqIp7nNIMQAAIDyrqIDyLqIMRAAIp7HNIDzLqg");
    this.shape_14.setTransform(7.5416, 0.053, 0.134, 0.134, 90);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("rgba(192,160,92,0.953)")
      .s()
      .p("AgeA1IhlAhIA+hWIg+hVIBlAhIA+hWIAABqIBkAgIhkAhIAABqg");
    this.shape_15.setTransform(2.6, 0.05);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("rgba(192,160,92,0.906)")
      .s()
      .p("AgeA2IhnAhIBAhXIhAhWIBnAhIA+hXIAABrIBmAhIhmAhIAABsg");
    this.shape_16.setTransform(-2.35, 0.05);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("rgba(192,160,92,0.859)")
      .s()
      .p("AgfA2IhoAiIBAhYIhAhXIBoAhIA/hYIAABtIBnAhIhnAiIAABtg");
    this.shape_17.setTransform(-7.3, 0.05);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("rgba(192,160,92,0.808)")
      .s()
      .p("AgfA3IhpAiIBBhZIhBhYIBpAiIA/hZIAABuIBpAhIhpAiIAABug");
    this.shape_18.setTransform(-12.25, 0.05);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("rgba(192,160,92,0.761)")
      .s()
      .p("AggA3IhqAjIBChaIhChZIBqAjIBAhaIAABuIBrAiIhrAjIAABug");
    this.shape_19.setTransform(-17.2, 0.05);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("rgba(192,160,92,0.714)")
      .s()
      .p("AggA4IhrAjIBChbIhChaIBrAjIBBhbIAABwIBrAiIhrAjIAABwg");
    this.shape_20.setTransform(-22.15, 0.05);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("rgba(192,160,92,0.667)")
      .s()
      .p("AggA5IhsAjIBChcIhChbIBsAjIBBhcIAAByIBsAiIhsAjIAAByg");
    this.shape_21.setTransform(-27.1, 0.025);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("rgba(192,160,92,0.62)")
      .s()
      .p("AghA5IhtAkIBDhdIhDhcIBtAkIBCheIAABzIBuAjIhuAjIAAB0g");
    this.shape_22.setTransform(-32.05, 0.05);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("rgba(192,160,92,0.573)")
      .s()
      .p("AghA6IhvAkIBFheIhFhdIBvAkIBDheIAAB0IBuAjIhuAjIAAB1g");
    this.shape_23.setTransform(-37, 0.05);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("rgba(192,160,92,0.525)")
      .s()
      .p("AghA7IhwAkIBFhfIhFheIBwAlIBDhgIAAB1IBwAkIhwAkIAAB1g");
    this.shape_24.setTransform(-41.95, 0.05);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("rgba(192,160,92,0.475)")
      .s()
      .p("AgiA7IhxAlIBGhgIhGhfIBxAlIBFhgIAAB3IBxAjIhxAlIAAB2g");
    this.shape_25.setTransform(-46.925, 0.025);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("rgba(192,160,92,0.427)")
      .s()
      .p("AgiA8IhyAlIBHhhIhHhgIByAlIBFhhIAAB4IByAkIhyAlIAAB4g");
    this.shape_26.setTransform(-51.875, 0.025);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .f("rgba(192,160,92,0.38)")
      .s()
      .p("AgiA8Ih0AmIBIhiIhIhhIB0AmIBGhiIAAB5IBzAkIhzAlIAAB5g");
    this.shape_27.setTransform(-56.825, 0.025);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .f("rgba(192,160,92,0.333)")
      .s()
      .p("AgjA9Ih0AlIBIhiIhIhiIB0AmIBHhjIAAB6IB0AlIh0AlIAAB7g");
    this.shape_28.setTransform(-61.775, 0.05);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .f("rgba(192,160,92,0.286)")
      .s()
      .p("AgjA+Ih2AmIBJhkIhJhjIB2AmIBHhkIAAB8IB2AlIh2AmIAAB8g");
    this.shape_29.setTransform(-66.725, 0.025);
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .f("rgba(192,160,92,0.239)")
      .s()
      .p("AgjA+Ih3AnIBJhlIhJhkIB3AnIBIhlIAAB9IB2AlIh2AmIAAB9g");
    this.shape_30.setTransform(-71.675, 0.025);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .f("rgba(192,160,92,0.192)")
      .s()
      .p("AgkA/Ih4AnIBKhmIhKhlIB4AnIBJhmIAAB+IB4AmIh4AnIAAB+g");
    this.shape_31.setTransform(-76.625, 0.025);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .f("rgba(192,160,92,0.141)")
      .s()
      .p("AgkA/Ih5AoIBLhnIhLhmIB5AoIBJhnIAAB/IB5AmIh5AnIAAB/g");
    this.shape_32.setTransform(-81.575, 0.025);
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .f("rgba(192,160,92,0.094)")
      .s()
      .p("AglBAIh6AoIBMhoIhMhnIB6AoIBLhoIAACBIB6AmIh6AoIAACAg");
    this.shape_33.setTransform(-86.525, 0.025);
    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .f("rgba(192,160,92,0.047)")
      .s()
      .p("AglBBIh7AoIBMhpIhMhoIB7AoIBLhpIAACCIB7AnIh7AoIAACCg");
    this.shape_34.setTransform(-91.475, 0.025);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            {
              t: this.shape,
              p: { scaleX: 0.0117, scaleY: 0.0117, x: 111.6818, y: 0.0185 }
            }
          ]
        })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .to({ state: [{ t: this.shape_20 }] }, 1)
        .to({ state: [{ t: this.shape_21 }] }, 1)
        .to({ state: [{ t: this.shape_22 }] }, 1)
        .to({ state: [{ t: this.shape_23 }] }, 1)
        .to({ state: [{ t: this.shape_24 }] }, 1)
        .to({ state: [{ t: this.shape_25 }] }, 1)
        .to({ state: [{ t: this.shape_26 }] }, 1)
        .to({ state: [{ t: this.shape_27 }] }, 1)
        .to({ state: [{ t: this.shape_28 }] }, 1)
        .to({ state: [{ t: this.shape_29 }] }, 1)
        .to({ state: [{ t: this.shape_30 }] }, 1)
        .to({ state: [{ t: this.shape_31 }] }, 1)
        .to({ state: [{ t: this.shape_32 }] }, 1)
        .to({ state: [{ t: this.shape_33 }] }, 1)
        .to({ state: [{ t: this.shape_34 }] }, 1)
        .to(
          {
            state: [
              {
                t: this.shape,
                p: { scaleX: 0.1666, scaleY: 0.1666, x: -96.4727, y: 0.023 }
              }
            ]
          },
          1
        )
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-112.7, -17.1, 225.5, 34.3);
  (lib.CompoundPath = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFFFF")
      .s()
      .p("A51fQMAAAg+fMAzrAAAMAAAA+fgA4leAMAxLAAAMAAAg7/MgxLAAAg");
    this.shape.setTransform(181.15, 215.1);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.CompoundPath,
    new cjs.Rectangle(15.8, 15.1, 330.8, 400),
    null
  );
  (lib.CA_ = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        [
          "#A9834A",
          "#B49258",
          "#CEB577",
          "#DECA8A",
          "#E3D190",
          "#8B6A38",
          "#B17B3A"
        ],
        [0, 0.071, 0.251, 0.4, 0.498, 0.859, 1],
        -275.4,
        -212.1,
        351.7,
        335.5
      )
      .s()
      .p(
        "Egr+AhMQmgipk8k3Qk/k6itmfQi0mvAAnmIAAgBQAAnnC0muQCtmeE/k4QE8k2GgioQGsisHbAAQJjAAG3DfQG7DhEtHUIrCH1QinkPkHiXQkgillyAAQkrAAj/BvQj2Bri3DIQi0DGhhEKQhhEPAAE3QAAE2BhERQBhEMC0DIQC3DKD2BtQEABxEqAAQGXAAEmi6QD1icDQk9ILPHuQkvHXnID7QnlELp1AAQnbAAmsitgEAyxAi+IjSn8I8cAAIjTH8It6AAMAezhGpIBQAAMAgCBGpgAfylTQhkFDhSDFIlDMKIScAAIlDsKQhSjFhnlDQgyihgjh6QghB6gxChg"
      );
    this.shape.setTransform(0, 0.025);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-421.8, -229.7, 843.7, 459.5);
  (lib._250 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#FFFDFD")
      .s()
      .p(
        "EAp3AHOQhFgugehJICZhNQAkBcBjAAQA5AAAhgiQAeggAAg0QAAg3gjghQgjghhDAAQhdAAhPBAIgQgHIAAnaIG6AAIAACSIkpAAIAACPQANgIAbgFQAbgGAdAAQB4AABNBOQBLBNgBByQABB4hLBJQhSBRiUAAQhwAAhQg1gEA0hAElQhuhnAAiWQAAiWBuhmQBqhiCRAAQCRAABqBiQBuBmABCWQAACXhuBmQhrBjiRAAQiRAAhqhjgEA2fgBmQgyA2AABYQAABZAzA2QAwA1BMAAQBKAAAyg1QA0g3gBhYQAAhYgzg2QgxgzhLAAQhMAAgxAzgABVEHQiEiCAAjCQAAjDCEiBQCCiBDBAAQB4AABXAsQBXAtA8BcIiMBjQggg2g1gdQg4ghhJAAQh3AAhMBTQhJBRAAB9QAAB9BJBSQBMBUB3AAQBQAAA6glQAxgfApg/ICNBiQg7BdhbAyQhfA0h8AAQjAAAiDiBgAeoF9IAAgQIEDkTQBChFAQgWQAbglAAgnQABghgXgUQgXgVgkAAQhPAAgjBoIikgsQAXhnBMg7QBLg5BmAAQCBAABIBEQBAA9AABdQAAA6gmA/QggA1hCBHIgTAUQgaAag1AiQBCgGAYAAICXAAIAACWgAWTF9IgqhlIloAAIgpBlIiwAAIGFt8IAQAAIGVN8gAR+gZIhACZIDqAAIhAiZQgag+gbhgQgbBggaA+gAmDF9IAAt0IC2AAIAAN0gArrF9IiSjgQgbAEgZAAIg/AAIAADcIi2AAIAAt0ID1AAQC7AABnBWQBpBXAAChQAADFiqBNIC4EUgAvwACIA6AAQBwAAAygmQAzgpAAhcQAAhdg0gpQgzgohuAAIg6AAgA+rF9IAAt0IJKAAIAACgImUAAIAAEZIFkAAIAACbIlkAAIAAB/IGmAAIAAChgEgkUAF9IAAlMQABg7AGhfIggAtQgkAygbAdIivDEIgRAAIiwjEQgqgug1hOQAHBfgBA7IAAFMIiuAAIAAt+IAPAAIGzHfIGunfIAQAAIAAN+gEg0aAF9IgqhlIlnAAIgqBlIivAAIGEt8IARAAIGUN8gEg4ugAZIhACZIDpAAIg/iZQgbg+gbhgQgaBggaA+g"
      );
    this.shape.setTransform(-6.85, 3.275);
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#244DA2")
      .s()
      .p(
        "EhMEANMQCAitA/hSIC8j2QBtiQBShmQAqgzAAgvQABgwgqgzQh2iYimjYIkdl3MCYDAAAQAJANgMAOIgXAZIj9FOQiVDEhvCJQgzBBgCA3QgBA5AzA/QBuCHCRC/ID4FIQATAVAIAMQAPAUgCAVg"
      );
    this.shape_1.setTransform(0.0179, 0);
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-486.8, -84.3, 973.7, 168.7);
  (lib._7 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        ["#A9834A", "#E3D190", "#8B6A38", "#B17B3A"],
        [0, 0.306, 0.753, 1],
        -217.3,
        -393.7,
        337.3,
        564
      )
      .s()
      .p("EgVYAjWMAZVg50I8rAAIAAs3MAxdAAAIAABRMgeLBFag");
    this.shape.setTransform(-0.0066, 0.0125, 0.2451, 0.2451);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-38.8, -55.4, 77.6, 110.9);
  (lib._5 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        ["#A9834A", "#E3D190", "#8B6A38", "#B17B3A"],
        [0, 0.306, 0.753, 1],
        -216.5,
        -411.7,
        238.4,
        430.3
      )
      .s()
      .p(
        "AxgfNQmGkBiqmfIgBAAINjmxQBcDwCmCAQDGCZE0AAQE+AAC4jBQCsi3AAkkQAAk3jDi2QjNi+lyAAQksAAkPByQjPBXjGCfIhZglMAAAgp3MAnAAAAIAAM3I6JAAIAAMnQBKgtCTggQCbghCfAAQFTAAEjB4QEWBzDODUQDLDRBsEUQBuEYAAE7QAAFChpETQhrEcjSDOQnMHHtEAAQp5AAnDkqg"
      );
    this.shape.setTransform(0.025, 0.025);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -168.1,
    -229.4,
    336.29999999999995,
    458.9
  );
  (lib._1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .lf(
        ["#A9834A", "#E3D190", "#8B6A38", "#B17B3A"],
        [0, 0.306, 0.753, 1],
        -12.3,
        -226,
        243,
        1330.3
      )
      .s()
      .p("AiHd8MAAAgvBIreAAIAAs3IbLAAMAAAA74g");
    this.shape.setTransform(0.025, 0);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-87, -191.6, 174.1, 383.29999999999995);
  (lib.Firework = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    // Layer_3_copy_copy_copy_copy_copy_copy_copy
    this.instance = new lib.star();
    this.instance.setTransform(
      -59.65,
      -27.4,
      0.9998,
      0.9998,
      45.0025,
      0,
      0,
      111.4,
      -0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
    // Layer_3_copy_copy_copy_copy_copy_copy
    this.instance_1 = new lib.star();
    this.instance_1.setTransform(
      -59.55,
      -27.3,
      0.9999,
      0.9999,
      90.0017,
      0,
      0,
      111.5,
      -0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
    // Layer_3_copy_copy_copy_copy_copy
    this.instance_2 = new lib.star();
    this.instance_2.setTransform(
      -59.7,
      -27.35,
      0.9999,
      0.9999,
      135.0019,
      0,
      0,
      111.5,
      -0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
    // Layer_3_copy_copy_copy_copy
    this.instance_3 = new lib.star();
    this.instance_3.setTransform(
      -59.65,
      -27.35,
      0.9999,
      0.9999,
      -179.9991,
      0,
      0,
      111.5,
      -0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
    // Layer_3_copy_copy_copy
    this.instance_4 = new lib.star();
    this.instance_4.setTransform(
      -59.7,
      -27.45,
      0.9999,
      0.9999,
      -134.9994,
      0,
      0,
      111.6,
      -0.1
    );
    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));
    // Layer_3_copy_copy
    this.instance_5 = new lib.star();
    this.instance_5.setTransform(-59.65, -27.55, 1, 1, -90, 0, 0, 111.6, 0);
    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));
    // Layer_3_copy
    this.instance_6 = new lib.star();
    this.instance_6.setTransform(-59.6, -27.5, 1, 1, -45, 0, 0, 111.6, 0.1);
    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));
    // Layer_3
    this.instance_7 = new lib.star();
    this.instance_7.setTransform(-59.55, -27.6, 1, 1, 0, 0, 0, 111.7, 0);
    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Firework,
    new cjs.Rectangle(-61.5, -29.2, 3.700000000000003, 3.6999999999999993),
    null
  );
  // stage content:
  (lib.logoanimation = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);
    this.actionFrames = [228];
    // timeline functions:
    this.frame_228 = function () {
      this.stop();
    };
    // actions tween:
    this.timeline.addTween(
      cjs.Tween.get(this).wait(228).call(this.frame_228).wait(37)
    );
    // Isolation_Mode
    this.instance = new lib.CompoundPath();
    this.instance.setTransform(-0.05, 0.05, 0.8676, 0.8073, 0, 0, 0, 15.7, 15);
    this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.447)", 0, 0, 15);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(265));
    // Layer_6 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_131 = new cjs.Graphics().p(
      "AjTDUQhYhYAAh8QAAh7BYhZQBXhXB8AAQB9AABXBXQBYBZAAB7QAAB8hYBYQhXBYh9AAQh8AAhXhYg"
    );
    var mask_graphics_132 = new cjs.Graphics().p(
      "AjTDUQhYhXAAh9QAAh8BYhXQBXhYB8AAQB9AABXBYQBYBXAAB8QAAB9hYBXQhXBYh9AAQh8AAhXhYg"
    );
    var mask_graphics_133 = new cjs.Graphics().p(
      "AjUDUQhXhXAAh9QAAh8BXhXQBZhYB7AAQB9AABXBYQBYBXAAB8QAAB9hYBXQhXBYh9AAQh7AAhZhYg"
    );
    var mask_graphics_134 = new cjs.Graphics().p(
      "AjUDUQhXhYAAh8QAAh7BXhZQBZhXB7AAQB9AABXBXQBYBZAAB7QAAB8hYBYQhXBYh9AAQh7AAhZhYg"
    );
    var mask_graphics_135 = new cjs.Graphics().p(
      "AjTDUQhYhYAAh8QAAh7BYhZQBYhXB7AAQB9AABXBXQBYBZAAB7QAAB8hYBYQhXBYh9AAQh7AAhYhYg"
    );
    var mask_graphics_136 = new cjs.Graphics().p(
      "AjTDUQhYhXAAh9QAAh7BYhYQBYhYB7AAQB9AABXBYQBYBYAAB7QAAB9hYBXQhXBYh9AAQh7AAhYhYg"
    );
    var mask_graphics_137 = new cjs.Graphics().p(
      "AjUDUQhXhXAAh9QAAh7BXhYQBZhYB7AAQB8AABYBYQBYBYAAB7QAAB9hYBXQhYBYh8AAQh7AAhZhYg"
    );
    var mask_graphics_138 = new cjs.Graphics().p(
      "AjUDUQhXhXAAh9QAAh7BXhZQBZhXB7AAQB8AABYBXQBYBZAAB7QAAB9hYBXQhYBYh8AAQh7AAhZhYg"
    );
    var mask_graphics_139 = new cjs.Graphics().p(
      "AjTDUQhYhXAAh9QAAh7BYhZQBXhXB8AAQB9AABXBXQBYBZAAB7QAAB9hYBXQhXBYh9AAQh8AAhXhYg"
    );
    var mask_graphics_140 = new cjs.Graphics().p(
      "AjTDUQhYhXAAh9QAAh8BYhXQBXhYB8AAQB9AABXBYQBYBXAAB8QAAB9hYBXQhXBYh9AAQh8AAhXhYg"
    );
    var mask_graphics_141 = new cjs.Graphics().p(
      "AjTDUQhYhXAAh9QAAh8BYhXQBYhYB7AAQB8AABYBYQBYBXAAB8QAAB9hYBXQhYBYh8AAQh7AAhYhYg"
    );
    var mask_graphics_142 = new cjs.Graphics().p(
      "AjUDUQhXhXAAh9QAAh7BXhZQBZhXB7AAQB8AABYBXQBYBZAAB7QAAB9hYBXQhYBYh8AAQh7AAhZhYg"
    );
    var mask_graphics_143 = new cjs.Graphics().p(
      "AjUDUQhXhXAAh9QAAh7BXhZQBYhXB8AAQB9AABXBXQBYBZAAB7QAAB9hYBXQhXBYh9AAQh8AAhYhYg"
    );
    var mask_graphics_144 = new cjs.Graphics().p(
      "AjUDUQhXhYAAh8QAAh8BXhXQBYhYB8AAQB9AABXBYQBYBXAAB8QAAB8hYBYQhXBYh9AAQh8AAhYhYg"
    );
    var mask_graphics_145 = new cjs.Graphics().p(
      "AjTDUQhYhYAAh8QAAh8BYhXQBXhYB8AAQB8AABYBYQBYBXAAB8QAAB8hYBYQhYBYh8AAQh8AAhXhYg"
    );
    var mask_graphics_146 = new cjs.Graphics().p(
      "AjTDUQhYhXAAh9QAAh8BYhYQBXhXB8AAQB8AABYBXQBYBYAAB8QAAB9hYBXQhYBYh8AAQh8AAhXhYg"
    );
    var mask_graphics_147 = new cjs.Graphics().p(
      "AjUDUQhXhXAAh9QAAh8BXhYQBZhXB7AAQB9AABXBXQBYBYAAB8QAAB9hYBXQhXBYh9AAQh7AAhZhYg"
    );
    var mask_graphics_148 = new cjs.Graphics().p(
      "AjTDhQhYhdAAiEQAAiDBYheQBXhdB8AAQB8AABYBdQBYBeAACDQAACEhYBdQhYBeh8AAQh8AAhXheg"
    );
    var mask_graphics_149 = new cjs.Graphics().p(
      "AjUDuQhXhiAAiMQAAiLBXhkQBYhiB8AAQB9AABXBiQBYBkAACLQAACMhYBiQhXBkh9AAQh8AAhYhkg"
    );
    var mask_graphics_150 = new cjs.Graphics().p(
      "AjUD8QhXhoAAiUQAAiTBXhpQBZhoB7AAQB8AABYBoQBYBpAACTQAACUhYBoQhYBph8AAQh7AAhZhpg"
    );
    var mask_graphics_151 = new cjs.Graphics().p(
      "AjTEKQhYhuAAicQAAibBYhuQBXhuB8AAQB9AABXBuQBYBuAACbQAACchYBuQhXBuh9AAQh8AAhXhug"
    );
    var mask_graphics_152 = new cjs.Graphics().p(
      "AjUEXQhXhzAAikQAAijBXh0QBZhzB7AAQB8AABYBzQBYB0AACjQAACkhYBzQhYB0h8AAQh7AAhZh0g"
    );
    var mask_graphics_153 = new cjs.Graphics().p(
      "AjTEkQhYh4AAisQAAiqBYh6QBYh5B7AAQB9AABXB5QBYB6AACqQAACshYB4QhXB6h9AAQh7AAhYh6g"
    );
    var mask_graphics_154 = new cjs.Graphics().p(
      "AjTEyQhYh+AAi0QAAizBYh+QBYh/B7AAQB9AABXB/QBYB+AACzQAAC0hYB+QhXB/h9AAQh7AAhYh/g"
    );
    var mask_graphics_155 = new cjs.Graphics().p(
      "AjUE/QhXiDAAi8QAAi7BXiFQBZiDB7AAQB9AABXCDQBYCFAAC7QAAC8hYCDQhXCFh9AAQh7AAhZiFg"
    );
    var mask_graphics_156 = new cjs.Graphics().p(
      "AjTFNQhYiJAAjEQAAjCBYiKQBXiKB8AAQB9AABXCKQBYCKAADCQAADEhYCJQhXCKh9AAQh8AAhXiKg"
    );
    var mask_graphics_157 = new cjs.Graphics().p(
      "AjUFaQhXiOAAjMQAAjKBXiQQBZiPB7AAQB9AABXCPQBYCQAADKQAADMhYCOQhXCQh9AAQh7AAhZiQg"
    );
    var mask_graphics_158 = new cjs.Graphics().p(
      "AjTFnQhYiUAAjTQAAjTBYiVQBXiUB8AAQB8AABYCUQBYCVAADTQAADThYCUQhYCWh8AAQh8AAhXiWg"
    );
    var mask_graphics_159 = new cjs.Graphics().p(
      "AjUF1QhXiaAAjbQAAjaBXibQBYiaB8AAQB9AABXCaQBYCbAADaQAADbhYCaQhXCbh9AAQh8AAhYibg"
    );
    var mask_graphics_160 = new cjs.Graphics().p(
      "AjUGDQhXigAAjjQAAjiBXigQBZigB7AAQB8AABYCgQBYCgAADiQAADjhYCgQhYCgh8AAQh7AAhZigg"
    );
    var mask_graphics_161 = new cjs.Graphics().p(
      "AjTGQQhYilAAjrQAAjqBYimQBXilB8AAQB9AABXClQBYCmAADqQAADrhYClQhXCmh9AAQh8AAhXimg"
    );
    var mask_graphics_162 = new cjs.Graphics().p(
      "AjUGdQhXiqAAjzQAAjyBXisQBZiqB7AAQB8AABYCqQBYCsAADyQAADzhYCqQhYCsh8AAQh7AAhZisg"
    );
    var mask_graphics_163 = new cjs.Graphics().p(
      "AjTGrQhYiwAAj7QAAj5BYiyQBYiwB7AAQB9AABXCwQBYCyAAD5QAAD7hYCwQhXCxh9AAQh7AAhYixg"
    );
    var mask_graphics_164 = new cjs.Graphics().p(
      "AjUG4QhXi2AAkCQAAkBBXi4QBZi1B7AAQB9AABXC1QBYC4AAEBQAAEChYC2QhXC3h9AAQh7AAhZi3g"
    );
    var mask_graphics_165 = new cjs.Graphics().p(
      "AjTHGQhYi7AAkLQAAkJBYi8QBXi8B8AAQB9AABXC8QBYC8AAEJQAAELhYC7QhXC8h9AAQh8AAhXi8g"
    );
    var mask_graphics_166 = new cjs.Graphics().p(
      "AjTHTQhYjAAAkTQAAkRBYjCQBXjBB8AAQB9AABXDBQBYDCAAERQAAEThYDAQhXDCh9AAQh8AAhXjCg"
    );
    var mask_graphics_167 = new cjs.Graphics().p(
      "AjUHgQhXjGAAkaQAAkZBXjIQBZjGB7AAQB9AABXDGQBYDIAAEZQAAEahYDGQhXDIh9AAQh7AAhZjIg"
    );
    var mask_graphics_168 = new cjs.Graphics().p(
      "AjTHuQhYjMAAkiQAAkhBYjNQBXjMB8AAQB8AABYDMQBYDNAAEhQAAEihYDMQhYDNh8AAQh8AAhXjNg"
    );
    var mask_graphics_169 = new cjs.Graphics().p(
      "AjUH8QhXjSAAkqQAAkoBXjTQBYjSB8AAQB9AABXDSQBYDTAAEoQAAEqhYDSQhXDSh9AAQh8AAhYjSg"
    );
    var mask_graphics_170 = new cjs.Graphics().p(
      "AjUIJQhXjXAAkyQAAkxBXjYQBZjXB7AAQB8AABYDXQBYDYAAExQAAEyhYDXQhYDYh8AAQh7AAhZjYg"
    );
    var mask_graphics_171 = new cjs.Graphics().p(
      "AjTIWQhYjcAAk6QAAk5BYjdQBXjdB8AAQB9AABXDdQBYDdAAE5QAAE6hYDcQhXDeh9AAQh8AAhXjeg"
    );
    var mask_graphics_172 = new cjs.Graphics().p(
      "AjTIFQhYjVAAkwQAAkvBYjWQBXjWB8ABQB9gBBXDWQBYDWAAEvQAAEwhYDVQhXDWh9AAQh8AAhXjWg"
    );
    var mask_graphics_173 = new cjs.Graphics().p(
      "AjUHzQhXjNAAkmQAAkkBXjQQBZjOB7AAQB8AABYDOQBYDQAAEkQAAEmhYDNQhYDQh8AAQh7AAhZjQg"
    );
    var mask_graphics_174 = new cjs.Graphics().p(
      "AjUHiQhXjGAAkcQAAkaBXjJQBZjHB7AAQB9AABXDHQBYDJAAEaQAAEchYDGQhXDJh9AAQh7AAhZjJg"
    );
    var mask_graphics_175 = new cjs.Graphics().p(
      "AjUHRQhXjAAAkRQAAkQBXjBQBYjAB8AAQB9AABXDAQBYDBAAEQQAAERhYDAQhXDBh9AAQh8AAhYjBg"
    );
    var mask_graphics_176 = new cjs.Graphics().p(
      "AjUG/QhXi4AAkHQAAkGBXi6QBZi5B7AAQB8AABYC5QBYC6AAEGQAAEHhYC4QhYC7h8AAQh7AAhZi7g"
    );
    var mask_graphics_177 = new cjs.Graphics().p(
      "AjUGvQhXiyAAj9QAAj7BXi0QBZiyB7AAQB9AABXCyQBYC0AAD7QAAD9hYCyQhXCyh9AAQh7AAhZiyg"
    );
    var mask_graphics_178 = new cjs.Graphics().p(
      "AjTGdQhYiqAAjzQAAjyBYirQBXirB8AAQB9AABXCrQBYCrAADyQAADzhYCqQhXCsh9AAQh8AAhXisg"
    );
    var mask_graphics_179 = new cjs.Graphics().p(
      "AjTGMQhYijAAjpQAAjoBYikQBXikB8AAQB9AABXCkQBYCkAADoQAADphYCjQhXClh9AAQh8AAhXilg"
    );
    var mask_graphics_180 = new cjs.Graphics().p(
      "AjUF7QhXicAAjfQAAjdBXieQBZicB7AAQB8AABYCcQBYCeAADdQAADfhYCcQhYCdh8AAQh7AAhZidg"
    );
    var mask_graphics_181 = new cjs.Graphics().p(
      "AjUFpQhXiVAAjUQAAjTBXiXQBZiVB7AAQB9AABXCVQBYCXAADTQAADUhYCVQhXCXh9AAQh7AAhZiXg"
    );
    var mask_graphics_182 = new cjs.Graphics().p(
      "AjUFYQhXiOAAjKQAAjJBXiPQBYiOB8AAQB9AABXCOQBYCPAADJQAADKhYCOQhXCPh9AAQh8AAhYiPg"
    );
    var mask_graphics_183 = new cjs.Graphics().p(
      "AjTFHQhYiHAAjAQAAi/BYiIQBYiHB7AAQB9AABXCHQBYCIAAC/QAADAhYCHQhXCIh9AAQh7AAhYiIg"
    );
    var mask_graphics_184 = new cjs.Graphics().p(
      "AjTE2QhYiAAAi2QAAi1BYiAQBXiBB8ABQB8gBBYCBQBYCAAAC1QAAC2hYCAQhYCAh8AAQh8AAhXiAg"
    );
    var mask_graphics_185 = new cjs.Graphics().p(
      "AjUElQhXh5AAisQAAiqBXh6QBZh5B7AAQB8AABYB5QBYB6AACqQAACshYB5QhYB5h8AAQh7AAhZh5g"
    );
    var mask_graphics_186 = new cjs.Graphics().p(
      "AjTETQhYhxAAiiQAAihBYhyQBXhyB8AAQB9AABXByQBYByAAChQAACihYBxQhXBzh9AAQh8AAhXhzg"
    );
    var mask_graphics_187 = new cjs.Graphics().p(
      "AjUECQhXhrAAiXQAAiWBXhsQBZhqB7AAQB8AABYBqQBYBsAACWQAACXhYBrQhYBrh8AAQh7AAhZhrg"
    );
    var mask_graphics_188 = new cjs.Graphics().p(
      "AjUDxQhXhkAAiNQAAiMBXhkQBZhkB7AAQB9AABXBkQBYBkAACMQAACNhYBkQhXBkh9AAQh7AAhZhkg"
    );
    var mask_graphics_189 = new cjs.Graphics().p(
      "AjUDfQhXhcAAiDQAAiCBXhdQBYhcB8AAQB9AABXBcQBYBdAACCQAACDhYBcQhXBdh9AAQh8AAhYhdg"
    );
    var mask_graphics_190 = new cjs.Graphics().p(
      "AjTDOQhYhVAAh5QAAh4BYhWQBYhVB7AAQB9AABXBVQBYBWAAB4QAAB5hYBVQhXBWh9AAQh7AAhYhWg"
    );
    var mask_graphics_191 = new cjs.Graphics().p(
      "AjTDJQhYhTAAh2QAAh1BYhUQBYhTB7AAQB9AABXBTQBYBUAAB1QAAB2hYBTQhXBUh9AAQh7AAhYhUg"
    );
    var mask_graphics_192 = new cjs.Graphics().p(
      "AjTDEQhYhRAAhzQAAhzBYhSQBYhRB7AAQB9AABXBRQBYBSAABzQAABzhYBRQhXBTh9AAQh7AAhYhTg"
    );
    var mask_graphics_193 = new cjs.Graphics().p(
      "AjTDAQhYhPAAhxQAAhvBYhRQBYhPB7AAQB9AABXBPQBYBRAABvQAABxhYBPQhXBQh9AAQh7AAhYhQg"
    );
    var mask_graphics_194 = new cjs.Graphics().p(
      "AjTC7QhYhNAAhuQAAhtBYhOQBYhNB7AAQB9AABXBNQBYBOAABtQAABuhYBNQhXBOh9AAQh7AAhYhOg"
    );
    var mask_graphics_195 = new cjs.Graphics().p(
      "AjTC2QhYhLAAhrQAAhqBYhMQBYhMB7AAQB9AABXBMQBYBMAABqQAABrhYBLQhXBNh9AAQh7AAhYhNg"
    );
    var mask_graphics_196 = new cjs.Graphics().p(
      "AjTCyQhYhKAAhoQAAhnBYhLQBYhJB7AAQB9AABXBJQBYBLAABnQAABohYBKQhXBKh9AAQh7AAhYhKg"
    );
    var mask_graphics_197 = new cjs.Graphics().p(
      "AjTCtQhYhHAAhmQAAhlBYhIQBYhHB7AAQB9AABXBHQBYBIAABlQAABmhYBHQhXBIh9AAQh7AAhYhIg"
    );
    var mask_graphics_198 = new cjs.Graphics().p(
      "AjTCoQhYhFAAhjQAAhiBYhGQBYhFB7AAQB9AABXBFQBYBGAABiQAABjhYBFQhXBGh9ABQh7gBhYhGg"
    );
    var mask_graphics_199 = new cjs.Graphics().p(
      "AjTCjQhYhDAAhgQAAhfBYhEQBYhEB7AAQB9AABXBEQBYBEAABfQAABghYBDQhXBFh9AAQh7AAhYhFg"
    );
    var mask_graphics_200 = new cjs.Graphics().p(
      "AjTCfQhYhCAAhdQAAhcBYhDQBYhBB7AAQB9AABXBBQBYBDAABcQAABdhYBCQhXBCh9AAQh7AAhYhCg"
    );
    var mask_graphics_201 = new cjs.Graphics().p(
      "AjTCaQhYg/AAhbQAAhaBYhAQBYhAB7AAQB9AABXBAQBYBAAABaQAABbhYA/QhXBBh9AAQh7AAhYhBg"
    );
    var mask_graphics_202 = new cjs.Graphics().p(
      "AjTCWQhYg/AAhXQAAhXBYg+QBYg+B7AAQB9AABXA+QBYA+AABXQAABXhYA/QhXA+h9AAQh7AAhYg+g"
    );
    var mask_graphics_203 = new cjs.Graphics().p(
      "AjTCRQhYg8AAhVQAAhUBYg9QBYg7B7AAQB9AABXA7QBYA9AABUQAABVhYA8QhXA9h9gBQh7ABhYg9g"
    );
    var mask_graphics_204 = new cjs.Graphics().p(
      "AjTCMQhYg6AAhSQAAhRBYg7QBYg6B7AAQB9AABXA6QBYA7AABRQAABShYA6QhXA7h9AAQh7AAhYg7g"
    );
    var mask_graphics_205 = new cjs.Graphics().p(
      "AjTCIQhYg4AAhQQAAhOBYg5QBYg4B7AAQB9AABXA4QBYA5AABOQAABQhYA4QhXA4h9AAQh7AAhYg4g"
    );
    var mask_graphics_206 = new cjs.Graphics().p(
      "AjTCCQhYg1AAhNQAAhLBYg4QBYg2B7AAQB9AABXA2QBYA4AABLQAABNhYA1QhXA3h9AAQh7AAhYg3g"
    );
    var mask_graphics_207 = new cjs.Graphics().p(
      "AjTB+QhYg0AAhKQAAhJBYg1QBYg0B7AAQB9AABXA0QBYA1AABJQAABKhYA0QhXA1h9AAQh7AAhYg1g"
    );
    var mask_graphics_208 = new cjs.Graphics().p(
      "AjTB5QhYgxAAhIQAAhGBYgzQBYgyB7AAQB9AABXAyQBYAzAABGQAABIhYAxQhXAzh9AAQh7AAhYgzg"
    );
    var mask_graphics_209 = new cjs.Graphics().p(
      "AjTB1QhYgxAAhEQAAhDBYgxQBYgwB7gBQB9ABBXAwQBYAxAABDQAABEhYAxQhXAwh9AAQh7AAhYgwg"
    );
    var mask_graphics_210 = new cjs.Graphics().p(
      "AjTBwQhYguAAhCQAAhBBYguQBYgvB7AAQB9AABXAvQBYAuAABBQAABChYAuQhXAvh9AAQh7AAhYgvg"
    );
    var mask_graphics_211 = new cjs.Graphics().p(
      "AjTBrQhYgsAAg/QAAg+BYgtQBYgsB7AAQB9AABXAsQBYAtAAA+QAAA/hYAsQhXAth9AAQh7AAhYgtg"
    );
    var mask_graphics_212 = new cjs.Graphics().p(
      "AjTBnQhYgrAAg8QAAg7BYgrQBYgqB7AAQB9AABXAqQBYArAAA7QAAA8hYArQhXAqh9AAQh7AAhYgqg"
    );
    var mask_graphics_213 = new cjs.Graphics().p(
      "AjTBiQhYgpAAg5QAAg4BYgpQBYgpB7AAQB9AABXApQBYApAAA4QAAA5hYApQhXAph9AAQh7AAhYgpg"
    );
    var mask_graphics_214 = new cjs.Graphics().p(
      "AjTBdQhYgmAAg3QAAg1BYgnQBYgnB7AAQB9AABXAnQBYAnAAA1QAAA3hYAmQhXAnh9AAQh7AAhYgng"
    );
    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(131)
        .to({ graphics: mask_graphics_131, x: 256.4, y: 10 })
        .wait(1)
        .to({ graphics: mask_graphics_132, x: 241.1, y: 10.05 })
        .wait(1)
        .to({ graphics: mask_graphics_133, x: 225.75, y: 10.05 })
        .wait(1)
        .to({ graphics: mask_graphics_134, x: 210.45, y: 10.1 })
        .wait(1)
        .to({ graphics: mask_graphics_135, x: 195.1, y: 10.1 })
        .wait(1)
        .to({ graphics: mask_graphics_136, x: 179.8, y: 10.15 })
        .wait(1)
        .to({ graphics: mask_graphics_137, x: 164.45, y: 10.15 })
        .wait(1)
        .to({ graphics: mask_graphics_138, x: 149.15, y: 10.2 })
        .wait(1)
        .to({ graphics: mask_graphics_139, x: 133.8, y: 10.2 })
        .wait(1)
        .to({ graphics: mask_graphics_140, x: 118.5, y: 10.25 })
        .wait(1)
        .to({ graphics: mask_graphics_141, x: 103.15, y: 10.25 })
        .wait(1)
        .to({ graphics: mask_graphics_142, x: 87.85, y: 10.3 })
        .wait(1)
        .to({ graphics: mask_graphics_143, x: 72.5, y: 10.3 })
        .wait(1)
        .to({ graphics: mask_graphics_144, x: 57.2, y: 10.35 })
        .wait(1)
        .to({ graphics: mask_graphics_145, x: 41.85, y: 10.35 })
        .wait(1)
        .to({ graphics: mask_graphics_146, x: 26.55, y: 10.4 })
        .wait(1)
        .to({ graphics: mask_graphics_147, x: 11.2, y: 10.4 })
        .wait(1)
        .to({ graphics: mask_graphics_148, x: 11.25, y: 20.85 })
        .wait(1)
        .to({ graphics: mask_graphics_149, x: 11.3, y: 31.35 })
        .wait(1)
        .to({ graphics: mask_graphics_150, x: 11.35, y: 41.8 })
        .wait(1)
        .to({ graphics: mask_graphics_151, x: 11.4, y: 52.25 })
        .wait(1)
        .to({ graphics: mask_graphics_152, x: 11.45, y: 62.75 })
        .wait(1)
        .to({ graphics: mask_graphics_153, x: 11.5, y: 73.2 })
        .wait(1)
        .to({ graphics: mask_graphics_154, x: 11.5, y: 83.65 })
        .wait(1)
        .to({ graphics: mask_graphics_155, x: 11.55, y: 94.15 })
        .wait(1)
        .to({ graphics: mask_graphics_156, x: 11.6, y: 104.6 })
        .wait(1)
        .to({ graphics: mask_graphics_157, x: 11.65, y: 115.05 })
        .wait(1)
        .to({ graphics: mask_graphics_158, x: 11.7, y: 125.55 })
        .wait(1)
        .to({ graphics: mask_graphics_159, x: 11.75, y: 136 })
        .wait(1)
        .to({ graphics: mask_graphics_160, x: 11.8, y: 146.45 })
        .wait(1)
        .to({ graphics: mask_graphics_161, x: 11.85, y: 156.95 })
        .wait(1)
        .to({ graphics: mask_graphics_162, x: 11.9, y: 167.4 })
        .wait(1)
        .to({ graphics: mask_graphics_163, x: 11.95, y: 177.85 })
        .wait(1)
        .to({ graphics: mask_graphics_164, x: 12, y: 188.35 })
        .wait(1)
        .to({ graphics: mask_graphics_165, x: 12.05, y: 198.8 })
        .wait(1)
        .to({ graphics: mask_graphics_166, x: 12.05, y: 209.25 })
        .wait(1)
        .to({ graphics: mask_graphics_167, x: 12.1, y: 219.75 })
        .wait(1)
        .to({ graphics: mask_graphics_168, x: 12.15, y: 230.2 })
        .wait(1)
        .to({ graphics: mask_graphics_169, x: 12.2, y: 240.65 })
        .wait(1)
        .to({ graphics: mask_graphics_170, x: 12.25, y: 251.15 })
        .wait(1)
        .to({ graphics: mask_graphics_171, x: 12.3, y: 261.6 })
        .wait(1)
        .to({ graphics: mask_graphics_172, x: 26, y: 263.85 })
        .wait(1)
        .to({ graphics: mask_graphics_173, x: 39.7, y: 266.125 })
        .wait(1)
        .to({ graphics: mask_graphics_174, x: 53.4, y: 268.375 })
        .wait(1)
        .to({ graphics: mask_graphics_175, x: 67.1, y: 270.625 })
        .wait(1)
        .to({ graphics: mask_graphics_176, x: 80.75, y: 272.9 })
        .wait(1)
        .to({ graphics: mask_graphics_177, x: 94.45, y: 275.15 })
        .wait(1)
        .to({ graphics: mask_graphics_178, x: 108.15, y: 277.4 })
        .wait(1)
        .to({ graphics: mask_graphics_179, x: 121.85, y: 279.675 })
        .wait(1)
        .to({ graphics: mask_graphics_180, x: 135.55, y: 281.925 })
        .wait(1)
        .to({ graphics: mask_graphics_181, x: 149.25, y: 284.175 })
        .wait(1)
        .to({ graphics: mask_graphics_182, x: 162.95, y: 286.425 })
        .wait(1)
        .to({ graphics: mask_graphics_183, x: 176.65, y: 288.7 })
        .wait(1)
        .to({ graphics: mask_graphics_184, x: 190.35, y: 290.95 })
        .wait(1)
        .to({ graphics: mask_graphics_185, x: 204.05, y: 293.2 })
        .wait(1)
        .to({ graphics: mask_graphics_186, x: 217.7, y: 295.475 })
        .wait(1)
        .to({ graphics: mask_graphics_187, x: 231.4, y: 297.725 })
        .wait(1)
        .to({ graphics: mask_graphics_188, x: 245.1, y: 299.975 })
        .wait(1)
        .to({ graphics: mask_graphics_189, x: 258.8, y: 302.25 })
        .wait(1)
        .to({ graphics: mask_graphics_190, x: 272.5, y: 304.5 })
        .wait(1)
        .to({ graphics: mask_graphics_191, x: 272.5, y: 293.125 })
        .wait(1)
        .to({ graphics: mask_graphics_192, x: 272.5, y: 281.775 })
        .wait(1)
        .to({ graphics: mask_graphics_193, x: 272.5, y: 270.4 })
        .wait(1)
        .to({ graphics: mask_graphics_194, x: 272.5, y: 259.025 })
        .wait(1)
        .to({ graphics: mask_graphics_195, x: 272.5, y: 247.65 })
        .wait(1)
        .to({ graphics: mask_graphics_196, x: 272.5, y: 236.3 })
        .wait(1)
        .to({ graphics: mask_graphics_197, x: 272.5, y: 224.925 })
        .wait(1)
        .to({ graphics: mask_graphics_198, x: 272.5, y: 213.55 })
        .wait(1)
        .to({ graphics: mask_graphics_199, x: 272.5, y: 202.2 })
        .wait(1)
        .to({ graphics: mask_graphics_200, x: 272.5, y: 190.825 })
        .wait(1)
        .to({ graphics: mask_graphics_201, x: 272.5, y: 179.45 })
        .wait(1)
        .to({ graphics: mask_graphics_202, x: 272.5, y: 168.1 })
        .wait(1)
        .to({ graphics: mask_graphics_203, x: 272.5, y: 156.7 })
        .wait(1)
        .to({ graphics: mask_graphics_204, x: 272.5, y: 145.325 })
        .wait(1)
        .to({ graphics: mask_graphics_205, x: 272.5, y: 133.95 })
        .wait(1)
        .to({ graphics: mask_graphics_206, x: 272.5, y: 122.6 })
        .wait(1)
        .to({ graphics: mask_graphics_207, x: 272.5, y: 111.225 })
        .wait(1)
        .to({ graphics: mask_graphics_208, x: 272.5, y: 99.85 })
        .wait(1)
        .to({ graphics: mask_graphics_209, x: 272.5, y: 88.5 })
        .wait(1)
        .to({ graphics: mask_graphics_210, x: 272.5, y: 77.125 })
        .wait(1)
        .to({ graphics: mask_graphics_211, x: 272.5, y: 65.75 })
        .wait(1)
        .to({ graphics: mask_graphics_212, x: 272.5, y: 54.375 })
        .wait(1)
        .to({ graphics: mask_graphics_213, x: 272.5, y: 43.025 })
        .wait(1)
        .to({ graphics: mask_graphics_214, x: 272.5, y: 31.65 })
        .wait(51)
    );
    // Layer_5
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFCC00")
      .ss(1, 1, 1)
      .p("AT73NMgofAAAMAAAAubMApJAAAMAAAgn7");
    this.shape.setTransform(142.9, 159);
    this.shape._off = true;
    var maskedShapeInstanceList = [this.shape];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.shape).wait(131).to({ _off: false }, 0).wait(134)
    );
    // Layer_1
    this.instance_1 = new lib.star2("synched", 0);
    this.instance_1.setTransform(241.55, 40.5, 0.0093, 0.0093);
    this.instance_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(207)
        .to({ _off: false }, 0)
        .to({ regY: 0.4, scaleX: 0.4189, scaleY: 0.4189, y: 40.6 }, 13)
        .to({ regY: 0, scaleX: 0.1816, scaleY: 0.1816, y: 40.5 }, 8)
        .wait(37)
    );
    // Layer_3 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_164 = new cjs.Graphics().p("AhXF6IAArzICvAAIAALzg");
    var mask_1_graphics_165 = new cjs.Graphics().p("AiSF6IAArzIElAAIAALzg");
    var mask_1_graphics_166 = new cjs.Graphics().p("AjMF6IAArzIGZAAIAALzg");
    var mask_1_graphics_167 = new cjs.Graphics().p("AkHF6IAArzIIPAAIAALzg");
    var mask_1_graphics_168 = new cjs.Graphics().p("AlCF6IAArzIKFAAIAALzg");
    var mask_1_graphics_169 = new cjs.Graphics().p("Al9F6IAArzIL7AAIAALzg");
    var mask_1_graphics_170 = new cjs.Graphics().p("Am4F6IAArzINxAAIAALzg");
    var mask_1_graphics_171 = new cjs.Graphics().p("AnzF6IAArzIPnAAIAALzg");
    var mask_1_graphics_172 = new cjs.Graphics().p("AouF6IAArzIRdAAIAALzg");
    var mask_1_graphics_173 = new cjs.Graphics().p("AppF6IAArzITTAAIAALzg");
    var mask_1_graphics_174 = new cjs.Graphics().p("AqkF6IAArzIVJAAIAALzg");
    var mask_1_graphics_175 = new cjs.Graphics().p("ArfF6IAArzIW/AAIAALzg");
    var mask_1_graphics_176 = new cjs.Graphics().p("AsaF6IAArzIY1AAIAALzg");
    var mask_1_graphics_177 = new cjs.Graphics().p("AtVF6IAArzIarAAIAALzg");
    var mask_1_graphics_178 = new cjs.Graphics().p("AuQF6IAArzIcgAAIAALzg");
    var mask_1_graphics_179 = new cjs.Graphics().p("AvLF6IAArzIeWAAIAALzg");
    var mask_1_graphics_180 = new cjs.Graphics().p("AwGF6IAArzMAgMAAAIAALzg");
    var mask_1_graphics_181 = new cjs.Graphics().p("AxAF6IAArzMAiBAAAIAALzg");
    var mask_1_graphics_182 = new cjs.Graphics().p("Ax7F6IAArzMAj3AAAIAALzg");
    var mask_1_graphics_183 = new cjs.Graphics().p("Ay2F6IAArzMAltAAAIAALzg");
    var mask_1_graphics_184 = new cjs.Graphics().p("AzxF6IAArzMAnjAAAIAALzg");
    var mask_1_graphics_185 = new cjs.Graphics().p("A0sF6IAArzMApZAAAIAALzg");
    var mask_1_graphics_186 = new cjs.Graphics().p("A1nF6IAArzMArPAAAIAALzg");
    var mask_1_graphics_187 = new cjs.Graphics().p("A2iF6IAArzMAtFAAAIAALzg");
    var mask_1_graphics_188 = new cjs.Graphics().p("A3dF6IAArzMAu7AAAIAALzg");
    var mask_1_graphics_189 = new cjs.Graphics().p("A4YF6IAArzMAwxAAAIAALzg");
    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(164)
        .to({ graphics: mask_1_graphics_164, x: -2.2, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_165, x: 3.7, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_166, x: 9.575, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_167, x: 15.475, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_168, x: 21.375, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_169, x: 27.275, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_170, x: 33.15, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_171, x: 39.05, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_172, x: 44.95, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_173, x: 50.825, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_174, x: 56.725, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_175, x: 62.625, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_176, x: 68.525, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_177, x: 74.4, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_178, x: 80.3, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_179, x: 86.2, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_180, x: 92.1, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_181, x: 97.975, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_182, x: 103.875, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_183, x: 109.775, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_184, x: 115.65, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_185, x: 121.55, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_186, x: 127.45, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_187, x: 133.35, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_188, x: 139.225, y: 282.325 })
        .wait(1)
        .to({ graphics: mask_1_graphics_189, x: 145.125, y: 282.325 })
        .wait(76)
    );
    // Layer_1
    this.instance_2 = new lib._250("synched", 0);
    this.instance_2.setTransform(143.4, 282.5, 0.2606, 0.2606);
    this.instance_2._off = true;
    var maskedShapeInstanceList = [this.instance_2];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }
    this.timeline.addTween(
      cjs.Tween.get(this.instance_2).wait(164).to({ _off: false }, 0).wait(101)
    );
    // Layer_1
    this.instance_3 = new lib._5("synched", 0);
    this.instance_3.setTransform(211.45, 192.8, 0.0098, 0.0098);
    this.instance_3._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(156)
        .to({ _off: false }, 0)
        .to(
          { regX: 0.4, regY: 0.2, scaleX: 0.2783, scaleY: 0.2783, x: 211.5 },
          6
        )
        .to({ regX: 0.2, scaleX: 0.2391, scaleY: 0.2391, x: 211.45 }, 6)
        .wait(97)
    );
    // Layer_1
    this.instance_4 = new lib._7("synched", 0);
    this.instance_4.setTransform(132.9, 191.6, 0.0513, 0.0513);
    this.instance_4._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(147)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.1321, scaleY: 1.1321, x: 132.8 }, 6)
        .to({ scaleX: 0.9694, scaleY: 0.9694 }, 6)
        .wait(106)
    );
    // Layer_1
    this.instance_5 = new lib._1("synched", 0);
    this.instance_5.setTransform(62.75, 182.85, 0.0097, 0.0097);
    this.instance_5._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(138)
        .to({ _off: false }, 0)
        .to({ regX: 0.2, regY: 0.2, scaleX: 0.2801, scaleY: 0.2801 }, 8)
        .to({ scaleX: 0.2344, scaleY: 0.2344 }, 3)
        .wait(116)
    );
    // Layer_1
    this.instance_6 = new lib.CA_("synched", 0);
    this.instance_6.setTransform(143.9, 72.15, 0.0074, 0.0074);
    this.instance_6._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(131)
        .to({ _off: false }, 0)
        .to({ scaleX: 0.2788, scaleY: 0.2788 }, 10)
        .to({ scaleX: 0.2337, scaleY: 0.2337 }, 5)
        .wait(119)
    );
    // firework3
    this.instance_7 = new lib.Firework();
    this.instance_7.setTransform(148.2, 169, 1, 1, 0, 0, 0, -59.7, -27.4);
    this.instance_7._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7).wait(39).to({ _off: false }, 0).wait(226)
    );
    // firework2
    this.instance_8 = new lib.Firework();
    this.instance_8.setTransform(
      184.7,
      85.15,
      0.379,
      0.379,
      0,
      0,
      0,
      -42.8,
      -41.7
    );
    this.instance_8._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_8).wait(16).to({ _off: false }, 0).wait(249)
    );
    // firework
    this.instance_9 = new lib.Firework();
    this.instance_9.setTransform(126.85, 223.95, 0.4274, 0.4274);
    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(265));
    // Layer_1 (mask)
    var mask_3 = new cjs.Shape();
    mask_3._off = true;
    var mask_3_graphics_45 = new cjs.Graphics().p(
      "ALsMvIgHgHIgEgCIgFgCIgEgBIgDgCIgGgKIgDgFIgBgDIgBgBIAAgCIAAgBIgBgBIgBAAIgBgCIgCgCIgDgEIgCgEIgCgFIgBgEIgCgCIgBgBIgCgDIAAgEQACgDgBgGIgBgEIAAgCIAhAAIAAAdIApAkIAAAAIABACIABAEIAAACIgBACIgBACIAAABIAAADIABABIAAABIAAACIgBAAIgKABIgIACIgEgFg"
    );
    var mask_3_graphics_46 = new cjs.Graphics().p(
      "ALlNGIgQgQQgCgDgGgDIgLgEIgKgDIgIgEQgDgDgKgTIgGgNIgDgFIgBgCIgBgGIAAgCIgCgBIgDgBIgDgEIgEgGIgGgIIgFgJQgDgGAAgGQgBgFgDgFIgDgDIgDgEIgEgGQgBgEABgEQADgIgBgOIgCgIIAAgEIBLAAIAABBIBcBSIABABIABAEQADAGAAAEIAAAEIgCAEIgBAEIgBAEIAAAFIABADIABACIABAEQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgXADIgRACIgLgJg"
    );
    var mask_3_graphics_47 = new cjs.Graphics().p(
      "ALfNcQgSgRgIgIQgEgFgIgDIgRgGIgRgGQgIgCgDgDQgGgFgOgeIgKgUIgEgJIgCgDQgCgEAAgFIgBgEIgCgBIgEgBQgDgCgCgEIgHgKIgIgMQgGgIgDgHQgEgIgBgJQgBgJgFgHIgEgGIgEgFQgFgGgCgEQgCgGACgGQAFgNgDgVIgCgOIgBgFIB2AAIAABlICPB/IABADIADAGQAEAJAAAGIAAAHIgDAGIgCAFIgCAHQAAADABAFIACAFIABADQABAEAAACQgBACgEAAQgHAAgcAEIgbAEIgQgPg"
    );
    var mask_3_graphics_48 = new cjs.Graphics().p(
      "ALYNyQgZgXgJgLQgGgGgLgFIgXgIIgXgHQgLgEgEgEQgIgHgUgoIgNgbIgGgMIgCgEQgDgGABgHQAAgEgCgBIgDgBIgGgCQgDgDgDgFIgJgNIgMgRQgHgKgFgKQgFgMgCgMQgBgMgGgJIgGgIIgGgHQgHgJgCgFQgDgIADgJQAGgQgDgeIgDgSIgCgHIChAAIAACJIDCCtIACADIAEAIQAGANAAAJIgCAJIgDAIIgDAHIgCAJQgBAFACAHIACAFIACAFQACAGgBACQgBADgFAAQgKAAgmAFIglAGIgWgVg"
    );
    var mask_3_graphics_49 = new cjs.Graphics().p(
      "ALROJQgfgdgMgPQgHgHgOgHQgLgEgTgGIgcgJQgOgFgFgFQgKgIgagzIgQgjIgHgPIgDgFQgDgHAAgJQAAgEgCgCIgEgCQgEAAgDgCQgEgDgEgHIgMgRIgPgVQgJgNgFgMQgHgQgCgPQgCgOgIgNIgHgKIgIgJQgJgKgCgHQgEgKAEgLQAHgVgEglIgDgXIgCgKIDLAAIAACuID1DbIACAEIAGAKQAHAQAAALQAAAGgCAGIgDAKIgEAJIgDALQgBAHACAIIACAHIADAGQACAHgBADQgBAEgGAAQgNAAgwAHIguAHIgdgag"
    );
    var mask_3_graphics_50 = new cjs.Graphics().p(
      "ALLOfQgmgjgPgRQgIgJgRgIQgNgGgXgHIgigLQgRgGgGgFQgMgLgfg+IgUgpIgJgSIgDgGQgEgJAAgLQAAgFgCgCIgFgCQgFgBgDgCQgGgEgEgIQgEgHgKgOIgTgZQgLgQgGgPQgIgSgDgTQgCgRgKgPIgJgMIgJgLQgKgNgDgIQgFgLAFgOQAJgagFgsIgEgdIgDgLID2AAIAADSIEoEJIADAFIAGAMQAJATAAANQAAAHgCAHIgEAMIgFAMIgEANQgBAIADAKIADAJIADAHQADAJgBADQgCAEgIAAQgPAAg6AJIg4AJIgiggg"
    );
    var mask_3_graphics_51 = new cjs.Graphics().p(
      "ALEO1QgsgpgRgUQgKgLgVgJQgPgHgagIIgogMQgUgHgIgHQgOgMgkhJIgYgwIgJgVIgFgIQgEgKAAgNQAAgGgCgCIgGgDQgGgBgEgDQgGgEgFgKQgFgIgMgQIgWgdQgMgTgIgRQgKgWgDgVQgCgVgLgSIgLgOIgKgMQgNgPgEgKQgFgNAGgRQAKgegFg0IgFghIgDgNIEfAAIAAD2IFdE3IADAFIAHAPQAKAWAAAQQAAAIgCAIIgFAOIgGAOQgDAIgBAHQgBAKADAMIADAKIAEAJQADAJgBAEQgBAFgKAAQgRAAhFAKIhCAKIgoglg"
    );
    var mask_3_graphics_52 = new cjs.Graphics().p(
      "AK9PMQgygvgUgYQgLgMgYgLQgRgHgegJIgugPQgXgIgJgHQgQgPgqhTIgbg3IgLgZIgFgJQgFgLABgPQAAgHgDgDIgIgCQgGgCgEgDQgHgFgGgLQgFgJgOgSIgZgiQgPgWgJgTQgLgZgDgZQgDgYgNgUIgMgQIgMgPQgPgRgEgKQgGgQAHgTQAMgigHg8QgCgTgDgTIgEgPIFKAAIAAEaIGQFkIADAHIAJAQQAMAbAAARQAAAJgDAKIgGAQIgHAQQgDAJgBAJQgCAKAEAOIAEALIAEALQAEALgCAEQgBAGgLAAQgUAAhPAMIhLALIgvgqg"
    );
    var mask_3_graphics_53 = new cjs.Graphics().p(
      "AK3PiQg5g1gXgaQgMgOgbgMQgTgJgigKIg1gQQgagKgJgIQgSgRgvhdIgfg/IgNgbQgCgEgDgGQgGgNABgQQAAgJgDgDQgCgBgHgCQgHgBgFgEQgIgFgGgNQgGgKgQgVIgcgmQgRgZgJgWQgNgcgEgcQgDgagPgXQgFgJgIgKIgOgQQgQgTgFgMQgHgSAIgVQANgngHhEQgCgVgFgVIgDgSIF0AAIAAE/IHDGSIAEAIIAJASQAOAeAAATQAAALgDALIgHASIgHASQgEAKgCAKQgBAMAEAPIAEANIAFAMQAEAMgBAFQgCAHgNAAQgWAAhZANIhVANIg0gwg"
    );
    var mask_3_graphics_54 = new cjs.Graphics().p(
      "AKwP5Qg/g8gZgdQgOgQgegNQgWgKgmgLIg6gSQgdgKgKgKQgUgSg1hoIgihGIgOgfQgDgEgDgHQgGgOAAgSQAAgKgDgDQgCgCgIgBQgIgCgFgEQgJgGgIgOQgGgMgRgXIgggqQgSgbgLgZQgOgfgFgfQgDgegQgaQgGgJgJgLIgQgSQgSgWgFgNQgIgUAJgYQAPgrgIhLQgDgYgFgYIgEgSIGfAAIAAFiIH2HAIAFAIIAKAVQAPAhAAAWQAAAMgDALQgCAJgGAMIgIAUQgFALgBALQgCANAFASIAFAOIAFANQAFAOgCAFQgCAIgOAAQgZAAhjAOIhfAPIg6g1g"
    );
    var mask_3_graphics_55 = new cjs.Graphics().p(
      "AKpQPQhFhBgcghQgPgRghgPQgYgKgqgNIhAgUQgggLgLgKQgXgVg5hyIgmhNIgQgiQgDgEgDgIQgHgQAAgUQABgLgEgDQgCgCgJgCQgJgCgGgEQgJgHgJgPQgHgNgTgZIgjgvQgUgegMgbQgQgjgEgiQgEghgSgcQgHgLgKgMIgQgUQgTgXgGgPQgJgWAKgaQAQgwgJhSQgDgagFgaIgEgVIHIAAIAAGGIIpHuIAFAJIAMAWQAQAlAAAYQAAANgDANQgDAKgGANIgJAWQgFANgCALQgCAPAGATIAFAQIAGAOQAFAPgCAHQgCAIgQAAQgbAAhtAQIhoAQIhBg7g"
    );
    var mask_3_graphics_56 = new cjs.Graphics().p(
      "AKjQlQhMhHgfgjQgQgTgkgQQgagMgugOIhGgVQgjgNgNgLQgYgWg/h+IgphUIgRglQgEgEgEgJQgHgRABgWQAAgMgEgDQgDgCgJgCQgKgCgGgFQgLgIgJgQQgHgOgVgcIgmgzQgXghgNgeQgQglgFgmQgFgjgTgfQgHgMgLgNIgSgWQgWgagGgQQgKgYAKgcQATgzgKhbQgDgdgGgcIgFgXIHzAAIAAGqIJcIcIAGAJIAMAZQATAoAAAbQAAAOgEAOQgDAKgHAPIgKAYQgFAOgCAMQgCAQAGAVIAGARIAFAQQAHARgDAHQgCAJgRAAQgeAAh4ARIhxASIhGhBg"
    );
    var mask_3_graphics_57 = new cjs.Graphics().p(
      "AKcQ8QhShOghgmQgSgUgngSQgdgMgxgPIhMgYQgmgNgOgNQgagYhFiIIgshbIgTgoQgEgFgEgJQgIgTABgYQAAgMgEgFQgDgCgKgCQgKgCgIgFQgLgIgKgSQgIgQgXgeIgog3QgYgkgPggQgSgpgFgpQgGgmgUgiQgIgMgMgPIgUgXQgYgcgHgSQgKgaALgdQAUg5gLhjQgDgegGggIgFgZIIdAAIAAHPIKPJJIAGALIAOAbQAUArAAAdQAAAPgEAQQgEALgGAQIgLAaQgGAPgCANQgDASAHAXIAGASIAGARQAHASgCAIQgDAJgSAAQghAAiCATIh7ATIhMhFg"
    );
    var mask_3_graphics_58 = new cjs.Graphics().p(
      "AKWRSQhZhTgkgqQgTgWgrgTQgegNg2gQIhRgaQgpgOgPgNQgcgahKiTIgwhiIgUgsQgFgFgEgKQgJgVABgZQAAgNgFgFQgCgCgLgCQgLgDgIgFQgNgJgKgUQgIgQgZghIgsg8QgagmgPgjQgUgrgGgsQgGgqgWgkQgJgOgMgPIgWgaQgZgdgIgTQgKgcALghQAVg9gLhqQgEghgGgiIgGgbIJIAAIAAH0ILDJ2IAGAMQAIAOAHAPQAVAuAAAfQAAARgFARQgDAMgHARIgMAcQgGAQgDAPQgCASAHAZIAHAUIAGASQAIAUgDAIQgDAKgUAAQgjAAiMAVIiEAUIhShLg"
    );
    var mask_3_graphics_59 = new cjs.Graphics().p(
      "AKPRoQhghZgmgsQgUgYgugUQgggPg6gRIhYgbQgrgQgQgOQgfgchPidIgzhqIgWguQgFgGgEgLQgJgWAAgbQABgOgGgFQgCgDgLgCQgMgCgJgGQgNgKgLgVQgKgRgagjIgwhBQgcgogQgmQgVgvgHgvQgGgtgYgnQgJgOgOgQIgXgbQgbgggIgVQgLgeAMgjQAXhBgMhyQgEgkgHgkIgGgdIJxAAIAAIYIL3KkIAHAMQAIAQAHAPQAXAyAAAiQAAASgFARQgDANgIASIgNAfQgGARgDAQQgDAUAIAaIAHAWIAHATQAIAVgDAJQgDALgVAAQgmAAiWAWIiOAWIhYhRg"
    );
    var mask_3_graphics_60 = new cjs.Graphics().p(
      "AKIR/QhmhggogvQgWgZgxgWQgjgPg9gTIhegdQgugQgRgQQghgdhVioQgag1gcg8IgXgyQgEgGgFgLQgKgYAAgdQABgPgGgFQgDgDgMgDQgNgCgJgGQgOgLgMgWQgKgTgdglIgyhFQgegrgSgoQgXgygGgzQgHgvgZgpQgKgQgPgRIgYgdQgdgjgJgWQgMggANglQAYhGgNh6QgEgmgHgmIgHgfIKcAAIAAI8IMqLSIAHANQAKAQAHARQAYA2AAAjQAAATgFATQgEAOgIATIgOAgQgHATgCARQgDAVAIAdIAHAWIAIAVQAJAXgDAJQgEAMgWAAQgpAAigAXIiYAYIhehWg"
    );
    var mask_3_graphics_61 = new cjs.Graphics().p(
      "AKCSVQhthmgrgyQgXgbg0gXQglgQhBgUIhkgfQgygRgRgQQgjgghaiyQgbg4gehAIgZg1QgFgGgFgNQgLgZABgfQAAgQgGgFQgDgDgNgDQgOgDgKgHQgPgKgMgYQgLgUgegoQgog0gOgVQgggugTgrQgYg1gHg1QgHgygbgsQgKgRgQgTIgagfQgfgkgJgXQgNgjAOgoQAahKgOiBQgEgpgIgpIgIghILHAAIAAJhINdMAIAIAOQAKARAIASQAaA5AAAlQAAAVgGAUQgEAPgJAUIgOAiQgIAUgDASQgDAXAJAeIAIAYIAIAWQAJAYgDAKQgEANgYAAQgqAAirAZIihAZIhkhcg"
    );
    var mask_3_graphics_62 = new cjs.Graphics().p(
      "AJ7SrQhzhrgug1QgYgdg3gYQgngRhGgVIhpghQg1gTgTgRQgkghhfi+Qgeg7gghEIgag3QgFgHgGgNQgLgbABghQAAgRgGgGQgDgDgOgDQgPgDgKgHQgQgLgNgZQgMgVgggqQgqg4gPgWQgigxgTgtQgag4gIg4QgHg2gdgvQgLgRgQgUIgcghQghgngJgYQgOglAPgqQAbhPgOiJQgFgrgJgrIgHgjILxAAIAAKGIOQMtIAJAOQAKATAJATQAbA8AAAoQAAAVgGAWQgEAPgKAWIgPAkQgIAVgDATQgDAYAJAgIAIAaIAJAXQAJAagDAKQgEAOgZAAQgtAAi1AaIirAbQgwgsg6g2g"
    );
    var mask_3_graphics_63 = new cjs.Graphics().p(
      "AJ0TBQh5hygxg4Qgageg6gaQgpgShJgWIhwgjQg3gTgUgSQgngjhkjIQgfg/gihIIgcg7QgFgHgGgNQgMgcABgjQAAgSgHgHQgDgDgPgDQgPgDgLgHQgRgMgOgbQgMgWgigtQgsg6gQgXQgkg0gVgwQgbg6gIg8QgHg5gfgyQgLgSgSgVIgdgjQgjgpgKgaQgPgmAQgtQAdhTgPiRQgFgtgJguIgIglIMbAAIAAKqIPENbIAJAPQALAUAJAUQAdA/AAAqQAAAXgHAXQgEAQgKAXIgQAnQgJAWgDAUQgDAZAJAiIAJAbIAKAZQAJAagDAMQgEAOgbAAQgwAAi+AcIi1AcQgzgug9g5g"
    );
    var mask_3_graphics_64 = new cjs.Graphics().p(
      "AJ1S+Qh4hxgwg4Qgagdg6gaQgpgShIgWIhvgjQg3gTgUgSQgmgjhjjGQggg+ghhHIgbg7QgGgHgGgOQgMgbABgjQAAgSgGgGQgEgDgOgDQgQgDgKgIQgRgMgOgaQgMgWghgsQgtg6gPgXQgkg0gUgvQgbg6gIg7QgIg5gegxQgMgSgRgVIgdgiQgigpgKgaQgPgmAQgsQAdhTgQiPQgFgtgIguIgIgkIMVAAIAAKkIO8NUIAIAPQAMAUAIAUQAdA/AAApQAAAXgGAWQgFARgKAXIgQAlQgIAXgDATQgEAZAKAiIAJAbIAJAZQAKAagEALQgEAOgaAAQgwAAi9AcIizAcQgzgug8g4g"
    );
    var mask_3_graphics_65 = new cjs.Graphics().p(
      "AJ2S6Qh4hvgvg3Qgageg5gaQgpgRhIgWIhtgiQg3gUgUgSQgmgihijFQgfg+ghhGIgbg6QgGgHgGgOQgLgbAAgiQABgSgHgGQgDgDgPgDQgPgDgKgIQgRgMgOgaQgMgWghgrQgsg6gQgXQgjgzgUgvQgbg5gIg7QgHg4gegxQgMgSgRgVIgcgiQgjgogKgaQgOgmAQgsQAchRgPiPQgFgtgJgtIgIgkIMPAAIAAKfIO0NNIAJAPQALAUAJATQAcA/AAApQAAAXgGAWQgEAQgKAXIgQAlQgIAWgDAUQgEAZAJAhIAJAbIAKAYQAJAagDALQgEAOgaAAQgwAAi7AcIiyAbQgygtg8g4g"
    );
    var mask_3_graphics_66 = new cjs.Graphics().p(
      "AJ3S3Qh3hvgvg2Qgageg4gZQgogShIgWIhtghQg2gTgTgSQgmgihijEQgeg9ghhGIgbg5QgGgHgFgOQgMgbABgiQAAgSgGgGQgEgDgOgDQgPgDgLgHQgQgMgOgaQgMgVghgsQgrg5gQgXQgigygVgvQgag5gIg6QgHg4gegwQgMgSgRgVIgcghQgigogKgaQgOglAPgsQAdhRgQiNQgEgtgJgsIgIgkIMJAAIAAKZIOsNGIAJAPQALAUAIATQAdA+AAApQAAAWgHAWQgEARgKAWIgPAlQgJAWgDAUQgDAYAJAhIAJAbIAJAYQAKAagEALQgEAOgaAAQgvAAi6AbIiwAbQgygsg7g4g"
    );
    var mask_3_graphics_67 = new cjs.Graphics().p(
      "AJ4S0Qh2hugvg2QgZgeg4gZQgogRhHgWIhsghQg2gTgTgSQglgihhjBQgfg9gghFIgbg5QgGgHgFgOQgMgbABghQAAgSgGgGQgDgDgPgDQgPgDgKgHQgQgMgOgaQgMgVgggrQgrg5gQgWQgigzgUguQgbg5gHg5QgIg3gdgwQgMgSgQgUIgdgiQghgogKgZQgOglAPgrQAchRgPiMQgFgsgIgsIgIgkIMCAAIAAKUIOlNAIAIAPQALASAJAUQAcA9AAApQAAAWgGAWQgFAQgJAWIgQAlQgIAWgDATQgEAZAJAgIAKAbIAJAYQAJAagDAKQgEAOgaAAQgvAAi4AbIivAbQgygsg6g3g"
    );
    var mask_3_graphics_68 = new cjs.Graphics().p(
      "AJ4SxQh0hugvg1QgZgdg3gZQgogShGgVIhrghQg2gTgTgRQglgihgjAQgeg8gghFIgbg5QgFgGgGgOQgLgbAAghQABgRgHgGQgDgDgOgDQgPgDgKgIQgQgLgOgaQgMgVgggrQgrg4gPgWQgigygUguQgag5gIg4QgHg3gegvQgLgSgQgUIgcgiQgigngKgZQgOglAQgrQAbhPgOiMQgFgrgJgsIgHgjIL7AAIAAKOIOeM5IAIAPQALASAIAUQAcA9AAAoQAAAWgGAWQgEAPgKAXIgPAkQgIAWgDATQgEAYAJAhIAJAaIAJAXQAJAagDALQgEANgZAAQgvAAi3AbIitAbQgxgsg7g2g"
    );
    var mask_3_graphics_69 = new cjs.Graphics().p(
      "AJ6StQh0htgug1QgZgdg3gYQgngShGgVIhqghQg1gSgTgSQglghhfi+Qgeg8gghEIgag5QgGgGgFgNQgMgbABghQABgRgHgGQgDgDgOgDQgPgDgKgHQgQgMgOgZQgLgVgggrQgrg3gPgWQgigygTgtQgag5gIg4QgHg2gdgvQgLgSgRgUIgcghQghgngJgZQgOgkAPgrQAbhPgOiKQgFgrgJgrIgHgkIL1AAIAAKKIOWMxIAIAPQALATAIATQAcA8AAAoQAAAWgGAWQgEAPgKAWIgPAlQgIAVgDATQgEAYAJAgIAJAaIAJAYQAJAZgDAKQgEAOgZAAQguAAi2AbIisAaQgwgrg6g2g"
    );
    var mask_3_graphics_103 = new cjs.Graphics().p(
      "AJ6StQh0htgug1QgZgdg3gYQgngShGgVIhqghQg1gSgTgSQglghhfi+Qgeg8gghEIgag5QgGgGgFgNQgMgbABghQABgRgHgGQgDgDgOgDQgPgDgKgHQgQgMgOgZQgLgVgggrQgrg3gPgWQgigygTgtQgag5gIg4QgHg2gdgvQgLgSgRgUIgcghQghgngJgZQgOgkAPgrQAbhPgOiKQgFgrgJgrIgHgkIL1AAIAAKKIOWMxIAIAPQALATAIATQAcA8AAAoQAAAWgGAWQgEAPgKAWIgPAlQgIAVgDATQgEAYAJAgIAJAaIAJAYQAJAZgDAKQgEAOgZAAQguAAi2AbIisAaQgwgrg6g2g"
    );
    var mask_3_graphics_104 = new cjs.Graphics().p(
      "AJEVhQioidhDhOQgkgqhQgjQg5gZhmgfIiZgwQhNgbgbgZQg2gxiMkVQgrhWgvhjIgmhSQgIgKgIgTQgRgnACgvQAAgagJgIQgFgFgUgEQgWgEgOgLQgYgQgTglQgRgfgvg8Qg9hRgWggQgyhIgchCQgmhSgLhTQgKhPgrhEQgQgagYgdIgogwQgwg5gOgkQgVg1AWg+QAohzgVjIQgHg/gMg/IgLgzIROAAIAAOvIU0SlIAMAVQAQAbAMAcQAoBYAAA6QAAAggJAfQgGAXgOAgIgWA1QgMAegEAcQgFAjANAvIANAlIANAjQANAlgFAPQgFAUglAAQhCAAkIAmIj6AnQhHg/hUhPg"
    );
    var mask_3_graphics_105 = new cjs.Graphics().p(
      "AJWarQjdjOhYhmQgvg2hpgvQhLghiEgpIjKg+QhlgkgkghQhHhAi3lrQg5hxg9iCIgyhrQgLgNgKgZQgWgzACg/QAAghgMgLQgGgGgbgGQgcgFgTgOQgfgWgagwQgVgng+hRQhQhqgdgqQhBhfgmhWQgxhsgPhtQgNhng4haQgVgigfglIg1g/Qg/hKgTgwQgbhFAdhSQA1iXgckHQgJhSgQhTIgPhDIWmAAIAATWIbUYXIAQAdQAUAjAQAkQA1B0AABMQAAApgLAqQgJAdgSAqQgZA6gEAMQgPAogGAkQgHAuARA9IARAyIARAtQASAwgGAUQgIAagwAAQhXAAlaAzIlIAzQhdhThuhog"
    );
    var mask_3_graphics_106 = new cjs.Graphics().p(
      "EALkAhBQkRj/hth+Qg7hEiBg6QhdgpikgxIj6hOQh9gsgtgpQhXhPjinBQhHiNhMihIg+iEQgNgQgNgfQgbg/AChOQABgpgPgOQgIgHghgHQgjgHgYgRQgmgbggg8QgagwhMhkQhkiEgkg0QhQh1gvhqQg9iGgSiHQgRiAhFhuQgZgqgngvIhChOQhOhcgXg7QghhWAkhkQBBi7gjlFQgLhmgUhnIgShTIb9AAIAAX8MAh0AeKIAUAjQAZAsAUAtQBBCPAABfQAAAzgOAyQgKAlgXA0QgfBHgFAPQgTAygHAtQgIA5AVBMQAIAaANAjIAVA3QAWA8gIAZQgJAgg8AAQhsAAmsA/ImWA/QhzhniIiAg"
    );
    var mask_3_graphics_107 = new cjs.Graphics().p(
      "EANyAnXQlFkwiCiWQhGhRibhFQhugxjEg7QkHhRgjgMQiVg1g2gwQhnhekOoYQhVinhajAIhKieQgPgTgQglQgghLADhdQABgxgSgQQgKgJgngIQgqgIgcgVQgtgggmhHQghg7hah3Qh3idgrg9QhfiMg4h/QhIifgWihQgUiYhSiEQgfgygug4QgOgRhBhMQhdhtgbhHQgnhmAqh4QBOjfgqmDQgNh6gYh6IgVhjMAhVAAAIAAciMAoUAj9IAXAqQAeA0AYA2QBNCqAABxQAAA9gQA8QgMAsgcA+QglBVgGASQgWA7gIA2QgKBDAZBbQAKAfAPApIAZBDQAaBHgJAeQgLAmhHAAQiBAAn+BLInlBLQiIh6ijiZg"
    );
    var mask_3_graphics_108 = new cjs.Graphics().p(
      "EAQAAttQl5lhiXivQhShdizhRQiBg4jjhFQkxhegpgOQitg9g+g4Qh4huk6ptQhijDhpjeIhWi4QgSgWgSgrQglhXADhsQABg5gUgTQgLgKgugJQgwgKgigXQg0gmgshTQgmhEhpiKQiKi2gxhIQhviihBiTQhUi5gZi7QgXixhgiZQgkg6g2hBQgPgThMhZQhsh/gfhRQguh3AyiMQBakCgxnCQgPiNgciPIgYhyMAmsAAAMAAAAhIMAu0ApwIAbAxQAjA8AcA/QBZDFAACDQAABHgTBGQgOAzggBIQgqBigHAVQgbBFgJA+QgLBPAdBpQALAkASAwIAdBOQAeBSgLAjQgMAshTAAQiVAApRBXIoyBXQifiOi9ixg"
    );
    var mask_3_graphics_109 = new cjs.Graphics().p(
      "EASOA0DQmumTirjGQhdhrjNhbQiShBkChOQlchrgvgQQjFhFhHhBQiJh8llrEQhvjeh4j9IhhjRQgVgZgUgxQgrhjADh7QAChAgYgWQgMgLg0gLQg3gLgmgbQg8grgyheQgrhOh3idQidjQg5hRQh+i5hKioQhgjTgcjUQgbjJhsivQgphCg+hKQgRgWhXhlQh6iQgkhdQg0iIA4ieQBnkng4oAQgRihgfiiIgdiCMAsFAAAMAAAAluMA1TAvjIAgA3QAnBGAfBGQBnDhAACWQAABQgWBQQgQA6gkBSQgxBwgIAXQgeBPgLBHQgMBaAhB3QAMApAVA3IAhBYQAiBfgMAnQgOAyhfAAQiqAAqjBjIqABjQi1iijXjJg"
    );
    var mask_3_graphics_110 = new cjs.Graphics().p(
      "EAUcA6ZQninEjAjeQhph4jlhnQikhIkihYQmGh4g1gSQjdhNhPhJQiaiLmQsaQh+j5iGkcIhtjrQgXgcgXg3QgwhvAEiKQABhIgagZQgOgMg6gNQg+gMgqgeQhEgwg4hqQgwhXiGiwQiwjphAhcQiNjOhTi9QhsjtgfjuQgejih6jEQguhKhFhTQgTgZhhhxQiKiigphoQg6iYBAiyQBylKg9o/QgUi0gji2IggiTMAxdAAAMAAAAqVMA7yA1WIAkA+QAsBOAjBPQBzD8AACoQAABagZBaQgSBBgoBcQg3B9gJAbQghBYgNBQQgOBkAlCGQAOAuAXA+QANAjAYBAQAnBqgOAsQgQA4hqAAQi+AAr1BvIrPBwQjLi2jxjig"
    );
    var mask_3_graphics_111 = new cjs.Graphics().p(
      "EAWqBAvQoWn1jWj3QhziFj+hxQi2hQlChiQmxiFg6gUQj1hWhYhQQiqibm8twQiLkUiVk7Ih5kEQgagfgZg9Qg1h7AEiZQAChQgdgbQgQgOhAgOQhFgOgvghQhKg1g/h1Qg1hhiUjDQjEkDhGhlQidjlhcjSQh3kGgjkIQgij6iHjaQgzhShMhcQgVgbhsh9QiZi0gth0QhAioBGjGQB/luhEp9QgWjIgnjJIgjijMA20AAAMAAAAu7MBCTA7JIAnBFQAxBWAnBYQB/EYAAC5QAABkgbBkQgUBIgtBmQg9CLgJAdQgmBigNBYQgQBwApCUQAQAzAZBFQAOAnAbBGQArB2gPAxQgSA+h1AAQjUAAtHB8IscB7QjhjKkMj6g"
    );
    var mask_3_graphics_112 = new cjs.Graphics().p(
      "EAY4BHFQpLomjqkPQh/iSkXh9QjIhYlhhrQnbiShAgWQkNhehghYQi7iqnovHQiYkuiklaIiFkeQgcgigchDQg6iHAFioQAChYghgeQgRgPhHgPQhLgPgzglQhSg6hFiBQg6hqijjXQjXkbhNhwQisj7hljmQiDkggnkiQgkkTiUjuQg4hbhUhlQgYgeh2iJQinjGgyh/QhHi4BOjZQCLmShLq8QgYjbgqjeIgniyMA8MAAAMAAAAzhMBIyBA8IArBLQA2BfArBhQCLEzAADMQAABtgeBuQgVBPgyBwQhCCZgLAgQgpBrgPBhQgRB6AtCkQARA3AcBMQAPArAeBNQAvCBgRA2QgTBEiBAAQjoAAuaCIItqCHQj3jdkmkTg"
    );
    var mask_3_graphics_113 = new cjs.Graphics().p(
      "EAbGBNbQp/pXj/knQiKifkwiIQjahgmBh1QoFifhGgXQklhnhphgQjMi5oTwdQimlKiyl5IiRk3QgeglgfhJQg/iTAFi3QAChggjghQgTgQhNgQQhSgRg4gnQhZhAhLiMQg/h0iyjqQjqk1hUh6Qi7kRhuj7QiPk5gqk8QgoksihkDQg9hjhbhuQgaggiBiWQi2jXg2iKQhNjKBUjsQCYm1hSr7QgZjvgvjxIgqjCMBBjAAAMAAAA4IMBPSBGuIAvBSQA6BnAvBpQCYFPAADeQAAB3ggB4QgYBWg2B6QhICmgMAjQgsB1gRBqQgSCFAxCyQASA9AfBSQAQAuAhBVQAzCMgSA6QgVBLiNAAQj8AAvsCUIu5CTQkNjxlAkrg"
    );
    var mask_3_graphics_114 = new cjs.Graphics().p(
      "EAdUBTxQqzqJkUk/QiWislJiSQjrhomhh/QovishMgZQk9hwhyhoQjcjHo+x0Qi0lljBmXIidlRQgggoghhPQhFifAFjGQADhogmgjQgUgShUgSQhYgRg9grQhghFhRiYQhFh9jAj9Qj9lOhbiEQjLkoh3kPQialTgulWQgrlEivkZQhChqhih3QgcgkiLiiQjGjpg6iVQhUjaBckAQCknZhYs5QgckCgzkFIgujSMBG8AAAMAAAA8uMBVxBMhIAzBZQA/BvAzByQClFqAADxQAACBgkCBQgZBdg6CEQhPC0gNAmQgwB+gRByQgVCRA1DAQAVBCAhBYQARAzAkBbQA4CYgVA/QgXBRiXAAQkSAAw+CgIwGCfQkjkElblEg"
    );
    var mask_3_graphics_115 = new cjs.Graphics().p(
      "EAfiBaGQroq5kolXQihi5liieQj9hwnBiIQpZi5hSgbQlVh4h6hwQjtjXpqzJQjCmAjPm3IiolqQgkgrgjhVQhKirAGjVQAChvgognQgWgThagTQhfgThCguQhnhKhXijQhKiHjPkQQkQlohiiOQjak+iAkkQimlsgxlwQguldi8kuQhHhyhqiAQgegmiWivQjVj6g+ihQhajqBikTQCxn9hft4QgekWg3kYIgxjiMBMTAAAMAAABBUMBcSBSUIA2BfQBEB4A3B7QCxGFAAEDQAACLgmCLQgcBkg+COQhVDBgNApQg0CIgTB7QgWCbA5DPQAWBHAjBfQAUA3AmBiQA8CjgWBEQgZBXijAAQkmAAyQCsIxVCrQk5kYl1ldg"
    );
    var mask_3_graphics_116 = new cjs.Graphics().p(
      "EAhwBgcQscrqk+lvQisjGl6ipQkQh4ngiSQqEjGhXgdQltiAiDh4Qj9jmqW0gQjPmbjdnVIi1mEQgmgugmhbQhPi3AGjkQADh3gsgpQgXgVhggUQhmgUhGgyQhvhPhdivQhPiQjdkkQkkmBhpiXQjplViJk4QiymHg0mJQgyl1jJlEQhMh6hxiJQghgpigi7QjjkMhDisQhgj6BoknQC+ohhmu2Qggkpg6ktIg1jyMBRrAAAMAAABF7MBixBYHIA6BmQBJCAA6CEQC+GgAAEVQAACVgpCVQgdBrhDCYQhaDPgPAsQg3CRgVCEQgXCmA9DdQAXBMAmBmQAVA6AoBpQBBCvgYBJQgaBdivAAQk7AAziC4IyjC4QlPktmPl1g"
    );
    var mask_3_graphics_117 = new cjs.Graphics().p(
      "EAj+BmyQtQsblTmIQi3jTmUi0Qkhh/n/icQqvjThdgfQmEiJiMh/QkPj1rB12Qjcm2jsn1IjBmdQgogxgphhQhUjDAHjzQADh/gvgsQgZgVhmgWQhtgWhLg1Qh2hUhji6QhUiajsk3Qk3mahwiiQj4lriSlMQi+mhg3mjQg1mOjXlZQhQiCh6iSQgigsirjGQjykehHi4QhnkLBwk5QDKpFhtv1Qgik9g+lAIg4kCMBXCAAAMAAABKhMBpRBd6IA+BtQBOCIA+CMQDKG8AAEoQAACegrCeQgfBzhICiQhgDdgQAuQg7CbgWCMQgYCxBBDsQAZBRAoBtQAWA+ArBwQBFC6gZBOQgcBji7AAQlPAA01DEIzwDEQlllAmqmOg"
    );
    var mask_3_graphics_118 = new cjs.Graphics().p(
      "EAmMBtIQuEtMlomgQjDjgmsi/QkziIofilQrZjghjghQmciRiViHQkfkFrs3MQjrnRj6oTIjNm3Qgrg0grhnQhZjQAHkBQADiHgxguQgbgXhsgXQh0gXhPg5Qh9hZhqjFQhZikj7lKQlJm0h3irQkImCiblhQjJm6g8m9Qg4mmjjluQhWiLiBibQgkgui1jTQkCkwhLjCQhtkcB2lNQDXpph0wzQgklRhClTIg7kSMBcaAAAMAAABPHMBvwBjtIBCBzQBTCSBCCUQDWHYAAE5QAACoguCoQghB6hMCsQhmDqgQAyQg/ClgXCUQgbC8BGD7QAaBVArB0QAXBCAuB3QBJDFgbBTQgdBpjGAAQlkAA2HDQI0/DQQl7lUnEmmg"
    );
    var mask_3_graphics_119 = new cjs.Graphics().p(
      "EAoaBzeQu5t9l8m4QjOjtnGjLQlEiPo/ivQsDjthpgjQm0iZidiPQkwkUsY4jQj4nskJoyIjZnQQgtg4gthsQhfjcAHkQQAEiPg0gxQgcgYh0gZQh6gYhTg7QiFhfhwjRQheitkJldQldnNh+i2QkXmYikl1QjVnUg/nXQg7m/jxmDQhbiTiIikQgmgxjAjfQkQlBhRjOQhzksB+lhQDjqMh6xyQgnlkhGloIg+khMBhxAAAMAAABTtMB2RBpgIBGB6QBXCaBGCdQDiHzAAFLQAACygwCyQgjCBhRC2QhsD4gRA0QhDCvgYCdQgcDHBJEJQAcBbAuB6QAYBFAxB+QBNDSgcBXQggBvjRAAQl5AA3ZDcI2MDcQmSlnnem/g"
    );
    var mask_3_graphics_120 = new cjs.Graphics().p(
      "EAqoB50QvtuvmRnQQjaj6nejVQlXiXpei4Qsuj7huglQnMiiimiXQlAkitE55QkFoHkYpRIjknqQgwg7gwhyQhkjoAIkfQADiXg3gzQgdgah6gaQiBgahYg+QiMhkh2jcQhji4kYlwQlwnmiFi/QkmmvitmKQjhnthCnxQg/nXj+mZQhfibiQitQgogzjLjsQkflThVjZQh5k9CElzQDwqxiBywQgpl4hJl7IhDkxMBnKAAAMAAABYTMB8wBvTIBKCBQBcCiBJClQDwIPAAFeQAAC7g0C8QglCIhUDAQhzEFgSA4QhGC4gaClQgdDSBNEYQAeBgAwCBQAZBJA0CFQBRDdgeBcQghB1jdAAQmNAA4sDoI3aDoQmol7n4nXg"
    );
    var mask_3_graphics_121 = new cjs.Graphics().p(
      "EAs2CAKQwhvgmmnoQjlkHn4jhQloifp+jBQtYkIh0gmQnkirivifQlRkytv7PQkToikmpvIjwoEQgzg+gyh4Qhpj0AIkuQAEifg6g2QgfgbiAgbQiHgbhdhCQiUhph8joQhojBkmmDQmEn/iLjKQk2nFi2meQjsoHhGoLQhCnwkLmuQhlijiXi2Qgrg2jVj4QkulkhZjlQiAlNCMmHQD8rUiIzvQgrmLhNmPIhGlCMBshAAAMAAABc6MCDQB1GIBOCIQBhCqBNCuQD8IqAAFwQAADGg2DFQgnCPhZDKQh4ETgUA6QhJDCgbCuQgfDdBREmQAfBlAyCHQAbBOA3CLQBVDpgfBhQgjB7joAAQmjAA59D0I4pD1Qm9mPoTnwg"
    );
    var mask_3_graphics_122 = new cjs.Graphics().p(
      "EAvECGgQxWwRm7oAQjwkVoQjrQl6inqejLQuCkVh6goQn8izi3inQlilBub8lQkgo9k1qPIj8odQg1hBg1h+QhukAAJk9QAEimg9g5QghgdiGgcQiOgdhihFQiahuiCjzQhujLk1mWQmXoZiSjTQlFnci/mzQj4oghJolQhFoJkZnDQhqiriei/Qgtg4jfkFQk9l2hejvQiGleCSmbQEIr4iO0tQgtmfhRmiIhJlSMBx5AAAMAAABhgMCJwB65IBRCOQBlCzBSC3QEIJFAAGCQAADQg5DPQgpCWhdDUQh+EggUA9QhODMgcC3QghDnBWE1QAgBqA1COQAdBSA5CSQBZD0ghBlQgkCCj0AAQm3AA7QEBI52EAQnUmjotoIg"
    );
    var mask_3_graphics_123 = new cjs.Graphics().p(
      "EAxSCM2QyKxCnQoYQj7kiopj3QmMiuq+jVQuskiiAgqQoUi8jAiuQlylQvG98QkupYlEqtIkIo3Qg3hEg4iEQhzkMAJlMQAEiuhAg8QgigeiMgdQiVgehmhJQiihziIj/QhzjUlEmpQmpoyiajeQlUnyjInHQkEo7hMo+QhJohkmnZQhuiyimjIQgvg8jqkQQlMmIhij7QiNluCamuQEUsciV1sQgumyhWm3IhMlhMB3QAAAMAAABmGMCQQCAsIBVCVQBqC7BWDAQEUJgAAGVQAADZg7DZQgrCdhiDeQiEEugVBAQhRDVgeC/QgiDzBaFDQAiBvA3CVQAeBVA7CZQBeEAgiBqQgmCJkAAAQnMAA8iEMI7EEMQnqm3pHogg"
    );
    var mask_3_graphics_124 = new cjs.Graphics().p(
      "EAzgCTLQy+xynloxQkGkupDkCQmdi3rdjeQvYkviFgsQosjEjIi2QmDlgvy/RQk8p0lSrMIkUpPQg6hIg5iKQh4kYAIlbQAFi2hDg+QgjggiTgfQicgfhrhLQiph5iOkKQh4jelSm9Qm9pLigjnQlkoJjRncQkQpUhQpYQhLo6kzntQh0i7itjRQgxg/j1kcQlbmahmkGQiTl/CgnBQEhtAib2qQgxnGhZnKIhQlxMB8oAAAMAAABqsMCWvCGfIBZCcQBvDDBZDIQEhJ9AAGmQAADjg+DjQgsCkhnDoQiKE8gWBCQhUDfgfDIQgkD+BdFSQAkBzA6CcQAfBZA+CgQBiELgkBvQgoCPkKAAQnhAA90EYI8TEYQn/nKpio6g"
    );
    var mask_3_graphics_125 = new cjs.Graphics().p(
      "EA1uCZhQzyykn6pIQkSk8pbkNQmwi+r8joQwCk8iLguQpEjMjRi+UgGTgFvgQeggoQlJqOlhrrIkgppQg8hLg8iPQh9klAJlqQAEi+hFhBQglggiZghQijgghvhPQiwh+iVkWQh9jnlhnQQnQpkinjyQlzofjanwQkbpuhUpyQhPpSlAoDQh4jDi1jaQgzhBkAkpQlqmrhqkSQiZmPCnnVQEttjii3pQgznZhdneIhUmBMCCAAAAMAAABvSMCdPCMSIBdCiQB0DMBdDRQEuKYAAG5QAADshBDtQgvCshrDxQiPFJgYBGQhYDoggDRQglEIBhFhQAlB4A9CjQAgBdBBCnQBmEWglB0QgqCVkWAAQn1AA/HEkI9gEkQoWnep8pSg"
    );
    var mask_3_graphics_126 = new cjs.Graphics().p(
      "EA38Cf3Q0nzVoOpgQkdlJp1kYQnBjGscjyQwslJiRgwQpcjUjZjHUgGlgF9gRJgh/QlXqplvsKIkrqCQg/hOg/iVQiCkxAJl5QAFjGhIhDQgngiiggiQipgih0hSQi3iDibkhQiCjxlwnjQnjp+iuj7QmCo2jjoFQknqHhXqMQhSprlNoYQh+jLi9jjQg1hEkJk1Ql5m9hvkdQigmfCunoQE6uIip4nQg1nthhnxIhXmRMCHYAAAMAAABz4MCjvCSFIBgCpQB5DVBhDZQE6KzAAHLQAAD2hED3QgwCzhvD7QiWFXgYBIQhcDygiDZQgnEUBmFvQAnB+A+CpQAiBgBECuQBqEignB5QgrCbkiAAUgIKAAAggZAEwI+uEwQosnxqWprg"
    );
    var mask_3_graphics_127 = new cjs.Graphics().p(
      "EA6KCmNQ1b0Gokp5QkolVqNkkQnTjOs8j7QxWlWiXgyQp0jdjijOUgG1gGNgR0gjUQllrEl+spIk3qcQhBhRhCibQiHk9AKmIQAFjOhMhGQgogjimgjQivgkh5hVQi/iIihktQiHj6l+n2Qn2qYi1kFQmSpMjsoZQkzqhhaqmQhWqDlaouQiDjTjEjsQg3hGkUlCQmInOh0koQilmwC0n8QFHuriw5mQg3oAhloGIhamhMCMvAAAMAAAB4fMCqPCX4IBkCwQB+DdBkDiQFHLOAAHdQAAEAhGEBQgzC6hzEFQicFkgZBMQhfD7gkDiQgoEeBqF+QAoCDBBCwQAjBkBHC1QBuEtgoB+QgtChkuAAUgIeAAAghrAE8I/9E9QpBoGqxqDg"
    );
    this.timeline.addTween(
      cjs.Tween.get(mask_3)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(45)
        .to({ graphics: mask_3_graphics_45, x: 77.1981, y: 81.9542 })
        .wait(1)
        .to({ graphics: mask_3_graphics_46, x: 79.6213, y: 84.7369 })
        .wait(1)
        .to({ graphics: mask_3_graphics_47, x: 82.0444, y: 87.5195 })
        .wait(1)
        .to({ graphics: mask_3_graphics_48, x: 84.4675, y: 90.3021 })
        .wait(1)
        .to({ graphics: mask_3_graphics_49, x: 86.8906, y: 93.0847 })
        .wait(1)
        .to({ graphics: mask_3_graphics_50, x: 89.3137, y: 95.8673 })
        .wait(1)
        .to({ graphics: mask_3_graphics_51, x: 91.7368, y: 98.6499 })
        .wait(1)
        .to({ graphics: mask_3_graphics_52, x: 94.1599, y: 101.4326 })
        .wait(1)
        .to({ graphics: mask_3_graphics_53, x: 96.583, y: 104.2152 })
        .wait(1)
        .to({ graphics: mask_3_graphics_54, x: 99.0061, y: 106.9978 })
        .wait(1)
        .to({ graphics: mask_3_graphics_55, x: 101.4292, y: 109.7804 })
        .wait(1)
        .to({ graphics: mask_3_graphics_56, x: 103.8523, y: 112.563 })
        .wait(1)
        .to({ graphics: mask_3_graphics_57, x: 106.2754, y: 115.3456 })
        .wait(1)
        .to({ graphics: mask_3_graphics_58, x: 108.6985, y: 118.1283 })
        .wait(1)
        .to({ graphics: mask_3_graphics_59, x: 111.1216, y: 120.9109 })
        .wait(1)
        .to({ graphics: mask_3_graphics_60, x: 113.5447, y: 123.6935 })
        .wait(1)
        .to({ graphics: mask_3_graphics_61, x: 115.9678, y: 126.4761 })
        .wait(1)
        .to({ graphics: mask_3_graphics_62, x: 118.391, y: 129.2587 })
        .wait(1)
        .to({ graphics: mask_3_graphics_63, x: 120.7696, y: 131.9747 })
        .wait(1)
        .to({ graphics: mask_3_graphics_64, x: 120.3965, y: 131.5615 })
        .wait(1)
        .to({ graphics: mask_3_graphics_65, x: 120.0234, y: 131.1482 })
        .wait(1)
        .to({ graphics: mask_3_graphics_66, x: 119.6503, y: 130.735 })
        .wait(1)
        .to({ graphics: mask_3_graphics_67, x: 119.2772, y: 130.3218 })
        .wait(1)
        .to({ graphics: mask_3_graphics_68, x: 118.9041, y: 129.9085 })
        .wait(1)
        .to({ graphics: mask_3_graphics_69, x: 118.5733, y: 129.4318 })
        .wait(34)
        .to({ graphics: mask_3_graphics_103, x: 118.5733, y: 129.4318 })
        .wait(1)
        .to({ graphics: mask_3_graphics_104, x: 138.2036, y: 151.9044 })
        .wait(1)
        .to({ graphics: mask_3_graphics_105, x: 150.6837, y: 159.377 })
        .wait(1)
        .to({ graphics: mask_3_graphics_106, x: 150.7256, y: 159.305 })
        .wait(1)
        .to({ graphics: mask_3_graphics_107, x: 150.7674, y: 159.2329 })
        .wait(1)
        .to({ graphics: mask_3_graphics_108, x: 150.8093, y: 159.1609 })
        .wait(1)
        .to({ graphics: mask_3_graphics_109, x: 150.8512, y: 159.0888 })
        .wait(1)
        .to({ graphics: mask_3_graphics_110, x: 150.893, y: 159.0168 })
        .wait(1)
        .to({ graphics: mask_3_graphics_111, x: 150.9349, y: 158.9447 })
        .wait(1)
        .to({ graphics: mask_3_graphics_112, x: 150.9768, y: 158.8726 })
        .wait(1)
        .to({ graphics: mask_3_graphics_113, x: 151.0186, y: 158.8006 })
        .wait(1)
        .to({ graphics: mask_3_graphics_114, x: 151.0605, y: 158.7285 })
        .wait(1)
        .to({ graphics: mask_3_graphics_115, x: 151.1023, y: 158.6565 })
        .wait(1)
        .to({ graphics: mask_3_graphics_116, x: 151.1442, y: 158.5844 })
        .wait(1)
        .to({ graphics: mask_3_graphics_117, x: 151.1861, y: 158.5124 })
        .wait(1)
        .to({ graphics: mask_3_graphics_118, x: 151.2279, y: 158.4403 })
        .wait(1)
        .to({ graphics: mask_3_graphics_119, x: 151.2698, y: 158.3682 })
        .wait(1)
        .to({ graphics: mask_3_graphics_120, x: 151.3117, y: 158.2962 })
        .wait(1)
        .to({ graphics: mask_3_graphics_121, x: 151.3535, y: 158.2241 })
        .wait(1)
        .to({ graphics: mask_3_graphics_122, x: 151.3954, y: 158.1521 })
        .wait(1)
        .to({ graphics: mask_3_graphics_123, x: 151.4372, y: 158.08 })
        .wait(1)
        .to({ graphics: mask_3_graphics_124, x: 151.4791, y: 158.008 })
        .wait(1)
        .to({ graphics: mask_3_graphics_125, x: 151.521, y: 157.9359 })
        .wait(1)
        .to({ graphics: mask_3_graphics_126, x: 151.5628, y: 157.8639 })
        .wait(1)
        .to({ graphics: mask_3_graphics_127, x: 150.6, y: 159.8012 })
        .wait(138)
    );
    // Layer_8
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -117.7,
        -203.8,
        117.6,
        203.8
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_1.setTransform(144, 161.6);
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -108.1,
        -205.5,
        108,
        205.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_2.setTransform(144, 161.6);
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -98.5,
        -207.2,
        98.5,
        207.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_3.setTransform(144, 161.6);
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -88.9,
        -208.9,
        88.9,
        208.9
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_4.setTransform(144, 161.6);
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -79.3,
        -210.6,
        79.3,
        210.7
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_5.setTransform(144, 161.6);
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -69.7,
        -212.3,
        69.7,
        212.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_6.setTransform(144, 161.6);
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -60.2,
        -214,
        60.1,
        214.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_7.setTransform(144, 161.6);
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -50.6,
        -215.7,
        50.5,
        215.8
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_8.setTransform(144, 161.6);
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -41,
        -217.5,
        41,
        217.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_9.setTransform(144, 161.6);
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -31.4,
        -219.2,
        31.4,
        219.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_10.setTransform(144, 161.6);
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -21.8,
        -220.9,
        21.8,
        220.8
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_11.setTransform(144, 161.6);
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -12.2,
        -222.6,
        12.2,
        222.6
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_12.setTransform(144, 161.6);
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -2.7,
        -224.3,
        2.6,
        224.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_13.setTransform(144, 161.6);
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        6.9,
        -226,
        -6.9,
        226
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_14.setTransform(144, 161.6);
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        16.5,
        -227.7,
        -16.5,
        227.7
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_15.setTransform(144, 161.6);
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        26.1,
        -229.4,
        -26.1,
        229.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_16.setTransform(144, 161.6);
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        35.6,
        -231.1,
        -35.7,
        231.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_17.setTransform(144, 161.6);
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        45.2,
        -232.8,
        -45.3,
        232.8
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_18.setTransform(144, 161.6);
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        54.8,
        -234.5,
        -54.9,
        234.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_19.setTransform(144, 161.6);
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        64.4,
        -236.2,
        -64.5,
        236.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_20.setTransform(144, 161.6);
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        73.9,
        -238,
        -74.1,
        237.9
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_21.setTransform(144, 161.6);
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        83.5,
        -239.7,
        -83.6,
        239.6
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_22.setTransform(144, 161.6);
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        93.1,
        -241.4,
        -93.2,
        241.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_23.setTransform(144, 161.6);
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        102.7,
        -243.1,
        -102.8,
        243
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_24.setTransform(144, 161.6);
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        112.3,
        -244.8,
        -112.4,
        244.7
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_25.setTransform(144, 161.6);
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        121.9,
        -246.5,
        -122,
        246.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_26.setTransform(144, 161.6);
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        131.4,
        -248.3,
        -131.6,
        248.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_27.setTransform(144, 161.6);
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        141,
        -250,
        -141.2,
        249.8
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_28.setTransform(144, 161.6);
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        150.6,
        -251.7,
        -150.7,
        251.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_29.setTransform(144, 161.6);
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        160.2,
        -253.4,
        -160.3,
        253.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_30.setTransform(144, 161.6);
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        169.8,
        -255.1,
        -169.9,
        254.9
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_31.setTransform(144, 161.6);
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        179.4,
        -256.8,
        -179.5,
        256.7
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_32.setTransform(144, 161.6);
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        167.3,
        -249.7,
        -167.5,
        249.6
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_33.setTransform(144, 161.6);
    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        155.3,
        -242.7,
        -155.5,
        242.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_34.setTransform(144, 161.6);
    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        143.3,
        -235.6,
        -143.5,
        235.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_35.setTransform(144, 161.6);
    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        131.3,
        -228.5,
        -131.4,
        228.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_36.setTransform(144, 161.6);
    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        119.3,
        -221.4,
        -119.4,
        221.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_37.setTransform(144, 161.6);
    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        107.3,
        -214.4,
        -107.4,
        214.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_38.setTransform(144, 161.6);
    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        95.3,
        -207.3,
        -95.4,
        207.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_39.setTransform(144, 161.6);
    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        83.3,
        -200.2,
        -83.4,
        200.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_40.setTransform(144, 161.6);
    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        71.2,
        -193.2,
        -71.4,
        193.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_41.setTransform(144, 161.6);
    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        59.2,
        -186.1,
        -59.4,
        186
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_42.setTransform(144, 161.6);
    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        47.2,
        -179,
        -47.4,
        179
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_43.setTransform(144, 161.6);
    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        35.2,
        -172,
        -35.3,
        171.9
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_44.setTransform(144, 161.6);
    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        23.2,
        -164.9,
        -23.3,
        164.9
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_45.setTransform(144, 161.6);
    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        11.2,
        -157.8,
        -11.3,
        157.8
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_46.setTransform(144, 161.6);
    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -0.8,
        -150.7,
        0.7,
        150.8
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_47.setTransform(144, 161.6);
    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -12.8,
        -143.7,
        12.7,
        143.7
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_48.setTransform(144, 161.6);
    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -24.8,
        -136.6,
        24.7,
        136.7
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_49.setTransform(144, 161.6);
    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -36.9,
        -129.5,
        36.7,
        129.6
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_50.setTransform(144, 161.6);
    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -48.9,
        -122.5,
        48.7,
        122.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_51.setTransform(144, 161.6);
    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -60.9,
        -115.4,
        60.7,
        115.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_52.setTransform(144, 161.6);
    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -72.9,
        -108.3,
        72.8,
        108.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_53.setTransform(144, 161.6);
    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -84.9,
        -101.3,
        84.8,
        101.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_54.setTransform(144, 161.6);
    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -96.9,
        -94.2,
        96.8,
        94.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_55.setTransform(144, 161.6);
    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -108.9,
        -87.1,
        108.8,
        87.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_56.setTransform(144, 161.6);
    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -120.9,
        -80,
        120.8,
        80.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_57.setTransform(144, 161.6);
    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -133,
        -73,
        132.8,
        73.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_58.setTransform(144, 161.6);
    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics
      .lf(
        [
          "#B1813F",
          "#C89F4F",
          "#E8D187",
          "#B38F49",
          "#92692D",
          "#7C521B",
          "#905A1E",
          "#BC7829"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -145,
        -65.9,
        144.8,
        66.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_59.setTransform(144, 161.6);
    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics
      .lf(
        [
          "rgba(180,132,60,0.961)",
          "rgba(202,161,76,0.961)",
          "rgba(233,209,130,0.961)",
          "rgba(182,145,70,0.961)",
          "rgba(150,109,43,0.961)",
          "rgba(129,87,26,0.961)",
          "rgba(148,95,29,0.961)",
          "rgba(191,123,39,0.961)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -141.6,
        -52.9,
        141.4,
        53.1
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_60.setTransform(144, 161.6);
    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics
      .lf(
        [
          "rgba(183,135,58,0.922)",
          "rgba(204,163,73,0.922)",
          "rgba(234,209,124,0.922)",
          "rgba(185,148,67,0.922)",
          "rgba(155,113,41,0.922)",
          "rgba(135,92,25,0.922)",
          "rgba(153,99,28,0.922)",
          "rgba(193,127,38,0.922)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -138.2,
        -40,
        138.1,
        40.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_61.setTransform(144, 161.6);
    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics
      .lf(
        [
          "rgba(186,138,55,0.878)",
          "rgba(207,164,70,0.878)",
          "rgba(235,208,119,0.878)",
          "rgba(188,150,64,0.878)",
          "rgba(159,117,40,0.878)",
          "rgba(140,97,24,0.878)",
          "rgba(157,104,26,0.878)",
          "rgba(196,130,36,0.878)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -134.8,
        -27,
        134.7,
        27.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_62.setTransform(144, 161.6);
    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics
      .lf(
        [
          "rgba(190,141,53,0.839)",
          "rgba(209,166,66,0.839)",
          "rgba(236,208,113,0.839)",
          "rgba(191,153,61,0.839)",
          "rgba(163,121,38,0.839)",
          "rgba(145,101,23,0.839)",
          "rgba(162,108,25,0.839)",
          "rgba(199,133,34,0.839)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -131.4,
        -14.2,
        131.3,
        14.2
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_63.setTransform(144, 161.6);
    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics
      .lf(
        [
          "rgba(193,144,50,0.8)",
          "rgba(211,168,63,0.8)",
          "rgba(237,208,108,0.8)",
          "rgba(194,155,58,0.8)",
          "rgba(168,125,36,0.8)",
          "rgba(150,106,22,0.8)",
          "rgba(166,113,24,0.8)",
          "rgba(201,137,33,0.8)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -128,
        -1.2,
        128,
        1.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_64.setTransform(144, 161.6);
    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics
      .lf(
        [
          "rgba(196,147,48,0.761)",
          "rgba(213,170,60,0.761)",
          "rgba(238,208,103,0.761)",
          "rgba(197,158,55,0.761)",
          "rgba(172,129,34,0.761)",
          "rgba(156,111,21,0.761)",
          "rgba(171,117,23,0.761)",
          "rgba(204,140,31,0.761)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -124.6,
        11.7,
        124.6,
        -11.7
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_65.setTransform(144, 161.6);
    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics
      .lf(
        [
          "rgba(199,150,45,0.722)",
          "rgba(215,172,57,0.722)",
          "rgba(239,208,97,0.722)",
          "rgba(200,160,52,0.722)",
          "rgba(176,133,32,0.722)",
          "rgba(161,116,20,0.722)",
          "rgba(175,122,22,0.722)",
          "rgba(207,143,29,0.722)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -121.2,
        24.7,
        121.2,
        -24.6
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_66.setTransform(144, 161.6);
    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics
      .lf(
        [
          "rgba(202,153,43,0.678)",
          "rgba(218,173,54,0.678)",
          "rgba(239,207,92,0.678)",
          "rgba(204,163,50,0.678)",
          "rgba(181,136,31,0.678)",
          "rgba(166,121,18,0.678)",
          "rgba(180,126,20,0.678)",
          "rgba(209,147,28,0.678)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -117.9,
        37.6,
        117.8,
        -37.6
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_67.setTransform(144, 161.6);
    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics
      .lf(
        [
          "rgba(205,156,40,0.639)",
          "rgba(220,175,51,0.639)",
          "rgba(240,207,86,0.639)",
          "rgba(207,165,47,0.639)",
          "rgba(185,140,29,0.639)",
          "rgba(171,126,17,0.639)",
          "rgba(184,131,19,0.639)",
          "rgba(212,150,26,0.639)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -114.5,
        50.6,
        114.4,
        -50.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_68.setTransform(144, 161.6);
    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics
      .lf(
        [
          "rgba(208,159,38,0.6)",
          "rgba(222,177,48,0.6)",
          "rgba(241,207,81,0.6)",
          "rgba(210,168,44,0.6)",
          "rgba(189,144,27,0.6)",
          "rgba(177,131,16,0.6)",
          "rgba(189,135,18,0.6)",
          "rgba(215,153,24,0.6)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -111.1,
        63.5,
        111.1,
        -63.5
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_69.setTransform(144, 161.6);
    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics
      .lf(
        [
          "rgba(211,162,35,0.561)",
          "rgba(224,179,45,0.561)",
          "rgba(242,207,76,0.561)",
          "rgba(213,170,41,0.561)",
          "rgba(194,148,25,0.561)",
          "rgba(182,136,15,0.561)",
          "rgba(193,140,17,0.561)",
          "rgba(217,157,23,0.561)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -107.7,
        76.5,
        107.7,
        -76.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_70.setTransform(144, 161.6);
    this.shape_71 = new cjs.Shape();
    this.shape_71.graphics
      .lf(
        [
          "rgba(215,165,33,0.522)",
          "rgba(226,181,41,0.522)",
          "rgba(243,207,70,0.522)",
          "rgba(216,173,38,0.522)",
          "rgba(198,152,23,0.522)",
          "rgba(187,140,14,0.522)",
          "rgba(198,144,16,0.522)",
          "rgba(220,160,21,0.522)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -104.3,
        89.4,
        104.3,
        -89.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_71.setTransform(144, 161.6);
    this.shape_72 = new cjs.Shape();
    this.shape_72.graphics
      .lf(
        [
          "rgba(218,168,30,0.478)",
          "rgba(229,182,38,0.478)",
          "rgba(244,206,65,0.478)",
          "rgba(219,175,35,0.478)",
          "rgba(202,156,22,0.478)",
          "rgba(192,145,13,0.478)",
          "rgba(202,149,14,0.478)",
          "rgba(223,163,19,0.478)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -100.9,
        102.3,
        101,
        -102.4
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_72.setTransform(144, 161.6);
    this.shape_73 = new cjs.Shape();
    this.shape_73.graphics
      .lf(
        [
          "rgba(221,171,28,0.439)",
          "rgba(231,184,35,0.439)",
          "rgba(245,206,59,0.439)",
          "rgba(222,178,32,0.439)",
          "rgba(207,160,20,0.439)",
          "rgba(198,150,12,0.439)",
          "rgba(207,153,13,0.439)",
          "rgba(225,167,18,0.439)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -97.5,
        115.3,
        97.6,
        -115.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_73.setTransform(144, 161.6);
    this.shape_74 = new cjs.Shape();
    this.shape_74.graphics
      .lf(
        [
          "rgba(224,174,25,0.4)",
          "rgba(233,186,32,0.4)",
          "rgba(246,206,54,0.4)",
          "rgba(225,180,29,0.4)",
          "rgba(211,164,18,0.4)",
          "rgba(203,155,11,0.4)",
          "rgba(211,158,12,0.4)",
          "rgba(228,170,16,0.4)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_74.setTransform(144, 161.6);
    this.shape_75 = new cjs.Shape();
    this.shape_75.graphics
      .lf(
        [
          "rgba(227,177,22,0.361)",
          "rgba(235,188,29,0.361)",
          "rgba(247,206,49,0.361)",
          "rgba(228,182,26,0.361)",
          "rgba(215,168,16,0.361)",
          "rgba(208,160,10,0.361)",
          "rgba(215,163,11,0.361)",
          "rgba(231,173,14,0.361)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_75.setTransform(144, 161.6);
    this.shape_76 = new cjs.Shape();
    this.shape_76.graphics
      .lf(
        [
          "rgba(230,180,20,0.322)",
          "rgba(237,190,26,0.322)",
          "rgba(248,206,43,0.322)",
          "rgba(231,185,23,0.322)",
          "rgba(220,172,14,0.322)",
          "rgba(213,165,9,0.322)",
          "rgba(220,167,10,0.322)",
          "rgba(233,177,13,0.322)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_76.setTransform(144, 161.6);
    this.shape_77 = new cjs.Shape();
    this.shape_77.graphics
      .lf(
        [
          "rgba(233,183,17,0.278)",
          "rgba(240,191,22,0.278)",
          "rgba(249,205,38,0.278)",
          "rgba(234,187,20,0.278)",
          "rgba(224,176,13,0.278)",
          "rgba(219,170,8,0.278)",
          "rgba(224,172,8,0.278)",
          "rgba(236,180,11,0.278)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_77.setTransform(144, 161.6);
    this.shape_78 = new cjs.Shape();
    this.shape_78.graphics
      .lf(
        [
          "rgba(236,186,15,0.239)",
          "rgba(242,193,19,0.239)",
          "rgba(250,205,32,0.239)",
          "rgba(237,190,17,0.239)",
          "rgba(229,180,11,0.239)",
          "rgba(224,175,7,0.239)",
          "rgba(229,176,7,0.239)",
          "rgba(239,184,10,0.239)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_78.setTransform(144, 161.6);
    this.shape_79 = new cjs.Shape();
    this.shape_79.graphics
      .lf(
        [
          "rgba(240,189,13,0.2)",
          "rgba(244,195,16,0.2)",
          "rgba(251,205,27,0.2)",
          "rgba(240,192,15,0.2)",
          "rgba(233,184,9,0.2)",
          "rgba(229,180,6,0.2)",
          "rgba(233,181,6,0.2)",
          "rgba(242,187,8,0.2)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_79.setTransform(144, 161.6);
    this.shape_80 = new cjs.Shape();
    this.shape_80.graphics
      .lf(
        [
          "rgba(243,192,10,0.161)",
          "rgba(246,197,13,0.161)",
          "rgba(251,205,22,0.161)",
          "rgba(243,194,12,0.161)",
          "rgba(237,188,7,0.161)",
          "rgba(234,184,4,0.161)",
          "rgba(237,186,5,0.161)",
          "rgba(244,190,6,0.161)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_80.setTransform(144, 161.6);
    this.shape_81 = new cjs.Shape();
    this.shape_81.graphics
      .lf(
        [
          "rgba(246,195,8,0.122)",
          "rgba(248,199,10,0.122)",
          "rgba(252,205,16,0.122)",
          "rgba(246,197,9,0.122)",
          "rgba(242,192,5,0.122)",
          "rgba(239,189,3,0.122)",
          "rgba(242,190,4,0.122)",
          "rgba(247,194,5,0.122)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_81.setTransform(144, 161.6);
    this.shape_82 = new cjs.Shape();
    this.shape_82.graphics
      .lf(
        [
          "rgba(249,198,5,0.078)",
          "rgba(251,200,6,0.078)",
          "rgba(253,204,11,0.078)",
          "rgba(249,199,6,0.078)",
          "rgba(246,196,4,0.078)",
          "rgba(245,194,2,0.078)",
          "rgba(246,195,2,0.078)",
          "rgba(250,197,3,0.078)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_82.setTransform(144, 161.6);
    this.shape_83 = new cjs.Shape();
    this.shape_83.graphics
      .lf(
        [
          "rgba(252,201,3,0.039)",
          "rgba(253,202,3,0.039)",
          "rgba(254,204,5,0.039)",
          "rgba(252,202,3,0.039)",
          "rgba(251,200,2,0.039)",
          "rgba(250,199,1,0.039)",
          "rgba(251,199,1,0.039)",
          "rgba(252,201,2,0.039)"
        ],
        [0, 0.11, 0.267, 0.42, 0.529, 0.631, 0.749, 1],
        -94.1,
        128.2,
        94.2,
        -128.3
      )
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_83.setTransform(144, 161.6);
    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("rgba(255,204,0,0)")
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_84.setTransform(144, 161.6);
    var maskedShapeInstanceList = [
      this.shape_1,
      this.shape_2,
      this.shape_3,
      this.shape_4,
      this.shape_5,
      this.shape_6,
      this.shape_7,
      this.shape_8,
      this.shape_9,
      this.shape_10,
      this.shape_11,
      this.shape_12,
      this.shape_13,
      this.shape_14,
      this.shape_15,
      this.shape_16,
      this.shape_17,
      this.shape_18,
      this.shape_19,
      this.shape_20,
      this.shape_21,
      this.shape_22,
      this.shape_23,
      this.shape_24,
      this.shape_25,
      this.shape_26,
      this.shape_27,
      this.shape_28,
      this.shape_29,
      this.shape_30,
      this.shape_31,
      this.shape_32,
      this.shape_33,
      this.shape_34,
      this.shape_35,
      this.shape_36,
      this.shape_37,
      this.shape_38,
      this.shape_39,
      this.shape_40,
      this.shape_41,
      this.shape_42,
      this.shape_43,
      this.shape_44,
      this.shape_45,
      this.shape_46,
      this.shape_47,
      this.shape_48,
      this.shape_49,
      this.shape_50,
      this.shape_51,
      this.shape_52,
      this.shape_53,
      this.shape_54,
      this.shape_55,
      this.shape_56,
      this.shape_57,
      this.shape_58,
      this.shape_59,
      this.shape_60,
      this.shape_61,
      this.shape_62,
      this.shape_63,
      this.shape_64,
      this.shape_65,
      this.shape_66,
      this.shape_67,
      this.shape_68,
      this.shape_69,
      this.shape_70,
      this.shape_71,
      this.shape_72,
      this.shape_73,
      this.shape_74,
      this.shape_75,
      this.shape_76,
      this.shape_77,
      this.shape_78,
      this.shape_79,
      this.shape_80,
      this.shape_81,
      this.shape_82,
      this.shape_83,
      this.shape_84
    ];
    for (
      var shapedInstanceItr = 0;
      shapedInstanceItr < maskedShapeInstanceList.length;
      shapedInstanceItr++
    ) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
    }
    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [] })
        .to({ state: [{ t: this.shape_1 }] }, 45)
        .to({ state: [{ t: this.shape_2 }] }, 1)
        .to({ state: [{ t: this.shape_3 }] }, 1)
        .to({ state: [{ t: this.shape_4 }] }, 1)
        .to({ state: [{ t: this.shape_5 }] }, 1)
        .to({ state: [{ t: this.shape_6 }] }, 1)
        .to({ state: [{ t: this.shape_7 }] }, 1)
        .to({ state: [{ t: this.shape_8 }] }, 1)
        .to({ state: [{ t: this.shape_9 }] }, 1)
        .to({ state: [{ t: this.shape_10 }] }, 1)
        .to({ state: [{ t: this.shape_11 }] }, 1)
        .to({ state: [{ t: this.shape_12 }] }, 1)
        .to({ state: [{ t: this.shape_13 }] }, 1)
        .to({ state: [{ t: this.shape_14 }] }, 1)
        .to({ state: [{ t: this.shape_15 }] }, 1)
        .to({ state: [{ t: this.shape_16 }] }, 1)
        .to({ state: [{ t: this.shape_17 }] }, 1)
        .to({ state: [{ t: this.shape_18 }] }, 1)
        .to({ state: [{ t: this.shape_19 }] }, 1)
        .to({ state: [{ t: this.shape_20 }] }, 1)
        .to({ state: [{ t: this.shape_21 }] }, 1)
        .to({ state: [{ t: this.shape_22 }] }, 1)
        .to({ state: [{ t: this.shape_23 }] }, 1)
        .to({ state: [{ t: this.shape_24 }] }, 1)
        .to({ state: [{ t: this.shape_25 }] }, 1)
        .to({ state: [{ t: this.shape_26 }] }, 1)
        .to({ state: [{ t: this.shape_27 }] }, 1)
        .to({ state: [{ t: this.shape_28 }] }, 1)
        .to({ state: [{ t: this.shape_29 }] }, 1)
        .to({ state: [{ t: this.shape_30 }] }, 1)
        .to({ state: [{ t: this.shape_31 }] }, 1)
        .to({ state: [{ t: this.shape_32 }] }, 1)
        .to({ state: [{ t: this.shape_33 }] }, 1)
        .to({ state: [{ t: this.shape_34 }] }, 1)
        .to({ state: [{ t: this.shape_35 }] }, 1)
        .to({ state: [{ t: this.shape_36 }] }, 1)
        .to({ state: [{ t: this.shape_37 }] }, 1)
        .to({ state: [{ t: this.shape_38 }] }, 1)
        .to({ state: [{ t: this.shape_39 }] }, 1)
        .to({ state: [{ t: this.shape_40 }] }, 1)
        .to({ state: [{ t: this.shape_41 }] }, 1)
        .to({ state: [{ t: this.shape_42 }] }, 1)
        .to({ state: [{ t: this.shape_43 }] }, 1)
        .to({ state: [{ t: this.shape_44 }] }, 1)
        .to({ state: [{ t: this.shape_45 }] }, 1)
        .to({ state: [{ t: this.shape_46 }] }, 1)
        .to({ state: [{ t: this.shape_47 }] }, 1)
        .to({ state: [{ t: this.shape_48 }] }, 1)
        .to({ state: [{ t: this.shape_49 }] }, 1)
        .to({ state: [{ t: this.shape_50 }] }, 1)
        .to({ state: [{ t: this.shape_51 }] }, 1)
        .to({ state: [{ t: this.shape_52 }] }, 1)
        .to({ state: [{ t: this.shape_53 }] }, 1)
        .to({ state: [{ t: this.shape_54 }] }, 1)
        .to({ state: [{ t: this.shape_55 }] }, 1)
        .to({ state: [{ t: this.shape_56 }] }, 1)
        .to({ state: [{ t: this.shape_57 }] }, 1)
        .to({ state: [{ t: this.shape_58 }] }, 1)
        .to({ state: [{ t: this.shape_59 }] }, 1)
        .to({ state: [{ t: this.shape_60 }] }, 1)
        .to({ state: [{ t: this.shape_61 }] }, 1)
        .to({ state: [{ t: this.shape_62 }] }, 1)
        .to({ state: [{ t: this.shape_63 }] }, 1)
        .to({ state: [{ t: this.shape_64 }] }, 1)
        .to({ state: [{ t: this.shape_65 }] }, 1)
        .to({ state: [{ t: this.shape_66 }] }, 1)
        .to({ state: [{ t: this.shape_67 }] }, 1)
        .to({ state: [{ t: this.shape_68 }] }, 1)
        .to({ state: [{ t: this.shape_69 }] }, 1)
        .to({ state: [{ t: this.shape_70 }] }, 1)
        .to({ state: [{ t: this.shape_71 }] }, 1)
        .to({ state: [{ t: this.shape_72 }] }, 1)
        .to({ state: [{ t: this.shape_73 }] }, 1)
        .to({ state: [{ t: this.shape_74 }] }, 1)
        .to({ state: [{ t: this.shape_75 }] }, 1)
        .to({ state: [{ t: this.shape_76 }] }, 1)
        .to({ state: [{ t: this.shape_77 }] }, 1)
        .to({ state: [{ t: this.shape_78 }] }, 1)
        .to({ state: [{ t: this.shape_79 }] }, 1)
        .to({ state: [{ t: this.shape_80 }] }, 1)
        .to({ state: [{ t: this.shape_81 }] }, 1)
        .to({ state: [{ t: this.shape_82 }] }, 1)
        .to({ state: [{ t: this.shape_83 }] }, 1)
        .to({ state: [{ t: this.shape_84 }] }, 1)
        .wait(137)
    );
    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(127.5, 145.7, 179.5, 196.5);
  // library properties:
  lib.properties = {
    id: "46136733F5F04F21AE8C55BC5BE186DF",
    width: 287,
    height: 323,
    fps: 30,
    color: "#333333",
    opacity: 0.0,
    manifest: [],
    preloads: []
  };
  // bootstrap callback support:
  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();
  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };
  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };
  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }
  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };
  an.compositions = an.compositions || {};
  an.compositions["46136733F5F04F21AE8C55BC5BE186DF"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    }
  };
  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };
  an.getComposition = function (id) {
    return an.compositions[id];
  };
  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + "px";
        container.style.height = h * sRatio + "px";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;

var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation;
function init() {
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp = AdobeAn.getComposition("46136733F5F04F21AE8C55BC5BE186DF");
  var lib = comp.getLibrary();
  handleComplete({}, comp);
}
function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.logoanimation();
  stage = new lib.Stage(canvas);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  };
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, "both", false, 1, [
    canvas,
    anim_container,
    dom_overlay_container
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

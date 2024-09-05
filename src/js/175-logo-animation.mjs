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
  (lib.Group = function (mode, startPosition, loop, reversed) {
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
      .p(
        "EAg1AqxIAAgDQAAhRg6g7Qg6g6hSAAQhSAAg6A6Qg6A7AABRIAAADIjzAAIAAgDQAAhRg6g7Qg6g6hTAAQhSAAg6A6Qg6A7AABRIAAADIjzAAIAAgDQAAhRg6g7Qg6g6hSAAQhSAAg6A6Qg6A7AABRIAAADIjzAAIAAgDQAAhRg6g7Qg7g6hRAAQhSAAg6A6Qg6A7AABRIAAADIjzAAIAAgDQAAhRg6g7Qg6g6hSAAQhSAAg7A6Qg6A7AABRIAAADIjzAAIAAgDQAAhRg6g7Qg6g6hSAAQhSAAg6A6Qg6A7AABRIAAADIjzAAIAAgDQAAhRg6g7Qg6g6hSAAQhSAAg7A6Qg6A7AABRIAAADIk0AAIAAkHIAHAAQBSAAA6g6QA6g6AAhSQAAhSg6g6Qg6g6hSgBIgHAAIAAj6IAHAAQBSAAA6g6QA6g6AAhSQAAhSg6g7Qg6g5hSAAIgHAAIAAjzIAHAAQBSgBA6g6QA6g6AAhSQAAhSg6g6Qg6g6hSAAIgHAAIAAj0IAHABQBSAAA6g6QA6g6AAhTQAAhSg6g5Qg6g6hSgBIgHAAIAAjyIAHAAQBSAAA6g5QA6g7AAhSQAAhSg6g6Qg6g7hSAAIgHABIAAj0IAHAAQBSAAA6g5QA6g6AAhTQAAhRg6g7Qg6g6hSAAIgHAAIAAjzIAHAAQBSAAA6g6QA6g6AAhSQAAhSg6g6Qg6g7hSAAIgHAAIAAjzIAHAAQBSAAA6g5QA6g7AAhSQAAhSg6g6Qg6g6hSAAIgHAAIAAlKIE1AAQAHBNA4A0QA5A0BOAAQBNAAA5g0QA4g0AHhNID1AAQAGBNA5A0QA5A0BNAAQBOAAA4g0QA5g0AHhNID0AAQAHBNA4A0QA5A0BOAAQBNAAA5g0QA4g0AHhNID1AAQAHBNA4A0QA5A0BNAAQBNAAA5g0QA4g0AHhNID0AAQAHBNA5A0QA4A0BOAAQBNAAA5g0QA5g0AGhNID1AAQAHBNA4A0QA5A0BNAAQBOAAA5g0QA4g0AHhNID1AAQAGBNA5A0QA5A0BNAAQBOAAA4g0QA5g0AHhNIFUAAIAAFLIgWgBQhSAAg7A6Qg6A6AABSQAABSA6A7QA7A5BSAAIAWgBIAAD2IgWgCQhSAAg7A7Qg6A6AABSQAABSA6A6QA7A6BSAAIAWgBIAAD1IgWgBQhSAAg7A6Qg6A7AABRQAABTA6A6QA7A5BSAAIAWgBIAAD2IgWgCQhSAAg7A7Qg6A6AABSQAABSA6A7QA7A5BSAAIAWgBIAAD1IgWgCQhSABg7A6Qg6A5AABSQAABTA6A6QA7A6BSAAIAWgCIAAD2IgWgBQhSAAg7A6Qg6A6AABSQAABSA6A6QA7A6BSABIAWgCIAAD2IgWgBQhSAAg7A5Qg6A7AABSQAABSA6A6QA7A6BSAAIAWgBIAAD9IgWgCQhSABg7A6Qg6A6AABSQAABSA6A6QA7A6BSAAIAWgBIAAEIgEggXAlRMBAvAAAMAAAhKgMhAvAAAg"
      );
    this.shape.setTransform(244.2683, 273.8194, 1.0614, 1.0635);
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = getMCSymbolPrototype(
    lib.Group,
    new cjs.Rectangle(-14.8, -17.2, 518.1999999999999, 582.1),
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
    // Layer_1
    this.instance = new lib.Group();
    this.instance.setTransform(14.05, 15.35, 0.6354, 0.6348, 0, 0, 0, 0.1, 0);
    this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.478)", 0, 0, 11);
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(265));
    // Layer_6 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_131 = new cjs.Graphics().p(
      "AQUD5QhXhXAAh8QAAhXArhGQASgdAagaQAMgMANgKQBQhCBsAAQBrAABQBCIAZAWQAaAaASAdQAsBGAABXQAAB8hYBXQhYBZh8AAQh9AAhYhZg"
    );
    var mask_graphics_132 = new cjs.Graphics().p(
      "AgFEsQhfgChKg1QgUgPgRgSIgDgDQgNgOgMgNQg8hOAAhoQAAhWArhGIARgZQAMgQAPgPIACgBQALgLAMgKIAHgFQBOg8BmAAIABAAQBpAABPA/IACACIAYAWIAFAEQAXAZARAaIABACQAqBFABBWIAAAGQgDB5hVBUIgFAFQhWBTh5ABIgFAAg"
    );
    var mask_graphics_133 = new cjs.Graphics().p(
      "AgEEsQhfgChKg1QgUgOgSgTIgDgCQgNgOgMgOQg8hPAAhmIAAgBQAAhWAshGIAQgYQAMgRAPgOIADgCIAWgUIAHgGQBOg8BmAAIABAAQBpAABPA/IACACIAZAWIAEAEQAXAZARAaIABACQArBFAABWIAAAFQgCB5hVBVIgGAFQhVBTh5ABIgFAAg"
    );
    var mask_graphics_134 = new cjs.Graphics().p(
      "AgEEsQhfgBhKg2QgUgPgSgRIgDgDQgNgPgMgOQg8hOAAhnQAAhXArhFIARgZQAMgQAPgOIACgDQALgKAMgKIAHgFQBNg8BnAAIAAAAQBqAABPA/IACABIAZAXIADADQAXAZARAbIACACQArBEAABWIAAAGQgCB5hVBVIgGAEQhVBUh5ABIgFAAg"
    );
    var mask_graphics_135 = new cjs.Graphics().p(
      "AgEEsQhegBhLg1QgTgPgTgSIgCgDQgOgOgLgOQg9hOAAhoIAAAAQAAhXArhFIASgZQALgQAPgOIACgCQALgLAMgKIAHgFQBOg8BmAAIABAAQBpAABOA/IADACQANAKALAMIAEADQAYAZARAbIAAACQArBEABBWIAAAGQgCB5hVBVIgEAEQhXBUh4ABIgGAAg"
    );
    var mask_graphics_136 = new cjs.Graphics().p(
      "AgDEsQhfgBhLg2QgTgOgTgTIgDgDQgNgNgLgPQg9hNAAhnIAAgBQAAhWArhGIASgZQAMgPAOgPIABgCQAMgLAMgJIAGgHQBPg7BmAAIABAAQBpAABOA/IACACQANAJAMAMIADAEQAYAZARAaIABACQAsBEAABXIAAAFQgCB5hVBVIgEAFQhXBUh4ABIgFAAg"
    );
    var mask_graphics_137 = new cjs.Graphics().p(
      "AgCEsQhfgBhKg1QgVgPgTgSIgDgDQgMgNgMgPQg9hOAAhnIAAgBQAAhWArhGQAIgNAKgMQAMgQAOgOIACgCIAXgUIAHgGQBOg8BmAAIAAAAQBqAABOA/IADACIAYAWIAEADQAXAZARAaIABACQAsBEAABXIAAAFQgCB5hUBVIgFAFQhWBUh5ABIgEAAg"
    );
    var mask_graphics_138 = new cjs.Graphics().p(
      "AgCEsQhfgBhKg1QgVgPgTgSIgDgDQgNgOgMgOQg8hOAAhoIAAAAQAAhWArhGIARgaQAMgPAOgOIACgCIAXgVIAIgFQBOg8BmAAIAAAAQBpAABOA+IADACQAMALAMAMIAEACQAYAZAQAbIABABQAsBFABBVIAAAHQgCB4hUBWIgFAEQhWBUh4ACIgFAAg"
    );
    var mask_graphics_139 = new cjs.Graphics().p(
      "AgCEsQhfAAhKg1QgUgPgTgTIgDgCQgOgOgLgOQg8hOgBhoIAAgBQAAhWAshGQAHgNAKgMQAMgPAOgOIACgCQALgLALgKIAHgFQBOg9BnAAIAAAAQBqAABOA+IACACQANALAMAMIADACQAYAZARAbIABABQAsBFAABVIAAAHQgBB4hVBWIgEAEQhWBVh4ABIgGAAg"
    );
    var mask_graphics_140 = new cjs.Graphics().p(
      "AgCEsQhfgBhKg1QgUgOgTgSIgDgEQgOgOgLgOQg9hOAAhnIAAgBQAAhWArhGQAJgNAJgMQALgQAOgOIACgCQALgLAMgJIAHgGQBOg8BnAAIAAAAQBpAABPA+IACACQAMAKANAMIACADQAYAYASAbIABABQArBFABBWIAAAFQgCB5hUBWIgEAFQhWBVh4ABIgGAAg"
    );
    var mask_graphics_141 = new cjs.Graphics().p(
      "AgBEsQhfAAhKg1QgUgOgUgTIgDgDIgZgdQg9hOAAhnIAAgBQAAhWArhGIASgZQAMgPANgOIACgCIAXgVIAIgGQBNg8BnAAIABAAQBoAABOA+IADADQAMAKAMALIAEADQAXAYARAbIABABQAsBFABBVIAAAGQgBB5hUBWIgFAFQhVBVh5ABIgFAAg"
    );
    var mask_graphics_142 = new cjs.Graphics().p(
      "AgBEsQhfgBhKg0QgUgPgUgSIgDgDQgNgOgMgOQg9hOAAhoIAAgBQAAhWArhGIASgaQAMgOANgPIACgBIAXgVIAHgFQBOg9BnAAIAAAAQBpAABOA9IACADQANAKAMAMIADACQAYAZARAbIABABQAsBEABBWIAAAGQgBB4hUBXIgFAEQhVBVh5ACIgFAAg"
    );
    var mask_graphics_143 = new cjs.Graphics().p(
      "AgBEsQhegBhLg0QgUgOgTgTIgDgCQgOgOgLgPQg+hPAAhmIAAgCQAAhWArhGQAJgNAKgNQALgOANgOIACgCIAWgUIAIgGQBOg9BnAAIAAAAQBoAABPA+IADACQAMAKAMAMIADACQAYAZARAbIABABQAsBEABBWIAAAGQgBB4hTBXIgFAEQhVBVh4ACIgHAAg"
    );
    var mask_graphics_144 = new cjs.Graphics().p(
      "AgBEsQhegBhLgzQgUgPgTgTIgDgDQgOgOgMgPQg9hNAAhoIAAgBQAAhXArhFIASgaQALgPANgNIADgCIAWgVIAIgGQBOg8BnAAIAAAAQBoAABPA+IACACQANAJAMAMIADADQAYAYAQAaIACACQAsBFABBVIAAAGQgBB5hTBVIgFAGQhVBVh4ACIgHAAg"
    );
    var mask_graphics_145 = new cjs.Graphics().p(
      "AAAEsQhfAAhJg0QgWgPgTgSIgDgDIgagdQg8hOgBhnIAAgCQAAhXArhFQAIgOAKgMQAMgOANgNIACgDIAXgUIAHgGQBOg9BnAAIAAAAQBoAABOA+IADACQANAKAMAMIACACQAZAYARAaIABACQArBFACBVIAAAGQAAB5hTBVIgGAGQhUBVh5ACIgGAAg"
    );
    var mask_graphics_146 = new cjs.Graphics().p(
      "AAAEsQhfgBhJgzQgWgOgTgUIgDgDQgOgOgMgOQg9hPAAhmIAAgCQAAhWArhGIASgaQAMgOANgOIABgCIAXgUIAHgHQBPg8BnAAIAAAAQBoAABOA9IADADQANAKALAMIADABQAYAZARAaIABABQAsBEACBWIAAAGQAAB5hTBWIgGAFQhVBVh4ADIgGAAg"
    );
    var mask_graphics_147 = new cjs.Graphics().p(
      "AiJEgQgXgQgVgUQgOgOgMgQQg9hOAAhpQAAhnA9hOQAMgQAOgOQAPgPAPgLQBPg+BnABQBogBBOA+QAPALAPAPQAYAZASAaQAuBHAABZQAAB9hYBYQhYBXh8AAQheAAhKgzg"
    );
    var mask_graphics_148 = new cjs.Graphics().p(
      "AgWE+QgjgDgggMQgUgGgRgJQgUgLgSgNIgGgEQgXgRgUgWIgCgCQgNgNgLgPQg8hSAAhsIAAgBQAAhrA8hSQALgPAMgNIADgEQAPgOAOgOIAUgPQASgNASgJQA7gfBFgBIAGAAQBcACBJA4IAMALQAQANAOAQQAYAaASAcQArBHACBaIAAAGQAACBhXBbQgUAWgWASQgkAbgpAOQghANgmADIgXABIgWgBg"
    );
    var mask_graphics_149 = new cjs.Graphics().p(
      "AAAFSIgWgBQglgEghgNQgTgIgRgLQgUgLgSgOIgGgFQgWgSgVgXIgCgCIgWgeQg8hVAAhxQAAhvA7hWQALgQALgOIADgDQAOgQAQgOIATgPQASgOATgLQA6glBHAAIAGAAQBeABBIBAIAOAMQAPAOAOARQAXAbASAeQArBKABBeIAAAEQAACHhWBgQgTAXgXASQgjAegpARQgiAOgmAEIgYABg"
    );
    var mask_graphics_150 = new cjs.Graphics().p(
      "AAAFlQgLAAgNgCQglgDghgQQgUgJgRgMQgUgMgRgQIgGgEQgWgUgUgYIgCgCIgXggQg6hYAAh0IAAgBQAAhzA6hYQAKgRAMgPIADgDQAOgRAPgPIATgSQARgPATgLQA7gpBJgBIAFAAQBgACBJBGIANANQAPAPAPASQAXAdAQAfQAqBOACBgIAAAGQAACLhUBjQgTAYgXAUQgjAggpATQgjARgmADQgMACgNAAg"
    );
    var mask_graphics_151 = new cjs.Graphics().p(
      "AAAF4QgNAAgLgCQgmgEgigSQgTgJgTgOQgTgNgSgQIgFgGQgWgUgUgaIgBgCQgMgQgLgRQg5hcAAh4IAAgBQAAh3A4hcQALgRAMgQIACgEQAOgRAPgQIASgSQASgQATgNQA8guBJAAIAGgBQBhACBKBOIANANQAPAQAOATQAXAeAQAhQApBQACBkIAAAGQAACQhSBoQgUAagWAVQgjAigpAUQgjASgoAFIgZACg"
    );
    var mask_graphics_152 = new cjs.Graphics().p(
      "AAAGLIgZgCQgngGgigUQgUgKgRgPQgUgNgRgSIgGgGQgWgVgTgbIgCgDQgMgQgKgSQg4hfAAh9IAAAAQAAh6A4hgIAVgkIADgDQANgTAPgQIATgTQARgRATgOQA8gzBLgBIAGAAQBiABBLBVIAMAPQAPARAOAUQAXAfARAjQAoBTABBnIAAAGQAACVhSBsQgTAagVAXQgkAlgoAWQgkAVgoAFQgNACgNAAIAAAAg"
    );
    var mask_graphics_153 = new cjs.Graphics().p(
      "AAAGeQgNAAgNgCQgngGgkgWQgTgMgSgQQgTgOgSgTIgFgGQgWgXgSgcIgCgCQgMgSgKgSQg3hjAAiAIAAgBQAAh+A2hjQAKgTAMgSIADgEQANgTAOgRIASgVQASgSASgPQA+g3BLgCIAGAAQBkABBLBdIAOAQQAPASANAUQAWAhAQAkQAoBWABBrIAAAGQgBCahPBvQgTAdgWAXQgjAogoAXQgkAXgpAGQgOACgNAAIAAAAg"
    );
    var mask_graphics_154 = new cjs.Graphics().p(
      "AAAGxQgOAAgNgCQgogHgjgYQgUgNgSgQQgTgQgRgUIgGgGQgVgZgSgdIgCgCIgWglQg1hngBiDIAAgCQAAiBA1hnQALgUALgTIADgEQANgUAOgSIASgVQARgUATgQQA9g7BMgDIAIAAQBkABBNBkIAMAQQAPATAOAWQAWAjAPAmQAnBYABBuIAAAHQAACehOB0QgTAdgVAZQgjArgpAYQgkAZgpAHQgOACgPAAg"
    );
    var mask_graphics_155 = new cjs.Graphics().p(
      "AAAHEQgOAAgNgDQgpgHglgbQgTgNgSgSQgTgQgSgWIgEgGQgWgagSgdIgCgEQgLgSgKgVQg1hpAAiIIAAgBQAAiGA1hqQAJgUAMgUIACgFQANgUAOgTIARgWQASgVASgRQA/hABNgDIAIAAQBlABBNBrIAOARQAOAUAOAXQAVAkAPAnQAmBcABBxIAAAHQAACjhNB4QgSAegWAaQgiAugpAZQglAbgqAIQgOADgPAAIAAAAg"
    );
    var mask_graphics_156 = new cjs.Graphics().p(
      "AAAHXQgPAAgOgDQgpgIgkgdQgUgOgTgTQgSgSgSgWIgEgHQgWgbgRgeIgDgEQgKgTgKgVQgzhtgBiMIAAgBQAAiJAzhtQAKgWALgVIADgEQAMgWAOgUIARgXQASgWASgRQA/hFBOgEIAIAAQBoACBNBxIANATQAOAUAOAZQAVAlAPAoQAlBfABB1IAAAGQAACphLB8QgTAfgVAcQgjAvgoAbQglAegrAIQgPADgPAAIAAAAg"
    );
    var mask_graphics_157 = new cjs.Graphics().p(
      "AAAHqQgPAAgOgDQgqgJgmgfQgTgPgTgUQgSgTgRgXIgGgHQgUgcgSggIgCgEIgVgpQgxhxgBiPIAAgCQAAiNAyhxQAKgWALgWIACgEQAMgXAOgUIASgZQAQgWATgTQA/hKBQgEIAIAAQBpACBOB4IANAUQAOAWANAZQAWAmAOArQAkBhABB3IAAAIQgBCthJCAQgSAhgVAcQgjAygoAeQgmAfgrAJQgPADgQAAIAAAAg"
    );
    var mask_graphics_158 = new cjs.Graphics().p(
      "AAAH9QgQgBgPgDQgqgJgmghQgUgPgSgXQgTgTgRgZIgEgHQgVgdgSghIgCgFQgKgUgJgWQgyh0AAiUIAAgBQAAiRAxh0IAUguIACgFQANgXANgWIARgYQARgZATgTQBAhPBQgEIAIAAQBrABBPCAIAMAUQAPAYANAZQAUAoAPAsQAjBlABB7IAAAHQAACyhJCEQgSAigUAeQgjA1goAeQgnAigsAJQgPAEgQAAIAAAAg"
    );
    var mask_graphics_159 = new cjs.Graphics().p(
      "AgBIQQgPAAgPgEQgrgJgngkQgUgRgTgWQgSgVgRgZIgEgIQgVgfgRgiIgCgFIgUgrQgwh4AAiXIAAgCQAAiUAwh4QAJgYAKgYIADgFQAMgYAOgWIAQgaQARgaASgUQBChTBRgEIAJgBQBrABBPCHIAOAVQAOAZANAbQATApAPAtQAjBpAAB9IAAAIQgBC3hGCIQgSAjgVAgQgiA2goAhQgnAkgsAJQgQAEgRAAIgBAAg"
    );
    var mask_graphics_160 = new cjs.Graphics().p(
      "AAAIjQgRAAgPgEQgtgLgmglQgVgRgSgYQgSgWgRgbIgFgIQgUgfgRgkIgBgFIgTgtQgwh7AAiaIAAgDQAAiZAvh6QAJgaAKgXIACgFQANgZANgYIAQgbQARgaASgWQBBhYBTgEIAJgBQBtABBQCOIANAXQAOAZANAcQATAqAOAwQAjBqAACBIAAAIQAAC8hGCMQgRAlgVAgQgiA5goAjQgnAmgtAKQgRAEgRAAIAAAAg"
    );
    var mask_graphics_161 = new cjs.Graphics().p(
      "AgBI2QgRAAgPgFQgtgKgogoQgUgSgSgZQgSgYgRgcIgFgIQgTghgRgkIgCgFQgKgWgJgYQguh/AAifIAAgCQAAicAth/QAJgaAKgYIADgGQALgaANgXIARgdQARgcASgWQBChdBUgFIAJAAQBuABBRCVIAMAXQAOAaANAdQATAtAPAwQAgBuABCFIAAAHQAADBhFCQQgRAmgUAiQgiA7goAlQgoAoguAKQgRAFgRAAIgBAAg"
    );
    var mask_graphics_162 = new cjs.Graphics().p(
      "AgBJJQgRAAgQgEQgugMgogqQgUgUgTgZQgRgYgRgdIgFgJQgTgigQgmIgCgFIgTgwQgtiBAAikIAAgCQAAigAsiBIATg1IADgGQALgbANgYIAQgeQAQgcASgYQBEhiBUgFIAJAAQBxABBRCcIAMAYQAOAcAMAeQAUAuAOAxQAgBxAACIIAAAIQAADGhDCUQgRAngUAjQgiA+goAmQgoAqgvAMQgRAEgSAAIgBAAg"
    );
    var mask_graphics_163 = new cjs.Graphics().p(
      "AgBJcQgSAAgQgEQgugNgpgrQgVgVgSgcQgSgZgQgeIgFgJQgTgigQgoIgCgFIgSgxQgsiGAAimIAAgDQAAikAriFQAIgbALgbIACgGQALgbANgaIAQgeQAQgfASgYQBEhmBWgGIAJAAQByABBRCjIANAaQAOAcAMAfQATAvANA0QAfBzABCLIAAAIQgBDMhBCYQgQAogVAkQgiBAgnAoQgpAsgvANQgSAEgSAAIgBAAg"
    );
    var mask_graphics_164 = new cjs.Graphics().p(
      "AgBJvQgSAAgRgGQgvgNgpgtQgUgVgTgdQgSgagQgfIgFgJQgTglgPgoIgDgFQgJgZgIgaQgriIAAisIAAgCQAAioAqiIIASg4IADgGQAKgdANgaIAQggQAQgeASgaQBEhrBXgGIAJAAQB0AABSCrIANAbQAOAdALAfQATAxANA1QAfB3AACOIAAAJQgBDPhACdQgQApgUAmQgiBDgnApQgqAtgwANQgRAGgTAAIgBAAg"
    );
    var mask_graphics_165 = new cjs.Graphics().p(
      "AgCKCQgSAAgRgFQgvgOgrgwQgUgWgTgeQgRgagRgiIgEgJQgSglgQgqIgCgFIgRg1QgqiLAAivIAAgDQAAirApiMQAIgeAKgcIACgGQALgdAMgbIAPghQARghARgZQBGhwBYgGIAKgBQBzABBUCxIAMAcQAOAeAMAhQASAyANA2QAdB6ABCSIAAAJQgBDUg+CgQgQArgUAmQgiBHgnAqQgqAwgwAOQgTAFgTAAIgCAAg"
    );
    var mask_graphics_166 = new cjs.Graphics().p(
      "AgBKVQgSAAgTgFQgwgPgqgxQgVgYgSgfQgSgcgQghIgEgKQgTgngPgqIgCgGIgRg2QgpiPAAizIAAgDQAAivAoiPQAIgeAKgeIACgGQALgeALgcIAQgiQAQghASgcQBFhzBagHIAKgBQB1ABBUC4IANAdQANAfAMAjQASAyAMA5QAdB8AACVIAAAJQAADag+CkQgPAsgUAoQgiBIgnAsQgrAygwAPQgTAFgUAAIgBAAg"
    );
    var mask_graphics_167 = new cjs.Graphics().p(
      "AgBKoQgTAAgSgGQgxgPgrg0QgVgZgTgfQgRgdgQgjIgFgKQgSgogPgsIgCgFIgQg3QgoiUAAi2IAAgDQAAizAniTQAIgfAJgeIACgGIAXg8IAPgjQAQgiARgdQBGh5BbgHIAKAAQB3AABVDAIAMAeQAOAgALAjQASA1AMA5QAcCAAACYIAAAJQgBDfg7CoQgQAtgTApQgiBLgnAtQgrA1gxAPQgUAGgUAAIgBAAg"
    );
    var mask_graphics_168 = new cjs.Graphics().p(
      "AgCK7QgTAAgSgGQgygQgrg2QgVgZgTghQgSgegPgkIgFgLQgSgpgOgsIgCgGIgQg5QgniWAAi7IAAgDQAAi2AmiWQAHghAKgeIACgHQAKggALgeIAQgjQAPgkASgeQBHh9BcgIIAKAAQB4ABBWDGIAMAfQANAiAMAjQARA3AMA7QAbCCAACbIAAAKQAADjg7CtQgPAugTAqQgiBNgnAwQgrA2gzAQQgTAGgVAAIgCAAg"
    );
    var mask_graphics_169 = new cjs.Graphics().p(
      "AgCLOQgTgBgTgGQgzgPgsg5QgUgagTgjQgRgegRglIgDgKQgTgsgOgtIgBgHQgJgbgIgeQgliaAAi+IAAgEQAAi6AliaQAHggAKggIABgHQALghALgfIAOgkQARglARgeQBHiDBdgIIAKAAQB6ABBWDNIANAgQANAjAMAlQAQA3AMA8QAaCGAACeIAAAKQgBDog5CyQgOAvgUAsQghBPgnAxQgsA5gyAPQgVAHgVAAIgCAAg"
    );
    var mask_graphics_170 = new cjs.Graphics().p(
      "AgCLhQgUAAgTgHQg0gRgsg6QgUgbgUgkQgRgfgQgnIgEgLQgRgrgOgwIgCgGIgPg7QglidAAjCIAAgEQAAi+AjidIARhDIACgGQAJgiAMgfIAOgmQAQgmARgfQBIiIBfgHIALgBQB6AABXDVIANAhQANAjALAmQARA6AKA9QAaCJAAChIAAALQgBDsg3C1QgPAxgTAtQghBSgnAzQgtA6gzARQgVAHgVAAIgCAAg"
    );
    var mask_graphics_171 = new cjs.Graphics().p(
      "AgGcYQg0gRgtg8QgVgdgTgkQgRghgPgnQgVg1gQg7Qgzi4AAjvQAAjuAzi5QAQg7AVg1QAPgoARgfQBOiVBlgBQB9ABBXDcQBYDeAAE5QAAE6hYDdQghBUgnA1QgtA8g0ARQgVAIgWgBQgWABgUgIg"
    );
    var mask_graphics_172 = new cjs.Graphics().p(
      "AAALbQgUAAgVgGQgzgQgtg7QgVgbgSgjQgRgfgQgmIgCgFQgSgrgPgwIgDgMQg0izAAjmIAAgCQAAjmA0i1IAAgBQARg4AVgzQAPgmASgfQBKiJBggGIAGAAQB7ABBXDTQAQAqAOAsIAGASQAZBXANBjQAQBsAAB5IAAAGQgBB+gPBuQgOBfgZBTIgHAVQgMAlgOAhIgCAIQgiBRgnAyQgsA7g0AQQgQAFgSABIgHAAg"
    );
    var mask_graphics_173 = new cjs.Graphics().p(
      "AAALDQgUAAgVgGQgxgQgsg3QgVgagTgiQgRgegPglIgCgEQgTgqgPguIgDgLQg2iuAAjgIAAgCQAAjhA3ivIAAgBQAQg2AWgxQAPglARgdQBKiDBegFIAHAAQB4AABWDKQARAoAOArIAGASQAaBUAOBgQAQBpAAB2IAAAGQAAB6gRBrQgOBdgaBRIgHATQgMAjgOAhIgDAIQgiBOgmAwQgsA3gzAQQgQAFgRABIgHAAg"
    );
    var mask_graphics_174 = new cjs.Graphics().p(
      "AAAKrQgUAAgTgGQgxgPgsg1QgUgYgTghQgRgcgQgkIgDgEQgSgpgQgsIgCgLQg4ioAAjaIAAgCQAAjaA4iqIAAgBQASg1AVgvQAQgjASgcQBHh9BdgFIAGAAQB4AABUDBQASAnAOApIAGARQAbBSAOBdQARBmAABzIAAAGQAAB3gSBoQgPBZgaBPIgHATQgMAigPAfIgDAIQghBKgnAuQgsA1gxAPQgQAFgQABIgHAAg"
    );
    var mask_graphics_175 = new cjs.Graphics().p(
      "AAAKSQgUAAgSgFQgxgPgqgxQgUgYgUgfQgRgbgPgiIgDgEQgSgngQgrIgEgLQg5iiAAjUIAAgCQAAjUA6ilIAAgBQARgyAXgtQAQgiARgbQBHh3BcgEIAFAAQB2AABUC4QARAkAPAoIAGARQAbBPAQBaQAQBjABBwIAAAGQgBBzgRBmQgQBWgbBMIgHASQgMAhgPAeIgDAHQgjBIgmAsQgqAygxAOQgQAFgQAAIgGAAg"
    );
    var mask_graphics_176 = new cjs.Graphics().p(
      "AAAJ6QgTAAgSgGQgwgNgpgwQgVgVgSgdQgRgbgQggIgDgEQgTgmgQgpIgEgKQg7ieAAjOIAAgBQAAjOA8ifIAAgCQATgwAWgsQAQgfASgaQBGhxBZgEIAGAAQB0AABSCuQASAkAPAmIAGAQQAdBMAPBXQASBgAABuIAAAFQAABxgTBiQgPBUgdBJIgGASQgNAfgPAdIgEAHQgiBFgnApQgqAvgvANQgQAFgPABIgGAAg"
    );
    var mask_graphics_177 = new cjs.Graphics().p(
      "AAAJiQgTAAgRgGQgvgNgpgsQgUgVgTgbQgRgZgQggIgDgDQgTgkgRgoIgDgKQg9iYAAjIIAAgBQAAjIA/iaIAAgBQASguAWgqQARgfARgYQBFhrBZgDIAFAAQByAABSClQASAiAPAlIAGAPQAeBJAPBVQATBcAABqIAAAGQAABtgTBgQgQBRgdBGIgHARQgNAfgQAcIgDAGQgjBBgmAnQgqAtguAMQgPAFgPABIgGAAg"
    );
    var mask_graphics_178 = new cjs.Graphics().p(
      "AAAJJQgSAAgSgEQgtgMgogqQgUgUgSgaQgTgYgPgdIgEgFQgTgigRgnIgEgJQg+iSAAjCIAAgBQAAjCBAiVIAAgBQATgsAXgoQARgdARgXQBFhlBWgDIAGAAQBvAABSCdQARAfAQAkIAGAPQAeBGARBSQATBZAABnIAAAGQAABqgUBcQgQBOgeBEIgHARQgNAdgQAaIgEAHQgiA+gnAlQgoApgvANQgOADgPABIgFAAg"
    );
    var mask_graphics_179 = new cjs.Graphics().p(
      "AAAIxQgSAAgRgFQgsgLgognQgTgTgTgYQgSgXgQgcIgDgEQgUghgRglIgEgIQhAiOAAi7IAAgBQAAi8BCiPIAAgBQAUgrAWgmQARgbASgXQBDheBVgDIAGAAQBtABBRCSQASAfAQAiIAGAOQAgBEAQBOQAUBXAABkIAAAFQAABngUBZQgSBMgeBBIgHAQQgOAcgQAZIgEAHQgiA6gnAjQgoAngtALQgOAEgPABIgEAAg"
    );
    var mask_graphics_180 = new cjs.Graphics().p(
      "AAAIYQgSAAgQgEQgrgKgnglQgUgRgSgXQgSgVgQgbIgEgEQgUgfgSgkIgDgIQhCiIAAi1IAAgBQAAi1BEiLIAAgBQAUgpAXgjQARgbASgVQBChXBUgDIAFAAQBsAABPCKQASAdARAgIAGAOQAgBBARBLQAVBUAABhIAAAFQgBBkgUBWQgRBIggA/IgHAQQgOAagQAYIgEAHQgjA3gmAhQgoAkgsAKQgOAEgOAAIgEAAg"
    );
    var mask_graphics_181 = new cjs.Graphics().p(
      "AAAIAQgRAAgQgEQgrgKgmghQgUgQgSgWQgRgUgRgZIgDgEQgVgdgRgiIgFgJQhDiDAAiuIAAgBQAAivBGiGQAUgnAXgiQASgZARgTQBChSBSgDIAFAAQBqABBPCAQASAbAQAfIAIAOQAgA+ASBIQAVBRAABeIAAAEQAABhgWBUQgSBFggA8IgIAPQgOAagQAXIgEAFQgjA0gmAfQgnAigsAJQgNADgNABIgEAAg"
    );
    var mask_graphics_182 = new cjs.Graphics().p(
      "AgBHnQgQAAgPgDQgqgJglgfQgUgPgSgUQgSgTgQgXIgEgEQgVgcgSggIgEgIQhFh+AAioIAAgBQAAipBIiAQAUgmAYggQARgXASgSQBBhMBRgCIAEAAQBoAABOB4QATAZAQAdIAIANQAgA8ASBFQAXBOAABbIAAAEQgBBegWBQQgSBDghA5IgIAPQgOAYgQAWIgEAFQgjAxgnAdQgmAfgqAIQgNADgNAAIgFAAg"
    );
    var mask_graphics_183 = new cjs.Graphics().p(
      "AgBHPQgPAAgPgDQgqgJgkgbQgTgPgTgSQgRgSgRgVIgDgFQgWgZgSggIgEgHQhHh4AAiiIAAgBQAAijBJh7QAWgkAXgdQASgWASgSQA/hFBQgCIAFAAQBmABBMBuQATAXARAcIAIANQAhA4ATBCQAWBLABBZIAAADQgBBbgXBOQgSBAgiA2IgIAOQgPAXgQAUIgEAGQgjAtgnAbQgmAdgpAHQgNADgMAAIgEAAg"
    );
    var mask_graphics_184 = new cjs.Graphics().p(
      "AgCG3QgOgBgPgDQgogGgjgaQgUgNgRgRQgSgQgRgVIgEgDQgWgZgSgdIgFgHQhIh0AAibIAAgBQAAicBMh3QAVghAYgdQARgUATgQQA+g/BOgCIAFAAQBkABBMBlQASAXASAaIAIALQAiA2ATA/QAYBIAABWIAAADQAABXgZBLQgSA9gjA1IgIAMQgOAWgRAUIgFAFQgjAqgnAZQgkAZgpAHIgYADIgFAAg"
    );
    var mask_graphics_185 = new cjs.Graphics().p(
      "AgBGeQgOAAgOgCQgogHgjgXQgTgLgSgQQgSgPgRgTIgEgEQgVgWgUgdIgEgGQhKhuAAiVIAAgBQAAiXBNhwQAWggAYgaQASgTASgPQA/g5BMgBIADAAQBkAABKBcQATAVASAYIAIAMQAjA0AUA7QAXBFABBSIAAAEQAABUgZBHQgTA7gjAxIgJANQgPAVgQASIgGAFQgiAmgoAXQgjAXgoAGQgMACgMAAIgDAAg"
    );
    var mask_graphics_186 = new cjs.Graphics().p(
      "AgBGGQgOAAgOgDQglgFgjgVQgTgKgSgOQgSgNgRgSIgEgEQgWgVgUgbIgDgGQhNhpAAiPIAAAAQAAiQBQhsQAWgeAZgYQASgRASgOQA9gzBKgBIAFAAQBgABBKBSQAUAUAQAXIAKALQAjAwAUA5QAZBCAABPIAAADQAABSgZBEQgUA3gjAwIgKAMQgOATgSARIgFAFQgiAjgoAUQgkAUgnAGIgWACIgDAAg"
    );
    var mask_graphics_187 = new cjs.Graphics().p(
      "AgBFtQgNAAgNgCQgmgFghgRQgTgJgSgNQgSgMgRgQIgFgEQgVgUgUgZIgFgGQhOhjAAiJQAAiKBShmQAWgcAagXQARgQATgMQA8gsBJgBIADAAQBfABBKBJQATARARAWIAKAKQAkAuAUA2QAaA/AABMIAAADQAABOgaBCQgUA0gkAtIgKALQgPASgRAQIgFAEQgkAhgmASQgkARgmAFQgKABgMAAIgCAAg"
    );
    var mask_graphics_188 = new cjs.Graphics().p(
      "AgBFVQgNAAgNgCQgkgEghgPQgSgIgTgLQgRgLgSgOIgEgEQgXgSgUgYIgEgFQhQheAAiDQAAiEBThhQAYgaAZgUQARgPATgLQA8gmBHgBIADAAQBeABBIBAQAUAQARAUIAKAKQAlArAUAyQAaA9ABBJIAAADQAABLgbA+QgUAyglAqIgKALQgPARgSAOIgFAEQgjAdgoAQQghAPgmAEIgVABIgCAAg"
    );
    var mask_graphics_189 = new cjs.Graphics().p(
      "AgCE9IgYgCQgkgDgfgMQgTgHgRgJQgTgLgRgNIgFgDQgWgRgVgWIgFgFQhRhZAAh8QAAh+BVhcQAXgYAbgTQARgNATgJQA7ggBFgBIAEAAQBbABBHA3QAUAOASATIAKAJQAmApAVAvQAaA6ABBFIAAADQAABIgbA7QgWAvglAoIgKAKQgQAPgRAOIgGAEQgjAagnAOQgiAMgkACIgVACIgCAAg"
    );
    var mask_graphics_190 = new cjs.Graphics().p(
      "ASRbcQgXgQgVgUQhYhVAAh5QAAh5BYhWQBYhVB8AAQB2AABUBMIAKAJQAnAmAVAsQAcA4AABFQAABFgcA4QgVAsgnAlIgKAJQgQAPgRAMQhKAyhfAAQhfAAhJgyg"
    );
    var mask_graphics_191 = new cjs.Graphics().p(
      "AAAEdQheAAhIgwQgXgPgVgUQgTgSgOgTQg4hHAAheQAAhaA1hHQAPgVAVgUQBVhPB2gDIAIAAQB0AABUBKIAKAIQAMAMAKANIAIAJQASAWAMAYQAJASAGASQANAnABAsIAAADQAAArgLAlQgIAXgKAUQgKASgMARIgIALQgNARgSAQIgJAJQgQAOgSAMQhHAuhaACIgGAAg"
    );
    var mask_graphics_192 = new cjs.Graphics().p(
      "AAAEXQhcAAhJgwQgXgOgVgTQgSgRgPgTQg5hGAAhcQAAhYA2hGQAQgVAVgTQBUhNB1gDIAIAAQBzAABUBIIAKAIIAWAYIAIAJQASAWAMAXQAJARAHATQANAlABAsIAAADQAAAqgNAlQgGAWgMAUQgJASgMAQIgJALQgNAQgRAQIgKAJQgRANgQAMQhGAthaACIgGAAg"
    );
    var mask_graphics_193 = new cjs.Graphics().p(
      "AAAEQQhcAAhIgtQgWgPgWgSQgRgRgPgSQg7hEAAhbQAAhXA4hEQAQgVAUgRQBVhMBzgCIAIAAQByAABUBFIAJAJQAMALALALIAIAKQARAVANAWQAJARAHASQAOAlABArIAAAEQAAApgNAkQgIAVgLAUQgJARgNAQIgIALQgOAQgSAPIgJAIQgQAOgRALQhGArhYACIgGAAg"
    );
    var mask_graphics_194 = new cjs.Graphics().p(
      "AAAEJQhbAAhIgsQgWgOgVgSQgSgQgPgRQg8hDAAhZQAAhVA6hDQAQgUAUgSQBThIB0gCIAHAAQByAABSBDIAJAIQANAKAKAMIAJAJQASAUAMAXQAKAQAGARQAPAlABArIAAACQgBApgNAkQgIAVgLATQgKARgMAQIgJAKQgOAPgRAPIgKAIQgQANgRALQhFAqhXABIgGAAg"
    );
    var mask_graphics_195 = new cjs.Graphics().p(
      "AAAECQhaAAhIgqQgWgNgUgSQgTgQgOgQQg+hCAAhXQAAhUA7hBQAQgTAVgRQBShGBzgCIAIAAQBwgBBSBBIAJAIIAXAVIAJAJQARAUANAWQAKAQAHARQAPAkABAqIAAADQgBAogOAjQgIAUgLAUQgKAPgNAQIgIAJQgOAQgSAOIgKAIQgPANgSAKQhEAohXABIgFAAg"
    );
    var mask_graphics_196 = new cjs.Graphics().p(
      "AAAD8QhaAAhGgpQgWgNgVgRQgSgPgPgRQg/hAAAhVQAAhSA9hAQAQgTAUgRQBThDBygCIAHAAQBvAABRA/IAKAHQAMAKALALIAJAJQARATANAVQAKAQAHAQQAQAkABApIAAADQgBAngOAjQgIAUgMASQgLAQgNAPIgIAKQgPAOgQAOIgKAIQgQALgRAKQhEAohWABIgFAAg"
    );
    var mask_graphics_197 = new cjs.Graphics().p(
      "AgBD1QhYAAhGgoQgWgMgVgQQgSgPgPgQQhAg/AAhTQAAhQA+g/QAQgSAVgQQBShBBxgCIAHAAQBuAABRA8IAJAIIAYAUIAIAIQASATAOAUQAJAPAIAQQAQAjABApIAAADQgBAngPAiQgIATgNASQgKAQgOAOIgIAJQgOAOgRAOIgKAHQgQAMgRAJQhDAmhVABIgGAAg"
    );
    var mask_graphics_198 = new cjs.Graphics().p(
      "AgBDuQhYAAhFgmQgWgMgVgQQgRgNgQgPQhBg+AAhSQAAhPA/g9QARgSAVgPQBSg/BvgCIAIAAQBtAABQA7IAKAHQAMAJAKAKIAIAIQATASAOAUQAKAPAHAPQASAjAAApIAAACQgBAngQAhQgIATgNASQgLAOgNAOIgJAJQgOAOgSANIgJAHQgPALgRAJQhDAkhVABIgFAAg"
    );
    var mask_graphics_199 = new cjs.Graphics().p(
      "AgBDoQhXAAhFglQgWgLgUgQQgSgNgPgPQhDg8AAhQQAAhOBBg8QARgRAVgOQBRg8BvgCIAHAAQBsAABQA4IAJAHQAMAIAKAKIAJAJQATARAOATQAKAPAIAOQARAjABAnIAAADQgBAlgQAiQgJASgNARQgLAPgNAOIgJAIQgPAOgRAMIgKAGQgPALgQAJQhDAjhUABIgFAAg"
    );
    var mask_graphics_200 = new cjs.Graphics().p(
      "AgBDhQhXAAhEgjQgWgLgUgPQgRgNgPgOQhFg7AAhOQAAhMBDg6QARgRAUgOQBRg6BugBIAHAAQBrAABQA2IAJAGQALAJALAJIAJAIQATARAOASQAKAOAIAPQASAiABAnIAAACQAAAlgSAhQgJASgOAQQgLAOgNAOIgJAIQgPANgRAMIgJAGQgQAKgQAJQhCAhhTABIgFAAg"
    );
    var mask_graphics_201 = new cjs.Graphics().p(
      "AgCDaQhVABhEgjQgVgKgUgOQgSgNgPgNQhGg5AAhNQAAhKBEg6QARgPAVgOQBQg3BtgBIAHAAQBrAABOAzIAJAGIAXARIAJAIQATARAOASQALANAHAPQAUAgAAAnIAAACQAAAlgTAgQgJARgOAQQgLAOgOANIgJAIQgPANgQALIgKAGQgPAJgRAJQhCAfhRABIgGAAg"
    );
    var mask_graphics_202 = new cjs.Graphics().p(
      "AgCDUQhUgBhDgfQgWgKgUgOQgRgMgQgOQhHg3AAhLQAAhIBGg5QARgPAUgNQBQg0BtgCIAHAAQBpAABOAyIAJAFIAXARIAJAHQATAQAOASQALANAIAOQAUAgAAAmIAAACQgBAlgSAeQgKASgOAPQgLAOgPAMIgJAIQgOAMgRAKIgJAGQgPAKgRAIQhBAehRABIgGAAg"
    );
    var mask_graphics_203 = new cjs.Graphics().p(
      "AgCDOQhTgBhDgeQgWgKgTgNQgSgMgQgNQhIg2AAhJQAAhHBHg2QARgPAVgNQBQgyBrgCIAHAAQBoABBOAwIAIAFQAMAHALAJIAJAHQAUAPAOARQALANAIANQAVAgAAAlIAAACQgBAkgTAfQgKAQgOAPQgLANgPAMIgJAIQgPALgSALIgIAGQgPAJgRAHQhAAdhRABIgFAAg"
    );
    var mask_graphics_204 = new cjs.Graphics().p(
      "AgCDHQhSAAhDgeQgVgJgUgMQgSgLgQgMQhJg1AAhIQAAhFBIg1QASgOAVgMQBPgwBqgCIAHAAQBoABBNAtIAIAFIAXAPIAJAHQATAPAPAQQALANAIANQAWAfAAAkIAAADQgBAjgUAeQgKAQgOAPQgMAMgOALIgKAIQgPALgRAKIgJAFQgPAJgQAHQhBAbhPABIgFAAg"
    );
    var mask_graphics_205 = new cjs.Graphics().p(
      "AgCDAQhSAAhBgcQgWgJgUgMQgSgKgPgLQhLg0AAhGQAAhEBKgzQARgNAWgMQBPguBogBIAHAAQBnABBNArIAIAEIAWAPIAJAHQAVAOAOAPQAMAMAHANQAXAfAAAjIAAADQgBAjgVAdQgKAPgOAPQgMALgPAMIgJAGQgPALgSAKIgJAFQgPAIgQAHQhAAahOAAIgFAAg"
    );
    var mask_graphics_206 = new cjs.Graphics().p(
      "AgDC6QhQgBhBgaQgWgJgUgKQgRgKgPgMQhNgyAAhEQAAhCBMgzQASgNAUgKQBOgsBpAAIAGAAQBmAABNAoIAIAGIAWANIAJAGQAVAOAOAPQALAMAJAMQAXAfAAAiIAAADQgBAhgWAdQgKAQgPAOQgMALgPAKIgKAIQgPAKgQAIIgJAGIggANQg/AZhNABIgGAAg"
    );
    var mask_graphics_207 = new cjs.Graphics().p(
      "AgDCzQhPgBhBgYQgWgIgTgLQgSgJgPgLQhOgwAAhDQAAhBBNgwQASgNAVgKQBOgpBngBIAHAAQBlABBLAmIAJAFIAWANIAJAGQAUANAQAPQALALAIALQAYAeAAAjIAAACQgBAhgWAdQgLAOgPAOQgNAKgPALIgJAGQgPAKgRAJIgJAEIgfANQg/AXhNABIgFAAg"
    );
    var mask_graphics_208 = new cjs.Graphics().p(
      "AgDCsQhPAAhAgYQgVgHgTgKQgSgJgQgKQhPgvAAhBQAAg/BPgvQASgMAUgKQBOgmBngBIAGAAQBkABBLAkIAIAEIAXAMIAJAGQAUANAQAOQALAKAJAMQAYAdAAAiIAAADQgBAggXAcQgLAOgQANIgbAUIgKAGIggASIgIAEIggAMQg+AWhMAAIgFAAg"
    );
    var mask_graphics_209 = new cjs.Graphics().p(
      "AgDCmQhPgBg/gWQgVgHgTgJQgSgJgQgKQhQgtAAg/QAAg9BQgvQASgLAVgJQBNgkBmgBIAGAAQBjACBKAhIAIAEQAMAGALAGIAKAFQAUANAQAMQAMALAIALQAZAcAAAiIAAADQgBAfgYAbQgLAOgQAMQgMALgQAJIgJAGIghARIgJADIgeAMQg+AUhLABIgFAAg"
    );
    var mask_graphics_210 = new cjs.Graphics().p(
      "AgDCfQhNgBhAgUQgVgGgTgJQgSgIgPgJQhSgtAAg9QAAg8BRgsQATgLAVgJQBNghBkgBIAHAAQBiABBJAgIAIAEIAXAKIAJAFQAVAMAQANQALAKAJAKQAaAcAAAhIAAADQgBAfgYAbQgLANgRAMQgNAJgPAJIgKAGQgQAIgRAIIgIADQgPAGgPAFQg+AShLABIgEAAg"
    );
    var mask_graphics_211 = new cjs.Graphics().p(
      "AgDCYQhNAAg+gUQgVgFgUgIQgRgIgQgIQhTgrAAg8QAAg6BTgsQASgKAWgIQBMgfBkAAIAGAAQBgABBKAdIAIAEIAWAKIAKAFQAVALAQAMQAMAKAJAKQAaAbAAAgIAAADQgCAegYAaQgLANgRAMQgNAJgQAJIgKAFQgQAIgQAGIgJAEIgeAKQg9ARhKAAIgEAAg"
    );
    var mask_graphics_212 = new cjs.Graphics().p(
      "AgDCRQhNAAg9gRQgVgGgTgIQgSgHgPgIQhVgpAAg6QAAg5BVgpQASgKAVgIQBMgcBjAAIAGAAQBgABBJAbIAIADQALAEAKAGIAKAEQAWALAQALQAMAKAJAJQAbAbAAAfIAAADQgBAegZAaQgNAMgQALIgeARIgKAFIggAOIgIADIgfAJQg9APhIAAIgEAAg"
    );
    var mask_graphics_213 = new cjs.Graphics().p(
      "AgECLQhKgBg+gQQgVgFgTgHIghgOQhWgoAAg4QAAg3BWgpQATgJAVgHQBLgaBiAAIAGAAQBfABBJAZIAIADIAVAJIAKAEQAWAKAQALQAMAJAKAJQAbAbAAAeIAAADQgBAdgaAZQgMAMgRALIgfAQIgKAFQgPAHgRAFIgIADIgfAJQg7AOhIAAIgFAAg"
    );
    var mask_graphics_214 = new cjs.Graphics().p(
      "ARlFDQhYgnAAg2QAAg3BYgnQBYgmB8AAQB2AABUAiIAKAEQAnARAVAUQAcAaAAAfQAAAegcAaQgVAUgnARIgKAEQhUAjh2AAQh8AAhYgng"
    );
    this.timeline.addTween(
      cjs.Tween.get(mask)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(131)
        .to({ graphics: mask_graphics_131, x: 155.675, y: 33.75 })
        .wait(1)
        .to({ graphics: mask_graphics_132, x: 266.05, y: 37.55 })
        .wait(1)
        .to({ graphics: mask_graphics_133, x: 250.7, y: 37.55 })
        .wait(1)
        .to({ graphics: mask_graphics_134, x: 235.4, y: 37.6 })
        .wait(1)
        .to({ graphics: mask_graphics_135, x: 220.05, y: 37.6 })
        .wait(1)
        .to({ graphics: mask_graphics_136, x: 204.75, y: 37.65 })
        .wait(1)
        .to({ graphics: mask_graphics_137, x: 189.4, y: 37.65 })
        .wait(1)
        .to({ graphics: mask_graphics_138, x: 174.1, y: 37.7 })
        .wait(1)
        .to({ graphics: mask_graphics_139, x: 158.75, y: 37.7 })
        .wait(1)
        .to({ graphics: mask_graphics_140, x: 143.45, y: 37.75 })
        .wait(1)
        .to({ graphics: mask_graphics_141, x: 128.1, y: 37.75 })
        .wait(1)
        .to({ graphics: mask_graphics_142, x: 112.8, y: 37.8 })
        .wait(1)
        .to({ graphics: mask_graphics_143, x: 97.45, y: 37.8 })
        .wait(1)
        .to({ graphics: mask_graphics_144, x: 82.15, y: 37.85 })
        .wait(1)
        .to({ graphics: mask_graphics_145, x: 66.8, y: 37.85 })
        .wait(1)
        .to({ graphics: mask_graphics_146, x: 51.5, y: 37.9 })
        .wait(1)
        .to({ graphics: mask_graphics_147, x: 33.075, y: 33.95 })
        .wait(1)
        .to({ graphics: mask_graphics_148, x: 36.2, y: 48.35 })
        .wait(1)
        .to({ graphics: mask_graphics_149, x: 36.25, y: 58.85 })
        .wait(1)
        .to({ graphics: mask_graphics_150, x: 36.3, y: 69.3 })
        .wait(1)
        .to({ graphics: mask_graphics_151, x: 36.35, y: 79.75 })
        .wait(1)
        .to({ graphics: mask_graphics_152, x: 36.4, y: 90.25 })
        .wait(1)
        .to({ graphics: mask_graphics_153, x: 36.45, y: 100.7 })
        .wait(1)
        .to({ graphics: mask_graphics_154, x: 36.45, y: 111.15 })
        .wait(1)
        .to({ graphics: mask_graphics_155, x: 36.5, y: 121.65 })
        .wait(1)
        .to({ graphics: mask_graphics_156, x: 36.55, y: 132.1 })
        .wait(1)
        .to({ graphics: mask_graphics_157, x: 36.6, y: 142.55 })
        .wait(1)
        .to({ graphics: mask_graphics_158, x: 36.65, y: 153.05 })
        .wait(1)
        .to({ graphics: mask_graphics_159, x: 36.7, y: 163.5 })
        .wait(1)
        .to({ graphics: mask_graphics_160, x: 36.75, y: 173.95 })
        .wait(1)
        .to({ graphics: mask_graphics_161, x: 36.8, y: 184.45 })
        .wait(1)
        .to({ graphics: mask_graphics_162, x: 36.85, y: 194.9 })
        .wait(1)
        .to({ graphics: mask_graphics_163, x: 36.9, y: 205.35 })
        .wait(1)
        .to({ graphics: mask_graphics_164, x: 36.95, y: 215.85 })
        .wait(1)
        .to({ graphics: mask_graphics_165, x: 37, y: 226.3 })
        .wait(1)
        .to({ graphics: mask_graphics_166, x: 37, y: 236.75 })
        .wait(1)
        .to({ graphics: mask_graphics_167, x: 37.05, y: 247.25 })
        .wait(1)
        .to({ graphics: mask_graphics_168, x: 37.1, y: 257.7 })
        .wait(1)
        .to({ graphics: mask_graphics_169, x: 37.15, y: 268.15 })
        .wait(1)
        .to({ graphics: mask_graphics_170, x: 37.2, y: 278.65 })
        .wait(1)
        .to({ graphics: mask_graphics_171, x: 33.625, y: 182.35 })
        .wait(1)
        .to({ graphics: mask_graphics_172, x: 50.95, y: 291.35 })
        .wait(1)
        .to({ graphics: mask_graphics_173, x: 64.65, y: 293.625 })
        .wait(1)
        .to({ graphics: mask_graphics_174, x: 78.35, y: 295.875 })
        .wait(1)
        .to({ graphics: mask_graphics_175, x: 92.05, y: 298.125 })
        .wait(1)
        .to({ graphics: mask_graphics_176, x: 105.7, y: 300.4 })
        .wait(1)
        .to({ graphics: mask_graphics_177, x: 119.4, y: 302.65 })
        .wait(1)
        .to({ graphics: mask_graphics_178, x: 133.1, y: 304.9 })
        .wait(1)
        .to({ graphics: mask_graphics_179, x: 146.8, y: 307.175 })
        .wait(1)
        .to({ graphics: mask_graphics_180, x: 160.5, y: 309.425 })
        .wait(1)
        .to({ graphics: mask_graphics_181, x: 174.2, y: 311.675 })
        .wait(1)
        .to({ graphics: mask_graphics_182, x: 187.9, y: 313.925 })
        .wait(1)
        .to({ graphics: mask_graphics_183, x: 201.6, y: 316.2 })
        .wait(1)
        .to({ graphics: mask_graphics_184, x: 215.3, y: 318.45 })
        .wait(1)
        .to({ graphics: mask_graphics_185, x: 229, y: 320.7 })
        .wait(1)
        .to({ graphics: mask_graphics_186, x: 242.65, y: 322.975 })
        .wait(1)
        .to({ graphics: mask_graphics_187, x: 256.35, y: 325.225 })
        .wait(1)
        .to({ graphics: mask_graphics_188, x: 270.05, y: 327.475 })
        .wait(1)
        .to({ graphics: mask_graphics_189, x: 283.75, y: 329.75 })
        .wait(1)
        .to({ graphics: mask_graphics_190, x: 163.725, y: 180.6 })
        .wait(1)
        .to({ graphics: mask_graphics_191, x: 297.45, y: 320.625 })
        .wait(1)
        .to({ graphics: mask_graphics_192, x: 297.45, y: 309.275 })
        .wait(1)
        .to({ graphics: mask_graphics_193, x: 297.45, y: 297.9 })
        .wait(1)
        .to({ graphics: mask_graphics_194, x: 297.45, y: 286.525 })
        .wait(1)
        .to({ graphics: mask_graphics_195, x: 297.45, y: 275.15 })
        .wait(1)
        .to({ graphics: mask_graphics_196, x: 297.45, y: 263.8 })
        .wait(1)
        .to({ graphics: mask_graphics_197, x: 297.45, y: 252.425 })
        .wait(1)
        .to({ graphics: mask_graphics_198, x: 297.45, y: 241.05 })
        .wait(1)
        .to({ graphics: mask_graphics_199, x: 297.45, y: 229.7 })
        .wait(1)
        .to({ graphics: mask_graphics_200, x: 297.45, y: 218.325 })
        .wait(1)
        .to({ graphics: mask_graphics_201, x: 297.45, y: 206.95 })
        .wait(1)
        .to({ graphics: mask_graphics_202, x: 297.45, y: 195.6 })
        .wait(1)
        .to({ graphics: mask_graphics_203, x: 297.45, y: 184.2 })
        .wait(1)
        .to({ graphics: mask_graphics_204, x: 297.45, y: 172.825 })
        .wait(1)
        .to({ graphics: mask_graphics_205, x: 297.45, y: 161.45 })
        .wait(1)
        .to({ graphics: mask_graphics_206, x: 297.45, y: 150.1 })
        .wait(1)
        .to({ graphics: mask_graphics_207, x: 297.45, y: 138.725 })
        .wait(1)
        .to({ graphics: mask_graphics_208, x: 297.45, y: 127.35 })
        .wait(1)
        .to({ graphics: mask_graphics_209, x: 297.45, y: 116 })
        .wait(1)
        .to({ graphics: mask_graphics_210, x: 297.45, y: 104.625 })
        .wait(1)
        .to({ graphics: mask_graphics_211, x: 297.45, y: 93.25 })
        .wait(1)
        .to({ graphics: mask_graphics_212, x: 297.45, y: 81.875 })
        .wait(1)
        .to({ graphics: mask_graphics_213, x: 297.45, y: 70.525 })
        .wait(1)
        .to({ graphics: mask_graphics_214, x: 163.725, y: 36.175 })
        .wait(51)
    );
    // Layer_5
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f()
      .s("#FFCC00")
      .ss(1, 1, 1)
      .p("AT73NMgofAAAMAAAAubMApJAAAMAAAgn7");
    this.shape.setTransform(167.85, 186.5);
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
    this.instance_1.setTransform(266.5, 68, 0.0093, 0.0093);
    this.instance_1._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(207)
        .to({ _off: false }, 0)
        .to({ regY: 0.4, scaleX: 0.4189, scaleY: 0.4189, y: 68.1 }, 13)
        .to({ regY: 0, scaleX: 0.1816, scaleY: 0.1816, y: 68 }, 8)
        .wait(37)
    );
    // Layer_3 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    var mask_1_graphics_164 = new cjs.Graphics().p("AgQbKIAArzICuAAIAALzg");
    var mask_1_graphics_165 = new cjs.Graphics().p("AiRF6IAArzIEjAAIAALzg");
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
    var mask_1_graphics_177 = new cjs.Graphics().p("AtUF6IAArzIapAAIAALzg");
    var mask_1_graphics_178 = new cjs.Graphics().p("AuPF6IAArzIcfAAIAALzg");
    var mask_1_graphics_179 = new cjs.Graphics().p("AvKF6IAArzIeVAAIAALzg");
    var mask_1_graphics_180 = new cjs.Graphics().p("AwFF6IAArzMAgMAAAIAALzg");
    var mask_1_graphics_181 = new cjs.Graphics().p("AxAF6IAArzMAiBAAAIAALzg");
    var mask_1_graphics_182 = new cjs.Graphics().p("Ax7F6IAArzMAj3AAAIAALzg");
    var mask_1_graphics_183 = new cjs.Graphics().p("Ay2F6IAArzMAltAAAIAALzg");
    var mask_1_graphics_184 = new cjs.Graphics().p("AzxF6IAArzMAnjAAAIAALzg");
    var mask_1_graphics_185 = new cjs.Graphics().p("A0sF6IAArzMApZAAAIAALzg");
    var mask_1_graphics_186 = new cjs.Graphics().p("A1nF6IAArzMArPAAAIAALzg");
    var mask_1_graphics_187 = new cjs.Graphics().p("A2iF6IAArzMAtFAAAIAALzg");
    var mask_1_graphics_188 = new cjs.Graphics().p("A3dF6IAArzMAu7AAAIAALzg");
    var mask_1_graphics_189 = new cjs.Graphics().p("A3SbKIAArzMAwxAAAIAALzg");
    this.timeline.addTween(
      cjs.Tween.get(mask_1)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(164)
        .to({ graphics: mask_1_graphics_164, x: 15.75, y: 173.8 })
        .wait(1)
        .to({ graphics: mask_1_graphics_165, x: 28.65, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_166, x: 34.525, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_167, x: 40.425, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_168, x: 46.325, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_169, x: 52.225, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_170, x: 58.1, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_171, x: 64, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_172, x: 69.9, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_173, x: 75.775, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_174, x: 81.675, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_175, x: 87.575, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_176, x: 93.475, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_177, x: 99.35, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_178, x: 105.25, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_179, x: 111.15, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_180, x: 117.05, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_181, x: 122.925, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_182, x: 128.825, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_183, x: 134.725, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_184, x: 140.6, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_185, x: 146.5, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_186, x: 152.4, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_187, x: 158.3, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_188, x: 164.175, y: 309.825 })
        .wait(1)
        .to({ graphics: mask_1_graphics_189, x: 163.075, y: 173.8 })
        .wait(76)
    );
    // Layer_1
    this.instance_2 = new lib._250("synched", 0);
    this.instance_2.setTransform(168.35, 310, 0.2606, 0.2606);
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
    this.instance_3.setTransform(236.4, 220.3, 0.0098, 0.0098);
    this.instance_3._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(156)
        .to({ _off: false }, 0)
        .to(
          { regX: 0.4, regY: 0.2, scaleX: 0.2783, scaleY: 0.2783, x: 236.45 },
          6
        )
        .to({ regX: 0.2, scaleX: 0.2391, scaleY: 0.2391, x: 236.4 }, 6)
        .wait(97)
    );
    // Layer_1
    this.instance_4 = new lib._7("synched", 0);
    this.instance_4.setTransform(157.85, 219.1, 0.0513, 0.0513);
    this.instance_4._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(147)
        .to({ _off: false }, 0)
        .to({ scaleX: 1.1321, scaleY: 1.1321, x: 157.75 }, 6)
        .to({ scaleX: 0.9694, scaleY: 0.9694 }, 6)
        .wait(106)
    );
    // Layer_1
    this.instance_5 = new lib._1("synched", 0);
    this.instance_5.setTransform(87.7, 210.35, 0.0097, 0.0097);
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
    this.instance_6.setTransform(168.85, 99.65, 0.0074, 0.0074);
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
    this.instance_7.setTransform(173.15, 196.5, 1, 1, 0, 0, 0, -59.7, -27.4);
    this.instance_7._off = true;
    this.timeline.addTween(
      cjs.Tween.get(this.instance_7).wait(39).to({ _off: false }, 0).wait(226)
    );
    // firework2
    this.instance_8 = new lib.Firework();
    this.instance_8.setTransform(
      209.65,
      112.65,
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
    this.instance_9.setTransform(151.8, 251.45, 0.4274, 0.4274);
    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(265));
    // Layer_1 (mask)
    var mask_3 = new cjs.Shape();
    mask_3._off = true;
    var mask_3_graphics_45 = new cjs.Graphics().p(
      "ANpO5IgIgHIgDgDIgFgBIgFgCIgDgBIgGgKIgCgGIgBgCIgBgBIAAgDIgBgBIAAAAIgBAAIgCgCIgCgDIgCgDIgDgEIgBgFIgCgFIgBgCIgBgBIgCgDIAAgDQABgEAAgGIgBgEIAAgBIAhAAIAAAcIAoAkIABABIABACIABAEIgBACIAAACIgBABIAAACIAAACIAAABIABACIAAABIgBABIgKABIgIABIgEgEg"
    );
    var mask_3_graphics_46 = new cjs.Graphics().p(
      "ANiPPIgQgQQgDgDgFgCIgLgEIgLgDIgHgEQgEgDgJgTIgGgNIgDgGIgBgCIgBgGIgBgCIgBgBIgDgBIgDgDIgEgHIgGgHIgFgKQgDgFgBgGQAAgGgDgEIgDgEIgDgDIgEgHQgBgDABgFQADgHgCgOIgBgJIgBgDIBMAAIAABAIBbBSIABACIACADQADAGAAAEIgBAFIgBADIgCAEIgBAEIABAGIABACIABADIAAADQAAABAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgWACIgRADIgLgKg"
    );
    var mask_3_graphics_47 = new cjs.Graphics().p(
      "ANbPlQgSgQgHgJQgEgEgIgEIgRgGIgRgFQgIgDgDgDQgGgFgPgeIgJgTIgEgJIgCgDQgCgEAAgGIgBgDIgCgBIgEgCQgDgBgCgEIgHgKIgJgMQgFgIgDgHQgEgJgBgJQgBgIgFgIIgEgFIgFgGQgFgGgBgEQgCgFACgHQAEgMgCgWIgCgNIgBgGIB2AAIAABlICPCAIABACIADAGQAEAJAAAHIgBAGIgCAGIgCAGIgCAGQgBAEACAFIABAEIACAEQABAEAAABQgBACgEAAQgHAAgcAFIgbAEIgRgQg"
    );
    var mask_3_graphics_48 = new cjs.Graphics().p(
      "ANVP8QgZgXgKgLQgFgGgLgGIgYgIIgWgHQgLgEgEgDQgIgHgUgpIgOgbIgFgMIgCgEQgDgFAAgHQAAgEgBgBIgEgCIgFgCQgDgCgDgGIgJgNIgMgQQgIgLgEgKQgFgLgCgNQgBgLgHgKIgFgIIgGgHQgHgIgCgFQgDgIADgJQAGgRgDgdIgDgSIgCgIIChAAIAACKIDCCtIACADIAEAIQAFANAAAIIgBAJIgDAIIgDAIIgCAIQgBAFACAHIACAGIACAFQACAFgBACQgBADgFAAQgKAAgmAGIglAGIgWgVg"
    );
    var mask_3_graphics_49 = new cjs.Graphics().p(
      "ANOQSQgfgdgMgOQgHgIgPgGQgKgFgTgGIgcgIQgOgFgFgFQgKgJgagzIgRgiIgHgPIgDgFQgDgIABgIQAAgFgCgCIgFgBQgEgBgCgCQgFgDgDgHIgMgRIgPgVQgJgNgGgMQgHgPgCgPQgBgPgIgMIgIgKIgHgJQgJgLgDgGQgDgKAEgLQAHgWgEglIgDgXIgCgJIDLAAIAACuID1DbIACADIAFALQAIAQAAAKQAAAGgCAGIgEAKIgEAKIgDALQgBAGADAJIACAHIADAGQACAHgBACQgBAEgHAAQgMAAgwAHIguAHIgdgag"
    );
    var mask_3_graphics_50 = new cjs.Graphics().p(
      "ANHQpQglgjgPgSQgIgJgSgIQgMgGgXgGIgigLQgRgGgHgGQgMgKgfg+IgUgpIgIgTIgEgGQgDgJAAgKQAAgGgCgCIgGgCQgEgBgEgCQgFgEgEgIQgEgHgKgNIgTgaQgLgQgGgOQgJgTgCgSQgDgSgJgPIgJgMIgJgLQgLgMgDgIQgEgMAFgOQAJgZgFgtIgEgcIgDgLID1AAIAADSIEpEIIADAFIAGAMQAJAUAAANQAAAHgCAHIgFAMIgEAMIgEANQgBAIADAKIADAIIACAIQAEAIgCAEQgBAEgIAAQgPAAg6AJIg4AIIgjgfg"
    );
    var mask_3_graphics_51 = new cjs.Graphics().p(
      "ANBQ/QgsgpgSgUQgJgLgVgKQgPgGgagIIgpgNQgUgHgHgGQgOgNgkhIIgYgxIgKgVIgEgIQgEgKAAgMQAAgHgCgCIgHgCQgFgBgEgDQgGgEgFgKQgFgIgMgQIgWgeQgNgSgHgSQgKgVgDgWQgDgUgLgSIgKgOIgLgNQgMgPgEgJQgFgOAGgQQAKgegGg0IgFghIgCgOIEfAAIAAD3IFcE2IADAGIAIAOQAKAXAAAPQAAAIgCAJIgFAOIgGAOQgDAIgBAHQgCAJAEAMIADAKIADAJQAEAKgBAEQgCAFgJAAQgSAAhFAKIhBAKIgoglg"
    );
    var mask_3_graphics_52 = new cjs.Graphics().p(
      "AM6RVQgygvgUgXQgLgNgYgKQgRgIgfgJIgugOQgXgIgIgIQgQgPgqhSIgbg4IgLgYIgFgJQgFgMAAgOQAAgIgCgCIgIgDQgGgBgFgDQgHgFgGgLQgFgJgOgTIgZgiQgOgVgJgUQgLgZgDgYQgEgYgMgUIgMgRIgMgOQgPgRgEgLQgGgQAHgSQALgjgGg8QgCgTgEgTIgDgPIFKAAIAAEbIGPFkIAEAGIAIARQAMAaAAASQAAAJgCAJIgGARIgHAQQgDAJgCAIQgBALAEAOIAEALIADAKQAEALgBAFQgCAGgLAAQgUAAhPALIhLAMIgugrg"
    );
    var mask_3_graphics_53 = new cjs.Graphics().p(
      "AMzRsQg4g2gXgaQgMgOgbgMQgTgIgjgLIg0gQQgagJgJgJQgSgQgvheIgfg+IgNgcQgDgDgCgHQgGgNABgQQAAgIgDgDQgCgCgHgBQgHgCgFgDQgIgGgHgMQgFgLgQgVIgcgmQgRgYgKgWQgMgcgEgcQgEgbgOgXQgFgJgIgJIgOgQQgQgUgFgMQgHgSAHgVQAOgngHhDQgDgVgEgWIgEgRIF1AAIAAE/IHDGSIAEAHIAJATQAOAdAAAUQAAALgDAKIgHATIgIARQgEALgBAJQgCAMAFAQIAEANIAEALQAFANgCAFQgCAGgMAAQgXAAhZAOIhUANIg1gwg"
    );
    var mask_3_graphics_54 = new cjs.Graphics().p(
      "AMtSCQg/g7gagdQgNgQgegOQgWgJgmgMIg6gSQgdgKgKgJQgVgTg0hoIgihGIgOgeQgDgEgDgHQgHgPABgSQAAgJgDgEQgCgBgIgCQgIgBgGgEQgIgHgIgOQgGgLgSgXIgfgrQgTgbgKgZQgPgfgEgfQgEgdgQgaQgGgKgJgLIgPgSQgSgVgFgOQgIgUAIgXQAPgrgIhMQgCgXgFgYIgEgTIGfAAIAAFjIH2HAIAEAIIALAUQAPAhAAAWQAAAMgDAMQgDAIgFANIgIATQgFAMgBAKQgCAOAFARIAEAOIAFANQAFAOgBAGQgDAHgNAAQgZAAhkAPIheAOIg6g1g"
    );
    var mask_3_graphics_55 = new cjs.Graphics().p(
      "AMmSYQhFhBgcggQgPgRghgPQgYgLgqgMIhAgUQgggLgMgLQgWgUg6hzIglhNIgQgiQgDgEgEgIQgGgQAAgUQAAgKgEgEQgCgCgIgBQgJgCgGgEQgKgHgIgQQgHgMgTgaIgjgvQgUgegMgbQgQgigEgjQgFgggRgdQgHgKgKgMIgRgUQgUgYgGgPQgIgWAJgZQARgwgJhTQgDgagFgaIgFgWIHKAAIAAGIIIpHtIAFAJIALAXQARAkAAAZQAAANgEANQgCAJgGANIgJAWQgFANgCAMQgCAOAGATIAFAQIAFAOQAGAQgCAGQgCAIgQAAQgbAAhuAQIhoAQIhAg7g"
    );
    var mask_3_graphics_56 = new cjs.Graphics().p(
      "AMgSvQhMhIgfgjQgQgTglgQQgZgLgugOIhGgWQgjgMgNgMQgYgWg/h9IgphUIgSglQgDgFgEgIQgHgSAAgWQABgLgFgEQgCgCgJgCQgKgCgHgFQgKgHgJgRQgIgOgVgcIgmgzQgWghgNgdQgRgmgFglQgFgkgTgfQgHgMgLgNIgTgVQgVgagHgRQgJgXAKgdQASg0gJhbQgEgcgFgcIgFgXIH0AAIAAGrIJcIbIAGAKIAMAZQASAoAAAaQAAAOgEAOQgCALgHAOIgKAYQgFAOgCANQgCAQAGAVIAFARIAGAPQAGARgCAHQgCAJgRAAQgeAAh4ASIhxARIhGhAg"
    );
    var mask_3_graphics_57 = new cjs.Graphics().p(
      "AMZTFQhThNghgmQgRgVgogRQgcgNgygPIhMgYQglgNgOgMQgagYhFiIIgshcIgTgoQgEgFgEgJQgIgTAAgYQABgMgFgEQgCgCgKgCQgLgDgHgFQgLgIgKgSQgIgPgXgeIgpg4QgZgjgOghQgSgogGgpQgFgngVghQgIgNgLgOIgTgYQgYgcgHgRQgKgaALgfQAUg4gLhiQgDgfgGgfIgGgZIIdAAIAAHPIKQJJIAGALIAOAaQAUAsAAAcQAAAQgFAPQgDALgHAQIgLAaQgFAPgCAOQgDARAGAXIAHATIAGAQQAHATgDAHQgCAKgSAAQghAAiCATIh7ATIhMhGg"
    );
    var mask_3_graphics_58 = new cjs.Graphics().p(
      "AMSTbQhZhTgjgpQgTgWgrgTQgegNg2gRIhSgZQgogPgPgNQgdgahKiSIgvhjIgVgrQgEgFgEgKQgJgVABgZQAAgOgFgEQgCgDgLgCQgMgCgHgGQgNgJgKgTQgJgQgZghIgsg8QgagmgQgjQgSgsgGgsQgGgpgWglQgJgNgNgQIgVgZQgZgegIgTQgLgcAMghQAVg8gLhqQgEgigGghIgGgbIJHAAIAAHzILDJ3IAHALQAIAPAHAOQAVAvAAAfQAAAQgFARQgDAMgIARIgLAcQgHAQgCAPQgCATAGAYIAHAUIAHATQAHATgCAIQgDALgUAAQgjAAiMAUIiFAVIhShMg"
    );
    var mask_3_graphics_59 = new cjs.Graphics().p(
      "AMMTyQhghagmgsQgUgXgugVQgggOg6gSIhYgbQgsgPgPgPQgfgbhPieIg0hpIgVgvQgFgFgEgLQgKgWABgbQAAgPgFgFQgDgCgLgCQgNgDgIgGQgNgJgLgVQgKgSgagjIgvhAQgcgpgQglQgWgvgGgvQgGgtgYgnQgJgPgOgQIgXgbQgbghgIgUQgMgeANgjQAXhBgNhyQgDgkgHgkIgHgdIJyAAIAAIYIL3KlIAHAMQAIAPAHAQQAXAyAAAhQAAASgFASQgDANgIASIgNAeQgHASgCAPQgDAUAHAbIAIAVIAHAUQAIAVgDAIQgDAMgVAAQgmAAiWAWIiOAWIhYhRg"
    );
    var mask_3_graphics_60 = new cjs.Graphics().p(
      "AMFUIQhmhfgpgvQgWgagwgVQgjgQg9gSIhegeQgvgQgRgPQgggehVioQgag0gdg8IgXgyQgFgGgEgMQgLgXABgdQABgQgGgFQgDgCgMgDQgNgDgJgGQgPgKgLgWQgLgTgbglIgzhFQgegsgRgoQgXgygHgyQgGgwgagpQgJgQgPgSIgZgdQgdgigIgVQgNggAOgmQAYhGgNh5QgEgmgIgnIgGgfIKcAAIAAI8IMqLSIAHANQAJARAIARQAYA1AAAkQAAATgFATQgEANgIAUIgOAgQgHATgCAQQgDAWAHAcIAIAXIAIAVQAIAWgDAJQgDAMgWAAQgpAAigAYIiYAXIhehWg"
    );
    var mask_3_graphics_61 = new cjs.Graphics().p(
      "AL+UfQhshmgrgyQgYgbgzgXQglgQhCgUIhjgfQgygSgSgQQgigfhaizQgdg4gehAIgYg1QgFgGgGgMQgKgZAAgfQABgQgGgGQgDgDgNgDQgOgCgJgHQgPgLgNgYQgKgTgegoQgog1gOgUQgggvgTgqQgYg1gHg2QgHgzgbgsQgLgQgPgTIgageQgfglgJgXQgOgiAPgoQAahKgOiCQgFgogIgpIgHghILHAAIAAJgINdMAIAIAOQAKASAIARQAZA5AAAmQAAAUgFAUQgEAPgJAVIgPAiQgHAUgDASQgDAWAIAeIAJAZIAIAWQAJAYgDAKQgEAMgYAAQgrAAiqAZIiiAZIhkhbg"
    );
    var mask_3_graphics_62 = new cjs.Graphics().p(
      "AL4U1Qhzhsgug1QgZgcg2gZQgngRhGgVIhpghQg1gSgTgSQglghhfi9Qgeg7gghEIgag4QgFgHgGgNQgKgaABghQAAgRgGgGQgEgDgNgDQgPgDgKgHQgQgMgOgZQgLgVgggqQgqg3gPgWQgigxgUgtQgZg5gIg5QgHg1gdgvQgLgRgQgUIgcggQghgngKgZQgOgkAQgqQAbhPgPiJQgEgrgJgrIgHgjILxAAIAAKEIOQMuIAIAPQALASAIATQAcA8AAAoQAAAWgGAVQgEAQgKAWIgPAkQgIAVgDATQgEAYAJAgIAJAZIAJAYQAJAZgDALQgEANgZAAQguAAi0AbIirAaQgxgrg5g2g"
    );
    var mask_3_graphics_63 = new cjs.Graphics().p(
      "ALxVLQh6hygwg4Qgageg6gaQgpgShKgWIhvgjQg4gUgUgSQgmgjhljIQggg/gghHIgcg7QgGgHgFgOQgMgcAAgjQABgSgHgGQgDgDgPgDQgQgDgKgIQgRgMgOgbQgMgWgigsQgsg7gQgXQgkg0gVgvQgbg8gIg8QgIg5gegwQgMgTgRgVIgdgiQgjgpgKgaQgPgnAQgsQAdhUgQiQQgEgugJgtIgIglIMbAAIAAKpIPENbIAJAQQALATAJAUQAcBAAAAqQAAAXgGAWQgEARgKAXIgQAmQgJAWgDAUQgEAaAKAhIAJAbIAJAZQAKAbgDALQgEAOgbAAQgwAAi/AcIi0AcQgzgug9g4g"
    );
    var mask_3_graphics_64 = new cjs.Graphics().p(
      "ALyVHQh5hxgwg3Qgageg5gaQgpgShJgWIhugiQg3gTgUgSQgngjhkjHQgfg+ghhHIgbg6QgFgHgGgOQgMgcABgiQAAgSgGgGQgEgDgOgEQgQgDgKgHQgRgMgOgaQgMgXgigsQgsg6gQgXQgjgzgVgvQgag7gIg8QgIg4gegwQgMgTgRgUIgdgjQgigogLgaQgOgmAQgtQAchSgPiQQgFgtgJgtIgIglIMWAAIAAKkIO7NUIAJAQQALATAJAUQAdA/AAAqQAAAWgGAXQgFAQgKAXIgQAmQgIAWgDAUQgEAZAJAhIAKAbIAJAZQAKAagEALQgEAPgaAAQgwAAi9AbIizAcQgzgtg8g5g"
    );
    var mask_3_graphics_65 = new cjs.Graphics().p(
      "ALzVEQh4hwgvg3Qgageg5gZQgpgShIgWIhugiQg2gTgUgSQgmgjhjjEQgfg+ghhGIgbg7QgFgHgGgNQgMgcABgiQABgSgHgGQgDgDgPgDQgPgDgLgHQgQgMgOgaQgMgWghgsQgsg6gQgWQgjg0gUguQgbg7gIg7QgHg4gegvQgMgTgRgUIgdgiQgigpgKgZQgOgmAPgsQAdhSgPiOQgFgtgJgtIgIgkIMPAAIAAKeIO0NOIAJAPQALATAJAUQAcA+AAAqQAAAWgGAWQgFARgKAWIgPAmQgJAWgDATQgDAZAJAiIAJAaIAJAZQAKAagEALQgDAOgbAAQgvAAi7AbIiyAcQgzgtg7g4g"
    );
    var mask_3_graphics_66 = new cjs.Graphics().p(
      "ALzVBQh2hvgvg3Qgagdg4gaQgpgRhHgWIhtgiQg2gTgUgSQglgihjjDQgfg9ghhGIgZg6QgGgHgGgNQgLgbAAgiQABgSgHgGQgDgDgOgDQgQgDgKgIQgQgLgOgaQgMgWghgrQgrg6gQgWQgjgzgUguQgag6gIg7QgIg3gegwQgLgSgRgUIgcgiQgigogKgZQgOgmAPgsQAchRgPiNQgFgsgIgtIgIgkIMIAAIAAKZIOtNHIAJAPQAKATAJAUQAcA+AAApQAAAWgGAWQgEAQgKAXIgQAlQgIAWgDATQgDAZAJAhIAJAaIAJAYQAJAagDALQgEAOgaAAQgvAAi6AcIiwAbQgygtg8g3g"
    );
    var mask_3_graphics_67 = new cjs.Graphics().p(
      "AL0U9Qh1hugvg2QgZgdg4gZQgogShHgVIhsgiQg2gTgTgRQgmgihhjCQgfg9ghhFIgZg5QgGgHgFgNQgMgbABgiQAAgRgGgGQgEgDgOgDQgPgDgKgIQgRgLgNgaQgMgWghgrQgrg4gPgXQgjgygUguQgag6gIg6QgHg3gegvQgLgSgRgUIgcgiQgigngJgZQgPglAQgsQAchQgPiNQgFgrgJgtIgHgjIMCAAIAAKTIOlNAIAIAPQALATAJATQAcA+AAApQAAAWgGAWQgFAPgKAXIgPAlQgIAVgDAUQgEAYAJAhIAJAaIAJAYQAKAagEALQgEAOgZAAQgvAAi4AbIivAbQgygtg7g3g"
    );
    var mask_3_graphics_68 = new cjs.Graphics().p(
      "AL1U6Qh0htgvg2QgZgdg3gZQgogRhGgVIhsgiQg1gSgTgSQglgihhjAQgeg8ghhEIgag5QgFgHgFgNQgMgbABghQABgSgHgGQgDgDgOgDQgPgDgKgHQgRgMgNgZQgMgVgggrQgrg4gPgXQgigxgUguQgag5gIg6QgHg2gegvQgLgSgRgUIgcghQghgngKgZQgOglAPgrQAchQgPiLQgEgsgJgrIgIgkIL8AAIAAKOIOdM5IAJAPQALATAIATQAcA9AAApQAAAVgGAWQgEAQgKAWIgQAlQgIAVgDATQgDAZAJAgIAJAaIAJAYQAJAagDAKQgEAOgaAAQguAAi3AbIitAbQgxgsg7g3g"
    );
    var mask_3_graphics_69 = new cjs.Graphics().p(
      "AL2U2Qhzhsgug1QgZgdg3gZQgngRhGgVIhqghQg1gTgTgRQglgihgi+Qgeg8gghEIgbg4QgFgHgFgNQgLgbABghQAAgRgGgGQgDgDgOgDQgPgDgKgHQgQgLgOgaQgLgVgggqQgrg4gPgWQgigxgUguQgag4gHg5QgHg3geguQgLgRgQgUIgcghQghgngKgZQgOgkAQgrQAbhPgPiKQgEgrgJgsIgHgjIL1AAIAAKIIOVMzIAJAPQALASAIATQAbA9AAAoQAAAVgFAWQgFAQgJAWIgQAkQgIAVgDATQgDAYAJAhIAJAZIAJAYQAJAZgDALQgEAOgaAAQgtAAi2AaIisAbIhrhig"
    );
    var mask_3_graphics_103 = new cjs.Graphics().p(
      "AL2U2Qhzhsgug1QgZgdg3gZQgngRhGgVIhqghQg1gTgTgRQglgihgi+Qgeg8gghEIgbg4QgFgHgFgNQgLgbABghQAAgRgGgGQgDgDgOgDQgPgDgKgHQgQgLgOgaQgLgVgggqQgrg4gPgWQgigxgUguQgag4gHg5QgHg3geguQgLgRgQgUIgcghQghgngKgZQgOgkAQgrQAbhPgPiKQgEgrgJgsIgHgjIL1AAIAAKIIOVMzIAJAPQALASAIATQAbA9AAAoQAAAVgFAWQgFAQgJAWIgQAkQgIAVgDATQgDAYAJAhIAJAZIAJAYQAJAZgDALQgEAOgaAAQgtAAi2AaIisAbIhrhig"
    );
    var mask_3_graphics_104 = new cjs.Graphics().p(
      "ALBXrQioiehDhNQgkgqhQgkQg6gZhlgfIiagwQhMgbgcgZQg1gwiMkVQgrhXgvhjIgmhRQgIgKgIgTQgRgnABgwQABgZgJgJQgFgEgUgEQgWgFgPgKQgXgRgUglQgQgegvg+Qg9hRgXggQgxhHgdhCQglhSgLhTQgLhPgqhEQgQgagYgdIgpgwQgwg4gOgkQgUg1AWg+QAohzgVjJQgHg+gMhAIgMgzIROAAIAAOwIU1SkIAMAWQAQAbAMAcQAoBXAAA7QAAAfgJAgQgGAWgOAgIgWA1QgMAfgEAcQgFAjANAuIANAmIANAiQANAlgFAPQgFAUglAAQhDAAkHAnIj6AnQhHhAhUhOg"
    );
    var mask_3_graphics_105 = new cjs.Graphics().p(
      "AKLarQjcjOhYhmQgwg2hpgvQhLghiEgpIjKg+QhlgkgkghQhGhAi3lrQg6hxg9iCIgyhrQgKgNgLgZQgWgzACg/QABghgMgLQgHgGgagGQgdgFgTgOQgfgWgZgwQgWgng9hRQhRhqgdgqQhBhfgmhWQgxhsgOhtQgOhng4haQgVgigfglIg1g/Qg/hLgTgvQgahFAdhSQA0iXgckHQgJhSgQhTIgPhDIWmAAIAATWIbUYXIAQAdQAVAjAQAkQA0B0AABMQAAApgLAqQgIAdgTAqQgZA6gEAMQgPAogGAkQgGAuARA9IARAyIARAtQARAwgGAUQgHAagxAAQhXAAlaAzIlIAzQhdhThuhog"
    );
    var mask_3_graphics_106 = new cjs.Graphics().p(
      "EALkAhBQkRj/hth+Qg7hEiBg6QhdgpikgxIj6hOQh9gsgtgpQhXhPjinBQhHiNhMihIg+iEQgNgQgNgfQgbg/AChOQABgpgPgOQgIgHghgHQgjgHgYgRQgmgbggg8QgagwhMhkQhkiEgkg0QhQh1gvhqQg9iGgSiHQgRiAhFhuQgZgqgngvIhChOQhOhcgXg7QghhWAkhkQBBi7gjlGQgLhlgUhnIgShTIb9AAIAAX8MAh0AeKIAUAjQAZAsAUAtQBBCPAABfQAAAzgOAyQgKAlgXA0QgfBHgFAPQgTAygHAtQgIA5AVBMQAIAaANAjIAVA3QAWA8gIAZQgJAgg8AAQhsAAmsA/ImWA/QhzhniIiAg"
    );
    var mask_3_graphics_107 = new cjs.Graphics().p(
      "EANyAnXQlFkwiCiWQhGhRibhFQhugxjEg7QkHhRgjgMQiVg1g2gwQhnhekOoYQhVinhajAIhKieQgPgTgQglQgghLADhdQABgxgSgQQgKgJgngIQgqgIgcgVQgtgggmhHQghg7hah2Qh3iegrg9QhfiMg4h/QhIifgWihQgUiYhSiEQgfgygug4QgOgRhBhMQhdhtgbhHQgnhmAqh4QBOjfgqmDQgNh6gYh6IgVhjMAhVAAAIAAciMAoUAj9IAXAqQAeA0AYA2QBNCqAABxQAAA9gQA8QgMAsgcA+QglBVgGASQgWA7gIA2QgKBDAZBbQAKAfAPApIAZBDQAaBHgJAeQgLAmhHAAQiBAAn+BLInlBLQiIh6ijiZg"
    );
    var mask_3_graphics_108 = new cjs.Graphics().p(
      "EAQAAttQl5lhiXivQhShdizhRQiBg4jjhFQkxhegpgOQitg9g+g4Qh4huk6ptQhijDhpjeIhWi4QgSgWgSgrQglhXADhsQABg5gUgTQgLgKgugJQgwgKgigXQg0gmgshTQgmhEhpiKQiKi2gxhIQhviihBiTQhUi5gZi7QgXixhgiZQgkg6g2hBQgPgThMhZQhsh/gfhRQguh3AyiMQBakCgxnCQgPiNgciPIgYhyMAmtAAAMAAAAhIMAuzApwIAbAxQAjA8AcA/QBZDFAACDQAABHgTBGQgOAzggBIQgqBigHAVQgbBFgJA+QgLBPAdBpQALAkASAwIAdBOQAeBSgLAjQgMAshTAAQiVAApRBXIoyBXQifiOi9ixg"
    );
    var mask_3_graphics_109 = new cjs.Graphics().p(
      "EASOA0DQmumTirjGQhdhrjNhbQiShBkChOQlchrgvgQQjFhFhHhBQiJh8llrEQhvjeh4j9IhhjRQgVgZgUgxQgrhjADh7QAChAgYgWQgMgLg0gLQg3gLgmgbQg8grgyheQgrhOh3idQidjQg5hRQh+i5hKioQhgjTgcjUQgbjJhsivQgphCg+hKQgRgWhXhlQh6iQgkhdQg0iIA4ieQBnkng4oAQgRihgfiiIgdiCMAsFAAAMAAAAluMA1TAvjIAgA3QAnBGAfBGQBnDhAACWQAABQgWBQQgQA6gkBSQgxBwgIAXQgeBPgLBHQgMBaAhB3QAMApAVA3IAhBYQAiBfgMAnQgOAyhfAAQiqAAqjBjIqABjQi1iijXjJg"
    );
    var mask_3_graphics_110 = new cjs.Graphics().p(
      "EAUcA6ZQninEjAjeQhph4jlhnQikhIkihYQmGh4g1gSQjdhNhPhJQiaiLmQsaQh+j5iGkcIhtjrQgXgcgXg3QgwhvAEiKQABhIgagZQgOgMg6gNQg+gMgqgeQhEgwg4hqQgwhXiGiwQiwjphAhcQiNjOhTi9QhsjtgfjuQgejih6jEQguhKhFhTQgTgZhhhxQiKiigphoQg6iYBAiyQBylKg9o/QgUi0gji2IggiTMAxdAAAMAAAAqVMA7yA1WIAkA+QAsBOAjBPQBzD8AACoQAABagZBaQgSBBgoBcQg3B9gJAbQghBYgNBQQgOBkAlCGQAOAuAXA+QANAjAYBAQAnBqgOAsQgQA4hqAAQi+AAr1BvIrPBwQjLi2jxjig"
    );
    var mask_3_graphics_111 = new cjs.Graphics().p(
      "EAWqBAvQoWn1jWj3QhziFj+hxQi2hQlChiQmxiFg6gUQj1hWhYhQQiqibm8twQiLkUiVk7Ih5kEQgagfgZg9Qg1h7AEiZQAChQgdgbQgQgOhAgOQhFgOgvghQhKg1g/h1Qg1hhiUjDQjEkDhGhlQidjlhcjSQh3kGgkkIQghj6iHjaQgzhShMhcQgVgbhsh9QiZi0gth0QhAioBGjGQB/luhEp9QgWjIgnjJIgjijMA20AAAMAAAAu7MBCTA7JIAnBFQAxBWAnBYQB/EYAAC5QAABkgbBkQgUBIgtBmQg9CLgJAdQgmBigNBYQgQBwApCUQAQAzAZBFQAOAnAbBGQArB2gPAxQgSA+h1AAQjUAAtHB8IscB7QjhjKkMj6g"
    );
    var mask_3_graphics_112 = new cjs.Graphics().p(
      "EAY4BHFQpLomjqkPQh/iSkXh9QjIhYlhhrQnbiShAgWQkNhehghYQi7iqnovHQiYkuiklaIiFkeQgcgigchDQg6iHAFioQAChYghgeQgRgPhHgPQhLgPgzglQhSg6hFiBQg6hqijjXQjXkbhNhwQisj7hljmQiDkggnkiQgkkTiUjuQg4hbhUhlQgYgeh2iJQinjGgyh/QhHi4BOjZQCLmShLq8QgYjbgqjeIgniyMA8MAAAMAAAAzhMBIyBA8IArBLQA2BfArBhQCLEzAADMQAABtgeBuQgVBPgyBwQhCCZgLAgQgpBrgPBhQgRB6AtCkQARA3AcBMQAPArAeBNQAvCBgRA2QgTBEiBAAQjoAAuaCIItqCHQj3jdkmkTg"
    );
    var mask_3_graphics_113 = new cjs.Graphics().p(
      "EAbGBNbQp/pXj/knQiKifkwiIQjahgmBh1QoFifhGgXQklhnhphgQjMi5oTwdQimlKiyl5IiRk3QgeglgfhJQg/iTAFi3QAChggjghQgTgQhNgQQhSgRg4gnQhZhAhLiMQg/h0iyjqQjqk1hUh6Qi7kRhuj7QiPk5gqk8QgoksihkDQg9hjhbhuQgaggiBiWQi2jXg2iKQhNjKBUjsQCYm1hSr7QgZjvgvjxIgqjCMBBjAAAMAAAA4IMBPSBGuIAvBSQA6BnAvBpQCYFPAADeQAAB4ggB3QgYBWg2B6QhICmgMAjQgsB1gRBqQgSCFAxCyQASA9AfBSQAQAuAhBVQAzCMgSA6QgVBLiNAAQj8AAvsCUIu5CTQkNjxlAkrg"
    );
    var mask_3_graphics_114 = new cjs.Graphics().p(
      "EAdUBTxQqzqJkUk/QiWislJiSQjrhomhh/QovishMgZQk9hwhyhoQjcjHo+x0Qi0lljBmXIidlRQgggoghhPQhFifAFjGQADhogmgjQgUgShUgSQhYgRg9grQhghFhRiYQhFh9jAj9Qj9lOhbiEQjLkoh3kPQialTgulWQgrlEivkZQhChqhih3QgcgkiLiiQjGjpg6iVQhUjaBckAQCknZhYs5QgckCgzkFIgujSMBG8AAAMAAAA8uMBVxBMhIAzBZQA/BvAzByQClFqAADxQAACBgkCBQgZBdg6CEQhPC0gNAmQgwB+gRByQgVCRA1DAQAVBCAhBYQARAzAkBbQA4CYgVA/QgXBRiXAAQkSAAw+CgIwGCfQkjkElblEg"
    );
    var mask_3_graphics_115 = new cjs.Graphics().p(
      "EAfiBaGQroq5kolXQihi5liieQj9hwnBiIQpZi5hSgbQlVh4h6hwQjtjXpqzJQjCmAjPm3IiolqQgkgrgjhVQhKirAGjVQAChvgognQgWgThagTQhfgThCguQhnhKhXijQhKiHjPkQQkQlohiiOQjak+iAkkQimlsgxlwQguldi8kuQhHhyhqiAQgegmiWivQjUj6g/ihQhajqBikTQCxn9hft4QgekWg3kYIgxjiMBMTAAAMAAABBUMBcSBSUIA2BfQBEB4A3B7QCxGFAAEDQAACLgmCLQgcBkg+COQhVDBgNApQg0CIgTB7QgWCbA5DPQAWBHAjBfQAUA3AmBiQA8CjgWBEQgZBXijAAQkmAAyQCsIxVCrQk5kYl1ldg"
    );
    var mask_3_graphics_116 = new cjs.Graphics().p(
      "EAhwBgcQscrqk+lvQisjGl6ipQkQh4ngiSQqEjGhXgdQltiAiDh4Qj9jmqW0gQjPmbjdnVIi1mEQgmgugmhbQhPi3AGjkQADh3gsgpQgXgVhggUQhmgUhGgyQhvhPhdiuQhPiRjdkkQkkmAhpiYQjplViJk4QiymHg0mJQgyl1jJlEQhMh6hxiJQghgpigi7QjjkMhDisQhgj6BoknQC+ohhmu2Qggkpg6ktIg1jyMBRrAAAMAAABF7MBixBYHIA6BmQBJCAA6CEQC+GgAAEVQAACVgpCVQgdBrhDCYQhaDPgPAsQg3CRgVCEQgXCmA9DdQAXBMAmBmQAVA6AoBpQBBCvgYBJQgaBdivAAQk7AAziC4IyjC4QlPktmPl1g"
    );
    var mask_3_graphics_117 = new cjs.Graphics().p(
      "EAj+BmyQtQsblTmIQi3jTmUi0Qkhh/n/icQqvjThdgfQmEiJiMh/QkPj1rB12Qjcm2jsn1IjBmdQgogxgphhQhUjDAHjzQADh/gvgsQgZgVhmgWQhtgWhLg1Qh2hUhji6QhUiajsk3Qk3mahwiiQj4lriSlMQi+mhg3mjQg1mOjXlZQhQiCh6iSQgigsirjGQjykehHi4QhnkLBwk5QDKpFhtv1Qgik9g+lAIg4kCMBXCAAAMAAABKhMBpRBd6IA+BtQBOCIA+CMQDKG9AAEnQAACegrCeQgfBzhICiQhgDdgQAuQg7CbgWCMQgYCxBBDsQAZBRAoBtQAWA+ArBwQBFC6gZBOQgcBji7AAQlPAA01DEIzwDEQlllAmqmOg"
    );
    var mask_3_graphics_118 = new cjs.Graphics().p(
      "EAmMBtIQuEtMlomgQjDjgmsi/QkziIofilQrZjghjghQmciRiViHQkfkFrs3MQjrnRj6oTIjNm3Qgrg0grhnQhZjQAHkBQADiHgxguQgbgXhsgXQh0gXhPg5Qh9hZhqjFQhZikj7lKQlJm0h3irQkImCiblhQjJm6g8m9Qg4mmjjluQhWiLiBibQgkgui1jTQkCkwhLjCQhtkcB2lNQDXpph0wzQgklRhClTIg7kSMBcaAAAMAAABPHMBvwBjtIBCBzQBTCSBCCUQDWHYAAE5QAACoguCoQghB6hMCsQhmDqgQAyQg/ClgXCUQgbC8BGD7QAaBVArB0QAXBCAuB3QBJDFgbBTQgdBpjGAAQlkAA2HDQI0/DQQl7lUnEmmg"
    );
    var mask_3_graphics_119 = new cjs.Graphics().p(
      "EAoaBzeQu5t9l8m4QjOjtnGjLQlEiPo/iuQsDjuhpgjQm0iZidiPQkwkUsY4jQj4nskJoyIjZnQQgtg4gthsQhfjcAHkQQAEiPg0gxQgcgYh0gZQh6gYhTg7QiFhfhwjRQheitkJldQldnNh+i2QkXmYikl1QjVnUg/nXQg7m/jxmDQhbiTiIikQgmgxjAjfQkQlBhRjOQhzksB+lhQDjqMh6xyQgnlkhGloIg+khMBhxAAAMAAABTtMB2RBpgIBGB6QBXCaBGCdQDiHzAAFLQAACygwCyQgjCBhRC2QhsD4gRA0QhDCvgYCdQgcDHBJEJQAcBbAuB6QAYBFAxB+QBNDSgcBXQggBvjRAAQl5AA3ZDcI2MDcQmSlnnem/g"
    );
    var mask_3_graphics_120 = new cjs.Graphics().p(
      "EAqoB50QvtuvmRnQQjaj6nejVQlXiXpei4Qsuj7huglQnMiiimiXQlAkitE55QkFoHkYpRIjknqQgwg7gwhyQhkjoAIkfQADiXg3gzQgdgah6gaQiBgahYg+QiMhkh2jcQhji4kYlwQlwnmiFi/QkmmvitmKQjhnthCnxQg/nXj+mZQhfibiQitQgogzjLjsQkflThVjZQh5k8CEl0QDwqxiBywQgpl4hJl7IhDkxMBnKAAAMAAABYTMB8wBvTIBKCBQBcCiBJClQDwIPAAFeQAAC7g0C8QglCIhUDAQhzEFgSA4QhGC4gaClQgdDSBNEYQAeBgAwCBQAZBJA0CFQBRDdgeBcQghB1jdAAQmNAA4sDoI3aDoQmol7n4nXg"
    );
    var mask_3_graphics_121 = new cjs.Graphics().p(
      "EAs2CAKQwhvgmmnoQjlkHn4jhQloifp+jBQtYkIh0gmQnkirivifQlRkytv7PQkToikmpvIjwoEQgzg+gyh4Qhpj0AIkuQAEifg6g2QgfgbiAgbQiHgbhdhCQiUhph8joQhojBkmmDQmEn/iLjKQk2nFi2meQjsoHhGoLQhCnwkLmuQhlijiXi2Qgrg2jVj4QkulkhZjlQiAlNCMmHQD8rUiIzvQgrmLhNmPIhGlCMBshAAAMAAABc6MCDQB1GIBOCIQBhCqBNCuQD8IqAAFwQAADGg2DFQgnCPhZDKQh4ETgUA6QhJDCgbCuQgfDdBREmQAfBlAyCHQAbBOA3CLQBVDpgfBhQgjB7joAAQmjAA59D0I4pD1Qm9mPoTnwg"
    );
    var mask_3_graphics_122 = new cjs.Graphics().p(
      "EAvECGgQxWwRm7oAQjvkVoRjrQl6inqejLQuCkVh6goQn8izi3inQlilBub8lQkgo9k1qPIj8odQg1hBg1h+QhukAAJk9QAEimg9g5QghgdiGgcQiOgdhihFQiahuiCjzQhujLk1mWQmXoZiSjTQlFnci/mzQj4oghJolQhFoJkZnDQhqiriei/Qgtg4jfkFQk9l2hejvQiGleCSmbQEIr4iO0tQgtmfhRmiIhJlSMBx5AAAMAAABhgMCJwB65IBRCOQBlCzBSC3QEIJFAAGCQAADQg5DPQgpCWhdDUQh+EggUA9QhODMgcC3QghDnBWE1QAgBqA1COQAdBSA5CSQBZD0ghBlQgkCCj0AAQm3AA7QEBI52EAQnUmjotoIg"
    );
    var mask_3_graphics_123 = new cjs.Graphics().p(
      "EAxSCM2QyKxCnQoZQj7khopj3QmMiuq+jVQuskiiAgqQoUi8jAiuQlylQvG98QkupYlEqtIkIo3Qg3hEg4iEQhzkMAJlMQAEiuhAg8QgigeiMgdQiVgehmhJQiihziIj/QhzjUlEmpQmpoyiajeQlUnyjInHQkEo7hMo+QhJohkmnZQhuiyimjIQgvg8jqkQQlMmIhij7QiNluCamuQEUsciV1sQgumyhWm3IhMlhMB3QAAAMAAABmGMCQQCAsIBVCVQBqC7BWDAQEUJgAAGVQAADZg7DZQgrCdhiDeQiEEugVBAQhRDVgeC/QgiDzBaFDQAiBvA3CVQAeBVA7CZQBeEAgiBqQgmCJkAAAQnMAA8iEMI7EEMQnqm3pHogg"
    );
    var mask_3_graphics_124 = new cjs.Graphics().p(
      "EAzgCTLQy+xynloxQkGkupDkCQmdi3rdjeQvYkviFgsQosjEjIi2QmDlgvy/RQk8p0lSrMIkUpPQg6hIg5iKQh4kYAIlbQAFi2hDg+QgjggiTgfQicgfhrhLQiph5iOkKQh4jelSm9Qm9pLigjnQlkoJjRncQkQpUhQpYQhLo6kzntQh0i7itjRQgxg/j1kcQlbmahmkGQiTl/CgnBQEhtAib2qQgxnGhZnKIhQlxMB8oAAAMAAABqsMCWvCGfIBZCcQBvDDBZDIQEhJ9AAGmQAADjg+DjQgsClhnDnQiKE8gWBCQhUDfgfDIQgkD+BdFSQAkBzA6CcQAfBZA+CgQBiELgkBvQgoCPkKAAQnhAA90EYI8TEYQn/nKpio6g"
    );
    var mask_3_graphics_125 = new cjs.Graphics().p(
      "EA1uCZhQzyykn6pIQkSk8pbkNQmwi+r8joQwCk8iLguQpEjMjRi+UgGTgFvgQeggoQlJqOlhrrIkgppQg8hLg8iQQh9kkAJlqQAEi+hFhBQglggiZghQijgghvhPQiwh+iVkWQh9jnlhnQQnQpkinjyQlzofjanwQkbpuhUpyQhPpSlAoDQh4jDi1jaQgzhBkAkpQlqmrhqkSQiZmPCnnVQEttjii3pQgznZhdneIhUmBMCCAAAAMAAABvSMCdPCMSIBdCiQB0DMBdDRQEuKYAAG5QAADshBDtQgvCshrDxQiPFJgYBGQhYDoggDRQglEIBhFhQAlB4A9CjQAgBdBBCnQBmEWglB0QgqCVkWAAQn1AA/HEkI9gEkQoWnep8pSg"
    );
    var mask_3_graphics_126 = new cjs.Graphics().p(
      "EA38Cf3Q0nzVoOpgQkdlJp1kYQnBjGscjyQwslJiRgwQpcjUjZjHUgGlgF9gRJgh/QlXqplvsKIkrqCQg/hOg/iVQiCkxAJl5QAFjGhIhDQgngiiggiQipgih0hSQi3iDibkhQiCjxlwnjQnjp+iuj7QmCo2jjoFQknqHhXqMQhSprlNoYQh+jLi9jjQg1hEkJk1Ql5m9hvkdQigmfCunoQE6uIip4nQg1nthhnxIhXmRMCHYAAAMAAABz4MCjvCSFIBgCpQB5DVBhDZQE6KzAAHLQAAD2hED3QgwCzhvD7QiWFXgYBIQhcDygiDZQgnEUBmFvQAnB+A+CpQAiBgBECuQBqEignB5QgrCbkiAAUgIKAAAggZAEwI+uEwQosnxqWprg"
    );
    var mask_3_graphics_127 = new cjs.Graphics().p(
      "EA6KCmNQ1b0Gokp5QkolVqNkkQnTjOs8j7QxWlViXgzQp0jdjijOUgG1gGNgR0gjUQllrEl+spIk3qcQhBhRhCibQiHk9AKmIQAFjOhMhGQgogjimgjQivgkh5hVQi/iIihktQiHj6l+n2Qn2qYi1kFQmSpMjsoZQkzqhhaqmQhWqDlaouQiDjTjEjsQg3hGkUlCQmInOh0koQilmwC0n8QFHuriw5mQg3oAhloGIhamhMCMvAAAMAAAB4fMCqPCX4IBkCwQB+DdBkDiQFHLOAAHdQAAEAhGEBQgzC6hzEFQicFkgZBMQhfD7gkDiQgoEeBqF+QAoCDBBCwQAjBkBHC1QBuEtgoB+QgtChkuAAUgIeAAAghrAE8I/9E9QpBoGqxqDg"
    );
    this.timeline.addTween(
      cjs.Tween.get(mask_3)
        .to({ graphics: null, x: 0, y: 0 })
        .wait(45)
        .to({ graphics: mask_3_graphics_45, x: 89.6731, y: 95.7042 })
        .wait(1)
        .to({ graphics: mask_3_graphics_46, x: 92.0963, y: 98.4869 })
        .wait(1)
        .to({ graphics: mask_3_graphics_47, x: 94.5194, y: 101.2695 })
        .wait(1)
        .to({ graphics: mask_3_graphics_48, x: 96.9425, y: 104.0521 })
        .wait(1)
        .to({ graphics: mask_3_graphics_49, x: 99.3656, y: 106.8347 })
        .wait(1)
        .to({ graphics: mask_3_graphics_50, x: 101.7887, y: 109.6173 })
        .wait(1)
        .to({ graphics: mask_3_graphics_51, x: 104.2118, y: 112.3999 })
        .wait(1)
        .to({ graphics: mask_3_graphics_52, x: 106.6349, y: 115.1826 })
        .wait(1)
        .to({ graphics: mask_3_graphics_53, x: 109.058, y: 117.9652 })
        .wait(1)
        .to({ graphics: mask_3_graphics_54, x: 111.4811, y: 120.7478 })
        .wait(1)
        .to({ graphics: mask_3_graphics_55, x: 113.9042, y: 123.5304 })
        .wait(1)
        .to({ graphics: mask_3_graphics_56, x: 116.3273, y: 126.313 })
        .wait(1)
        .to({ graphics: mask_3_graphics_57, x: 118.7504, y: 129.0956 })
        .wait(1)
        .to({ graphics: mask_3_graphics_58, x: 121.1735, y: 131.8783 })
        .wait(1)
        .to({ graphics: mask_3_graphics_59, x: 123.5966, y: 134.6609 })
        .wait(1)
        .to({ graphics: mask_3_graphics_60, x: 126.0197, y: 137.4435 })
        .wait(1)
        .to({ graphics: mask_3_graphics_61, x: 128.4428, y: 140.2261 })
        .wait(1)
        .to({ graphics: mask_3_graphics_62, x: 130.866, y: 143.0087 })
        .wait(1)
        .to({ graphics: mask_3_graphics_63, x: 133.2446, y: 145.7247 })
        .wait(1)
        .to({ graphics: mask_3_graphics_64, x: 132.8715, y: 145.3115 })
        .wait(1)
        .to({ graphics: mask_3_graphics_65, x: 132.4984, y: 144.8982 })
        .wait(1)
        .to({ graphics: mask_3_graphics_66, x: 132.1253, y: 144.485 })
        .wait(1)
        .to({ graphics: mask_3_graphics_67, x: 131.7522, y: 144.0718 })
        .wait(1)
        .to({ graphics: mask_3_graphics_68, x: 131.3791, y: 143.6585 })
        .wait(1)
        .to({ graphics: mask_3_graphics_69, x: 131.0483, y: 143.1818 })
        .wait(34)
        .to({ graphics: mask_3_graphics_103, x: 131.0483, y: 143.1818 })
        .wait(1)
        .to({ graphics: mask_3_graphics_104, x: 150.6786, y: 165.6544 })
        .wait(1)
        .to({ graphics: mask_3_graphics_105, x: 170.3089, y: 186.877 })
        .wait(1)
        .to({ graphics: mask_3_graphics_106, x: 175.6756, y: 186.805 })
        .wait(1)
        .to({ graphics: mask_3_graphics_107, x: 175.7174, y: 186.7329 })
        .wait(1)
        .to({ graphics: mask_3_graphics_108, x: 175.7593, y: 186.6609 })
        .wait(1)
        .to({ graphics: mask_3_graphics_109, x: 175.8012, y: 186.5888 })
        .wait(1)
        .to({ graphics: mask_3_graphics_110, x: 175.843, y: 186.5168 })
        .wait(1)
        .to({ graphics: mask_3_graphics_111, x: 175.8849, y: 186.4447 })
        .wait(1)
        .to({ graphics: mask_3_graphics_112, x: 175.9268, y: 186.3726 })
        .wait(1)
        .to({ graphics: mask_3_graphics_113, x: 175.9686, y: 186.3006 })
        .wait(1)
        .to({ graphics: mask_3_graphics_114, x: 176.0105, y: 186.2285 })
        .wait(1)
        .to({ graphics: mask_3_graphics_115, x: 176.0523, y: 186.1565 })
        .wait(1)
        .to({ graphics: mask_3_graphics_116, x: 176.0942, y: 186.0844 })
        .wait(1)
        .to({ graphics: mask_3_graphics_117, x: 176.1361, y: 186.0124 })
        .wait(1)
        .to({ graphics: mask_3_graphics_118, x: 176.1779, y: 185.9403 })
        .wait(1)
        .to({ graphics: mask_3_graphics_119, x: 176.2198, y: 185.8682 })
        .wait(1)
        .to({ graphics: mask_3_graphics_120, x: 176.2617, y: 185.7962 })
        .wait(1)
        .to({ graphics: mask_3_graphics_121, x: 176.3035, y: 185.7241 })
        .wait(1)
        .to({ graphics: mask_3_graphics_122, x: 176.3454, y: 185.6521 })
        .wait(1)
        .to({ graphics: mask_3_graphics_123, x: 176.3872, y: 185.58 })
        .wait(1)
        .to({ graphics: mask_3_graphics_124, x: 176.4291, y: 185.508 })
        .wait(1)
        .to({ graphics: mask_3_graphics_125, x: 176.471, y: 185.4359 })
        .wait(1)
        .to({ graphics: mask_3_graphics_126, x: 176.5128, y: 185.3639 })
        .wait(1)
        .to({ graphics: mask_3_graphics_127, x: 175.55, y: 187.3012 })
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
    this.shape_1.setTransform(168.95, 189.1);
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
    this.shape_2.setTransform(168.95, 189.1);
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
    this.shape_3.setTransform(168.95, 189.1);
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
    this.shape_4.setTransform(168.95, 189.1);
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
    this.shape_5.setTransform(168.95, 189.1);
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
    this.shape_6.setTransform(168.95, 189.1);
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
    this.shape_7.setTransform(168.95, 189.1);
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
    this.shape_8.setTransform(168.95, 189.1);
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
    this.shape_9.setTransform(168.95, 189.1);
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
    this.shape_10.setTransform(168.95, 189.1);
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
    this.shape_11.setTransform(168.95, 189.1);
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
    this.shape_12.setTransform(168.95, 189.1);
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
    this.shape_13.setTransform(168.95, 189.1);
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
    this.shape_14.setTransform(168.95, 189.1);
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
    this.shape_15.setTransform(168.95, 189.1);
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
    this.shape_16.setTransform(168.95, 189.1);
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
    this.shape_17.setTransform(168.95, 189.1);
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
    this.shape_18.setTransform(168.95, 189.1);
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
    this.shape_19.setTransform(168.95, 189.1);
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
    this.shape_20.setTransform(168.95, 189.1);
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
    this.shape_21.setTransform(168.95, 189.1);
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
    this.shape_22.setTransform(168.95, 189.1);
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
    this.shape_23.setTransform(168.95, 189.1);
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
    this.shape_24.setTransform(168.95, 189.1);
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
    this.shape_25.setTransform(168.95, 189.1);
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
    this.shape_26.setTransform(168.95, 189.1);
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
    this.shape_27.setTransform(168.95, 189.1);
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
    this.shape_28.setTransform(168.95, 189.1);
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
    this.shape_29.setTransform(168.95, 189.1);
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
    this.shape_30.setTransform(168.95, 189.1);
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
    this.shape_31.setTransform(168.95, 189.1);
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
    this.shape_32.setTransform(168.95, 189.1);
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
    this.shape_33.setTransform(168.95, 189.1);
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
    this.shape_34.setTransform(168.95, 189.1);
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
    this.shape_35.setTransform(168.95, 189.1);
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
    this.shape_36.setTransform(168.95, 189.1);
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
    this.shape_37.setTransform(168.95, 189.1);
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
    this.shape_38.setTransform(168.95, 189.1);
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
    this.shape_39.setTransform(168.95, 189.1);
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
    this.shape_40.setTransform(168.95, 189.1);
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
    this.shape_41.setTransform(168.95, 189.1);
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
    this.shape_42.setTransform(168.95, 189.1);
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
    this.shape_43.setTransform(168.95, 189.1);
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
    this.shape_44.setTransform(168.95, 189.1);
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
    this.shape_45.setTransform(168.95, 189.1);
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
    this.shape_46.setTransform(168.95, 189.1);
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
    this.shape_47.setTransform(168.95, 189.1);
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
    this.shape_48.setTransform(168.95, 189.1);
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
    this.shape_49.setTransform(168.95, 189.1);
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
    this.shape_50.setTransform(168.95, 189.1);
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
    this.shape_51.setTransform(168.95, 189.1);
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
    this.shape_52.setTransform(168.95, 189.1);
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
    this.shape_53.setTransform(168.95, 189.1);
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
    this.shape_54.setTransform(168.95, 189.1);
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
    this.shape_55.setTransform(168.95, 189.1);
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
    this.shape_56.setTransform(168.95, 189.1);
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
    this.shape_57.setTransform(168.95, 189.1);
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
    this.shape_58.setTransform(168.95, 189.1);
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
    this.shape_59.setTransform(168.95, 189.1);
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
    this.shape_60.setTransform(168.95, 189.1);
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
    this.shape_61.setTransform(168.95, 189.1);
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
    this.shape_62.setTransform(168.95, 189.1);
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
    this.shape_63.setTransform(168.95, 189.1);
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
    this.shape_64.setTransform(168.95, 189.1);
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
    this.shape_65.setTransform(168.95, 189.1);
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
    this.shape_66.setTransform(168.95, 189.1);
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
    this.shape_67.setTransform(168.95, 189.1);
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
    this.shape_68.setTransform(168.95, 189.1);
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
    this.shape_69.setTransform(168.95, 189.1);
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
    this.shape_70.setTransform(168.95, 189.1);
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
    this.shape_71.setTransform(168.95, 189.1);
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
    this.shape_72.setTransform(168.95, 189.1);
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
    this.shape_73.setTransform(168.95, 189.1);
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
    this.shape_74.setTransform(168.95, 189.1);
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
    this.shape_75.setTransform(168.95, 189.1);
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
    this.shape_76.setTransform(168.95, 189.1);
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
    this.shape_77.setTransform(168.95, 189.1);
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
    this.shape_78.setTransform(168.95, 189.1);
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
    this.shape_79.setTransform(168.95, 189.1);
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
    this.shape_80.setTransform(168.95, 189.1);
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
    this.shape_81.setTransform(168.95, 189.1);
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
    this.shape_82.setTransform(168.95, 189.1);
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
    this.shape_83.setTransform(168.95, 189.1);
    this.shape_84 = new cjs.Shape();
    this.shape_84.graphics
      .f("rgba(255,204,0,0)")
      .s()
      .p("A3XZwMAAAgzfMAuvAAAMAAAAzfg");
    this.shape_84.setTransform(168.95, 189.1);
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
  p.nominalBounds = new cjs.Rectangle(
    161.1,
    181.4,
    188.50000000000003,
    207.99999999999997
  );
  // library properties:
  lib.properties = {
    id: "46136733F5F04F21AE8C55BC5BE186DF",
    width: 337,
    height: 378,
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
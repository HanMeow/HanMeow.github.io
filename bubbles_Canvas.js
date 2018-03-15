(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.UI_Block_RB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAKBPIAAh6QgIAGgJAHQgMAHgJADIAAgTQAQgHAMgLQALgLAGgKIAMAAIAACdg");
	this.shape.setTransform(-10,-15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAOBOIAAglIhDAAIAAgSIBGhkIAQAAIAABkIAVAAIAAASIgVAAIAAAlgAgiAXIAwAAIAAhGg");
	this.shape_1.setTransform(-21.8,-15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_2.setTransform(-30.5,-8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgjBAQgPgTAAgtQAAgbAGgRQAFgRAMgJQALgJAQAAQANAAAJAFQAKAFAGAJQAGAKAEAOQADANAAAXQAAAbgFASQgGAQgLAKQgMAJgRAAQgWAAgNgQgAgUg0QgKAOAAAmQAAAmAJANQAJANAMABQANgBAJgNQAJgNAAgmQAAgmgJgNQgJgMgNAAQgMgBgIAMg");
	this.shape_3.setTransform(-39.8,-15.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgpAyQgKgJAAgOQAAgJAEgGQADgHAHgEQAGgEAHgBIARgDQAXgDALgEIAAgGQAAgLgFgFQgIgHgOABQgNAAgGAEQgHAFgDAMIgTgCQADgMAFgIQAGgHAMgFQALgDANAAQAPAAAJADQAJAEAEAEQAFAGABAIQABAFAAANIAAAZQAAAaACAHQABAIADAGIgUAAQgDgGgBgIQgKAJgKAEQgJADgLAAQgTABgKgKgAgEAHQgMACgEACQgFACgDAEQgDAFAAAEQAAAIAGAGQAGAEALAAQAKAAAJgEQAJgFAEgJQADgHAAgMIAAgHQgLAEgUADg");
	this.shape_4.setTransform(-58.1,-13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgCBKQgGgDgCgFQgDgGAAgSIAAhAIgOAAIAAgPIAOAAIAAgcIASgLIAAAnIAUAAIAAAPIgUAAIAABBQAAAJACACQAAABAAAAQAAABABAAQAAABABAAQAAABABAAQACABAEAAIAJAAIADARIgPABQgKAAgFgDg");
	this.shape_5.setTransform(-67.1,-14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AglAsQgPgPAAgcQABgbAPgQQAOgRAWABQAYAAAOAPQAPAPAAAcIAAAFIhVAAQACATAJAJQAKAKANAAQALABAHgGQAHgFAFgMIAUACQgFARgMAKQgOAJgTAAQgYAAgPgPgAgUghQgJAIgBAPIA+AAQgBgOgGgHQgJgLgPAAQgNAAgIAJg");
	this.shape_6.setTransform(-76.4,-13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_7.setTransform(-88.3,-15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI_Block_RB, new cjs.Rectangle(-96.9,-29.2,95.8,28.5), null);


(lib.UI_Block_LT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.info = new cjs.Text("(info)", "22px 'Arial'", "#CCCCCC");
	this.info.name = "info";
	this.info.lineHeight = 27;
	this.info.lineWidth = 1086;
	this.info.parent = this;
	this.info.setTransform(10.8,13.3,0.998,0.998);

	this.timeline.addTween(cjs.Tween.get(this.info).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI_Block_LT, new cjs.Rectangle(8.8,11.3,1087.3,28.5), null);


(lib.UI_Block_LB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.j_text = new cjs.Text("", "22px 'Arial'", "#CCCCCC");
	this.j_text.name = "j_text";
	this.j_text.lineHeight = 27;
	this.j_text.lineWidth = 1279;
	this.j_text.parent = this;
	this.j_text.setTransform(7.8,-88.7,0.998,0.998);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgKA5IAAgWIAVAAIAAAWgAgKgiIAAgWIAVAAIAAAWg");
	this.shape.setTransform(-13,-74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgYBIQgMgHgGgOQgGgNAAgSQAAgRAFgMQAGgOALgIQAMgHAOAAQAJAAAIAEQAIAFAFAHIAAg5IATAAIAACcIgRAAIAAgOQgLARgVAAQgNAAgLgIgAgUgMQgIALAAAVQAAAWAJALQAJALAMAAQAMAAAJgKQAJgLAAgVQAAgWgJgLQgJgLgNAAQgMAAgJAKg");
	this.shape_1.setTransform(-22.7,-76.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AglAsQgPgPAAgcQAAgcAPgPQAPgQAWgBQAYAAAOAQQAOAPAAAcIAAAFIhTAAQABATAJAJQAKALANAAQAKAAAIgGQAHgFAFgNIAUADQgFARgNAKQgNAJgTAAQgYAAgPgPgAgUghQgKAJAAAOIA+AAQgBgOgGgIQgJgLgPABQgNgBgIAKg");
	this.shape_2.setTransform(-34.5,-74.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_3.setTransform(-46.4,-76.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_4.setTransform(-58.6,-76.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AgpAyQgKgJAAgOQAAgIAEgHQADgHAHgEQAGgEAHgCIARgCQAXgDALgEIAAgGQAAgLgFgFQgIgGgOAAQgNAAgGAEQgHAFgDAMIgTgDQADgLAFgIQAGgHAMgEQALgFANAAQAPABAJADQAJADAEAFQAFAGABAIQABAFAAANIAAAZQAAAaACAIQABAGADAHIgUAAQgDgGgBgIQgKAJgKAEQgJAEgLgBQgTAAgKgJgAgEAHQgMACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAFALABQAKgBAJgFQAJgEAEgJQADgGAAgNIAAgHQgLAEgUADg");
	this.shape_5.setTransform(-71.2,-74.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgVBjIAEgPIAJABQAGAAACgEQADgEAAgQIAAh2IATAAIAAB2QAAAVgGAJQgHALgPAAQgIAAgHgDgAADhOIAAgXIATAAIAAAXg");
	this.shape_6.setTransform(-80.9,-74.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6D6D6").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgPAWgBQAYAAAOAQQAOAQAAAbIAAAFIhTAAQABATAJAKQAKAJANABQAKAAAIgGQAHgGAFgMIAUADQgFARgNAKQgNAKgTgBQgYAAgPgPgAgUgiQgKAKAAAOIA+AAQgBgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_7.setTransform(182.4,-18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D6D6D6").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_8.setTransform(173.8,-20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6D6D6").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_9.setTransform(165.6,-20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6D6D6").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_10.setTransform(153.4,-20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D6D6D6").s().p("AgZA2QgJgDgEgGQgEgGgCgJIgBgSIAAhFIATAAIAAA+IABAUQACAIAGAEQAGAFAJAAQAHAAAIgFQAHgEAEgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_11.setTransform(140.8,-18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D6D6D6").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_12.setTransform(129,-20.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D6D6D6").s().p("AgpAyQgKgJAAgOQAAgIAEgHQADgHAHgEQAGgDAHgDIARgCQAXgDALgEIAAgFQAAgMgFgFQgIgGgOgBQgNAAgGAGQgHAEgDAMIgTgDQADgMAFgHQAGgHAMgEQALgFANAAQAPABAJADQAJADAEAGQAFAFABAIIABARIAAAaQAAAaACAIQABAGADAHIgUAAQgDgGgBgIQgKAJgKAEQgJADgLAAQgTAAgKgJgAgEAHQgMACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEAEgJQADgGAAgNIAAgHQgLAEgUADg");
	this.shape_13.setTransform(110.3,-18.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D6D6D6").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_14.setTransform(92.3,-20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6D6D6").s().p("AgpAyQgKgJAAgOQAAgIAEgHQADgHAHgEQAGgDAHgDIARgCQAXgDALgEIAAgFQAAgMgFgFQgIgGgOgBQgNAAgGAGQgHAEgDAMIgTgDQADgMAFgHQAGgHAMgEQALgFANAAQAPABAJADQAJADAEAGQAFAFABAIIABARIAAAaQAAAaACAIQABAGADAHIgUAAQgDgGgBgIQgKAJgKAEQgJADgLAAQgTAAgKgJgAgEAHQgMACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEAEgJQADgGAAgNIAAgHQgLAEgUADg");
	this.shape_15.setTransform(79.8,-18.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D6D6D6").s().p("AgVBkIAEgQIAJABQAGAAACgEQADgEAAgQIAAh3IATAAIAAB3QAAAVgGAJQgHALgPAAQgIAAgHgCgAADhOIAAgXIATAAIAAAXg");
	this.shape_16.setTransform(70,-18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUBkIAAgQIAWAAIAAinIgWAAIAAgQIApAAIAADHg");
	this.shape_17.setTransform(59.2,-18.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXBPIgkg7IgOAOIAAAtIgTAAIAAidIATAAIAABZIAtguIAZAAIgrAqIAvBIg");
	this.shape_18.setTransform(51.9,-20.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiAtQgOgQAAgcQAAgSAFgOQAHgNAMgIQANgHANAAQATAAAMAKQAMAJADARIgTAEQgCgMgIgFQgGgHgKAAQgOAAgIALQgKAKABAWQAAAXAIALQAJAJANABQALgBAIgGQAHgHACgOIAUACQgEATgMALQgNALgTAAQgWAAgOgOg");
	this.shape_19.setTransform(40.6,-18.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJBPIAAhyIATAAIAABygAgJg3IAAgXIATAAIAAAXg");
	this.shape_20.setTransform(32.3,-20.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_21.setTransform(27.3,-20.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgcQAAgSAHgOQAGgNANgIQAMgHAOAAQASAAAMAKQAMAJADARIgTAEQgDgMgGgFQgHgHgKAAQgNAAgKALQgIAKgBAWQAAAXAJALQAJAJANABQAMgBAHgGQAIgHACgOIASACQgCATgNALQgNALgSAAQgXAAgOgOg");
	this.shape_22.setTransform(19.8,-18.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUBkIAAjHIApAAIAAAQIgWAAIAACnIAWAAIAAAQg");
	this.shape_23.setTransform(11.5,-18.6);

	this.b_text_ = new cjs.Text("", "22px 'Arial'", "#CCCCCC");
	this.b_text_.name = "b_text_";
	this.b_text_.lineHeight = 27;
	this.b_text_.lineWidth = 1279;
	this.b_text_.parent = this;
	this.b_text_.setTransform(7.8,-60.7,0.998,0.998);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AgKA5IAAgWIAVAAIAAAWgAgKgiIAAgWIAVAAIAAAWg");
	this.shape_24.setTransform(-2,-46.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AggAyQgLgJgDgSIATgDQABALAIAGQAHAGAMABQANgBAHgFQAGgFAAgHQAAgHgFgDQgEgDgQgEQgUgFgJgEQgIgEgEgGQgEgHAAgIQAAgIADgHQAEgGAGgFQAEgDAIgCQAIgCAJgBQAMAAAKAFQAKAEAFAGQAFAHACALIgTACQgBgJgHgEQgGgGgKAAQgNABgGAEQgGAEAAAGQAAAEADADQACADAFACIAQAFQAVAFAIAEQAIADAEAGQAFAHAAAJQAAAKgGAJQgFAIgLAFQgKAFgOgBQgVAAgMgJg");
	this.shape_25.setTransform(-10.7,-46.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CCCCCC").s().p("AglAsQgOgPAAgcQgBgcAQgQQAOgPAXgBQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABATAKAKQAJAJAOABQALAAAHgGQAHgGAFgMIAUADQgFARgMAKQgNAKgUgBQgYAAgPgPgAgVgiQgIAKgCAOIA/AAQgBgOgGgIQgKgLgOAAQgNAAgJAJg");
	this.shape_26.setTransform(-22.3,-46.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_27.setTransform(-30.8,-48.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CCCCCC").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_28.setTransform(-39.1,-48.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_29.setTransform(-51.3,-48.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CCCCCC").s().p("AgZA2QgJgDgEgGQgEgGgCgJIgBgSIAAhFIATAAIAAA+IABAUQACAIAGAEQAGAFAJAAQAHAAAIgFQAHgEAEgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_30.setTransform(-63.9,-46.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CCCCCC").s().p("AgeA/IAAAOIgSAAIAAicIATAAIAAA4QAMgPASAAQALAAAJAEQAJAEAGAIQAGAIAEAKQADAKAAANQAAAdgOAQQgPAQgUAAQgTAAgLgRgAgVgLQgKALAAATQAAAVAGAJQAJAPAQAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgKgMAAQgMAAgJALg");
	this.shape_31.setTransform(-75.7,-48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.b_text_},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.j_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI_Block_LB, new cjs.Rectangle(-84.1,-90.7,1369.9,84.4), null);


(lib.Mute_bt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwA8QgSgVAAgmQAAgjAVgXQATgWAdAAQAfAAAQATQARAUAAAiIAAAMIhsAAQABAaANAOQANAOAXAAQAaAAAVgRIAAAXQgUAOgiAAQgfAAgTgUgAgZguQgNAMgDAUIBSAAQAAgVgKgMQgKgMgSAAQgQAAgMANg");
	this.shape.setTransform(-55.6,30.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRA4IAAhaIgbAAIAAgVIAbAAIAAglIAXgIIAAAtIAnAAIAAAVIgnAAIAABWQAAAPAFAHQAGAGAMAAQAJAAAHgFIAAAVQgJAFgOAAQgnAAAAgtg");
	this.shape_1.setTransform(-68.8,28.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag/ANIAAhbIAZAAIAABXQAAAxAlAAQARAAAMgOQALgNAAgVIAAhYIAZAAIAACZIgZAAIAAgYIAAAAQgQAcgfAAQg3AAAAhCg");
	this.shape_2.setTransform(-82.8,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABUBPIAAhYQAAgZgHgLQgJgMgSAAQgQAAgKAOQgMAPAAAUIAABXIgXAAIAAhaQgBgugiAAQgQAAgLANQgKAOAAAWIAABXIgZAAIAAiZIAZAAIAAAZIAAAAQAQgdAfAAQAQAAAMAJQALAJAEAOQASggAhAAQAzAAAAA/IAABeg");
	this.shape_3.setTransform(-104.3,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhhA0IAAheICUhYIAAEEgABkBbQAnhbgnhWIAYAAQApBYgpBZgAiQBTIAAiPIAdAAIAACPgABFBNQAghNgghHIAUAAQAiBJgiBLg");
	this.shape_4.setTransform(-27.4,28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag/ANIAAhaIAZAAIAABXQAAAwAlAAQARAAAMgNQALgNAAgWIAAhXIAZAAIAACYIgZAAIAAgZIAAAAQgQAcgfAAQg3AAAAhBg");
	this.shape_5.setTransform(-83.1,30.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABVBOIAAhWQgBgagHgLQgIgMgTAAQgQAAgKAPQgMAOAAAUIAABWIgXAAIAAhaQgBgtgiAAQgQAAgLAOQgKANAAAWIAABWIgZAAIAAiYIAZAAIAAAYIAAAAQARgcAeAAQAQABAMAIQALAJAEAOQASgfAhgBQAzABAAA+IAABdg");
	this.shape_6.setTransform(-104.7,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAnBOIAAhWQAAgxgkAAQgRAAgMAOQgMAOAAAVIAABWIgZAAIAAiYIAZAAIAAAZIAAAAQASgdAgAAQAZABANAQQAOAQAAAfIAABcg");
	this.shape_7.setTransform(-126.6,29.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/ANIAAhaIAZAAIAABXQAAAwAlAAQARAAAMgNQALgNAAgWIAAhXIAZAAIAACYIgZAAIAAgZIAAAAQgQAcgfAAQg3AAAAhBg");
	this.shape_8.setTransform(-144.3,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnhsIAWgPIB2D7IgWAPgAg0AoIAAhfIARgKIBHCVgAAShfIBUgvIAADegAhlBFIAAiOIAeAAIAACOg");
	this.shape_9.setTransform(-33.1,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:-68.8,y:28.8}},{t:this.shape,p:{x:-55.6,y:30.9}}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1,p:{x:-69.1,y:28}},{t:this.shape,p:{x:-55.9,y:30.1}}]},1).wait(1));

	// 圖層 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AqrDAQg8AAAAg8IAAkHQAAg8A8AAIVXAAQA8AAAAA8IAAEHQAAA8g8AAg");
	this.shape_10.setTransform(-85.9,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.3,4.9,148.8,44.8);


(lib.Basic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFFFF"],[0.804,1],9.8,-1.7,0,9.8,-1.7,81.4).s().p("AnzH0QjPjPAAklQAAkkDPjPQDPjPEkAAQElAADPDPQDPDPAAEkQAAEljPDPQjPDPklAAQkkAAjPjPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Basic, new cjs.Rectangle(-70.7,-70.7,141.5,141.5), null);


(lib.Bubble_canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Bubble_canvas, null, null);


(lib.bt_plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(8.3,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzgAirALICqAAIAAiqAgBALIAACrACpALIiqAA");
	this.shape.setTransform(28,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(8.3,1,1).p("AE0AAQAACAhaBaQhaBaiAAAQh+AAhbhaQhahaAAiAQAAh+BahbQBbhaB+AAQCAAABaBaQBaBbAAB+gAgBALIAAipAirALICqAAIAACrACpALIiqAA");
	this.shape_1.setTransform(28,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(8.3,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzgAAAiOIAACZIiaAAAAAClIAAiaICYAA");
	this.shape_2.setTransform(28,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(8.3,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzg");
	this.shape_3.setTransform(28,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");
	this.shape_4.setTransform(28,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-4.1,64.3,64.3);


(lib.bt_minus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(8.3,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzgACpALIlUAA");
	this.shape.setTransform(28,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(8.3,1,1).p("AE0AAQAACAhaBaQhaBaiAAAQh+AAhbhaQhahaAAiAQAAh+BahbQBbhaB+AAQCAAABaBaQBaBbAAB+gACpALIlUAA");
	this.shape_1.setTransform(28,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(8.3,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzgAiaALIEyAA");
	this.shape_2.setTransform(28,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#999999").ss(8.3,1,1).p("AEYAAQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzg");
	this.shape_3.setTransform(28,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");
	this.shape_4.setTransform(28,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-4.1,64.3,64.3);


(lib.Boom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0,1],0,0,0,0,0,82.7).s().p("ApBJCQjvjwAAlSQAAlSDvjvQDwjwFRAAQFTAADwDwQDuDvAAFSQAAFSjuDwQjwDwlTAAQlRAAjwjwg");
	this.shape.setTransform(4.5,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.035,1],-9.1,-1.3,0,-9.1,-1.3,294.9).s().p("AqiKiQkXkXAAmLQAAmKEXkYQEYkXGKAAQGLAAEYEXQEXEYAAGKQAAGLkXEXQkYEYmLAAQmKAAkYkYg");
	this.shape_1.setTransform(4.5,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.075,1],-18.1,-2.8,0,-18.1,-2.8,507.1).s().p("AsBMCQlAk/AAnDQAAnDFAlAQFAk+HBAAQHEAAE/E+QE/FAAAHDQAAHDk/E/Qk/FAnEAAQnBAAlAlAg");
	this.shape_2.setTransform(4.5,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.11,1],-27.2,-4.2,0,-27.2,-4.2,719.2).s().p("AtiNiQlnlnAAn7QAAn7FnlnQFolnH6AAQH8AAFnFnQFnFnAAH7QAAH7lnFnQlnFon8AAQn6AAlolog");
	this.shape_3.setTransform(4.5,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.149,1],-36.3,-5.6,0,-36.3,-5.6,931.4).s().p("AvDPDQmOmQgBozQABo0GOmPQGQmOIzgBQI1ABGPGOQGPGPAAI0QAAIzmPGQQmPGPo1AAQozAAmQmPg");
	this.shape_4.setTransform(4.5,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.184,1],-45.4,-7,0,-45.4,-7,1143.6).s().p("AwjQjQm3m3AApsQAApsG3m3QG4m3JrAAQJtAAG3G3QG3G3AAJsQAAJsm3G3Qm3G4ptAAQprAAm4m4g");
	this.shape_5.setTransform(4.5,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.224,1],-54.5,-8.4,0,-54.5,-8.4,1355.8).s().p("AyDSDQnfnfAAqkQAAqlHfnfQHgneKjAAQKmAAHfHeQHeHfAAKlQAAKkneHfQnfHgqmAAQqjAAngngg");
	this.shape_6.setTransform(4.5,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.259,1],-63.6,-9.8,0,-63.6,-9.8,1567.9).s().p("AzkTjQoGoGAArdQAArdIGoHQIIoGLcAAQLeAAIHIGQIGIHAALdQAALdoGIGQoHIIreAAQrcAAoIoIg");
	this.shape_7.setTransform(4.5,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.298,1],-72.6,-11.3,0,-72.6,-11.3,1780.1).s().p("A1DVEQowovABsVQgBsWIwouQIwouMTAAQMXAAIuIuQIvIugBMWQABMVovIvQouIvsXABQsTgBowovg");
	this.shape_8.setTransform(4.5,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(196,238,255,0)","#C4EEFF"],[0.333,1],-81.7,-12.6,0,-81.7,-12.6,1992.3).s().p("A2kWkQpXpXAAtNQAAtOJXpXQJYpWNMAAQNPAAJXJWQJWJXAANOQAANNpWJXQpXJYtPAAQtMAApYpYg");
	this.shape_9.setTransform(4.5,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// 圖層 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.161)","rgba(255,255,255,0)"],[0.573,0.757,0.992],3.4,-0.7,0,3.4,-0.7,60.7).s().p("An0H0QjPjPAAklQAAkkDPjQQDQjPEkAAQElAADPDPQDPDQABEkQgBEljPDPQjPDPklABQkkgBjQjPg");
	this.shape_10.setTransform(-0.4,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.145)","rgba(255,255,255,0)"],[0.573,0.757,0.992],4,-0.9,0,4,-0.9,70.8).s().p("ApHJIQjyjyAAlWQAAlVDyjyQDyjyFVAAQFWAADyDyQDyDyAAFVQAAFWjyDyQjyDylWAAQlVAAjyjyg");
	this.shape_11.setTransform(-0.4,-1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.129)","rgba(255,255,255,0)"],[0.573,0.757,0.992],4.6,-1,0,4.6,-1,81).s().p("AqaKaQkVkUAAmGQAAmGEVkUQEUkVGGAAQGGAAEUEVQEWEUAAGGQAAGGkWEUQkUEWmGAAQmGAAkUkWg");
	this.shape_12.setTransform(-0.4,-1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.114)","rgba(255,255,255,0)"],[0.573,0.757,0.992],5.1,-1.1,0,5.1,-1.1,91.1).s().p("AruLuQk2k2AAm4QAAm2E2k4QE3k2G3AAQG3AAE3E2QE3E4AAG2QAAG4k3E2Qk3E3m3AAQm3AAk3k3g");
	this.shape_13.setTransform(-0.4,-1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)","rgba(255,255,255,0)"],[0.573,0.757,0.992],5.6,-1.2,0,5.6,-1.2,101.2).s().p("AtBNCQlZlZAAnpQAAnnFZlaQFZlZHoAAQHoAAFZFZQFaFaAAHnQAAHplaFZQlZFZnoAAQnoAAlZlZg");
	this.shape_14.setTransform(-0.4,-1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.086)","rgba(255,255,255,0)"],[0.573,0.757,0.992],6.3,-1.4,0,6.3,-1.4,111.3).s().p("AuVOVQl7l8AAoZQAAoYF7l9QF9l7IYAAQIZAAF8F7QF8F9AAIYQAAIZl8F8Ql8F8oZAAQoYAAl9l8g");
	this.shape_15.setTransform(-0.4,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.071)","rgba(255,255,255,0)"],[0.573,0.757,0.992],6.8,-1.5,0,6.8,-1.5,121.4).s().p("AvoPoQmemeAApKQAApJGemfQGfmeJJAAQJKAAGeGeQGfGfAAJJQAAJKmfGeQmeGfpKAAQpJAAmfmfg");
	this.shape_16.setTransform(-0.4,-1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.055)","rgba(255,255,255,0)"],[0.573,0.757,0.992],7.3,-1.6,0,7.3,-1.6,131.5).s().p("Aw7Q8QnBnBAAp7QAAp6HBnBQHBnBJ6AAQJ7AAHAHBQHCHBAAJ6QAAJ7nCHBQnAHBp7AAQp6AAnBnBg");
	this.shape_17.setTransform(-0.4,-1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.039)","rgba(255,255,255,0)"],[0.573,0.757,0.992],7.9,-1.7,0,7.9,-1.7,141.7).s().p("AyPSPQnjnjAAqsQAAqqHjnlQHknjKrAAQKrAAHjHjQHlHlAAKqQAAKsnlHjQnjHkqrAAQqrAAnknkg");
	this.shape_18.setTransform(-0.4,-1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.024)","rgba(255,255,255,0)"],[0.573,0.757,0.992],8.5,-1.8,0,8.5,-1.8,151.8).s().p("AziTiQoGoFAArdQAArbIGoHQIGoGLcAAQLcAAIGIGQIHIHAALbQAALdoHIFQoGIHrcAAQrcAAoGoHg");
	this.shape_19.setTransform(-0.4,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.觸角2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("AB/h/QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxQgCgCgCgCQg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0g");
	this.shape.setTransform(25.5,-49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7CDIgDgEQg1g0AAhLQAAhKA1g1QA1g0BJAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxg");
	this.shape_1.setTransform(25.5,-49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA1g1QA1g0BJAAQBLAAA0A0QA1A1AABKQAABKg1A1Qg0A1hLAAQhHAAgzgxQg5g5AAhKg");
	this.shape_2.setTransform(19.1,-54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah7CDQg4g4AAhLQAAhJA0g1QA1g1BKAAQBKAAA1A1QA1A1AABJQAABLg1A0Qg1A1hKAAQhHAAg0gxg");
	this.shape_3.setTransform(19.1,-54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABKg1A1Qg0A1hLAAQhHAAg0gxQg4g5AAhKg");
	this.shape_4.setTransform(12.6,-58.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah6CDQg5g5AAhKQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABKg1A1Qg0A1hLAAQhHAAgzgxg");
	this.shape_5.setTransform(12.6,-58.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhJA0g2QA1g0BKAAQBLAAA0A0QA1A2AABJQAABLg1A0Qg0A1hLAAQhHAAg0gxQg4g4AAhLg");
	this.shape_6.setTransform(6.2,-63.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah7CDQg4g4AAhLQAAhJA1g1QA1g1BJAAQBLAAA0A1QA1A1AABJQAABLg1A0Qg0A1hLAAQhHAAg0gxg");
	this.shape_7.setTransform(6.2,-63.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxQg4g4AAhLg");
	this.shape_8.setTransform(-0.3,-67.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah7CDQg4g5AAhKQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhHAAg0gxg");
	this.shape_9.setTransform(-0.3,-67.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah7CDQg4g5AAhKQAAhKA1g1QA0g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhHAAg0gxg");
	this.shape_10.setTransform(-6.7,-72.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhHAAg0gxQg4g5AAhKg");
	this.shape_11.setTransform(-13.1,-76.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah6CDQg5g5AAhKQAAhJA0g2QA1g0BKAAQBKAAA1A0QA1A2AABJQAABLg1A0Qg1A1hKAAQhHAAgzgxg");
	this.shape_12.setTransform(-13.1,-76.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhJA0g2QA1g0BKAAQBLAAA0A0QA1A2AABJQAABLg1A0Qg0A1hLAAQhHAAgzgxQg5g4AAhLg");
	this.shape_13.setTransform(-19.6,-81.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah7CDQg4g5AAhKQAAhKA1g0QA0g1BKAAQBKAAA1A1QA1A0AABKQAABKg1A1Qg1A1hKAAQhHAAg0gxg");
	this.shape_14.setTransform(-19.6,-81.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABLg1A0Qg1A1hKAAQhHAAg0gxQg4g4AAhLg");
	this.shape_15.setTransform(-26,-85.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah7CDQg4g5AAhKQAAhKA1g1QA0g0BKAAQBKAAA1A0QA1A1AABKQAABLg1A0Qg1A1hKAAQhHAAg0gxg");
	this.shape_16.setTransform(-26,-85.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(5,1,1).p("AB/h/QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxQgBgCgDgCQg0g0AAhLQAAhKA0g1QA1g0BKAAQBLAAA0A0g");
	this.shape_17.setTransform(-32.5,-90.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah6CDIgFgEQg0g0AAhLQAAhJA0g1QA1g1BKAAQBKAAA1A1QA1A1AABJQAABLg1A0Qg1A1hKAAQhHAAgzgxg");
	this.shape_18.setTransform(-32.5,-90.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA2g0BJAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAgzgxQg5g5AAhKg");
	this.shape_19.setTransform(-27.2,-86.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA2g0BJAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAgzgxQg5g4AAhLg");
	this.shape_20.setTransform(-21.9,-83);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah6CDQg5g5AAhJIAAgBQAAhKA0g0QA2g1BJAAQBLAAA0A1QA1A0AABKQAABKg1A1Qg0A1hLAAQhHAAgzgxg");
	this.shape_21.setTransform(-21.9,-83);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxQg4g5AAhKg");
	this.shape_22.setTransform(-16.6,-79.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ah6CDQg5g5AAhKIAAAAQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABKg1A1Qg0A1hLAAQhHAAgzgxg");
	this.shape_23.setTransform(-16.6,-79.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhHAAg0gxQg4g5AAhJg");
	this.shape_24.setTransform(-11.4,-75.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ah7CDQg4g5AAhJIAAgBQAAhKA1g1QA1g0BJAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxg");
	this.shape_25.setTransform(-11.4,-75.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABKg1A1Qg0A1hLAAQhHAAgzgxQg5g5AAhJg");
	this.shape_26.setTransform(-6.1,-71.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah7CDQg4g5AAhJIAAgBQAAhKA1g1QA0g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhHAAg0gxg");
	this.shape_27.setTransform(-6.1,-71.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhJA1g2QA0g0BKAAQBLAAA0A0QA1A2AABJQAABLg1A0Qg0A1hLAAQhHAAgzgxQg5g5AAhJg");
	this.shape_28.setTransform(-0.8,-68.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah7CDQg3g5gBhJIAAgBQAAhKA1g1QA0g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhHAAg0gxg");
	this.shape_29.setTransform(-0.8,-68.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA1g1QA1g0BJAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAgzgxQg4g5gBhIg");
	this.shape_30.setTransform(4.4,-64.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah6CDQg4g5gBhIIAAgCQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABKg1A1Qg1A1hKAAQhHAAgzgxg");
	this.shape_31.setTransform(4.4,-64.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxQg3g5gBhIg");
	this.shape_32.setTransform(9.7,-60.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah6CDQg4g5gBhJIAAgBQAAhKA0g0QA1g1BKAAQBKAAA1A1QA1A0AABKQAABKg1A1Qg1A1hKAAQhHAAgzgxg");
	this.shape_33.setTransform(9.7,-60.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#333333").ss(5,1,1).p("AizAAQAAhKA0g1QA1g0BKAAQBKAAA1A0QA1A1AABKQAABLg1A0Qg1A1hKAAQhHAAg0gxQg3g5gBhIg");
	this.shape_34.setTransform(15,-57);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ah6CDQg4g5gBhIIAAgCQAAhKA0g1QA2g0BJAAQBLAAA0A0QA1A1AABKQAABKg1A1Qg0A1hLAAQhHAAgzgxg");
	this.shape_35.setTransform(15,-57);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#333333").ss(5,1,1).p("Ah/h/QA1g0BKAAQBLAAA0A0QA1A1AABKQAABLg1A0Qg0A1hLAAQhHAAg0gxQg4g4AAhLQAAhKA0g1g");
	this.shape_36.setTransform(20.3,-53.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ah6CDQg5g4AAhLQAAhJA0g1QA1g1BKAAQBLAAA0A1QA1A1AABJQAABLg1A0Qg0A1hLAAQhHAAgzgxg");
	this.shape_37.setTransform(20.3,-53.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{x:-0.3,y:-67.7}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{x:-6.7,y:-72.3}}]},1).to({state:[{t:this.shape_12,p:{x:-13.1,y:-76.8}},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_12,p:{x:-27.2,y:-86.7}},{t:this.shape_19}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).wait(1));

	// 圖層 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#333333").ss(5,1,1).p("AEboHQmHHLiuJE");
	this.shape_38.setTransform(-15.2,15.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#333333").ss(5,1,1).p("AkBIqQCupEFVoP");
	this.shape_39.setTransform(-17.7,12.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(5,1,1).p("AjnJLQCupEEhpR");
	this.shape_40.setTransform(-20.3,8.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(5,1,1).p("AjOJtQCupEDvqV");
	this.shape_41.setTransform(-22.8,5.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#333333").ss(5,1,1).p("Ai0KPQCupEC7rZ");
	this.shape_42.setTransform(-25.4,2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#333333").ss(5,1,1).p("AibKxQCtpFCKsc");
	this.shape_43.setTransform(-27.9,-1.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#333333").ss(5,1,1).p("AiBLTQCtpFBWtg");
	this.shape_44.setTransform(-30.5,-4.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(5,1,1).p("AhnL1QCtpFAiuk");
	this.shape_45.setTransform(-33.1,-8.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#333333").ss(5,1,1).p("AhOMXQCtpFgRvo");
	this.shape_46.setTransform(-35.6,-11.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#333333").ss(5,1,1).p("AAss4QBDQsitJF");
	this.shape_47.setTransform(-37.2,-14.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#333333").ss(5,1,1).p("AhLMdQCtpFgZv0");
	this.shape_48.setTransform(-35.9,-12.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#333333").ss(5,1,1).p("AheMBQCtpFAQu8");
	this.shape_49.setTransform(-34,-9.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#333333").ss(5,1,1).p("AhzLlQCtpEA6uF");
	this.shape_50.setTransform(-31.9,-6.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#333333").ss(5,1,1).p("AiILKQCtpFBktO");
	this.shape_51.setTransform(-29.8,-3.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#333333").ss(5,1,1).p("AidKuQCtpFCOsW");
	this.shape_52.setTransform(-27.7,-1.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#333333").ss(5,1,1).p("AiyKSQCupEC3rf");
	this.shape_53.setTransform(-25.6,1.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#333333").ss(5,1,1).p("AjHJ3QCupFDhqo");
	this.shape_54.setTransform(-23.5,4.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#333333").ss(5,1,1).p("AjcJbQCupFELpw");
	this.shape_55.setTransform(-21.4,7.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#333333").ss(5,1,1).p("AjwI/QCupEEzo5");
	this.shape_56.setTransform(-19.4,10);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#333333").ss(5,1,1).p("AkFIjQCupDFdoC");
	this.shape_57.setTransform(-17.3,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-70,92,140);


(lib.觸角1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("ACKiJQA5A5AABQQAAACAAADQgBBOg4A3Qg5A5hRAAQhQAAg5g5Qg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5g");
	this.shape.setTransform(-20.9,-41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQIAAAEQgBBPg4A3Qg5A5hRAAQhQAAg5g5g");
	this.shape_1.setTransform(-20.9,-41);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(5,1,1).p("AjCAAQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgBBTg4A3Qg5A5hRAAQhQAAg5g5Qg5g5AAhRg");
	this.shape_2.setTransform(-27.4,-33.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBTg3A3Qg5A5hRAAQhQAAg5g5g");
	this.shape_3.setTransform(-27.4,-33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBSg3A4Qg5A5hRAAQhQAAg5g5g");
	this.shape_4.setTransform(-33.9,-26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#333333").ss(5,1,1).p("AiJiJQA5g5BQAAQBRAAA5A5QA5A5AABQQAAACAAACQgBBPg4A3Qg5A5hRAAQhQAAg5g5Qg5g5AAhRQAAhQA5g5g");
	this.shape_5.setTransform(-46.9,-11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQIAAAFQgBBOg4A3Qg5A5hRAAQhQAAg5g5g");
	this.shape_6.setTransform(-46.9,-11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#333333").ss(5,1,1).p("AjCAAQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBTg2A3Qg6A5hRAAQhQAAg5g4Qg5g6AAhQg");
	this.shape_7.setTransform(-41.7,-17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhQIAAgBQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBSg2A4Qg6A5hQAAQhRAAg5g5g");
	this.shape_8.setTransform(-41.7,-17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#333333").ss(5,1,1).p("AjCAAQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBTg2A2Qg6A6hRAAQhQAAg5g4Qg5g6AAhQg");
	this.shape_9.setTransform(-36.5,-23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhRIAAAAQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBTg1A1Qg7A7hRAAQhQAAg5g5g");
	this.shape_10.setTransform(-36.5,-23);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#333333").ss(5,1,1).p("AjCAAQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBSg0A2Qg7A7hRAAQhQAAg5g4Qg5g6gBhQg");
	this.shape_11.setTransform(-31.3,-29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiICLQg6g5AAhRIAAgBQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgCBSg0A2Qg8A6hQABQhQAAg5g4g");
	this.shape_12.setTransform(-31.3,-29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(5,1,1).p("ADDAAQgCBTg3A3Qg5A5hRAAQhQAAg5g5Qg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQg");
	this.shape_13.setTransform(-26.1,-35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiJCKQg5g5AAhRQAAhQA5g5QA5g5BQAAQBRAAA5A5QA5A5AABQQgBBSg4A4Qg5A5hRAAQhQAAg5g5g");
	this.shape_14.setTransform(-26.1,-35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:-27.4,y:-33.5}},{t:this.shape_2,p:{x:-27.4,y:-33.5}}]},1).to({state:[{t:this.shape_4},{t:this.shape_2,p:{x:-33.9,y:-26}}]},1).to({state:[{t:this.shape_3,p:{x:-40.4,y:-18.5}},{t:this.shape_2,p:{x:-40.4,y:-18.5}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// 圖層 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#333333").ss(5,1,1).p("AjRn4QHgC0hHM9");
	this.shape_15.setTransform(19.5,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(5,1,1).p("AkDnNQJGBdhHM+");
	this.shape_16.setTransform(14.3,14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(5,1,1).p("Ak2mhQKtAGhHM9");
	this.shape_17.setTransform(9.1,18.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#333333").ss(5,1,1).p("AlplxQMUhShHM9");
	this.shape_18.setTransform(4,22.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#333333").ss(5,1,1).p("Amck7QN6iphHM9");
	this.shape_19.setTransform(-1.2,26);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#333333").ss(5,1,1).p("AlzlnQMohjhHM9");
	this.shape_20.setTransform(2.9,23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#333333").ss(5,1,1).p("AlKmPQLWgdhHM9");
	this.shape_21.setTransform(7.1,20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(5,1,1).p("AkimyQKEAohHM9");
	this.shape_22.setTransform(11.2,17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333333").ss(5,1,1).p("Aj5nVQIyBuhHM9");
	this.shape_23.setTransform(15.3,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-63,85.9,126);


(lib.眼睛 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJpD2QgHgPgBgRQAAgeATgSQARgRAYgBQAZAAAQAPQATASAAAfQAAAUgMATQgRAagfAAQglAAgPgfgAs2D7QgJgTAAgUQAAgfAOgSQANgPATAAQATABANARQAOASAAAeQAAARgGAPQgMAfgcAAQgYAAgNgagAQhDPQgHgPgBgPQAAgdATgRQARgPAYAAQAZAAAQAPQATARAAAdQAAASgMASQgRAYgfAAQglAAgPgegAyHDVQgJgSAAgSQAAgdAOgRQANgPATAAQATAAAMAPQAPARAAAdQgBAPgFAPQgMAegcAAQgYAAgNgYgAMRC3QgHgPgBgPQAAgdATgRQARgPAYAAQAZAAAQAPQATARAAAdQAAATgMARQgRAYgfAAQglAAgPgegAu3C9QgJgRAAgTQAAgdAPgRQAMgPATAAQATAAANAPQAOARAAAdQAAAPgGAPQgLAegdAAQgYAAgNgYgAGhBfQgHgPgBgPQAAgdATgRQARgPAYAAQAZAAAQAPQATARAAAdQAAATgMARQgRAYgfAAQglAAgPgegAqdBlQgJgRAAgTQAAgdAPgRQAMgPATAAQATAAANAPQAOARAAAdQAAAPgGAPQgMAegcAAQgYAAgNgYgAQvAeQgCgJACgLQAAgjAegCQAegCAAAlQAAAngeAAQgZAAgFgRgAxzAIQAAglAXACQAXACAAAjQACALgCAJQgEARgTAAQgXAAAAgngAK5ASQgFgKABgHQAAgSANgMQALgKAQAAQARAAALAKQAMAMAAASQAAAMgIALQgLARgVAAQgaAAgKgXgAtaAYQgHgLAAgMQAAgSAKgMQAIgKANAAQANAAAIAKQAKAMAAASQAAAHgEAKQgHAXgUAAQgQAAgIgRgAIhhQQgHgPgBgPQAAgdATgRQARgPAYAAQAZAAAQAPQATARAAAdQAAATgMARQgRAYgfAAQglAAgPgegAr/hKQgJgRAAgTQAAgdAPgRQAMgPATAAQATAAANAPQAOARAAAdQAAAPgGAPQgMAegcAAQgYAAgNgYgANRiAQgHgPgBgPQAAgdATgRQARgPAYAAQAZAAAQAPQATARAAAdQAAATgMARQgRAYgfAAQglAAgPgegAvnh6QgKgRAAgTQAAgdAPgRQANgPASAAQATAAANAPQAOARAAAdQAAAPgGAPQgMAegcAAQgYAAgMgYgAFxiVQgCgEAAgLQAAggAeAAQAeABAAAeQAAAMgKAJQgJAIgLAAQgWAAgGgNgApQiQQgIgJAAgMQAAgeAXgBQAXAAAAAgQAAALgBAEQgFANgRAAQgIAAgHgIgAIRjlQgCgEAAgLQAAgfAegBQAeAAAAAfQAAAMgKAJQgJAIgLAAQgWAAgGgNgArLjgQgHgJAAgMQAAgfAXAAQAXABAAAfQAAALgCAEQgFANgQAAQgIAAgIgIg");
	this.shape.setTransform(-4.6,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiMDlQgGgOgBgQQAAgbARgSQAQgPAXgBQAXgBAPAPQASAQAAAdQgBASgKASQgRAYgcABQgigBgPgcgAENDBQgIgOAAgPQAAgbASgPQAPgOAXAAQAXAAAPAOQASAPAAAbQAAARgMARQgPAWgdAAQgiAAgOgbgAAQCqQgHgOAAgOQAAgbARgPQAQgOAWAAQAXAAAPAOQASAPAAAbQAAARgLARQgQAWgdAAQgiAAgOgcgAlFBYQgIgOAAgOQAAgbASgPQAPgOAXAAQAXAAAPAOQARAPAAAbQABASgLAQQgQAWgdAAQgiAAgOgcgAEZAbQgBgIABgKQAAghAcgCQAcgBAAAiQAAAkgcAAQgWAAgGgQgAhBARQgFgKABgHQAAgQAMgLQAKgJAPAAQAPAAALAJQAKALAAAQQAAAMgHALQgJAPgUAAQgYAAgJgVgAjOhKQgIgOAAgOQAAgbASgQQAPgOAXAAQAWAAAQAOQARAQAAAbQAAARgLAQQgPAXgdAAQgjAAgNgcgABLh3QgHgOAAgOQAAgbARgQQAQgOAXAAQAWAAAQAOQARAQABAbQAAASgMAPQgPAXgdAAQgjgBgOgbgAlyiKQgCgFAAgKQAAgdAcAAQAcAAAAAcQAAAMgJAIQgJAHgKAAQgUABgGgMgAjejVQgBgEAAgKQAAgdAbAAQAcAAAAAcQABALgKAJQgIAHgLAAQgUAAgGgMg");
	this.shape_1.setTransform(71.9,-2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlDpQgJgSAAgSQAAgdANgQQAMgPASABQARABAMAPQAOASAAAbQgBAQgFAOQgLAcgaABQgWgBgMgYgAkUDGQgJgRAAgRQAAgbAOgPQAMgOARAAQASAAALAOQAOAPAAAbQgBAPgFAOQgKAbgbAAQgWAAgMgWgAhSCwQgJgRAAgRQAAgbAOgPQALgOASAAQASAAALAOQAOAPAAAbQgBAOgFAOQgLAcgaAAQgWAAgMgWgACzBeQgJgQAAgSQAAgbAOgPQAMgOARAAQARAAANAOQANAPAAAbQAAAOgGAOQgLAcgaAAQgWAAgMgWgAkBAHQAAgiAVABQAWACAAAhQABAKgBAIQgEAQgSAAQgVAAAAgkgAADAXQgFgLAAgMQAAgQAHgLQAIgJAMAAQAMAAAIAJQAJALAAAQQAAAHgDAKQgHAVgTAAQgOAAgIgPgABYhFQgJgQAAgRQAAgbAOgQQALgOASAAQARAAAMAOQAOAQAAAbQgBAOgFAOQgLAcgaAAQgWAAgMgXgAiAhyQgIgPAAgSQAAgbANgQQAMgOARAAQASAAAMAOQANAQAAAbQAAAOgFAOQgMAbgaABQgWAAgMgXgAD6iGQgHgIAAgMQAAgcAVAAQAWAAAAAdQAAAKgCAFQgEAMgQgBQgHAAgHgHgACIjQQgHgJAAgLQAAgcAVAAQAWAAAAAdQAAAKgCAEQgEAMgQAAQgHAAgHgHg");
	this.shape_2.setTransform(-93.7,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// 圖層 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AO7G9QgYADgfAAQh1AAi0ghQiegegvgVQg3gZgjACQgVABgaAOQgWANgQgCQgagDgrggIgRgQQgQgOgHgCQgugLgVgbQgPgUAAgaQAAgeATgXQAkgqBbALIAOgEQhZgLgigUQglgWAAgrQAAgkAdgWQATgOBigxQgzgVgUgWQgTgUAAgfQAAggAVgVQAqgqBvAPQg7gohXgeQgZgJgIgIQgLgLAAgWQAAg/AvgMQAcgHA4ALQAVgOAjgIQBRgUB4ARQA8AJAzAPIElAAQCHAbAsASQAXAKARAMQAkAcABApQBPAlA9A1IAdAbIALAGQBVArA8AzQBDA3AAAhQAAAegFAHQgOAZg5AAQgMAAgngIIgpgIQAOAOA0BOQA2BRAAANQACAZgaAQQg0AfiQgcQgGAGgCAbQgGAZgeAAQgFAAgIgFIgQAVQgIALgKAKQAfAbAAAZQAAAbgUAYQgYAcgkAAQg1AAhggrgAUmCyIgMAKIgGACIA4gCQgGgLgSAAIgOABgAEmj5IAGgBQAGgBAAgCIgcgEgAzcHMQgQgYAAgbQAAgZAYgbIgOgVIgMgVQgGAFgEAAQgXAAgFgZQgBgbgEgGQhvAcgogfQgUgQACgZQAAgNAqhRQAnhOALgOIggAIQgeAIgIAAQgsAAgLgZQgEgHAAgeQAAghAzg3QAvgzBBgrIAIgGIAWgbQAvg1A9glQAAg7A6ggQAigSBogbIDgAAQAngPAugJQBcgRA+AUQAbAIAQAOQAqgLAWAHQAkAMAAA/QAAAWgIALQgGAIgUAJQhCAegtAoQBVgPAgAqQAQAVAAAgQAAAfgPAUQgPAWgnAVQBLAxAOAOQAXAWAAAkQAAArgcAWQgbAUhEALIALAEQBGgLAbAqQAPAXAAAeQAAAagMAUQgQAbgjALQgFACgNAOIgMAQQgiAggTADQgNACgRgNQgTgOgQgBQgcgCgpAZQglAVh5AeQiJAhhaAAQgYAAgSgDQhKArgoAAQgcAAgSgcgA1vC8IArACIgFgCIgJgKIgLgBQgOAAgEALgApLj9QAAACAFABIAEABIAMgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.2,-48.8,302.4,97.6);


(lib.蜜蜂身體 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("AoTu6QEdAqDaDKQAOAOAOAOQAZAZAWAZQDsEMAAFsQAAGQkbEaQjjDlkwAsQBJAKBNAAQGPAAEakbQEbkaAAmQQAAjThPizQg+iKhsh2IK7kOIoRIOAFOqGQgQgSgSgSQg4g4g+guQhMg4hUgnQi4hVjbAAQhNAAhJAKQhCAKg/ASAtONRQgbgQgbgRQLbsgtfrYIAAAAQBXhRBjg3QAkAVAjAYQAwAhAtAnQAbAXAaAaQCQCQBHCvQAHATAHATQA2CYAACtQAAGQkbEaQhlBmh0BBQBPAsBWAbQDUhECqiqQEbkaAAmQQAAkHh8jVQgBgCgBgCQg/hrhehfQijiijIhFQgKgDgJgDQAKgEALgDQgBAHgBAGAtOtQQAagOAagNQA3gaA6gSAoTO7QhOgMhIgX");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AldAHIK7kNIoRINQg9iKhth2g");
	this.shape_1.setTransform(68.4,-65.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCCC").s().p("AkyOYQDUhECpiqQEbkaAAmQQAAkHh7jUIgDgFQg/hrheheQihijjJhFIACgMQA/gTBCgKQEcAqDaDLIAdAcQAZAYAWAZQDsEMAAFsQAAGQkbEaQjkDkkvAtQhNgMhJgXgAoNMwQLasgtdrYIgBAAQBYhRBig3QAlAVAiAYQAwAhAuAnQAaAYAaAaQCQCPBHCvIAOAmQA1CZAACsQAAGQkaEaQhlBlh0BCQgbgQgbgRgAkyuXIAVgGIgCAMIgTgGgAkdudIAAAAg");
	this.shape_2.setTransform(-37.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AkyO7QEwgtDjjkQEbkaAAmQQAAlsjtkMQgWgZgYgYIgdgcQjZjLkdgqQBJgKBNAAQDaAAC4BVQBUAnBNA4QA9AuA5A5IAiAjQBsB2A9CKQBQCzAADTQAAGQkbEaQkbEbmOAAQhNAAhJgKgAptNRQB0hCBlhlQEbkaAAmQQAAisg2iZIgOgmQhHiviQiPQgagagbgYQgtgngwghQgjgYgkgVQAagOAagNQA3gaA6gSIATAGQDIBFCjCjQBdBeA/BrIACAFQB8DUAAEHQAAGQkaEaQiqCqjUBEQhWgchPgrgAsnrIQNeLYraMgQEgtZmkqfg");
	this.shape_3.setTransform(-22.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// 翅膀
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#333333").ss(5,1,1).p("AgQqBQB1jTCMALQCUAMBWD/QBWD+gbFcQgbFch9DvQh8DuiVgLQgogDgjgVQhfg4g+i7QhXj+AclcQAbldB8juQAHgOAIgNQAAABABABQCWDeBEFXQBEFWg3EHQg0D1iCAqQgKADgKACQiRAdiXjeQiYjehElXQhDlWA3kHQA4kHCRgdQCRgdCYDcg");
	this.shape_4.setTransform(-19.2,-153);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AiXNKQgogDgjgVQCCgqAzj1QA2kHhDlWQhDlXiXjeIgCgCQB3jTCLALQCUAMBWD/QBVD+gbFcQgbFch8DvQh3DjiMAAIgNAAg");
	this.shape_5.setTransform(6.9,-153);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AiUHnQhXj+AclcQAbldB8juIAPgbIABACQCWDeBEFXQBEFWg3EHQg0D1iCAqQhfg4g+i7g");
	this.shape_6.setTransform(-16.7,-144.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgeJ7QiXjehElXQhElWA3kHQA4kHCSgdQCQgdCXDcIgOAbQh9DugbFdQgbFcBWD+QA/C6BgA5IgUAFQgRADgQAAQiCAAiGjEg");
	this.shape_7.setTransform(-44.5,-153.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#333333").ss(5,1,1).p("AgIhzQAUgoAXgoQAjg8Akg3QCTjdCsiBQDXiiCBBLQCBBKggEMQggEKivEuQivEvjXCiQhVBAhHAbQgQARgWAMQgCABgCACQh/BFjUifQjWihivkvQivkughkLQggkLCAhLQCChKDXCiQCpB+CQDWQAnA7AmBBQANAXANAYgABxLPQg0AUguAAQgxAAgogYQiBhKAgkMQAcjnCHkBQCWEUAeD2QAcDfhXBZg");
	this.shape_8.setTransform(-21.3,-146.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABvKEQjWihivkvQivkughkLQggkLCBhLQCBhKDXCiQCoB+CQDWQAoA7AlBBIAbAvQiHEBgdDnQgfEMCABKQApAYAyAAQAtAAA1gUQgRARgVAMIgEADQgnAVgvAAQhrAAiThvg");
	this.shape_9.setTransform(-59.3,-144.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AhKGUQiBhLAgkLQAcjmCHkCQCWEUAeD2QAbDfhWBZQg1ATgtABQgxgBgogXg");
	this.shape_10.setTransform(-21.3,-115.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AkDGyQgej3iXkUQAVgnAXgpQAjg8Akg2QCTjdCsiCQDWihCBBKQCBBLggELQggELivEuQivEvjWCiQhUA/hIAbQBXhYgcjfg");
	this.shape_11.setTransform(21.9,-149.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.8,-239.7,211.6,338.7);


(lib.Graybackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("EhjwA4HMAAAhwOMDHhAAAMAAABwOg");
	this.shape.setTransform(638.5,359.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Graybackground, new cjs.Rectangle(0,0,1277,718.3), null);


(lib.UI_Block_RT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.mute_bt = new lib.Mute_bt();
	this.mute_bt.parent = this;
	this.mute_bt.setTransform(-1.4,-0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyBnQgoghAAgzQAAghAQggQAPgfAegeIg+gMICRgQQgQASgJATQgIATAAASQAAAWAKAMQAKAMARAAQAUAAANgOQAOgOAAgXQAAgOgGgMQgFgMgLgMICJgTIg+AhQAfAYAPAaQAPAaAAAeQAAAYgJAVQgJAVgRAQQgZAZgiANQgiAMgnAAQg+AAgoghg");
	this.shape.setTransform(-37,-50.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7BoIALjNIgpgUICCgOIgeA9QAggeAdgQQAdgPAbAAQAqAAAYAcQAZAbAAAuQAAAjgMAkQgNAjgZAiIAyASIiLAJQANgPAHgRQAIgRAAgRQgBgWgKgPQgLgPgQAAQgSAAgNAQQgMAPAAAXQAAAQAFANQAFANAKAKIiJAPg");
	this.shape_1.setTransform(-70.7,-50.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACFBfQgiAVghAKQghAKgjAAQhFAAgpgiQgqgjAAg4QAAgdALgcQAMgcAUgVQAUgTAbgLQAagKAgAAQA8AAAnAaQAoAbAAAnQAAAoglAaQgkAbg3AAQgMAAgMgCQgMgCgLgFQAYARAWAHQAWAIAYAAQAdAAAZgNQAYgNASgZIAJBygAg/hPQgTAOgLAYQAIAGALAEQALAEALAAQAUAAAMgMQANgLAAgSQAAgJgDgHQgCgHgFgGQgbAEgTAOg");
	this.shape_2.setTransform(-101.9,-51);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABqBhQAJgUAAgTQAAgUgIgLQgJgMgOAAQgPAAgMAPQgNAQAAAVQAAAMAEAKQADAKAHAJIhhgFQAHgJAEgJQADgJAAgJQAAgUgJgNQgJgNgOAAQgPAAgLAQQgLAPAAAVQAAAQAGANQAGANAMANIiFAIIAqggIgGjVIgjgPIBxgLIgOA6QARgcAWgPQAVgPAWAAQAVAAARASQARATAFAdQAPggAVgRQAUgRAbAAQAiAAAYAhQAXAgAAAxQAAAhgLAgQgLAfgWAhIAtATIh/AJQATgUAKgTg");
	this.shape_3.setTransform(-140.3,-50.8);

	this.value_text = new cjs.Text("0", "22px 'Arial'", "#CCCCCC");
	this.value_text.name = "value_text";
	this.value_text.textAlign = "center";
	this.value_text.lineHeight = 27;
	this.value_text.lineWidth = 47;
	this.value_text.parent = this;
	this.value_text.setTransform(-93.9,-115.3,0.998,0.998);

	this.sp_mm = new lib.bt_minus();
	this.sp_mm.parent = this;
	this.sp_mm.setTransform(-167.7,-123.3,0.748,0.748,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.sp_mm, 0, 1, 2, false, new lib.bt_minus(), 3);

	this.sp_pp = new lib.bt_plus();
	this.sp_pp.parent = this;
	this.sp_pp.setTransform(-39.7,-102.3,0.748,0.748,0,0,0,28.1,28.3);
	new cjs.ButtonHelper(this.sp_pp, 0, 1, 2, false, new lib.bt_plus(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sp_pp},{t:this.sp_mm},{t:this.value_text},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.mute_bt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.UI_Block_RT, new cjs.Rectangle(-173,-128.7,160.1,178), null);


(lib.Main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tool
	this.Right_Top_UI = new lib.UI_Block_RT();
	this.Right_Top_UI.parent = this;
	this.Right_Top_UI.setTransform(1280,0);

	this.timeline.addTween(cjs.Tween.get(this.Right_Top_UI).wait(1));

	// info
	this.Right_Btm_UI = new lib.UI_Block_RB();
	this.Right_Btm_UI.parent = this;
	this.Right_Btm_UI.setTransform(1280,720);

	this.Left_Btm_UI = new lib.UI_Block_LB();
	this.Left_Btm_UI.parent = this;
	this.Left_Btm_UI.setTransform(237.8,672.5,1,1,0,0,0,237.8,-47.5);

	this.Left_Top_UI = new lib.UI_Block_LT();
	this.Left_Top_UI.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Left_Top_UI},{t:this.Left_Btm_UI},{t:this.Right_Btm_UI}]}).wait(1));

	// Main
	this.boom_effect = new lib.Boom();
	this.boom_effect.parent = this;
	this.boom_effect.setTransform(-262.9,-349.6,0.998,0.998,0,0,0,-0.3,-0.1);

	this.Main_bubble_canvas = new lib.Bubble_canvas();
	this.Main_bubble_canvas.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Main_bubble_canvas},{t:this.boom_effect}]}).wait(1));

	// back
	this.Gray_background = new lib.Graybackground();
	this.Gray_background.parent = this;
	this.Gray_background.setTransform(638.5,359.2,1,1,0,0,0,638.5,359.2);

	this.timeline.addTween(cjs.Tween.get(this.Gray_background).wait(1));

}).prototype = getMCSymbolPrototype(lib.Main, new cjs.Rectangle(-84.1,-126.6,1369.9,845.9), null);


(lib.bitmap2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 中心光點
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.733)","rgba(255,255,255,0.153)","rgba(255,255,255,0)"],[0.008,0.11,1],-0.1,0,0,-0.1,0,89.9).s().p("AhpK3QkggsisjrQisjqAqkfQAtkgDrisQDrisEfAqQEgAtCsDqQCsDrgsEfQgrEgjsCtQi6CJjeAAQg3AAg6gJg");
	this.shape.setTransform(0.7,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 右下光點
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.651,1],20.7,54.9,0,20.7,54.9,12.7).s().p("AmsIwQjoiygmkhQgmkhCxjoQCyjoEhgmQEhgnDoCyQDoCxAmEiQAnEgiyDpQixDnkiAnQgzAHgxAAQjmAAi/iSg");
	this.shape_1.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// 左上光點
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.651,1],-23.6,-42.8,0,-23.6,-42.8,26.7).s().p("Ak5J4QkGiChdkVQhdkUCCkGQCCkGEVhdQEUhdEGCCQEGCCBdEVQBdEUiCEGQiCEGkVBdQh0AnhwAAQieAAiYhMg");
	this.shape_2.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// 一條淡光
	this.instance = new lib.Basic();
	this.instance.parent = this;
	this.instance.setTransform(1.2,0.9,0.765,0.933,-74.7);
	this.instance.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 外層顏色
	this.instance_1 = new lib.Basic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,-0.2,0.944,0.998,-108.6);
	this.instance_1.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 153, 191.25, 114.75, 0)];
	this.instance_1.cache(-73,-73,146,146);

	this.instance_2 = new lib.Basic();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,-0.2,0.92,0.999,100.8);
	this.instance_2.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 153, 191.25, 0)];
	this.instance_2.cache(-73,-73,146,146);

	this.instance_3 = new lib.Basic();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.7,-0.2,0.908,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// 內層顏色1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(253,188,254,0)","rgba(255,0,255,0.682)"],[0.459,1],22.6,-22.2,0,22.6,-22.2,117).s().p("AhgK6QkfgpiwjnQiwjpAnkgQAokhDoivQDoixEgAoQEhAoCwDoQCwDogoEgQgnEgjpCxQi+CQjlAAQgxAAg1gHg");
	this.shape_3.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// 內層顏色2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(221,255,221,0)","rgba(0,255,0,0.722)"],[0.459,1],-8.3,7.5,0,-8.3,7.5,117).s().p("AjAKlQkZhQiOj+QiNj/BQkYQBPkZEAiNQD+iOEYBQQEYBQCND/QCOD+hOEYQhREZj/CNQijBbiuAAQhhAAhkgdg");
	this.shape_4.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-86,176.3,171.6);


(lib.bitmap1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 中心光點
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.733)","rgba(255,255,255,0.153)","rgba(255,255,255,0)"],[0.008,0.11,1],0.1,0.1,0,0.1,0.1,71.2).s().p("AjAKlQkZhQiOj+QiNj/BQkYQBPkZEAiNQD+iOEYBQQEYBQCND/QCOD+hOEYQhREZj/CNQijBbiuAAQhhAAhkgdg");
	this.shape.setTransform(0.7,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 右下光點
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.651,1],30.8,50,0,30.8,50,12.7).s().p("Ak5J4QkGiChdkVQhdkUCCkGQCCkGEVhdQEUhdEGCCQEGCCBdEVQBdEUiCEGQiCEGkVBdQh0AnhwAAQieAAiYhMg");
	this.shape_1.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// 左上光點
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","rgba(255,255,255,0.369)","rgba(255,255,255,0)"],[0,0.651,1],-27.4,-54.2,0,-27.4,-54.2,26.7).s().p("Ak5J4QkGiChdkVQhdkUCCkGQCCkGEVhdQEUhdEGCCQEGCCBdEVQBdEUiCEGQiCEGkVBdQh0AnhwAAQieAAiYhMg");
	this.shape_2.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// 一條淡光
	this.instance = new lib.Basic();
	this.instance.parent = this;
	this.instance.setTransform(1.2,0.9,0.765,0.933,-74.7);
	this.instance.alpha = 0.121;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 外層顏色
	this.instance_1 = new lib.Basic();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,-0.2,0.998,0.998,-108.6);
	this.instance_1.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 153, 191.25, 114.75, 0)];
	this.instance_1.cache(-73,-73,146,146);

	this.instance_2 = new lib.Basic();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,-0.2,0.999,0.999,100.8);
	this.instance_2.filters = [new cjs.ColorFilter(0.25, 0.25, 0.25, 1, 0, 153, 191.25, 0)];
	this.instance_2.cache(-73,-73,146,146);

	this.instance_3 = new lib.Basic();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// 內層顏色1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(253,188,254,0)","rgba(255,0,255,0.682)"],[0.459,1],20,-21.1,0,20,-21.1,117).s().p("AhgK6QkfgpiwjnQiwjpAnkgQAokhDoivQDoixEgAoQEhAoCwDoQCwDogoEgQgnEgjpCxQi+CQjlAAQgxAAg1gHg");
	this.shape_3.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// 內層顏色2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(221,255,221,0)","rgba(0,255,0,0.722)"],[0.459,1],-19.5,12.3,0,-19.5,12.3,117).s().p("AjAKlQkZhQiOj+QiNj/BQkYQBPkZEAiNQD+iOEYBQQEYBQCND/QCOD+hOEYQhREZj/CNQijBbiuAAQhhAAhkgdg");
	this.shape_4.setTransform(0.6,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-89.6,178.8,178.8);


(lib.Bubble__ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 圖
	this.instance = new lib.bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(0.7,-0.2,1,1,0,0,0,0.7,-0.2);
	this.instance.cache(-91,-92,183,183);

	this.instance_1 = new lib.bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.7,-0.2,1,1,0,0,0,0.7,-0.2);
	this.instance_1.cache(-89,-88,180,176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88.7,-89.6,178.8,178.8);


(lib.Bubble__2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 臉
	this.instance = new lib.眼睛();
	this.instance.parent = this;
	this.instance.setTransform(-14.9,-24.1,0.399,0.399);

	this.instance_1 = new lib.觸角2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(37.2,-80.6,0.399,0.399);

	this.instance_2 = new lib.觸角1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-41.8,-80.6,0.399,0.399);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("Ak4inQDrPuGGvuQjYgIimifQhaBxiZA2g");
	this.shape.setTransform(-19.9,34.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF33FF").s().p("Ak4inQCZg3BahwQCmCfDYAIQjDH3icAAQicAAh2n3g");
	this.shape_1.setTransform(-19.9,34.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(20));

	// 圖層 1
	this.instance_3 = new lib.Bubble__();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.7,-0.2,0.984,0.984,0,0,0,0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20));

	// 身體
	this.instance_4 = new lib.蜜蜂身體();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.7,-0.1,0.399,0.399,0,0,0,-251.7,16.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-2.6,regY:-70.4,rotation:0.2,x:100.2,y:-34.5},0).wait(1).to({rotation:0.7,x:100.5,y:-33.6},0).wait(1).to({rotation:1.5,x:100.9,y:-32.2},0).wait(1).to({rotation:2.6,x:101.5,y:-30.3},0).wait(1).to({rotation:3.7,x:102.1,y:-28.4},0).wait(1).to({rotation:4.8,x:102.6,y:-26.5},0).wait(1).to({rotation:5.7,x:103,y:-24.8},0).wait(1).to({rotation:6.4,x:103.3,y:-23.6},0).wait(1).to({rotation:6.8,x:103.4,y:-22.9},0).wait(2).to({rotation:6.4,x:103.3,y:-23.6},0).wait(1).to({rotation:5.7,x:103,y:-24.8},0).wait(1).to({rotation:4.8,x:102.6,y:-26.5},0).wait(1).to({rotation:3.7,x:102.1,y:-28.4},0).wait(1).to({rotation:2.6,x:101.5,y:-30.3},0).wait(1).to({rotation:1.5,x:100.9,y:-32.2},0).wait(1).to({rotation:0.7,x:100.5,y:-33.6},0).wait(1).to({rotation:0.2,x:100.2,y:-34.5},0).wait(1).to({rotation:0,x:100.1,y:-34.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-108.5,230.8,196.4);


// stage content:
(lib.bubbles_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//-------常數-------
		const Accelerate = 1; //加速參數
		const init_speed = 20; //速度參數，影響到初速
		const slow_rate = 0.5; //減速參數
		const rotation_rate = 2; //旋轉參數
		const Bubble_size_classic = 180; //泡泡碰撞範圍
		const size_scale = 0.6; //縮小參數，越大泡泡有機會越小
		const init_bubbles = 5; //初始泡泡數
		const MouseOverFrequency = 15; //滑鼠頻率
		//------------------
		
		//-------變數-------
		var B_Num = 0; //泡泡數
		var Bee_Num = 0; //beeble數
		var jab_Num = 0; //戳數
		var tickTimer = 0; //計算tick次數
		var bubble_sp_counter = 0; //泡泡生成速率計算
		var bubble_sp_rate = 1; //泡泡生成速率，1→1 b/s
		var Master_volume = 1; //主音量
		var last_time = 0; //計算FPS用
		var FPS = 30; //原始FPS
		var vis_Max = 180; //可視泡泡
		var space_down = false; //判斷空白建
		var isMousedown = false; //判斷
		var Bubbles = new Array();
		//-------------------
		
		//-----修正路徑------
		var root = this.root;
		var b_text = root.Left_Btm_UI.b_text_;
		var j_text = root.Left_Btm_UI.j_text;
		var info = root.Left_Top_UI.info;
		//-------------------
		
		//--What The F**k----
		var deviceScaleX = 1280 / stage.canvas.width;
		var deviceScaleY = 720 / stage.canvas.height;
		root.Left_Btm_UI.regX = 0;
		root.Left_Btm_UI.regY = 0;
		root.Left_Btm_UI.x = 0;
		root.Left_Btm_UI.y = 720;
		//--What The F**k----
		
		//-----登錄聲音------
		createjs.Sound.registerSound("sounds/actmsg.wav", "bubble_sp1", {
			preload: true
		});
		createjs.Sound.registerSound("sounds/waterdrop.mp3", "waterdrop", {
			preload: true
		});
		createjs.Sound.registerSound("sounds/cartoon-pop.wav", "pop", {
			preload: true
		});
		//-------------------
		
		//---其他預先執行----
		stage.enableMouseOver(MouseOverFrequency); //滑鼠偵測頻率
		resize_(); //執行一次視窗縮放
		if (!window.localStorage["visited"]) {
			window.localStorage["visited"] = true;
			Bubble_sp(init_bubbles); //若第一次開啟，則先給泡泡
			SaveData(); //存檔
		} else {
			LoadData(); //讀檔
		}
		//-------------------
		
		
		//滑鼠點畫面
		root.Gray_background.addEventListener("mousedown", MouseDownHandler.bind(root));
		root.Gray_background.addEventListener("pressup", MouseUpHandler.bind(root));
		function MouseDownHandler(e) {
			//Bubble_sp(e.localX, e.localY);
			isMousedown = true;
		}
		function MouseUpHandler(e) {
			isMousedown = false;
		}
		
		//鍵盤事件
		document.addEventListener("keydown", KeydownHandler.bind(root));
		function KeydownHandler(e) {
			//root.textField.text = "Code: " + e.code + "  " + e.key + " !!";
		}
		
		//時間Ticker
		//createjs.Ticker.addEventListener("tick", handleTick);
		cjs.Ticker.setFPS(FPS);
		stage.addEventListener("tick", handleTick);
		function handleTick(event) {
			if (!event.paused);
		
			//泡泡移動
			var BoundX = root.Right_Btm_UI.x; //以UI當邊界參照
			var BoundY = root.Right_Btm_UI.y; //以UI當邊界參照
		
			for (var i = 0; i < Bubbles.length; i++) {
		
				if (Math.abs(Bubbles[i].speedX) > init_speed) Bubbles[i].speedX *= slow_rate; //太快強制變慢
				if (Math.abs(Bubbles[i].speedY) > init_speed) Bubbles[i].speedY *= slow_rate; //太快強制變慢
		
				Bubbles[i].x += Bubbles[i].speedX;
				Bubbles[i].y += Bubbles[i].speedY;
		
				Bubbles[i].rotation = rotation_rate * Math.sin(i + tickTimer);
		
				//反彈；待修
				if (Bubbles[i].x < Math.abs(0.3 * Bubble_size_classic * Bubbles[i].scaleX)) {
					Bubbles[i].speedX = Math.abs(Bubbles[i].speedX);
					Bubbles[i].speedY += (Math.random() - 0.5) * Accelerate;
					Bubbles[i].play();
				} else if (Bubbles[i].x > BoundX - Math.abs(0.3 * Bubble_size_classic * Bubbles[i].scaleX)) {
					Bubbles[i].speedX = -1 * Math.abs(Bubbles[i].speedX);
					Bubbles[i].speedY += (Math.random() - 0.5) * Accelerate;
					Bubbles[i].play();
				}
		
				if (Bubbles[i].y < 0.3 * Bubble_size_classic * Bubbles[i].scaleY) {
					Bubbles[i].speedY = Math.abs(Bubbles[i].speedY);
					Bubbles[i].speedX += (Math.random() - 0.5) * Accelerate;
					Bubbles[i].play();
				} else if (Bubbles[i].y > BoundY - 0.3 * Bubble_size_classic * Bubbles[i].scaleY) {
					Bubbles[i].speedY = -1 * Math.abs(Bubbles[i].speedY);;
					Bubbles[i].speedX += (Math.random() - 0.5) * Accelerate;
					Bubbles[i].play();
				}
		
				/*if (Bubbles[i] instanceof lib.Bubble__2) {
					if (Bubbles[i].speedX < 0) Bubbles[i].scaleX = Bubbles[i].scaleY;
					else Bubbles[i].scaleX = -1 * Bubbles[i].scaleY;
				}*/
			}
		
			//自動生成泡泡
			if (bubble_sp_counter > FPS) {
				Bubble_sp(Math.floor(bubble_sp_counter / FPS));
				bubble_sp_counter -= Math.floor(bubble_sp_counter / FPS) * FPS;
			}
		
			info.text = "";
			//info.text += "stageBounds: (" + stage.getBounds().width.toFixed(2) + ", " + stage.getBounds().height.toFixed(2)  + ") | ";
			//info.text += "mainBounds: (" + root.getBounds().width.toFixed(2) + ", " + root.getBounds().height.toFixed(2)  + ") | ";
			info.text += "Frames: " + tickTimer + " | ";
			//info.text += "spawn counter: " + bubble_sp_counter + ((bubble_sp_counter > 9) ? " | " : "   | ");
			info.text += "FPS: " + (1000 / (createjs.Ticker.getTime() - last_time)).toFixed(2) + " | ";
			//info.text += "Date: " + (new Date()).valueOf() + " | " + (new Date()) + " | ";
			//info.text += isMousedown + " | ";
		
			last_time = createjs.Ticker.getTime(); //時間計算用
			bubble_sp_counter += bubble_sp_rate; //泡泡生成計算
			tickTimer++; //幀數計算
		}
		
		//泡泡增加
		function Bubble_sp(n = 1, x = -1, y = -1, type = 0) {
			Bubble_update(n);
			while (Bubbles.length < B_Num && Bubbles.length < vis_Max) Bubble_sp_classic(x, y);
			SaveData(); //存檔
		}
		
		//泡泡生成:原始
		function Bubble_sp_classic(x = -1, y = -1, soundPlay = true) {
		
			var new_bubble = new lib.Bubble__();
		
			Bubble_reset(new_bubble, x, y);
		
			//聲音
			if (soundPlay) createjs.Sound.play("bubble_sp1", {
				volume: Master_volume * 0.05,
				offset: 10
			});
		
			Bubble_register(new_bubble);
		}
		
		//泡泡註冊
		function Bubble_register(obj = null) {
			if (obj != null) {
				Bubbles.push(obj); //增加至陣列
				root.Main_bubble_canvas.addChild(obj); //增加至畫面
				obj.addEventListener("mousedown", boom.bind(root)); //滑鼠按下
				obj.addEventListener("mouseover", sway.bind(root)); //滑鼠推動
			}
		}
		
		//重設一泡泡數值：位置、大小、速率
		function Bubble_reset(obj = null, x = -1, y = -1) {
			if (obj != null) {
				var temp = 1 - Math.pow(Math.random(), 2) * size_scale;
		
				if (x == -1 && y == -1) {
					x = Math.random() * root.Right_Btm_UI.x;
					y = Math.random() * root.Right_Btm_UI.y;
				}
		
				obj.x = x;
				obj.y = y;
		
				obj.scaleX = obj.scaleY = temp; //縮放
		
				obj.speedX = (Math.random() - 0.5) * init_speed;
				obj.speedY = (Math.random() - 0.5) * init_speed;
			}
		}
		
		//滑鼠戳泡泡
		function boom(e) {
		
			//破掉特效
			root.boom_effect.x = e.currentTarget.x;
			root.boom_effect.y = e.currentTarget.y;
			root.boom_effect.scaleX = e.currentTarget.scaleX;
			root.boom_effect.scaleY = e.currentTarget.scaleY;
			root.boom_effect.gotoAndPlay(1);
		
			//破掉聲音
			if (e.currentTarget.scaleX < 0.6) createjs.Sound.play("waterdrop", {
				volume: Master_volume * 0.3,
				offset: 400
			});
			else createjs.Sound.play("pop", {
				volume: Master_volume * 0.4,
				offset: 0
			});
		
			//if (Bubbles[i] instanceof lib.Bubble__)
		
			//	Cyr_snd2.play(0, 1, snd_trans[60]);
			//	Bee_Num--;
		
			Bubble_delete(e.currentTarget); //刪除該泡泡
		
			Jabbed_update(1); //戳數
			Bubble_update(-1); //泡泡數
		
			SaveData(); //存檔
		}
		
		//刪除一泡泡
		function Bubble_delete(obj = null) {
			//判斷移除畫面上泡泡or重設可視泡泡
			if (B_Num <= vis_Max) Bubble_remove(obj);
			else Bubble_reset(obj);
		}
		
		//移除畫面泡泡
		function Bubble_remove(obj = null) {
			if (obj != null) {
				var i = 0;
		
				root.Main_bubble_canvas.removeChild(obj);
		
				for (i = 0; i < Bubbles.length; i++)
					if (Bubbles[i] == obj) {
						Bubbles[i] = Bubbles[Bubbles.length - 1];
						Bubbles.pop();
						break;
					}
				delete obj; //垃圾處理
			}
		}
		
		//泡泡數字更新
		function Bubble_update(n = 0) {
			B_Num += n;
			b_text.text = "bubbles: " + B_Num + ((bubble_sp_rate > 0) ? "  | Bps: " + bubble_sp_rate.toFixed(2) : "");
			document.title = B_Num + " bubbles";
		}
		//戳數更新
		function Jabbed_update(n = 0) {
			jab_Num += n;
			j_text.text = "jabbed:  " + jab_Num;
			//bubble_sp_rate += 0.005; //Bps增加，機制更改後刪除
		}
		
		//存檔
		function SaveData() {
		
			var DataObj = Object(); //存檔物件
		
			DataObj.B_Num = B_Num; //泡泡數
			//DataObj.Bee_Num = Bee_Num; //beeble數
			DataObj.jab_Num = jab_Num; //戳數
			//DataObj.bubble_sp_rate = bubble_sp_rate; //泡泡生成速率，1→1 b/s
			//DataObj.Master_volume = 1; //主音量
			//DataObj.vis_Max = vis_Max; //可視泡泡
		
			window.localStorage["data"] = JSON.stringify(DataObj);
		}
		
		//讀檔
		function LoadData() {
			var DataObj = JSON.parse(window.localStorage["data"]);
		
			if (DataObj.B_Num) B_Num = DataObj.B_Num; //泡泡數
			if (DataObj.Bee_Num) Bee_Num = DataObj.Bee_Num; //beeble數
			if (DataObj.jab_Num) jab_Num = DataObj.jab_Num; //戳數
			if (DataObj.bubble_sp_rate) bubble_sp_rate = DataObj.bubble_sp_rate; //泡泡生成速率，1→1 b/s
			//DataObj.Master_volume = 1; //主音量
			//vis_Max = DataObj.vis_Max; //可視泡泡
		
			//產生泡泡
			while (Bubbles.length < B_Num && Bubbles.length < vis_Max) Bubble_sp_classic();
		
			//數字更新
			Bubble_update();
			Jabbed_update();
		}
		
		//推動
		function sway(e) {
		
			e.currentTarget.play();
		
			if ((stage.mouseX - e.currentTarget.x) > 0) e.currentTarget.speedX -= Accelerate;
			else e.currentTarget.speedX += Accelerate;
		
			if ((stage.mouseY - e.currentTarget.y) > 0) e.currentTarget.speedY -= Accelerate;
			else e.currentTarget.speedY += Accelerate;
		}
		
		//靜音，待修
		root.Right_Top_UI.mute_bt.addEventListener("click", muteClick.bind(root));
		function muteClick(e) {
			if (e.currentTarget.currentFrame == 0) {
				e.currentTarget.gotoAndStop(1);
				Master_volume = 0;
			} else {
				e.currentTarget.gotoAndStop(0);
				Master_volume = 1;
			}
		}
		
		//自適屏
		window.onresize = function () {
			resize_();
		}
		function resize_() {
			//取得視窗大小
			var h = window.innerHeight;
			var w = window.innerWidth;
		
			//畫布寬高
			stage.canvas.style.width = w + "px";
			stage.canvas.style.height = h + "px";
			//畫布像素 與 物件位置
			stage.canvas.width = w;
			stage.canvas.height = h;
		
			root.Right_Btm_UI.x = root.Right_Top_UI.x = w * deviceScaleX;
			root.Left_Btm_UI.y = root.Right_Btm_UI.y = h * deviceScaleY;
		
			//舊的縮放方式
			//var w = stage.canvas.width / window.innerWidth;
			//var h = stage.canvas.height / window.innerHeight;
			//root.Main_bubble_canvas.scaleX = root.Left_Top_UI.scaleX = root.Left_Btm_UI.scaleX = root.Right_Top_UI.scaleX = w;
			//root.Main_bubble_canvas.scaleY = root.Left_Top_UI.scaleY = root.Left_Btm_UI.scaleY = root.Right_Top_UI.scaleY = h;
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Main
	this.root = new lib.Main();
	this.root.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.root).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.4,10.5,1548.4,1068.8);
// library properties:
lib.properties = {
	width: 1280,
	height: 720,
	fps: 30,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/Cyr_dei1.mp3", id:"Cyr_dei1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
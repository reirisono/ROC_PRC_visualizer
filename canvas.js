/*
Canvas reference 
https://www.w3schools.com/tags/ref_canvas.asp

FYI:
window.innerWidth: window width; window.innerHeight: window height

cvs.width & cvs.height
- smaller value ~ larger objects; larger value ~ smalle robjects
- objects will stretch or shrink proportionally on x & y or get cut off, and will not stretch/shrink at different proportions.

Changing the CSS specification of <canvas> will change the size of drawn objects on canvas.
- if cvs.width == 1/2 * canvas width on CSS, e.offsetX == 1/2 * object coordinates when mouse points @ the object.
- Best Practice: match either {cvs.width == canvas width on CSS} or {cvs.height == canvas height on CSS}, declare the other cvs dimension as you see fit, and leave out the CSS specification for it.

event.x == e.pageX; event.y == e.pageY; both are coordinates relative to window size.

e.offsetX & e.offsetY are coordinates relative to the canvas
- they match coordinates of objects drawn on canvas regardless of cvs.width & cvs.height.
*/

const cvs = document.querySelector('canvas');
const c = cvs.getContext('2d');

/****** static parameters (unaltered by user inputs) ******/
cvs.width = 700;//window.innerWidth;//600
cvs.height = 700;//window.innerHeight;//800

fontsize = 12;
c.font = fontsize+"px Helvetica";
std_wh = 180; //240*500/640 = 3*500/8 = 1500/8 = 187.5
magn = 1; //magnification
Pad = 50;
colors = {
	"Sens_min": "0, 0, 255",
	"PPV_min": "0, 0, 255",
	"OR_pre": "0,0,225",
	"OR_post_pos": "0, 0, 255",
	"OR_post_neg": "0, 0, 255",
	"LR_pos_min": "0, 0, 255",
	"LR_neg_max": "0, 0, 255",
	"Prev": "0,0,225",
	"RoU":"0,0,225",
	"dot":"100,0,0",
	"hicolor": "192,192,192",
	"default": "0,0,0"
};
debug = document.getElementById("debug");//points to <p> element on HTML created for debug outputs

/****** Event listeners ******/
let mouse = {
	window_x: undefined,
	window_y: undefined,
	canvas_x: undefined,
	canvas_y: undefined
};
window.addEventListener('mousemove', function (e) {
	mouse.window_x = event.x;
	mouse.window_y = event.y;
	x_is_in = (event.x >= bRect.left && event.x <= bRect.left + bRect.width);
	y_is_in = (event.y >= bRect.top && event.y <= bRect.top + bRect.height);
	mouse.canvas_x = (x_is_in && y_is_in)? e.offsetX : undefined;
	mouse.canvas_y = (x_is_in && y_is_in) ? e.offsetY : undefined;
});
/*function pixelOnMouseMove(cvs,c,callback){
	cvs.addEventListener('mousemove',function(e){
		callback.apply(c,[e.offsetX, e.offsetY]);
	},false);
}
*/
/****** Style functions executed on HTML in-line events ******/
function Input2Label(){
	var labels = document.getElementsByTagName('LABEL');
	for (var i = 0; i < labels.length; i++) {
		if (labels[i].htmlFor != '') {
			 var elem = document.getElementById(labels[i].htmlFor);
			 if (elem)
				elem.label = labels[i];         
		}
	}
}

function HighlightLabelnInput(IDs){
	for(var i=0; i<IDs.length; i++){
		var inElem = document.getElementById("d"+IDs[i]);
		inElem.style.backgroundColor = "#ccc";
		//inElem.label.style.backgroundColor = "#ccc";
	}
}
function unHighlightLabelnInput(IDs){
	for(var i=0; i<IDs.length; i++){
		var inElem = document.getElementById("d"+IDs[i]);
		inElem.style.backgroundColor = '';
		//inElem.label.style.backgroundColor = '';
	}
}

/****** Shapes ******/
class Line {
	constructor(from_x, from_y, to_x, to_y, ID, label) {
		this.from_x = from_x;
		this.from_y = from_y;
		this.to_x = to_x;
		this.to_y = to_y;
		this.ID = ID;
		this.Style = "rgb("+colors[ID]+")";
		this.label = label;
		this.lineWidth = 1;
		this.length = Math.sqrt(Math.pow(this.from_x - this.to_x,2) + Math.pow(this.from_y - this.to_y,2))
	}
	draw = () => {
		c.strokeStyle = this.Style;
		c.fillStyle = this.Style;
		c.lineWidth = (this.hovered() && this.label !== false) ? this.lineWidth+2 : this.lineWidth;
		c.beginPath();
		c.moveTo(this.from_x, this.from_y);
		c.lineTo(this.to_x, this.to_y);
		c.stroke();
		c.closePath();
		c.lineWidth = 1;
		//temp_border = document.getElementById(this.ID).style.border;
		//temp_bg = document.getElementById(this.ID).style.background;
		if(this.hovered() && this.label !== false){
			this.showlabel();
			
			document.getElementById(this.ID).style.background="rgba("+colors[this.ID]+",0.2)";
			//debug.innerHTML = "box w/ ID = "+this.ID+" changed to "+document.getElementById(this.ID).style.border;
		}
		//The following clause is not ideal: in case several lines all point to the same box, it suppresses highlights of all non-last calls to the box.
		//instead, reset all input boxes right inside animate().
		/*else{
			document.getElementById(this.ID).style.border = "";
			document.getElementById(this.ID).style.background = "";
		}*/
	}
	hovered = () => {
		return (
			Math.sqrt(Math.pow(mouse.canvas_x - this.from_x,2) + Math.pow(mouse.canvas_y - this.from_y,2)) + 
			Math.sqrt(Math.pow(mouse.canvas_x - this.to_x,2) + Math.pow(mouse.canvas_y - this.to_y,2))
			- this.length <= 0.1
		);
	}
	showlabel = () =>{
		c.textAlign = "left";
		c.fillText(this.label,mouse.canvas_x+fontsize,mouse.canvas_y+fontsize);
		document.getElementById(this.ID).style.border="2px solid "+numstr2hex(colors[this.ID]);
	}
}
class Circle{
	constructor(x,y,r,fillStyle,label){
		this.x=x;
		this.y=y;
		this.r=r;
		this.fillStyle=fillStyle;
		this.label = label;
	}
	draw = () => {
	    c.fillStyle = this.fillStyle;
		if(this.hovered()){
			c.save();
			this.highlight(this.fillStyle);
			if(this.label !== false){this.showlabel();}
		}
		if(show_thresh){
			this.showlabel();
		}
	    c.beginPath();
		c.arc(this.x, this.y,
			this.r,
			0, Math.PI * 2, false
		); 
		c.closePath();
		c.fill();
		c.restore();
	}
	hovered = () => {
		return (Math.pow(mouse.canvas_x - this.x,2) + Math.pow(mouse.canvas_y - this.y,2) <= Math.pow(this.r,2));
	}
	highlight = (hicolor) => {
		this.fillStyle=hicolor;
		this.r += 2;
	}
	unhighlight = () =>{
		this.fillStyle = this.basefillStyle;
	}
	showlabel = () =>{
		//show the coordinate relative to the bounding box
		if(this.label !== false){
			c.textAlign = "right";
			c.fillText(this.label, this.x-this.r, this.y);
		}
	}
}
class UnitSquareCoordinate{
	constructor(wh, origin_x, origin_y, dir_x, dir_y, forwardslash_yn, backslash_yn, label_x, label_y, label_x_whichaxis, label_y_whichaxis, label_x_lcr, label_y_lcr, title, fontsize){
	/*
	origin_x: coordinate of x relative to the bounding box
	origin_y: coordinate of y relative to the bounding box
	dir_x: compression/dilation/directionality of x axis. Negative dir_x puts larger x on the left of origin. Larger absolute value of dir_x "stretches" the x axis such that the same x value is farther from origin. Positive value means larger x points RIGHT.
	dir_y: same deal as dir_x but for y axis. Positive value means larger y points UP.
	label_x: string to label the x axis
	label_y: string to label the y axis
	label_x_whichaxis: 0 (usual) or 1 (along y=1)
	label_y_whichaxis: 0 (usual) or 1 (along x=1)
	label_x_lcr: e.g. 0 (draw at x=0), 0.5 (draw at x=0.5), 1 (draw at x=1)
	label_y_lcr: e.g. 0 (draw at y=0), 0.5 (draw at y=0.5), 1 (draw at y=1)
	*/
		this.wh = wh;
		this.fontsize = fontsize;
		this.lineheight = this.fontsize+2;
		this.origin_x = origin_x;
		this.origin_y = origin_y;
		this.dir_x = dir_x;
		this.dir_y = dir_y;
		this.forwardslash = forwardslash_yn;
		this.backslash = backslash_yn;
		this.label_x = label_x;
		this.label_y = label_y;
		this.label_x_whichaxis = label_x_whichaxis;
		this.label_y_whichaxis = label_y_whichaxis;
		this.label_x_lcr = label_x_lcr;
		this.label_y_lcr = label_y_lcr;
		this.title = title;
	}
	draw = () => {
		c.strokeStyle="#000000";
		//c.fillStyle="#ffffff";
		/** draw the bounding box **/
		c.strokeRect(this.origin_x, this.origin_y, this.wh * this.dir_x, -this.wh * this.dir_y);
		/** draw the diagonal **/
		if(this.backslash){
			c.save();
			c.setLineDash([5]);
			c.beginPath();
			c.moveTo(this.origin_x, this.origin_y - this.wh*this.dir_y);
			c.lineTo(this.origin_x + this.wh*this.dir_x, this.origin_y);
			c.stroke();
			c.closePath();
			c.restore();
			c.save();
		}
		if(this.forwardslash){
			c.save();
			c.setLineDash([5]);
			c.beginPath();
			c.moveTo(this.origin_x, this.origin_y);
			c.lineTo(this.origin_x + this.wh*this.dir_x, this.origin_y - this.wh*this.dir_y);
			c.stroke();
			c.closePath();
			c.restore();
			c.save();
		}
		/** draw the axis labels **/
		c.textAlign = "center";
		c.fillStyle="#000000";
		c.fillText("0",
			this.origin_x - this.lineheight/2 * (this.dir_x/Math.abs(this.dir_x)),
			this.origin_y + this.lineheight/2 * (this.dir_y/Math.abs(this.dir_y))
		);
		c.fillText("1",
			this.origin_x + this.wh*this.dir_x + this.lineheight/2 * (this.dir_x/Math.abs(this.dir_x)),
			this.origin_y - this.wh*this.dir_y - this.lineheight/2 * (this.dir_y/Math.abs(this.dir_y))
		);
		c.fillText(((this.dir_x<0) ? "←":'')+this.label_x+((this.dir_x>0) ? "→":''),
			this.origin_x + this.wh*this.dir_x*this.label_x_lcr,
			this.origin_y - this.label_x_whichaxis * this.wh*this.dir_y + ((this.dir_y * (this.label_x_whichaxis-0.5) < 0)?this.lineheight:-4)
		);
		c.save();
		c.translate(
			this.origin_x + this.label_y_whichaxis * this.wh*this.dir_x + ((this.dir_x * (this.label_y_whichaxis-0.5) > 0)?this.lineheight:-4),
			this.origin_y-this.wh*this.dir_y*this.label_y_lcr
		);
		c.rotate(-Math.PI/2);
		c.fillText(((this.dir_y<0) ? "←":'')+this.label_y+((this.dir_y>0) ? "→":''),0,0);
		c.restore();
		c.save();
		/** draw title **/
		if(this.title != false){
			c.font = c.font.replace(/^\d+/g,"14");
			c.fillText(this.title,
				this.origin_x + this.wh*this.dir_x/2,
				this.origin_y - this.wh*this.dir_y - this.lineheight
			);
			c.restore();
			c.save();
		}
	}
}

class Circle_array{
	constructor(origin_x, origin_y, unit_w, unit_h, ROC_table, col_x, col_y){
		/*
		Provided that ROC_table has the columns starting with 0 = threshold...
		col_x = 3, col_y = 1 for ROC curve and its expansions/contractions
		col_x = 1, col_y = 6 for PRC curve
		*/
		this.fillStyle = "rgba("+colors["dot"]+", 1)";
		this.origin_x = origin_x;
		this.origin_y = origin_y;
		this.unit_w = unit_w;
		this.unit_h = unit_h;
		this.r = 3;

		this.dots = new Array(ROC_table.length);
		for(var i=0; i<ROC_table.length; i++){
			this.dots[i] = new Circle(
				origin_x + unit_w * parseFloat(ROC_table[i][col_x]),
				origin_y - unit_h * parseFloat(ROC_table[i][col_y]),
				this.r,this.fillStyle,
				ROC_table[i][0]
			);
		}
	}
	draw = () => {
		this.dots.forEach(dot => {dot.draw();});
	}
	ondot = () =>{//returns the index of the dot hovered by mouse
		for(var i=0; i<this.dots.length; i++){
			if(this.dots[i].hovered()){
				return i;
			}
		}
		return false;	
	}
}

function drawSens_min_ROC(origin_x, origin_y, unit_w, unit_h, Sens_min){
	Sens_min_bar_ROC = new Line(
		origin_x,
		origin_y - unit_h * Sens_min,
		origin_x + unit_w,
		origin_y - unit_h * Sens_min,
		"Sens_min",
		"minimal acceptable Sens"
	);
	Sens_min_bar_ROC.draw();
}
function Sens_min_ROC_region(origin_x, origin_y, unit_w, unit_h, Sens_min){
	let p = new Path2D();
	p.moveTo(origin_x, origin_y - unit_h * Sens_min);
	p.lineTo(origin_x + unit_w, origin_y - unit_h * Sens_min);
	p.lineTo(origin_x + unit_w, origin_y - unit_h);
	p.lineTo(origin_x, origin_y - unit_h);
	return p;
}
/****** Calculations ******/

function text2table(text,OR_pre){
	/*
	get raw table = a 2D array with first dimension = row, 2nd dimension = column {0=threshold, 1=Sens, 2=Spec}
	generate X = 1-Spec from Spec in column 3
	generate LR+ & LR- & PPV & NPV at each threshold
	???NOT DONE: reorganize according to increasing X???
	*/
	var rows = text.split("\n");
	var ROCtable = [];
	//words="";
	ROCtable.push([
		Number.POSITIVE_INFINITY,
		0,1,0,
		Number.POSITIVE_INFINITY,1,
		1,1/(1+OR_pre)
	]);
	for(i=1; i<rows.length+1; i++){
		ROCtable.push(rows[i-1].split(/[\s\t,]+/).concat([0.0, 0.0, 0.0, 0.0, 0.0]));
		ROCtable[i][3]=1-ROCtable[i][2];
		ROCtable[i][4]=ROCtable[i][1]/ROCtable[i][3];//LR+ = Sens/(1-Spec)
		ROCtable[i][5]=(1-ROCtable[i][1])/ROCtable[i][2];//LR- = (1-Sens)/Spec
		ROCtable[i][6]=ROCtable[i][3]==0?1:ROCtable[i][4]/(ROCtable[i][4]+1/OR_pre);//PPV = LR+ / (LR+ + 1/OR_prev) if FP is nonzero, otherwise 1
		ROCtable[i][7]=1/(1+ROCtable[i][5]*OR_pre);//NPV = 1 / (1 + LR- * OR_prev)
	}
	ROCtable.push([
		Number.NEGATIVE_INFINITY,
		1,0,1,
		1,0,
		OR_pre/(1+OR_pre),1
	]);
	//words="size of table array is "+ROCtable.length+" x "+ROCtable[0].length+"<br>";
	//words+="0th row 3th col value should be "+(1-ROCtable[0][2])+" but is "+ROCtable[0][3];
	return ROCtable;
}
function numstr2hex(color){
	var rgb_split = color.split(/,\s*/);
	var hexstr = "#";
	for(var c=0; c<rgb_split.length; c++){
		hexstr += parseInt(rgb_split[c]).toString(16).padStart(2,0);
	}
	return hexstr;
}
function roundToDig(input,ndig){
	return Math.round(input*Math.pow(10,ndig))/Math.pow(10,ndig);
}

/************************* EXECUTE *************************/

/****** dynamic elements (altered by user inputs) ******/
function animate() {
	requestAnimationFrame(animate);
	bRect = cvs.getBoundingClientRect();

	/****** dynamic parameters ******/
	Sens_min = parseFloat(document.getElementById("Sens_min").value);
	Prev = parseFloat(document.getElementById("Prev").value);
	OR_pre = Prev/(1-Prev);
	document.getElementById("OR_pre").value = roundToDig(OR_pre,3);

	PPV_min = parseFloat(document.getElementById("PPV_min").value);
	NPV_min = parseFloat(document.getElementById("NPV_min").value);

	LR_pos_min = PPV_min/(1-PPV_min)/OR_pre;
	LR_neg_max = (1-NPV_min)/NPV_min/OR_pre;
	document.getElementById("LR_pos_min").value = roundToDig(LR_pos_min,3);
	document.getElementById("LR_neg_max").value = roundToDig(LR_neg_max,3);

	OR_post_pos = OR_pre * LR_pos_min;
	OR_post_neg = OR_pre * LR_neg_max;
	document.getElementById("OR_post_pos").value = roundToDig(OR_post_pos,3);
	document.getElementById("OR_post_neg").value = roundToDig(OR_post_neg,3);

	show_FNvTN = (document.getElementById("showhide_FNvTN").checked)?true:false;
	show_Sens_min = (document.getElementById("showhide_Sens_min").checked)?true:false;
	show_PPV_min = (document.getElementById("showhide_PPV_min").checked)?true:false;
	show_thresh = (document.getElementById("showhide_thresh").checked)?true:false;
	ROC_text = document.getElementById("ROC_text").value;
	ROC_table = text2table(ROC_text,OR_pre);
	
	//reset input boxes' styles after hovering
	for(var key in colors){
		if(document.getElementById(key)){
			document.getElementById(key).style.border = "";
			document.getElementById(key).style.background = "";
		}
	}

	/****** bg box draw ******/
	// without a filled bg color, all drawn objects look pixelated at their edges
	c.fillStyle = "#fff";
	c.fillRect(0, 0, cvs.width, cvs.height);

	/****** RoU legend draw ******/
	legend_left = Pad*3+std_wh*2+fontsize;
	legend_top = Pad;
	c.fillStyle = "rgba("+colors["RoU"]+",0.2)";
	c.fillRect(legend_left, legend_top, fontsize*2, fontsize*2);
	c.textAlign="left";
	c.fillStyle="#000";
	c.fillText(" = region of utility",legend_left+fontsize*2,legend_top+fontsize*1.25);
	line_legend = new Line(
		legend_left, legend_top+fontsize*3,
		legend_left+fontsize*2, legend_top+fontsize*3,
		"RoU", false);
	line_legend.draw();
	c.fillStyle="#000";
	c.fillText(" = boundaries", legend_left+fontsize*2, legend_top+fontsize*3);
	c.fillText(" hover to show definition", legend_left+fontsize*2, legend_top+fontsize*4);
	dot_legend = new Circle(
		legend_left+fontsize, legend_top+fontsize*5.75, 3, "rgb("+colors["dot"]+")", false
	);
	dot_legend.draw();
	c.textAlign="left";
	c.fillStyle="#000";
	c.fillText(" = coordinates",legend_left+fontsize*2, legend_top+fontsize*6);
	c.fillText(" hover to show threshold",legend_left+fontsize*2, legend_top+fontsize*7);

	/****** unit squares for ROC curve ******/
	ROCframe = new UnitSquareCoordinate(std_wh,
		Pad, std_wh+Pad, magn, magn,
		true, false,
		"1-Spec", "Sens", 0,0,0.5,0.5,
		"The ROC Curve", fontsize
	);
	ROCframe.draw();

	/****** ROC LR+ slope (equivalent to OR_post_pos on TPvFP/FNvTN) ******/
	LR_pos_min_line = new Line(
		ROCframe.origin_x, ROCframe.origin_y,
		ROCframe.origin_x + ROCframe.wh * ROCframe.dir_x / Math.max(LR_pos_min,1),
		ROCframe.origin_y - ROCframe.wh * ROCframe.dir_y * Math.min(LR_pos_min,1),
		"LR_pos_min",
		"slope = minimal acceptable LR+"
	);
	if(show_PPV_min){
		LR_pos_min_line.draw();
	}
	/****** ROC minimal acceptable sensitivity ******/
	if(show_Sens_min){
		drawSens_min_ROC(
			ROCframe.origin_x, ROCframe.origin_y,
			ROCframe.wh * ROCframe.dir_x,
			ROCframe.wh * ROCframe.dir_y,
			Sens_min, fontsize
		);
	}
	/****** ROC LR- slope (equivalent to OR_post_neg on TPvFP/FNvTN) ******/
	LR_neg_max_line = new Line(
		ROCframe.origin_x + ROCframe.wh * ROCframe.dir_x,
		ROCframe.origin_y - ROCframe.wh * ROCframe.dir_y,
		ROCframe.origin_x + ROCframe.wh * ROCframe.dir_x * (1- 1/Math.max(LR_neg_max,1)),
		ROCframe.origin_y - ROCframe.wh * ROCframe.dir_y * (1-Math.min(LR_neg_max,1)),
		"LR_neg_max",
		"slope = maximal acceptable LR-"
	);
	if(show_FNvTN){LR_neg_max_line.draw();}
	
	/****** Clipping masks ******/
	//for minimal LR+
	let LR_pos_min_region = new Path2D();
	LR_pos_min_region.moveTo(ROCframe.origin_x, ROCframe.origin_y);
	LR_pos_min_region.lineTo(LR_pos_min_line.to_x, LR_pos_min_line.to_y);
	LR_pos_min_region.lineTo(ROCframe.origin_x + std_wh*magn, ROCframe.origin_y - std_wh*magn);
	LR_pos_min_region.lineTo(ROCframe.origin_x, ROCframe.origin_y - std_wh*magn);

	//for minimal Sens
	Sens_min_ROC_r = new Path2D();
	Sens_min_ROC_r = Sens_min_ROC_region(
		ROCframe.origin_x, ROCframe.origin_y,
		ROCframe.wh * ROCframe.dir_x, ROCframe.wh * ROCframe.dir_y,
		Sens_min
	);
	
	//for maximal LR+
	let LR_neg_max_region = new Path2D();
	LR_neg_max_region.moveTo(LR_neg_max_line.from_x, LR_neg_max_line.from_y);
	LR_neg_max_region.lineTo(LR_neg_max_line.to_x, LR_neg_max_line.to_y);
	LR_neg_max_region.lineTo(ROCframe.origin_x, ROCframe.origin_y);
	LR_neg_max_region.lineTo(ROCframe.origin_x, ROCframe.origin_y - ROCframe.wh * ROCframe.dir_y);

	//the fill area
	let ROC_fill = new Path2D();
	ROC_fill.moveTo(ROCframe.origin_x,ROCframe.origin_y);
	ROC_fill.lineTo(
		ROCframe.origin_x + ROCframe.wh * ROCframe.dir_x,
		ROCframe.origin_y - ROCframe.wh * ROCframe.dir_y,
	);
	ROC_fill.lineTo(
		ROCframe.origin_x, ROCframe.origin_y - ROCframe.wh * ROCframe.dir_y
	);

	//execute clipping & filling
	c.save();
	c.fillStyle="rgba("+colors["RoU"]+",0.2)";
	c.beginPath();
	if(show_PPV_min){c.clip(LR_pos_min_region);}
	if(show_Sens_min){c.clip(Sens_min_ROC_r);}
	if(show_FNvTN){c.clip(LR_neg_max_region);}
	c.fill(ROC_fill);
	c.restore();

	/****** contents for ROC curve, original scale ******/
	dots_ROC = new Circle_array(ROCframe.origin_x, ROCframe.origin_y, std_wh, std_wh, ROC_table, 3,1);
	dots_ROC.draw();

	/****** PRC frame ******/
	PRCframe = new UnitSquareCoordinate(std_wh,
		std_wh + Pad*2, std_wh+Pad, magn, magn,
		false, false,
		"Recall (= Sensitivity)", "Precision (= PPV)",0,0,0.5,0.5,
		"The P-R Curve", fontsize
	);
	PRCframe.draw();

	/****** draw Prev threshold line ******/
	PrevThresh_line = new Line(
		PRCframe.origin_x,
		PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y * OR_pre/(1+OR_pre),
		PRCframe.origin_x + PRCframe.wh * PRCframe.dir_x,
		PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y * OR_pre/(1+OR_pre),
		"Prev",
		"y=Prevalence (no-skill)"
	);
	PrevThresh_line.draw();

	/****** draw minimal acceptable PPV line ******/
	PPV_min_line = new Line(
		PRCframe.origin_x,
		PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y * PPV_min,
		PRCframe.origin_x + PRCframe.wh * PRCframe.dir_x,
		PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y * PPV_min,
		"PPV_min",
		"minimal acceptable PPV"
	);
	if(show_PPV_min){PPV_min_line.draw();}

	/****** draw minimal acceptable Sensitivity line ******/
	Sens_min_bar_PRC = new Line(
		PRCframe.origin_x + PRCframe.wh * PRCframe.dir_x * Sens_min,
		PRCframe.origin_y,
		PRCframe.origin_x + PRCframe.wh * PRCframe.dir_x * Sens_min,
		PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y,
		"Sens_min",
		"minimal acceptable Sens"
	);
	if(show_Sens_min){Sens_min_bar_PRC.draw();}
	
	/****** Clipping masks ******/
	//for minimal PPV
	let PPV_min_region = new Path2D();
	PPV_min_region.moveTo(PPV_min_line.from_x, PPV_min_line.from_y);
	PPV_min_region.lineTo(PPV_min_line.to_x, PPV_min_line.to_y);
	PPV_min_region.lineTo(
		PRCframe.origin_x + PRCframe.wh * PRCframe.dir_x,
		PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y
	);
	PPV_min_region.lineTo(PRCframe.origin_x, PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y);

	//for minimal Sens
	let Sens_min_PRC_r = new Path2D();
	Sens_min_PRC_r.moveTo(Sens_min_bar_PRC.from_x, Sens_min_bar_PRC.from_y);
	Sens_min_PRC_r.lineTo(Sens_min_bar_PRC.to_x, Sens_min_bar_PRC.to_y);
	Sens_min_PRC_r.lineTo(
		PRCframe.origin_x + PRCframe.wh * PRCframe.dir_x,
		PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y
	);
	Sens_min_PRC_r.lineTo(
		PRCframe.origin_x + PRCframe.wh * PRCframe.dir_x,
		PRCframe.origin_y
	);
	
	//the fill area: any area above the no-skill line
	let PRC_fill = new Path2D();
	PRC_fill.rect(
		PRCframe.origin_x, PRCframe.origin_y - PRCframe.wh * PRCframe.dir_y * Prev,
		PRCframe.wh * PRCframe.dir_x, -PRCframe.wh * PRCframe.dir_y * (1-Prev)
	);
	
	//execute clipping & filling
	c.save();
	c.fillStyle="rgba("+colors["RoU"]+",0.2)";
	c.beginPath();
	if(show_PPV_min){c.clip(PPV_min_region);}
	if(show_Sens_min){c.clip(Sens_min_PRC_r);}
	c.fill(PRC_fill);
	c.restore();
	
	/****** PRC points ******/
	dots_PRC = new Circle_array(PRCframe.origin_x, PRCframe.origin_y, std_wh, std_wh, ROC_table, 1,6);
	dots_PRC.draw();

	/****** unit squares for TP vs FP and FN vs TN curves ******/
	TPvFP = new UnitSquareCoordinate(std_wh,
		std_wh+Pad*2,
		(std_wh+Pad)*2+fontsize*2,
		magn, magn, false, true, "FP","TP",0,0,1,1,"Quad Composite",fontsize
	);
	TPvFP.draw();
	FNvTN = new UnitSquareCoordinate(std_wh,
		TPvFP.origin_x + std_wh/(1+OR_pre),
		TPvFP.origin_y - std_wh*OR_pre/(1+OR_pre),
		-magn,-magn, false, true, "TN", "FN", 0,0,1,1,false,fontsize
	);
	if(show_FNvTN){FNvTN.draw();}
	/****** OR_pre slope ******/
	OR_pre_line = new Line(
		(show_FNvTN) ? FNvTN.origin_x - std_wh*magn/Math.max(OR_pre,1) : TPvFP.origin_x,
		(show_FNvTN) ? FNvTN.origin_y + std_wh*magn*Math.min(OR_pre,1) : TPvFP.origin_y,
		TPvFP.origin_x + std_wh*magn/Math.max(OR_pre,1),
		TPvFP.origin_y - std_wh*magn*Math.min(OR_pre,1),
		"OR_pre",
		"slope = pretest OR"
	);
	OR_pre_line.draw();

	/****** minimal acceptable sensitivity slope ******/
	if(show_Sens_min){
		drawSens_min_ROC(
			TPvFP.origin_x, TPvFP.origin_y,
			FNvTN.origin_x - TPvFP.origin_x,
			TPvFP.origin_y - FNvTN.origin_y,
			Sens_min, fontsize
		);
	}
	/****** OR_post_pos slope ******/
	OR_post_pos_line = new Line(
		TPvFP.origin_x,
		TPvFP.origin_y,
		TPvFP.origin_x + std_wh*magn/Math.max(OR_post_pos,1),
		TPvFP.origin_y - std_wh*magn*Math.min(OR_post_pos,1),
		"OR_post_pos",
		"slope = minimal acceptable posttest OR+"
	);
	if(show_PPV_min){OR_post_pos_line.draw();}

	/****** OR_post_neg slope ******/
	OR_post_neg_line = new Line(
		FNvTN.origin_x,
		FNvTN.origin_y,
		FNvTN.origin_x - std_wh*magn/Math.max(OR_post_neg,1),
		FNvTN.origin_y + std_wh*magn*Math.min(OR_post_neg,1),
		"OR_post_neg",
		"slope = maximal acceptable posttest OR-"
	);
	if(show_FNvTN){OR_post_neg_line.draw();}

	/****** bounding box of ROC curve, if not shown already by FNvTN ******/
	if(!show_FNvTN){
		topLine = new Line(
			FNvTN.origin_x, FNvTN.origin_y, 
			TPvFP.origin_x, FNvTN.origin_y,
			"default",
			false
		);
		topLine.draw();
		rightLine = new Line(
			FNvTN.origin_x, FNvTN.origin_y,
			FNvTN.origin_x, TPvFP.origin_y,
			"default",
			false
		);
		rightLine.draw();
	}
	
	/****** Clipping masks ******/
	//for minimal Sens
	Sens_min_Comp_r = new Path2D();
	Sens_min_Comp_r = Sens_min_ROC_region(
		TPvFP.origin_x, TPvFP.origin_y,
		FNvTN.origin_x - TPvFP.origin_x,
		-(FNvTN.origin_y - TPvFP.origin_y),
		Sens_min
	);
	
	//for posttest OR+
	OR_post_pos_region = new Path2D();
	OR_post_pos_region.moveTo(TPvFP.origin_x, TPvFP.origin_y);
	OR_post_pos_region.lineTo(OR_post_pos_line.to_x, OR_post_pos_line.to_y);
	OR_post_pos_region.lineTo(TPvFP.origin_x + std_wh*magn, TPvFP.origin_y - std_wh*magn);
	OR_post_pos_region.lineTo(TPvFP.origin_x, TPvFP.origin_y - std_wh*magn);
	OR_post_pos_region.lineTo(TPvFP.origin_x, TPvFP.origin_y);

	//for posttest OR-
	OR_post_neg_region = new Path2D();
	OR_post_neg_region.moveTo(FNvTN.origin_x, FNvTN.origin_y);
	OR_post_neg_region.lineTo(OR_post_neg_line.to_x, OR_post_neg_line.to_y);
	OR_post_neg_region.lineTo(FNvTN.origin_x - std_wh*magn, FNvTN.origin_y + std_wh*magn);
	OR_post_neg_region.lineTo(FNvTN.origin_x - std_wh*magn, FNvTN.origin_y);
	OR_post_neg_region.lineTo(FNvTN.origin_x, FNvTN.origin_y);

	//the fill area
	/*
	Conceptually, these are the coordinates that the area boundary passes through:
	OR_pre_line left end
	(necessarily passes through TPvFP origin)
	(necessarily passes through FNvTN origin)
	OR_pre_line right end
	TPvFP (1,1)
	TPvFP (0,1)
	cross of y axis of TPvFP and x axis of FNvTN
	FNvTN (1,0)
	FNvTN (1,1)
	*/
	/*
	Comp_fill.moveTo(OR_pre_line.from_x, OR_pre_line.from_y);
	Comp_fill.lineTo(OR_pre_line.to_x, OR_pre_line.to_y);
	Comp_fill.lineTo(TPvFP.origin_x+std_wh*magn, TPvFP.origin_y-std_wh*magn);
	Comp_fill.lineTo(TPvFP.origin_x, TPvFP.origin_y - std_wh*magn);
	if(show_FNvTN){
		Comp_fill.lineTo(TPvFP.origin_x, FNvTN.origin_y);
		Comp_fill.lineTo(FNvTN.origin_x - std_wh*magn, FNvTN.origin_y);
		Comp_fill.lineTo(FNvTN.origin_x-std_wh*magn,FNvTN.origin_y+std_wh*magn);
	}
	*/
	let Comp_fill = new Path2D();
	Comp_fill.moveTo(TPvFP.origin_x, TPvFP.origin_y);
	Comp_fill.lineTo(FNvTN.origin_x, FNvTN.origin_y);
	Comp_fill.lineTo(TPvFP.origin_x, FNvTN.origin_y);
	
	//execute clip & fill
	c.save();
	c.fillStyle="rgba("+colors["RoU"]+",0.2)";
	c.beginPath();
	if(show_Sens_min){c.clip(Sens_min_Comp_r);}
	if(show_PPV_min){c.clip(OR_post_pos_region);}
	if(show_FNvTN){c.clip(OR_post_neg_region);}
	c.fill(Comp_fill);
	c.restore();

	/****** TPvFP points ******/
	dots_TPvFP = new Circle_array(TPvFP.origin_x, TPvFP.origin_y,
		FNvTN.origin_x-TPvFP.origin_x,
		TPvFP.origin_y-FNvTN.origin_y,
		ROC_table, 3, 1
	);
	dots_TPvFP.draw();

	/****** control point appearance across Circle_arrays ******/
	dot_arrays = [];
	on_any_dot = false;
	for(objkey in this) {
		obj = this[objkey];
		if (!(obj instanceof Circle_array)) {continue;}
		if(obj.ondot() !== false){
			on_any_dot = obj.ondot();
			break;
		}
	}
	if(on_any_dot !== false){
		for(objkey in this) {
			obj = this[objkey];
			if (!(obj instanceof Circle_array)) {continue;}
			obj.dots[on_any_dot].showlabel();
		}			
	}
	/****** debug text output ******/
	c.textAlign = "left";
	c.fillStyle="#000000";
	
	c.fillText(words,0,fontsize);
	//c.fillText("window_x: "+mouse.window_x+" window_y: "+mouse.window_y,0,fontsize);
	//c.fillText("canvas_x: "+mouse.canvas_x+" canvas_y: "+mouse.canvas_y,0,fontsize*2);
	//c.fillText("bounding rectangle - left: "+bRect.left+" top: "+bRect.top+" width: "+bRect.width+" height: "+bRect.height,0,fontsize*3); //the window size
	//c.fillText("cvs.width: "+cvs.width+" cvs.height: "+cvs.height,0,fontsize*4);
	//c.fillText("ROC_table.length+2:"+(ROC_table.length+2),0,fontsize*5);
};

animate();
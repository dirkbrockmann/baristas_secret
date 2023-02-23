import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"

const paint = cfg.simulation.colors;

//const N = param.N;

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

const C = d3.scaleOrdinal().domain(["empty","water","coffee"])
	.range([cfg.simulation.empty_color,cfg.simulation.water_color,cfg.simulation.coffee_color])

const C_nomedium = d3.scaleOrdinal().domain(["empty","water","coffee"])
	.range([cfg.simulation.coffee_color,cfg.simulation.water_color,cfg.simulation.coffee_color])


function agent_color(a){
	return param.orli_switch.widget.value() & a.state=="water" ? d3.interpolateRainbow((a.time % 50)/50) : param.hide_medium.widget.value() ? C_nomedium(a.state) : C(a.state);
}

var ctx,dL,W,H;

const update = (display,config) => {
	
	agents.forEach(d=>{
		const c = d.cell();
		
		const color = agent_color(d);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
	
	ctx.strokeStyle = "black";
	ctx.lineWidth = 4;
	ctx.strokeRect(0, 0, W, H);
}

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	ctx.clearRect(0, 0, W, H);
	agents.forEach(d=>{
		const c = d.cell();
		
		const color = agent_color(d);
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
	
	ctx.strokeStyle = "black";
	ctx.lineWidth = 4;
	ctx.strokeRect(0, 0, W, H);
	
}

const go = (display,config) => {
	
	//
	
	agents.filter(a=>a.state=="water").forEach(d=>{
		const c = d.cell();
		
		//const color = C(d.state);
		const color = agent_color(d)
		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
	
	ctx.strokeStyle = "black";
	ctx.lineWidth = 4;
	ctx.strokeRect(0, 0, W, H);

	
}


export {initialize,go,update}

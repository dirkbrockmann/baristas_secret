
import param from "./parameters.js"
import {each,range,map,mean} from "lodash-es"
import {dist} from "./utils"
import {square} from "lattices"
import cfg from "./config.js"


var agents = [];

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
	
	
	const N = param.N;
	
	const s = square(N).boundary("dirichlet").hood("n4")
	
	agents = s.nodes;
	
	agents.forEach(a=>{
		if (Math.random() < param.porosity.widget.value()) {
			a.state = "empty"
		} else {
			a.state = "coffee"
		}
	})
	
	agents.filter(a=>{return dist(a,{x:0,y:0})<cfg.simulation.initial_waterdrop/param.N}).forEach(a=>{a.state="water";a.time=0})

	
};

const go  = () => {
	
	param.tick++;
	let stillroom = false;
	
	const water = agents.filter(a=>a.state=="water").forEach(a=>{
		const empty = a.neighbors.filter(b=>b.state=="empty");
		if (empty.length > 0) {stillroom = true}
		empty.forEach(b=>{b.state="water"; b.time=param.tick})
	})
	return stillroom;
}

const update = () => {
	

}

export {agents,initialize,go,update}

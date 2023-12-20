import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"
import {round} from "lodash-es"


var timer = {}

const startstop = (display,controls,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,controls,config),cfg.simulation.delay) : timer.stop()

}

export default (display,controls,config) => {
	
	ct.reset.update(()=>{
		initialize(display,config)
		controls.select("#button_play").transition(1000).style("opacity",1)
		 controls.select("#button_play").selectAll("*")
	 		.style("pointer-events",null)
	})	
	ct.go.update(()=>startstop(display,controls,config))	
	
	param.porosity.widget.update_end(()=>{
		initialize(display,config)
		controls.select("#text")
		.text(round(param.porosity.widget.value()*100,2).toFixed(2)+"%")
	})
	param.porosity.widget.update(()=>{
		controls.select("#text")
		.text(round(param.porosity.widget.value()*100,2).toFixed(2)+"%")
	})
	param.hide_medium.widget.update(()=>update(display,config))
	param.orli_switch.widget.update(()=>update(display,config))
}



import * as widgets from "d3-widgets"
import {range,map,toPairs,round} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"


const variables = get_variables(parameters);
const booleans = get_booleans(parameters);

add_id_label(variables)
add_id_label(booleans)

const va = toArray(variables);
const bo = toArray(booleans);


const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
	
		);

const toggles = map(bo, 
		v => widgets.toggle()
					.id(v.id)
					.label(v.label)
					.value(v.default)
					.labelposition(cfg.widgets.toggle_label_pos)
		);

toggles[1].label("Orli's Magic Switch")

add_widget(bo,toggles);
add_widget(va,sliders);


const go = widgets.button().actions(["play","pause"]).size(cfg.widgets.button_size).id("play");
const reset = widgets.button().actions(["rewind"]).size(cfg.widgets.button_size);
		
const buttons = [go,reset];

export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,cfg.widgets.slider_anchor.y);
	const tg_pos=grid.position(range(2).map(i=>{
		return cfg.widgets.toggle_anchor.x+cfg.widgets.toggle_gap*i
	}),cfg.widgets.toggle_anchor.y)
	
	const text_pos = grid.position(cfg.widgets.text_anchor.x,cfg.widgets.text_anchor.y)

	controls.append("text").text(round(parameters.porosity.widget.value()*100,2).toFixed(2)+"%")
		.attr("transform","translate("+text_pos.x+","+text_pos.y+")")
		.style("font-size",cfg.widgets.textsize)
		.style("text-anchor","middle")
		.attr("id","text")

	toggles.forEach((tg,i) => tg.position(tg_pos[i]));
	
	
	sliders[0].position(sl_pos).labelposition(cfg.widgets.toggle_label_pos)
	
	go.position(grid.position(cfg.widgets.button_anchor.x,cfg.widgets.button_anchor.y))
	
	reset.position(grid.position(cfg.widgets.button_anchor.x+cfg.widgets.button_gap,cfg.widgets.button_anchor.y));

	controls.selectAll(null).data(sliders).enter().append(widgets.widget);
	controls.selectAll(null).data(toggles).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);

}

export {sliders,toggles,go,reset,variables,booleans}



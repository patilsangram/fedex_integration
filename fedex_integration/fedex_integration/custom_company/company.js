cur_frm.set_query('uom', function(){
	return {
		"filters": [
			["UOM", "name", "in", ["", "Kg","LB"]],
		]
	};
});
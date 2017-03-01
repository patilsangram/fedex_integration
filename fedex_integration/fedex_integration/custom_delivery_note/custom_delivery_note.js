frappe.ui.form.on("Delivery Note", {
	setup: function(frm) {
		frm.set_query('warehouse', 'items', function(doc, cdt, cdn) {
			var row  = locals[cdt][cdn];
			var filters = erpnext.queries.warehouse(frm.doc);
			if(row.item_code){
				$.extend(filters, {"query":"fedex_integration.fedex_integration.custom_packing_slip.custom_packing_slip.warehouse_query"});
				filters["filters"].push(["Bin", "item_code", "=", row.item_code]);
			}
			return filters
		});
	}
});

cur_frm.add_fetch("item_code", "country_of_manufacture", "country_of_manufacture");
cur_frm.add_fetch("item_code", "country_code", "country_code");
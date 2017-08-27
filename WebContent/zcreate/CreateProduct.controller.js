sap.ui.controller("zcreate.CreateProduct", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcreate.CreateProduct
*/
	onInit: function() {

		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH24_PRODUCT_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
		this.getView().setModel(oModel);
	},
    
	createProduct : function(){
		// get the data from UI
		var data = {
		       ProductID : this.getView().byId("idProd").getValue(),
		       Name : this.getView().byId("idName").getValue(),
		       Category : this.getView().byId("idCategory").getValue(),
		       SupplierID : this.getView().byId("idSupplier").getValue()
		
		};
       // create to odataservice
		var oModel = this.getView().getModel();
		
		oModel.create("/ProductSet", data, {
			success : function(){
				sap.m.MessageToast.show("Data Created");
			},
			error : function(){
				sap.m.MessageToast.show("Data Not Created, contact Adminstrator");
			}
		} )
		
	}

});
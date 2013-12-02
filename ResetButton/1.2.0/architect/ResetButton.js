{
    classAlias: "widget.resetbutton",
    className: "Ext.ux.ResetButton", 
    inherits: "Ext.button.Button",
    autoName: "MyResetButton",
    validParentTypes:["form", "toolbar"], 
	disableInitialView:true,

    "toolbox": {
        "name": "Reset Button",
        "category": "Buttons",
        "groups": ["Standard","Forms"]
    },

    configs: [],
    listeners:[{
	name: "click",
	fn: "onResetButtonClick"
	}]
}
Ext.define('Ext.ux.ResetButton', {
    extend: 'Ext.button.Button',
    alias: 'widget.resetbutton',

    text: 'Cancella',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                click: {
                    fn: me.onResetbuttonClick,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onResetbuttonClick: function(button, e, eOpts) {
        var form=button.up('form');
        form.getForm().reset();
    }

});
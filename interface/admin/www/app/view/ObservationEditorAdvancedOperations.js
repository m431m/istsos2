/*
 * File: app/view/ObservationEditorAdvancedOperations.js
 * Date: Tue May 15 2012 17:17:30 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */

Ext.define('istsos.view.ObservationEditorAdvancedOperations', {
    extend: 'istsos.view.ui.ObservationEditorAdvancedOperations',
    
    /**
     * config: {
     *      istgrid: Ext.grid.panel,
     *      obsprop: String # selected observed property
     * }
     */
    initComponent: function() {
        var me = this;
        me.callParent(arguments);
        Ext.getCmp("oeaTf").on("keyup", function(tf, ev, eOpts ){
            // User has pressed "ENTER" key ?
            if (ev.keyCode==13) { 
                var val = tf.getValue();
                // Get an array of the currently selected records.
                var recs = this.istGrid.getSelectionModel().getSelection();
                for (var i = 0; i < recs.length; i++) {
                    console.dir(recs[i]);
                    var x = recs[i].get(this.istConfig.selectedProperty);
                    x = eval(val);
                    recs[i].set(this.istConfig.selectedProperty,x);
                }
            }
        },this);
    }
});
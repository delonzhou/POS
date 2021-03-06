Ext.define('POS.store.chart.transaction.Daily', {
    extend: 'Ext.data.Store',
    fields: [
        {name: 'date',      type: 'date',   format: 'Y-m-d'},
        {name: 'sales',     type: 'int'},
        {name: 'purchase',  type: 'int'}
    ],
    
    init: function(){
        this.setProxy({
            type: 'websocket',
            storeId: this.getStoreId(),
            websocket: Ext.ws.Main,
            api: {
                read: 'chart/dailyTransaction'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        });
    },
    
    listeners: {
        'beforepush': function(store){
            store.removeAll();
        }
    }
    
});
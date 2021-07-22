module.exports = (sequelize, dataTypes) => {
    let alias = 'Order';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        user_id: {
        type: dataTypes.BIGINT(10),
        },
        
        total: {
            //decimal
                      
        type: dataTypes.DECIMAL(3,1),
        },
        
        
        date: {
        // date
        type: dataTypes.DATE,
        },
      
        
    };
    
    let config = {
        tableName: 'orders',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Order = sequelize.define(alias, cols, config); 

    
    

    return Order
    
};




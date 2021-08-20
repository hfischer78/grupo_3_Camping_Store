module.exports = (sequelize, dataTypes) => {
    let alias = 'Category_Products';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        product_id: {
        type: dataTypes.BIGINT(10)

        },

        category_id: {
        type: dataTypes.BIGINT(10)

        },

        deleted_at: {
            
            type: dataTypes.DATE, 
                // field: "deleted_at" 
            }
        
    };
    
    let config = {
        tableName: 'categories_products',
        timestamps: false,
        
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Category_Product = sequelize.define(alias, cols, config); 

      

    return Category_Product
};




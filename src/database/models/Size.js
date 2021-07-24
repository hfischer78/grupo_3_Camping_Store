module.exports = (sequelize, dataTypes) => {
    let alias = 'Sizes';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        size: {
        type: dataTypes.STRING(100),
        },

        deleted_at: {
            
            type: dataTypes.DATE, 
                // field: "deleted_at" 
            }
        
               
    };
    
    let config = {
        tableName: 'sizes',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Size = sequelize.define(alias, cols, config); 

     Size.associate = function (models) {
         Size.hasMany(models.Products, { 
                  as: "products",
                  foreignKey: 'size_id',
                //  timestamps: false
         })
     }    
    

    return Size
};




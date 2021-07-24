module.exports = (sequelize, dataTypes) => {
    let alias = 'Colors';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        color: {
        type: dataTypes.STRING(100),
        },

        deleted_at: {
            
            type: dataTypes.DATE, 
                // field: "deleted_at" 
            }
        
               
    };
    
    let config = {
        tableName: 'colors',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Color = sequelize.define(alias, cols, config); 

     Color.associate = function (models) {
         Color.hasMany(models.Products, { 
                  as: "product",
                  foreignKey: 'color_id',
                //  timestamps: false
         })
     }    
  
    return Color
};

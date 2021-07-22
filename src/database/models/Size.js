module.exports = (sequelize, dataTypes) => {
    let alias = 'Size';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        Size: {
        type: dataTypes.STRING(100),
        },
        
               
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
        Size.hasMany(models.Product, { 
                 as: "Product",
                 foreignKey: 'size_id',
               //  timestamps: false
        })
    }    
    

    return Size
};




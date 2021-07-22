module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        name: {
        type: dataTypes.STRING(100),
        },
        
        description: {

            //text
        type: dataTypes.STRING(100),
        },
        
        price: {
            // decimal
        type: dataTypes.DECIMAL(3,1),

        },

        color_id: {
        // int
        type: dataTypes.BIGINT,


        },

        size_id: {
        // int    
        type: dataTypes.BIGINT,

        },

        image: {
        // varchar   
        type: dataTypes.STRING, 

        }
        
    };
    
    let config = {
        tableName: 'products',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Product = sequelize.define(alias, cols, config); 

     Product.associate = function (models) {
         Product.belongsTo(models.Color, { 
              as: "Color",
              foreignKey: 'color_id',
             // timestamps: false
         })
     }



     Product.associate = function (models) {
        Product.belongsTo(models.Size, { 
             as: "Size",
             foreignKey: 'size_id',
            // timestamps: false
        })
    }


    Product.associate = function (models) {
        Product.belongsToMany(models.Category, { 
             as: "Category",
             through: 'Category_Product',
             foreignKey: 'product_id',
             otherKey: 'category_id',
             timestamps: false


        })
    }


    return Product
};

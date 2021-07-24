module.exports = (sequelize, dataTypes) => {
    let alias = 'Products';
    
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

        discount: {
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
        },

        deleted_at: {
            
        type: dataTypes.DATE, 
            // field: "deleted_at" 
        }
        
    };
    
    let config = {
        //underscore: true,
        // implica tratar como camel todas las columnas. productId
        tableName: 'products',
        timestamps: false,
        paranoid: true
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Product = sequelize.define(alias, cols, config); 

     Product.associate = function (models) {
         Product.belongsTo(models.Colors, { 
              as: "colors",
              foreignKey: 'color_id',
             // timestamps: false
         }),

         Product.belongsTo(models.Sizes, { 
              as: "sizes",
              foreignKey: 'size_id',
              // timestamps: false
        }),

          Product.belongsToMany(models.Categories, { 
              as: "categories",
              through: 'Category_Products',
              foreignKey: 'product_id',
              otherKey: 'category_id',
              timestamps: false
         })
    }




    // Product.associate = function (models) {
    //       Product.belongsTo(models.Sizes, { 
    //            as: "Sizes",
    //            foreignKey: 'size_id',
    //           // timestamps: false
    //       })
    // }


    //  Product.associate = function (models) {
    //      Product.belongsToMany(models.Categories, { 
    //           as: "Categories",
    //           through: 'Category_Products',
    //           foreignKey: 'product_id',
    //           otherKey: 'category_id',
    //           timestamps: false
    //     })
    // }


    return Product
};

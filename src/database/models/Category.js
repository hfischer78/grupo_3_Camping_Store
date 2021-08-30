module.exports = (sequelize, dataTypes) => {
    let alias = 'Categories';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING(100)
        
        },

        
    };
    
    let config = {
        tableName: 'categories',
        timestamps: false,
        
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Category = sequelize.define(alias, cols, config); 

    Category.associate = function (models) {
   
        Category.belongsToMany(models.Products, { 
        as: "products",
        through: 'Category_Products',
        foreignKey: 'category_id',
        otherKey: 'product_id',
        //timestamps: false
        
   })
  

    //  Product.belongsToMany(models.Categories, { 
    //      as: "categories",
    //      through: 'Category_Products',
    //      foreignKey: 'product_id',
    //      otherKey: 'category_id',
    //      //timestamps: false
          
    // })
// }


    }

    return Category
};




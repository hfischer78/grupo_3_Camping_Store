module.exports = (sequelize, dataTypes) => {
    let alias = 'Order_Products';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        product_id: {
        type: dataTypes.BIGINT(10)

        },

        Order_id: {
        type: dataTypes.BIGINT(10)

        },
        
    };
    
    let config = {
        tableName: 'orders_products',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const Order_Product = sequelize.define(alias, cols, config); 

    // Actor.associate = function (models) {
    //     Actor.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
    //         as: "movies",
    //         through: 'actor_movie',
    //         foreignKey: 'actor_id',
    //         otherKey: 'movie_id',
    //         timestamps: false
    //     })
    

    return Order_Product
};




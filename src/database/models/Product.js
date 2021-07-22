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

    // Actor.associate = function (models) {
    //     Actor.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
    //         as: "movies",
    //         through: 'actor_movie',
    //         foreignKey: 'actor_id',
    //         otherKey: 'movie_id',
    //         timestamps: false
    //     })
    

    return Product
};




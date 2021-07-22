module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    
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

    // Actor.associate = function (models) {
    //     Actor.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
    //         as: "movies",
    //         through: 'actor_movie',
    //         foreignKey: 'actor_id',
    //         otherKey: 'movie_id',
    //         timestamps: false
    //     })
    

    return Category
};




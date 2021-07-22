module.exports = (sequelize, dataTypes) => {
  
  
  /// IMPORTANTE: AJUSTAR NOMBRE!! QUITANDO LA N. TENER CUIDADO HAY VARIABLES IGUALES EN OTROS ARCHIVOS.
  
    let alias = 'UserN';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        fist_name: {
        type: dataTypes.STRING(100),
        },
        

        last_name: {
            type: dataTypes.STRING(100),
        },
            
        email: {
            type: dataTypes.STRING(100),
        },

        password: {
            type: dataTypes.STRING(100),
        },

        avatar: {
            type: dataTypes.STRING(100),
        },

        user_type: {
            type: dataTypes.STRING(100),
        },

                
    };
    
    let config = {
        tableName: 'users',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const UserN = sequelize.define(alias, cols, config); 

    // Actor.associate = function (models) {
    //     Actor.belongsToMany(models.Movie, { // models.Movie -> Movies es el valor de alias en movie.js
    //         as: "movies",
    //         through: 'actor_movie',
    //         foreignKey: 'actor_id',
    //         otherKey: 'movie_id',
    //         timestamps: false
    //     })
    

    return UserN
};




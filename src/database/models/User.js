module.exports = (sequelize, dataTypes) => {
  
    let alias = 'Users';

    let cols = {
       
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        first_name: {
        type: dataTypes.STRING(200),
        },
        
        last_name: {
        type: dataTypes.STRING(200),
        },

        
        email: {
        type: dataTypes.STRING(200),
        },

        password: {
        type: dataTypes.STRING(200),
        },

        avatar: {
        type: dataTypes.STRING(300),
        },

        
        user_type: {
            type: dataTypes.TINYINT, 
            DEFAULT:0
        },

        deleted_at: {
        type: dataTypes.DATE, 
        }    
                
    };
    
    let config = {
        tableName: 'users',
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    
    const User = sequelize.define(alias, cols, config); 

    return User
};

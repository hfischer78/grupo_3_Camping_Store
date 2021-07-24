module.exports = (sequelize, dataTypes) => {
  
  
  /// IMPORTANTE: AJUSTAR NOMBRE!! QUITANDO LA N. TENER CUIDADO HAY VARIABLES IGUALES EN OTROS ARCHIVOS.
  
    let alias = 'UsersN';
    
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        first_name: {
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

    
    

    return UserN
};




module.exports = (sequelize, DataTypes) => {
    
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING(100),
            img: DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        }, 
        {
            tableName: "posts",
            timestamps: false
        }
    );

    Post.associate = (models) => {
        // relação N:1 (vários posts de um usuário)
        Post.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "usuarios_id"
        });
    };

    return Post;

}
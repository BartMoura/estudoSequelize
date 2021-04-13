const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');


// Usuario.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });


// Post.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });


// Comentario.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// Comentario.findOne({
//     where: {usuarios_id: 2}
// })
// .then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.findByPk(1).then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Post.findAll({
//     where: {
//         texto: {[Op.like]: '%oi%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//         order: [
//             ['id', 'ASC'] // ASC para crescente, DESC para decrescente
//         ],
//         limit: 2, // trás só os 2 primeiros do resultado
//         offset: 2 // trás a partir do 3
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'ASC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((user) => user.toJSON()));
//     });
//   }

// Usuario.create({
//     nome: 'Natalia',
//     email: 'nat@digitalhouse.com',
//     senha: 'maravilhosaaaa123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });
// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })
// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

// Usuario.create({
//     nome: 'Mariana Rebouças',
//     email: 'mariana@avanade.com',
//     senha: 'mari123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.create({
//     nome: 'Mariana Rebouças',
//     email: 'mariana@avanade.com',
//     senha: 'mari123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.create({
//     texto: 'Que sono...',
//     usuarios_id: 6,
//     n_likes: 21
// }).then((resultado) => {
// console.log(resultado.toJSON());
// });



// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Usuario.findAll().then((usuarios) => {
//     console.table(usuarios.map((usuario) => usuario.toJSON()));
// })

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()));
// });

// Usuario.findByPk(1, {include:['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// );

// Post.findByPk(1, {include:['comentarios']}).then(
//     post => {
//         console.log(post.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1, {include:['curtiu']}).then(
    post => {
        console.log(post.toJSON());
        sequelize.close();
    }
)



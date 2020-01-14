const axios = require('axios'); //pega informações de outras API's (do GitHub, no caso)
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
    async index(req,res) { // função para listar devs já cadastrados
        const devs = await Dev.find();

        return res.json(devs);
    },

    async store (req, res) { // função para casdastrar valores no banco de dados
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({github_username});

    if (!dev) { // procura se já existe um Dev cadastrado, se não os dados serão puxados para o banco de dados
        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };

     dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs : techsArray,
        location,
    });
    };

    

    return res.json(dev);
}}



// Funções de um Controller:

// index: mostrar uma lista de um recurso
// show: mostrar um único endereço de um recurso
// store: criar endereço
// update: alterar ''
// destroy: apagar ''
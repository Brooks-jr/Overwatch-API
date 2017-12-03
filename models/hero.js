const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/* HEROES SCHEMA & MODEL */
const HeroSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field required']
    },
    class: {
        type: String
    },
    health: {
        type: Number
    },
    shield: {
        type: Number
    },
    available: {
        type: Boolean,
        default: false
    }
    /* GEO LOCATION */
});

const Hero = mongoose.model('hero', HeroSchema);
module.exports = Hero;
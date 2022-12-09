const { Schema, model, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    nftName: { type: String, required: true, minlength: [5, 'Name must be at least 5 characters long' ] },
    imageUrl: { type: String, required: [true, 'Image URL is required'] },
    price: { type: Number, required: true, min: [0.01, 'Price must be a positive number'] },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long' ] },
    _ownerId: { type: ObjectId, ref: 'User', required: true }
});

const Item = model('Item', itemSchema);

module.exports = Item;
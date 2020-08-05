// Object Destructuring

const book = {
    name: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publication: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self' } = book.publication;

console.log(publisherName);

// Array Destructuring

const menu = ['Coffee', '$2.00', '$2.50', '$2.75'];

const [item, , mediumPrice] = menu;

console.log(`A medium ${item} costs ${mediumPrice}`);
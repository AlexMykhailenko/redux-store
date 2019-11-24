export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: '$28.48',
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'Release IT!',
            author: 'Michael T. Nigard',
            price: '$32.99',
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'Learning JavaScript Design Patterns',
            author: 'Addy Osmani',
            price: '$27.49',
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51GUOKqJP3L._SX379_BO1,204,203,200_.jpg'
        },
    ];

    // The method 'getBooks' returns a promise with data
    // or an artificial error the probability of which is 25%
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.data)
                }
            }, 700);
        });
    };
};

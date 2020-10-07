const messages = [
    "oscar",
    "ana",
    "jose",
    "jesica",
    "diego",
    "Laura",
    "Tamara",
    "Alvaro"
];

const randomMsg = () => {
    const message = messages[Math.floor(
        Math.random() * messages.length
    )]

    console.log(message)
};


module.exports = { randomMsg };
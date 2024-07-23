
var quoteContainer = document.getElementById("quoteContainer");
var btn = document.getElementById("btn");

var quote = [
    {
        text: "Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.",
        author: "Lucille Ball",
    },
    {
        text: "To love oneself is the beginning of a lifelong romance.",
        author: "Oscar Wilde",
    },
    {
        text: "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
        author: "Buddha",
    },
    {
        text: "Self-love, my liege, is not so vile a sin, as self-neglecting.",
        author: "William Shakespeare",
    },
    {
        text: "Don't forget to love yourself.",
        author: "Søren Kierkegaard",
    },
    {
        text: "Love yourself enough to set boundaries. Your time and energy are precious. You get to choose how you use it. You teach people how to treat you by deciding what you will and won’t accept.",
        author: "Anna Taylor",
    },
    {
        text: "You are imperfect, permanently and inevitably flawed. And you are beautiful.",
        author: "Amy Bloom",
    },
    {
        text: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
        author: "Rumi",
    },
    {
        text: "Self-love is an ocean and your heart is a vessel. Make it full, and any excess will spill over into the lives of the people you hold dear. But you must come first.",
        author: "Beau Taplin",
    },
    {
        text: "To fall in love with yourself is the first secret to happiness.",
        author: "Robert Morley",
    },
    {
        text: "You carry so much love in your heart. Give some to yourself.",
        author: "r.z.",
    },
    {
        text: "You are free, you are powerful, you are good, you are love, you have value, you have a purpose. All is well.",
        author: "Abraham Hicks",
    },
    {
        text: "Self-love is not selfish; you cannot truly love another until you know how to love yourself.",
        author: "Mohamed Adel",
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln",
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        text: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        text: "The best preparation for tomorrow is doing your best today.",
        author: "H. Jackson Brown Jr.",
    },
    {
        text: "Patience is bitter, but its fruit is sweet.",
        author: "Aristotle",
    },
    {
        text: "The seeking of knowledge is obligatory for every Muslim.",
        author: "Prophet Muhammad (PBUH)",
    },
    {
        text: "The greatest jihad is to battle your own soul, to fight the evil within yourself.",
        author: "Prophet Muhammad (PBUH)",
    },
    {
        text: "The strongest among you is the one who controls his anger.",
        author: "Prophet Muhammad (PBUH)",
    },
];


function quoteGenerator(quote) {
    var randomIndex = Math.floor(Math.random() * quote.length);
    var text = quote[randomIndex].text
    var author = quote[randomIndex].author
    quoteContainer.innerHTML = `<P id='text'>${text}</P>
    <P id = 'author' >${author}</P>`
}



// In this file you can specify the trial data for your experiment


const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ],
    snellen: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'C',
            option2: 'D',
            option3: 'H',
            option4: 'K',
            option5: 'N',
            option6: 'O',
            option7: 'R',
            option8: 'S',
            option9: 'V',
            option10: 'Z',
            correct: 'C'
        },
    ],
    snellen2: [
        {
            question: "What letter do you see, dude?",
            picture: "images/question_mark_02.png",
            min_chars: 0,
        },
    ],
    ishihara: [
        {
            question: "What number do you see, dude?",
            picture: "images/weather.jpg",
            min_chars: 0,
        },
    ],
    b1_exp: [
        {
            question: "How much do you like this picture?",
            picture: "images/question_mark_02.png",
            optionLeft:  'very bad',
            optionRight: 'very good',
        },
    ],
    b2_exp: [
        {
            question: "How well do you think you are able to identify patterns in this picture?",
            picture: "images/weather.jpg",
            optionLeft:  'not at all',
            optionRight: 'very much'
        },
    ],

};

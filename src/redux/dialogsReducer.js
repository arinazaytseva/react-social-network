const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Настюша'},
        {id: 2, name: 'Сева'},
        {id: 3, name: 'Мама'},
        {id: 4, name: 'Алисик'}
    ],
    messages:[
        {id: 1, text: 'Привет!', sender: 'me'},
        {id: 2, text: 'Привет. Как дела?', sender: 'friend'},
        {id: 3, text: 'У меня все отлично!', sender: 'me'},
        {id: 4, text: 'Люблю тебя. У меня замечательное настроение:\)', sender: 'friend'}
    ]
};

let stateCopy;
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 3,
                text: action.newMessageText,
                sender: 'me'
            }
            stateCopy = {...state};
            stateCopy.messages = [...state.messages, newMessage];
            stateCopy.newMessageText = '';
            return stateCopy;
        };
        default:
            return state;
    };
};

export const addMessageAC = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export default dialogsReducer;
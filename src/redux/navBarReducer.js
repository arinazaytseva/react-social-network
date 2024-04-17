let initialState = {
    friends: [
        {id: 1, name: 'Настюша'},
        {id: 2, name: 'Севанчик'},
        {id: 3, name: 'Мама'},
        {id: 4, name: 'Алисик'}
    ]
};

const navBarReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    };
};

export default navBarReducer;
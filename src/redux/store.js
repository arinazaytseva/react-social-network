import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navBarReducer from "./navBarReducer";


let store = {
    _state: {
        navBarElement: {
            friends: [
                {id: 1, name: 'Настюша'},
                {id: 2, name: 'Сева'},
                {id: 3, name: 'Мама'},
                {id: 4, name: 'Алисик'}
            ]
        },
        profilePage: {
            posts: [
                {id: 1, text: 'Сейчас я занимаюсь тем, что разрабатываю социальную сеть для того, чтобы изучить модуль React.'},
                {id: 2, text: 'Привет! Я занимаюсь разработкой проекта Finmanager. Данный проект помогает рационально расходовать и, соответственно, копить денежные средства.'},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            ],
            newMessageText: ''
        }
    },
    _callObserver() {
        console.log('State was changed.');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callObserver = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navBarElement = navBarReducer(this._state.navBarElement, action)

        this._callObserver(this._state);
    }
}

export default store;
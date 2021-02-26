import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _callObserver() {
    },
    _state: {
        profilePage: {
            postsData: [
                {id: 0, text: 'text', likes: 3},
                {id: 1, text: 'text2', likes: 11},
                {id: 2, text: 'text3', likes: 444}
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogsList: [
                {id: 1, name: 'Алина'},
                {id: 2, name: 'Никита'},
                {id: 3, name: 'Семён'},
                {id: 4, name: 'Настя'},
                {id: 5, name: 'Яна'},
            ],
            /*messages: [
                {id: 1, messages: [
                        {text: 'aa', date: new Date(2020,0,0,0,0,0,0)},
                        {text: 'bb', date: new Date(2021,0,0,0,0,0,0)},
                        {text: 'cc', date: new Date(2019,0,0,0,0,0,0)},
                    ]
                },
                {id: 2, messages: [
                        {text: 'aaa', date: new Date(2020,0,0,0,0,0,0)},
                        {text: 'bbb', date: new Date(2021,0,0,0,0,0,0)},
                        {text: 'ccc', date: new Date(2019,0,0,0,0,0,0)},
                    ]
                },
                {id: 3, messages: [
                        {text: 'aaaa', date: new Date(2020,0,0,0,0,0,0)},
                        {text: 'bbbb', date: new Date(2021,0,0,0,0,0,0)},
                        {text: 'cccc', date: new Date(2019,0,0,0,0,0,0)},
                    ]
                },
            ]*/
        },
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callObserver = observer;
    },

    dispatch(action) { // action = {type: 'ADD-POST'}
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);

        this._callObserver(this._state);
    },
};



export default store;

window.store = store;
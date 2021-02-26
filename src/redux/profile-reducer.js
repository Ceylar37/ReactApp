const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 0, text: 'text', likes: 3},
        {id: 1, text: 'text2', likes: 11},
        {id: 2, text: 'text3', likes: 444}
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            state.postsData.push({
                id: state.postsData[state.postsData.length - 1].id + 1,
                text: state.newPostText,
                likes: 0
            });
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const onInpChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
let initialState = {
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
}


const dialogsReducer = (state = initialState, action) => {

    return state;
}

export default dialogsReducer;
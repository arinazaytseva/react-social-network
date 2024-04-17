import profileReducer, { addPostAC } from "./profileReducer";


let state = {
    posts: [
        {id: 1, text: 'Сейчас я занимаюсь тем, что разрабатываю социальную сеть для того, чтобы изучить модуль/библиотеку React.'},
        {id: 2, text: 'Привет! Я занимаюсь разработкой проекта Finmanager. Данный проект помогает рационально расходовать и, соответственно, копить денежные средства.'},
    ]
};

it('New post should be added.', () => {
    // 1. Test data
    let action = addPostAC('I love Nastusha.');
    // 2. Action
    let newState = profileReducer(state, action);
    // 3. Expectation
    expect(newState.posts.length).toBe(3);
});
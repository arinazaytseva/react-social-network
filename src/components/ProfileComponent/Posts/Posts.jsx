import classes from './Posts.module.css';
import Post from './Post/Post';
// import NewPostContainer from './NewPost/NewPostContainer';
import NewPostComponent from './NewPostComponent/NewPostComponent';
import React from 'react';


const Posts = (props) => {
    let postsElements = (props.posts).map(post => <Post key={post.id} text={post.text} />).reverse();

    return (
        <div className={classes.posts}>
            <h2>My Posts</h2>
            {/* <NewPostContainer /> */}
            <NewPostComponent />
            {postsElements}
        </div>
    );
};


// const Posts = React.memo((props) => {
//     let postsElements = (props.posts).map(post => <Post key={post.id} text={post.text} />);

//     return (
//         <div className={classes.posts}>
//             <h2>My Posts</h2>
//             {/* <NewPostContainer /> */}
//             <NewPostComponent />
//             {postsElements}
//         </div>
//     );
// });
    // # Передача store или элементов store с помощью контекста
    // return (
    //     <StoreContext.Consumer>
    //         {
    //             (store) => {
    //                 let postsElements = (store.getState().profilePage.posts).map(post => <Post key={post.id} text={post.text} />);
    //                 return (
    //                     <div className={classes.posts}>
    //                         <h2>My Posts</h2>
    //                         <NewPostContainer state={store.getState()} dispatch={store.dispatch} />
    //                         {postsElements}
    //                     </div>
    //                 );
    //             }
    //         }
    //     </StoreContext.Consumer>
    // );

export default Posts;
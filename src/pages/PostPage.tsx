import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Header, Spinner } from "../components";
import { RootState } from "../redux";
import { fetchPostById, Post } from "../redux/posts";

type AppDispatch = ThunkDispatch<Post, number, AnyAction>
const PostPage = () => {
    const { postId } = useParams<{ postId: string }>();
    const dispatch: AppDispatch = useDispatch();
    const post = useSelector((state: RootState) => {
        return state.posts.data.find(post => post.id === parseInt(postId || ''));
    })

    useEffect(() => {
        dispatch(fetchPostById(parseInt(postId || '')));
    }, [dispatch, postId]);
    return (
        <div>
            {
                post ?
                    <Fragment>
                        <Header strong>{post.title}</Header>
                        <span>{post.body}</span>
                    </Fragment>
                    : <Spinner />
            }
        </div>
    )
}

export default PostPage;
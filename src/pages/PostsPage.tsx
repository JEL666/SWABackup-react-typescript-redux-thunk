import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Header } from "../components"
import PostList from "../components/PostList";
import { fetchAllPost } from "../redux/posts";

const PostsPage = () => {
    const dispatch = useDispatch<ThunkDispatch<any, void, AnyAction>>();

    useEffect(() => {
        dispatch(fetchAllPost());
    }, [dispatch]);

    return (
        <div>
            <Header>Posts</Header>
            <PostList />
        </div>
    )
}

export default PostsPage;
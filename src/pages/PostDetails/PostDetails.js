import {
  Box,
  CircularProgress,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCurrentPostAuthor,
  fetchCurrentPostComments,
  fetchSinglePost,
} from "../../redux/feature/blogSlice";
import CommentCard from "../../components/CommentCard";
import PostDetailHeader from "./PostDetailHeader";

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    currentPostComments,
    currentPost,
    isCurrentPostLoading,
    isCurrentPostCommentsLoading,
    currentPostAuthor,
  } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchSinglePost(id));
    dispatch(fetchCurrentPostAuthor(id));
    dispatch(fetchCurrentPostComments(id));
  }, []);
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <PostDetailHeader currentPost={currentPost} />
        <Box my={2}>
          {isCurrentPostLoading ? (
            <CircularProgress />
          ) : (
            <React.Fragment>
              <Typography
                variant="h5"
                textTransform={"capitalize"}
                gutterBottom
              >
                {currentPost?.title}
              </Typography>
              <Typography gutterBottom fontWeight={"bold"}>
                Author:- {currentPostAuthor[0]?.name}
              </Typography>
              <Typography variant="" textTransform={"capitalize"} gutterBottom>
                {currentPost?.body}
              </Typography>
            </React.Fragment>
          )}
        </Box>
        <Divider />
        <Box my={2}>
          <Typography variant="h5" fontWeight={"bold"}>
            {currentPostComments?.length} Comments
          </Typography>
          {isCurrentPostCommentsLoading ? (
            <CircularProgress />
          ) : (
            currentPostComments.map((comment, idx) => {
              return <CommentCard comment={comment} key={idx} />;
            })
          )}
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default PostDetails;

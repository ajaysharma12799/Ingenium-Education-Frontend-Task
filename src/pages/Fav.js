import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/Card";
import { removeFavPost } from "../redux/feature/blogSlice";
import { toast } from "react-toastify";

const Fav = () => {
  const dispatch = useDispatch();

  const { favPosts } = useSelector((state) => state.post);

  const handleRemoveFromFav = (id) => {
    dispatch(removeFavPost(id));
    toast.success("Removed From Favorite");
  };

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <Box my={3}>
          <Typography variant="h5" gutterBottom>
            Favorite
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {favPosts.length === 0 ? (
              <Box width={"100%"}>
                <Typography variant="h6" textAlign={"center"} gutterBottom>
                  No Favorite Post
                </Typography>
                <Box width={"fit-content"} mx={"auto"}>
                  <Button variant="contained">go to home</Button>
                </Box>
              </Box>
            ) : (
              favPosts.map((favPost, idx) => {
                return (
                  <PostCard
                    key={idx}
                    post={favPost}
                    type={"fav"}
                    handleRemoveFromFav={handleRemoveFromFav}
                  />
                );
              })
            )}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Fav;

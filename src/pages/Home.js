import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPost } from "../redux/feature/blogSlice";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import PostCard from "../components/Card";

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { loading, posts } = useSelector((state) => state.post);

  const filteredPosts = posts?.filter((post) =>
    post?.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchAllPost(page));
  }, [page]);

  return (
    <React.Fragment>
      <Container maxWidth={"xl"}>
        <Box my={2}>
          <TextField
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="outlined"
            fullWidth
            placeholder="Search..."
          />
        </Box>
        <Grid container spacing={2} my={1}>
          {loading ? (
            <CircularProgress />
          ) : (
            filteredPosts.map((post, idx) => {
              return <PostCard post={post} key={idx} />;
            })
          )}
        </Grid>
        <Stack direction={"row"} spacing={1} my={3}>
          {[1, 2, 3, 4, 5].map((val, idx) => {
            return (
              <Button
                variant="contained"
                key={idx}
                onClick={() => setPage((prev) => prev + 1)}
              >
                {val}
              </Button>
            );
          })}
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Home;

import { Stack, Link, Button } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavPost } from "../../redux/feature/blogSlice";
import { toast } from "react-toastify";

const PostDetailHeader = ({ currentPost }) => {
  const dispatch = useDispatch();
  const { favPosts } = useSelector((state) => state.post);

  const isPresent = favPosts?.find(
    (post) => post.title.toLowerCase() === currentPost?.title.toLowerCase()
  );

  const handleFav = () => {
    dispatch(addFavPost(currentPost));
    toast.success("Added to Favorite");
  };
  return (
    <Stack
      my={3}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Link
        component={RouterLink}
        to={"/"}
        sx={{ color: "white" }}
        underline="none"
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
        >
          Go Back
        </Button>
      </Link>
      <Button
        variant="outlined"
        color="secondary"
        endIcon={<FavoriteBorderIcon />}
        onClick={() => handleFav()}
        disabled={isPresent === undefined ? false : true}
      >
        {isPresent === undefined ? "add to favorite" : "added to favorite"}
      </Button>
    </Stack>
  );
};

export default PostDetailHeader;

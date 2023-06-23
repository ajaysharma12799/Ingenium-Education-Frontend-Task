import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const PostCard = ({ post, type, handleRemoveFromFav }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          component={"img"}
        />
        <CardContent>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            textTransform={"capitalize"}
            gutterBottom
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "1",
              WebkitBoxOrient: "vertical",
            }}
          >
            {post?.title}
          </Typography>
          <Typography
            variant="body1"
            textTransform={"capitalize"}
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "3",
              WebkitBoxOrient: "vertical",
            }}
          >
            {post?.body}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            component={RouterLink}
            to={`/post/${post?.id}`}
            sx={{ color: "white" }}
            underline="none"
            width={"100%"}
          >
            <Button
              endIcon={<ArrowForwardIcon />}
              variant="contained"
              fullWidth
            >
              Read More
            </Button>
          </Link>
        </CardActions>
        <CardActions>
          {type === "fav" && (
            <Button
              variant="outlined"
              color="error"
              fullWidth
              onClick={() => handleRemoveFromFav(post?.id)}
            >
              remove from favorite
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default PostCard;

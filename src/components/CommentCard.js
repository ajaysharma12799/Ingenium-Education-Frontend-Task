import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
const CommentCard = ({ comment }) => {
  return (
    <Box my={2}>
      <Card>
        <CardContent>
          <Stack direction={"row"} alignItems={"center"} spacing={1} my={1}>
            <Avatar>
              <PersonIcon />
            </Avatar>
            <Typography gutterBottom variant="body2" fontWeight={"bold"}>
              {comment?.email}
            </Typography>
          </Stack>
          <Typography gutterBottom textTransform={"capitalize"}>
            {comment?.body}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CommentCard;

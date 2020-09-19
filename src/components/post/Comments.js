import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// import MyButton from "../../util/MyButton";
// import LikeButton from "./LikeButton";
// import Comments from "./Comments";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
//MUI Stuff
// import Dialog from "@material-ui/core/Dialog";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Icons
// import CloseIcon from "@material-ui/icons/Close";
// import UnfoldMore from "@material-ui/icons/UnfoldMore";
// import ChatIcon from "@material-ui/icons/Chat";
// Redux Stuff
// import { connect } from "react-redux";
// import { getScream } from "../../redux/actions/dataActions";

const styles = (theme) => ({
  ...theme.styling,
  commentImage: {
    maxWidth: "100%",
    height: 100,
    objectFit: "cover",
    borderRadius: "50%",
  },
  commentData: {
    marginLeft: 20,
  },
});

class Comments extends Component {
  render() {
    const { comments, classes } = this.props;
    return (
      <Grid container>
        {comments.map((comment, index) => {
          const { body, createdAt, userImage, userHandle } = comment;
          return (
            <Fragment key={createdAt}>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={2}>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid item sm={9}>
                    <div className={classes.commentData}>
                      <Typography variant="body2" color="textSecondary">
                        <Typography
                          variant="h6"
                          component={Link}
                          to={`/users/${userHandle}`}
                          color="primary"
                        >
                          {userHandle}
                        </Typography>{" "}
                        {dayjs(createdAt).format("MMM DD YYYY - h:mm a")}
                      </Typography>
                      <hr className={classes.invisibleSeperator} />
                      <Typography variant="body1">{body}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {index !== comments.length - 1 && (
                <hr className={classes.visibleSeperator} />
              )}
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};
export default withStyles(styles)(Comments);

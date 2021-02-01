import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles((theme) => ({
    heading: {
        maxWidth: "60em",
        [theme.breakpoints.down("md")]: {
            maxWidth: "45em",
        }
    },
    arrowContainer: {
        marginTop: "0.5em"
    },
    mainContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        paddingTop: "2em",
        paddingBottom: "10em",
    }
}));

const Software = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const smaller = useMediaQuery(theme.breakpoints.down("sm"));
    const medium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid item className={classes.arrowContainer} style={{marginRight: medium ? "1rem" : "2.5em", marginLeft: "-2.5em"}}>
          <IconButton component={Link} to="/services" onClick={()=>{props.setValue(1); props.setSelected(null)}}>
            <img src={backArrow} alt="Back to Services Page" />
          </IconButton>
        </Grid>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" gutterBottom>
              Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.arrowContainer}>
          <IconButton component={Link} to="/mobileapps" onClick={()=>{props.setValue(1); props.setSelected(1)}}>
            <img src={forwardArrow} alt="Forward to App Development Page" />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item container direction="row">
          
      </Grid>
    </Grid>
  );
};

export default Software;
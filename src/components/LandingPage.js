import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import animationData from "../animations/landinganimation/data.js";
import ButtonArrow from "./ui/ButtonArrow";
import softwareIcon from "../assets/Custom Software Icon.svg";
import appsIcon from "../assets/mobile.svg";
import webIcon from "../assets/website.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "5%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "15%",
      minWidth: "100%",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: "30px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "45px",
    marginTop: "0.5rem",
  },
  buttonContainer: {
    marginTop: "0.5rem",
  },
  learnHeroButton: {
    ...theme.typography.learnButton,
    backgroundColor: theme.palette.common.orange,
    height: "45px",
    opacity: 0.85,
  },
  learnOutlineButton: {
    ...theme.typography.learnButton,
    borderColor: theme.palette.common.orange,
    borderWidth: 3,
    height: "35px",
    opacity: 0.7,
    marginLeft: 0,
  },
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
  heroTextContainer: {
    minWidth: "22.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  subtitle: {
    marginBottom: "2.5rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  serviceIcon: {
    minWidth: "15em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0.5em",
      maxWidth: "5em",
      marginLeft: 0,
    },
  },
  softDevContainer: {
    marginTop: "18em",
    [theme.breakpoints.down("lg")]: {
      marginTop: "15em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "7em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
      padding: "20px",
    },
  },
  devContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("lg")]: {
      marginTop: "9em",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "7em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
      padding: "20px",
    },
  },
  appDevDescription: {
    maxWidth: "25em",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  //const medium = useMediaQuery(theme.breakpoints.down("md"));
  const smaller = useMediaQuery(theme.breakpoints.down("sm"));
  const softwareIconJSX = (
    <Grid container justify={smaller ? "center" : undefined}>
      <Grid item className={classes.serviceIcon}>
        <img src={softwareIcon} alt="Software Icon" />
      </Grid>
    </Grid>
  );
  const websiteIconJSX = (
    <Grid container justify={smaller ? "center" : undefined}>
      <Grid item className={classes.serviceIcon}>
        <img src={webIcon} alt="Software Icon" />
      </Grid>
    </Grid>
  );
  const mobileIconJSX = (
    <Grid container justify={smaller ? "center" : undefined}>
      <Grid
        item
        className={classes.serviceIcon}
        style={{ marginRight: smaller ? 0 : "5em" }}
      >
        <img src={appsIcon} alt="Mobile Icon" />
      </Grid>
    </Grid>
  );

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div style={{ marginBottom: "1500px" }}>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          {/* ------- Hero Block --------- */}
          <Grid
            container
            justify={smaller ? "center" : "flex-end"}
            alignItems="center"
          >
            <Grid item md className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Bringing West Coast Technology
                <br />
                to the Canadian Prairies
              </Typography>
              <Grid
                container
                justify="center"
                className={classes.buttonContainer}
              >
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    className={classes.estimate}
                  >
                    Get Estimate
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.learnHeroButton}
                  >
                    Learn More
                    <ButtonArrow width={25} height={18} fill="black" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md xs className={classes.animation}>
              <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------ Software Block ------- */}
          <Grid
            container
            direction="row"
            className={classes.softDevContainer}
            justify={smaller ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: smaller ? 0 : "5em",
                textAlign: smaller ? "center" : undefined,
              }}
            >
              {smaller ? softwareIconJSX : ""}
              <Typography variant="h4">Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Time. Save Energy. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span>celebration.</span>
              </Typography>
              <Button variant="outlined" className={classes.learnOutlineButton}>
                Learn More
                <ButtonArrow width={25} height={18} fill="black" />
              </Button>
            </Grid>
            <Grid item>{smaller ? "" : softwareIconJSX}</Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------ App Block ------- */}
          <Grid
            container
            direction="row"
            className={classes.devContainer}
            justify={smaller ? "center" : "flex-end"}
          >
            <Grid item style={{ textAlign: smaller ? "center" : undefined }}>
              {smaller ? mobileIconJSX : ""}
              <Typography variant="h4">Mobile App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.appDevDescription}
              >
                Integrate your web experience or create a standalone app with
                either iOS or Android platforms
              </Typography>
              <Button variant="outlined" className={classes.learnOutlineButton}>
                Learn More
                <ButtonArrow width={25} height={18} fill="black" />
              </Button>
            </Grid>
            <Grid item>{smaller ? "" : mobileIconJSX}</Grid>
          </Grid>
        </Grid>
        <Grid item>
          {/* ------ Website Block ------- */}
          <Grid
            container
            direction="row"
            className={classes.devContainer}
            justify={smaller ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: smaller ? 0 : "5em",
                textAlign: smaller ? "center" : undefined,
              }}
            >
              {smaller ? websiteIconJSX : ""}
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Discover More. Reach More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button variant="outlined" className={classes.learnOutlineButton}>
                Learn More
                <ButtonArrow width={25} height={18} fill="black" />
              </Button>
            </Grid>
            <Grid item>{smaller ? "" : websiteIconJSX}</Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingPage;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import MobileDelivery from "../../components/CheckOut/MobileDelivery";
import MobilePayment from "../../components/CheckOut/MobilePayment";
import MobileSummary from "../../components/CheckOut/MobileSummary";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["DELIVERY", "PAYMENT", "SUMMARY"];
}


function getStepContent(step) {
  switch (step) {
    case 0:
      return <div className="p-4 text-woozRed">Select campaign settings... </div> ;
    case 1:
      return <div  className="p-4 text-woozBlue">What is an ad group anyways?</div>;
    case 2:
      return <div  className="p-4 text-woozRed">This is the bit I really care about!</div>;
    default:
      return "Unknown step";
  }
}


// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       <MobileDelivery />;
//       break;
//     case 1:
//       <MobilePayment />;
//       break;

//     case 2:
//       <MobileSummary />;
//       break;

//     default:
//       return "Unknown step";
//   }
// }

export default function MobileStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={`mt-3 ${classes.root}`}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        className="bg-transparent"
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}


            {/* <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div> */}
          </div>
        )}
      </div>

      {activeStep !== steps.length - 1 ? (
        <div className="py-3 bg-white font-weight-500 mt-4">
          <div className="mx-3">
            <div className="d-flex align-items-center justify-content-between font-sm">
              <div>Subtotal</div>
              <div> &#8358; {Number(220000).toLocaleString()}</div>
            </div>
            <div className="d-flex align-items-center justify-content-between font-sm pb-3">
              <div>Shipping Fee</div>
              <div>&#8358; {Number(700).toLocaleString()}</div>
            </div>
            <div className="font-weight-600 d-flex align-items-center justify-content-between pt-3 border-top">
              <div>Total</div>
              <div className="text-woozRed">
                &#8358; {Number(700).toLocaleString()}
              </div>
            </div>
            <div className="mt-3">
              <button
                onClick={handleNext}
                className="d-flex col-12 border-0 font-weight-500 bg-woozRed py-2 text-white rounded mx-auto text-center"
              >
                <span className="mx-auto ">Proceed</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 mx-3">
          <Link
            to="/pay"
            className="d-flex col-12 border-0 font-weight-500 bg-woozRed py-2 text-white rounded mx-auto text-center"
          >
            <span className="mx-auto "> Confirm Order</span>
          </Link>
        </div>
      )}
    </div>
  );
}

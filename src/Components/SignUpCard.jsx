import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { formSchema,passwordSchema } from "../utils/schema";
import { FormTextField } from "../commonComponents";
import { DomLink } from '../components';
import { Link } from "@mui/material";

export default function SignUpCard() {
  const formMethods = useForm({
    resolver: yupResolver(formSchema),
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const steps = ["Create Account", "OTP Verification", "Create Password"];

  const formHandleSubmit = (data) => {
    console.log("data :", data);
    // formMethods.reset();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        width: { xs: "100%", md: "60%" },
        gap: 2,
      }}
    >
      {/* <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}

      {activeStep === 0 && (
        <>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#515151",
            }}
          >
            CREATE ACCOUNT
          </Typography>
          <FormProvider {...formMethods}>
            <Box
              component="form"
              onSubmit={formMethods.handleSubmit(formHandleSubmit)}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                gap: 1,
              }}
            >
              <FormTextField
                field={"age"}
                type={"number"}
                placeholder={"Age"}
              />
              <FormTextField
                field={"name"}
                type={"text"}
                placeholder={"Name"}
              />
              <FormTextField
                field={"sclName"}
                type={"text"}
                placeholder={"School or College Name"}
              />
              <FormTextField
                field={"grade"}
                type={"text"}
                placeholder={"Grade"}
              />
              <FormTextField
                field={"phNo"}
                type={"number"}
                placeholder={"Contact Number"}
              />
              <FormTextField
                field={"email"}
                type={"email"}
                placeholder={"Email"}
              />
              <Typography
                component="p"
                sx={{ fontSize: "10px", fontWeight: "bold" }}
              >
                By clicking 'Next,' you agree to our
                <span>
                  <DomLink to="#" text=" Terms and Conditions." fontSize={"10px"} />
                </span>
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#1A49BA",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "Black",
                    transition: "transform 0.3s ease-in-out",
                    transform: "translateY(-5px)",
                  },
                  boxShadow: "2px 3px #FFDA55",
                }}
              >
                Next
              </Button>
              <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
                Already have an account?
                <span>
                  <DomLink to="/Signin" text=" Sign in" />
                </span>
              </Typography>
            </Box>
          </FormProvider>
        </>
      )}

      {activeStep === 1 && (
        <>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#515151",
            }}
          >
            Email OTP Verification
          </Typography>
          <Box
            component="form"
            onSubmit={formMethods.handleSubmit(formHandleSubmit)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              gap: 1,
            }}
          >
            <FormControl>
              <TextField
                id="otp"
                type="number"
                name="otp"
                placeholder="Enter the OTP"
                required
                fullWidth
                variant="outlined"
                color={"primary"}
                sx={{
                  fontSize: "12px",
                  backgroundColor: "transparent",
                  "& .MuiOutlinedInput-root": {
                    height: "40px",
                    "& input": {
                      height: "100%",
                      padding: "0 14px",
                      "&::placeholder": {
                        fontSize: "12px",
                      },
                    },
                  },
                }}
              />
            </FormControl>
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "12px", fontWeight: "bold" }}
            >
              Please enter the verification code we just sent to your email.
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#1A49BA",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "Black",
                  transition: "transform 0.3s ease-in-out",
                  transform: "translateY(-5px)",
                },
                boxShadow: "2px 3px #FFDA55",
              }}
            >
              Next
            </Button>
            <Typography sx={{ textAlign: "center", fontSize: "12px" }}>
              Or change email{" "}
              <Link
                sx={{ fontWeight: "bold", color: "#0000FF", cursor: "pointer" }}
                onClick={handleBack}
              >
                click Here
              </Link>
            </Typography>
          </Box>
        </>
      )}

      {activeStep === 2 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            gap: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{
              width: "100%",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#515151",
            }}
          >
            CREATE PASSWORD
          </Typography>
          <Box
            component="form"
            onSubmit={formMethods.handleSubmit(formHandleSubmit)}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "80%",
              gap: 1,
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "12px", fontWeight: "bold" }}
            >
              Your password must be 8-12 characters long, include a mix of
              uppercase and lowercase letters, numbers, and special characters,
              and avoid common words.
            </Typography>
            <FormTextField
              field={"password"}
              type={"password"}
              placeholder={"Password"}
            />
            <FormTextField
              field={"confirmPassword"}
              type={"password"}
              placeholder={"Confirm Password"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                fontWeight: "bold",
                backgroundColor: "#1A49BA",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "Black",
                  transition: "transform 0.3s ease-in-out",
                  transform: "translateY(-5px)",
                },
                boxShadow: "2px 3px #FFDA55",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

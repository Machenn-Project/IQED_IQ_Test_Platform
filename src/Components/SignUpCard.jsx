import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema, passwordSchema} from "../utils/schema";
import { FormTextField } from "../commonComponents";
import { DomLink } from "../components";
import { FormControl, Link, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser } from "../Redux/User/User";
import {
  useSendEmailOTPMutation,
  useVerifyEmailOTPMutation,
  useSignUpMutation
} from "../Redux/Auth/AuthReducer";
import { useNavigate } from "react-router-dom";

export default function SignUpCard() {
  const [sendEmailOTP, { isLoading: isSendingOTP }] = useSendEmailOTPMutation();
  const [verifyEmailOTP, { isLoading: isVerifyEmailOTP }] =
    useVerifyEmailOTPMutation();
  const [AddUser] = useSignUpMutation();

  const navigator = useNavigate();

  const BasicForm = useForm({
    resolver: yupResolver(formSchema),
  });

  

  const PassForm = useForm({
    resolver: yupResolver(passwordSchema),
  });

  const UserData = useSelector((state) => state.UserState);
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);
  const [OTP, setOTP] = React.useState("");
  const [OTPError, setOTPError] = React.useState(false);

  const steps = ["Create Account", "OTP Verification", "Create Password"];

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const FormHandleSubmit = async (data) => {
    dispatch(UpdateUser(data));
    const success = await handleSendEmailOTP(data.Email);
    if (success) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const finalSubmit = async (data) => {
    try {
      // Dispatch the final form data to update the Redux state
      dispatch(UpdateUser(data));
  
      // Collect all the user data from Redux (this assumes you have the necessary fields in UserData)
      const userDataToSubmit = {
        ...UserData,
        Password: data.Password,
      };
  
      // Call the AddUser mutation with the user data
      const response = await AddUser(userDataToSubmit).unwrap();
  
      if (response) {
        console.log("User added successfully:", response);
        navigator("/Signin")
        // Handle success (e.g., redirect to login page or show success message)
      }
    } catch (error) {
      console.error("Failed to add user:", error);
      // Handle error (e.g., show error message)
    }
  };
  


  const handleSendEmailOTP = async (Email) => {
    try {
      const response = await sendEmailOTP({ Email }).unwrap();
      return true;
    } catch (error) {
      console.error("Failed to send OTP:", error);
      return false;
    }
  };

  const handleVerifyEmailOTP = async () => {
    try {
      const response = await verifyEmailOTP({
        Email: UserData.Email,
        OTP: OTP,
      }).unwrap();

      setOTPError(!response.Verify);
      if (response.Verify) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } catch (error) {
      console.error("Failed to verify OTP:", error);
    }
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
          <FormProvider {...BasicForm}>
            <Box
              component="form"
              onSubmit={BasicForm.handleSubmit(FormHandleSubmit)}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                gap: 1,
              }}
            >
              <FormTextField
                field={"Age"}
                type={"number"}
                placeholder={"Age"}
              />
              <FormTextField
                field={"Name"}
                type={"text"}
                placeholder={"Name"}
              />
              <FormTextField
                field={"School_Name"}
                type={"text"}
                placeholder={"School or College Name"}
              />
              <FormTextField
                field={"Grade"}
                type={"text"}
                placeholder={"Grade"}
              />
              <FormTextField
                field={"Mobile_Number"}
                type={"number"}
                placeholder={"Contact Number"}
              />
              <FormTextField
                field={"Email"}
                type={"email"}
                placeholder={"Email"}
              />
              <Typography
                component="p"
                sx={{ fontSize: "10px", fontWeight: "bold" }}
              >
                By clicking 'Next,' you agree to our
                <DomLink
                  to="#"
                  text=" Terms and Conditions."
                  fontSize={"10px"}
                />
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  fontWeight: "bold",
                  backgroundColor: "#1A49BA",
                  color: "#ffffff",
                }}
              >
                Next
              </Button>
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
            component=""
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
                value={OTP}
                placeholder="Enter the OTP"
                required
                onChange={(event) => setOTP(event.target.value)}
                fullWidth
                variant="outlined"
                color={"primary"}
                error={OTPError}
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
            {OTPError && (
              <Typography
                color="error"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Invalid OTP. Please try again.
              </Typography>
            )}
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "12px", fontWeight: "bold" }}
            >
              Please enter the verification code we just sent to your email.
            </Typography>
            <Button
              type="button"
              onClick={handleVerifyEmailOTP}
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
              <Link
                sx={{ fontWeight: "bold", color: "#0000FF", cursor: "pointer" }}
                onClick={() => handleSendEmailOTP(UserData.Email)}
              >
                ReSend
              </Link>{" "}
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
          <FormProvider {...PassForm}>
            <Box
              component="form"
              onSubmit={PassForm.handleSubmit(finalSubmit)}
              noValidate
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
                gap: 1,
              }}
            >
              <Typography
                component="p"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Your password must be 8-12 characters long, include a mix of
                uppercase and lowercase letters, numbers, and special
                characters, and must not contain spaces.
              </Typography>
              <FormTextField
                field={"Password"}
                type={"password"}
                placeholder={"Password"}
              />
              <FormTextField
                field={"ConfirmPassword"}
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
          </FormProvider>
        </Box>
      )}
    </Box>
  );
}

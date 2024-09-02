import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import {FormTextField} from "../commonComponents";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../utils/schema";
import {DomLink} from '../components'

export default function SignUpCard() {
  const formMethods = useForm({
    resolver: yupResolver(formSchema),
  });

  const [open, setOpen] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState("createAccount"); // 'createAccount', 'otp', 'createPassword'

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formHandleSubmit = (data) => {
    console.log("data :", data);
    formMethods.reset();
  };

  const handleChangeEmailClick = () => {
    setShowPanel("createAccount");
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
      {showPanel === "createAccount" && (
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
              <Typography
                component="p"
                sx={{ fontSize: "12px", fontWeight: "bold" }}
              >
                Providing your age ensures you get the right IQED experience.
                For more details, please visit our Privacy Policy.
              </Typography>
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
              {/* {renderTextField("name", "name", "text", "Name")}
            {renderTextField(
              "SclName",
              "SclName",
              "text",
              "School or College Name"
            )}
            {renderTextField("Grade", "Grade", "text", "Grade")}
            {renderTextField("PhNo", "PhNo", "text", "Contact Number")} */}
              {/* {renderTextField("email", "email", "email", "Email")} */}

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

      {showPanel === "otp" && (
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
            onSubmit={handleSubmit}
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
              <span
                sx={{ fontWeight: "bold", color: "#0000FF", cursor: "pointer" }}
                onClick={handleChangeEmailClick}
              >
                click Here
              </span>
            </Typography>
          </Box>
        </>
      )}

      {showPanel === "createPassword" && (
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
            onSubmit={formSubmit()}
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

            {renderTextField("password", "password", "password", "Password")}
            {renderTextField(
              "Conformpassword",
              "Conformpassword",
              "password",
              "Confirm Password"
            )}

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

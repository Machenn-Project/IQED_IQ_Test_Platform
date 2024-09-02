import * as yup from "yup";

export const formSchema = yup.object().shape({
  age : yup.string().required(),
  name : yup.string().required(),
  sclName : yup.string().required('School or College Name is required'),
  grade : yup.string().required(),
  hhNo : yup.string().required('Contact Number is required'),
  email: yup.string().email().required(),
 

});


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
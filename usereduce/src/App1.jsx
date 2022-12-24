import { useReducer } from "react";

const initialState = {
  values: {
    // field names and initial values
  },
  errors: {
    // field names and initial errors
  },
  isSubmitting: false
};

function reducer(state, action) {
  switch (action.type) {
    case "updateFieldValue":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value
        }
      };
    case "validateField":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error
        }
      };
    case "startSubmitting":
      return {
        ...state,
        isSubmitting: true
      };
    case "finishSubmitting":
      return {
        ...state,
        isSubmitting: false
      };
    default:
      return state;
  }
}

export default function MyForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "updateFieldValue", field: name, value });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    validateField(name);
  };

  const validateField = (field) => {
    // implement field validation logic here
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate all fields
    // submit form if no errors
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* render form fields and error messages */}
      <button type="submit" disabled={state.isSubmitting}>
        Submit
      </button>
    </form>
  );
}

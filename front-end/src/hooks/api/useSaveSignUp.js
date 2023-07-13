import useAsync from "../useAsync.js";

import * as userApi from "../../services/userApi.js";

export default function useSaveSignUp() {
  const {
    loading: saveSignUpLoading,
    error: saveSignUpError,
    act: saveSignUp,
  } = useAsync((data) => userApi.signUp(data), false);

  return {
    saveSignUpLoading,
    saveSignUpError,
    saveSignUp,
  };
}

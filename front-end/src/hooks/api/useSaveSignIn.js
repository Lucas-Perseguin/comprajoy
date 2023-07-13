import useAsync from "../useAsync.js";

import * as userApi from "../../services/userApi.js";

export default function useSaveSignIn() {
  const {
    loading: saveSignInLoading,
    error: saveSignInError,
    act: saveSignIn,
  } = useAsync((data) => userApi.signIn(data), false);

  return {
    saveSignInLoading,
    saveSignInError,
    saveSignIn,
  };
}

import axios from "axios";

export const doLogin = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.namaPengguna,
      password: getState().user.kataKunci,
    };

    await axios
      .post("https://atareact.free.beeceptor.com/auth", bodyRequest)
      .then(async (response) => {
        if (response.data.hasOwnProperty("api_key")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

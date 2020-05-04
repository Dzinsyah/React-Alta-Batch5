const initialState = {
  full_name: "",
  email: "",
  api_key: "",
  is_login: false,
  namaPengguna: "",
  kataKunci: "",
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        full_name: action.payload.full_name,
        email: action.payload.email,
        api_key: action.payload.api_key,
        is_login: true,
      };

    default:
      return userState;
  }
}

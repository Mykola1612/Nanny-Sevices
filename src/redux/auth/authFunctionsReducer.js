// export const handlePending = (state) => {
//   state.isLoading = true;
//   state.error = null;
// };

// export const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

export const handleFulfilledSignUp = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.accessToken = payload.accessToken;
  state.refreshToken = payload.refreshToken;
  state.error = null;
  state.user = {
    id: payload.id,
    name: payload.name,
    email: payload.email,
  };
  console.log(payload);
};

export const handleFulfilledSignIn = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.accessToken = payload.accessToken;
  state.error = null;
  state.refreshToken = payload.refreshToken;
};

export const handleFulfilledSignOut = (state) => {
  state.accessToken = null;
  state.isLoggedIn = null;
  state.refreshToken = null;
  state.error = null;
  state.isLoading = false;
};

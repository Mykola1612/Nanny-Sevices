export const handleFulfilledSignUp = (state, { payload }) => {
  state.isLoading = false;
  state.accessToken = payload.accessToken;
  state.error = null;
};

export const handleFulfilledSignIn = (state, { payload }) => {
  state.isLoading = false;
  state.accessToken = payload.accessToken;
  state.error = null;
  state.refreshToken = payload.refreshToken;
};

export const handleFulfilledSignOut = (state) => {
  state.accessToken = null;
  state.error = null;
  state.isLoading = false;
};

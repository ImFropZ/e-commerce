import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { auth } from "../../config/firebase";

export interface EmailPassword {
  email: string;
  password: string;
}

interface SocialMediaProps {
  platform: "FACEBOOK" | "GOOGLE";
}

interface EmailProps extends EmailPassword {
  platform: "EMAIL" | "SIGNUP_EMAIL";
}

type TAuthentication = SocialMediaProps | EmailProps;

interface UserState {
  loading: boolean;
  data: User | null;
  error: string;
}

const initialState: UserState = {
  loading: true,
  data: null,
  error: "",
};

export const authentication = createAsyncThunk(
  "auth/authentication",
  (props: TAuthentication) => {
    switch (props.platform) {
      case "FACEBOOK": {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider).then((userCredential) => {
          return userCredential.user;
        });
      }
      case "GOOGLE": {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider).then((userCredential) => {
          return userCredential.user;
        });
      }
      case "EMAIL": {
        return signInWithEmailAndPassword(
          auth,
          props.email,
          props.password
        ).then((userCredential) => userCredential.user);
      }
      case "SIGNUP_EMAIL": {
        return createUserWithEmailAndPassword(
          auth,
          props.email,
          props.password
        ).then((userCredential) => {
          return userCredential.user;
        });
      }
      default:
        return null;
    }
  }
);

export const authSignOut = createAsyncThunk("auth/signOut", () => {
  return auth.signOut().catch((error) => error.message);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authentication.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authentication.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authentication.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message || "";
    });
    builder.addCase(authSignOut.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authSignOut.fulfilled, (state) => {
      state.loading = false;
      state.data = null;
      state.error = "";
    });
    builder.addCase(authSignOut.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.payload as string;
    });
  },
  reducers: {
    initUser: (state, action: { payload: User | null }) => {
      state.loading = false;
      state.data = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;

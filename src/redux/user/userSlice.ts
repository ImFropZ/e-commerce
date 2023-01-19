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

export const authSignInWithEmail = createAsyncThunk(
  "user/signInWithEmail",
  ({ email, password }: EmailPassword) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user)
      .catch((error) => error.message);
  }
);

export const authSignInWithGoogle = createAsyncThunk(
  "user/signInWithGoogle",
  () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then((userCredential) => {
      return userCredential.user;
    });
  }
);

export const authSignInWithFacebook = createAsyncThunk(
  "user/signInWithFacebook",
  () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        return error.message;
      });
  }
);

export const authSignUpWithEmail = createAsyncThunk(
  "user/signUpWithFacebook",
  ({ email, password }: EmailPassword) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        return userCredential.user;
      }
    );
  }
);

export const authSignOut = createAsyncThunk("user/signOut", () => {
  return auth.signOut().catch((error) => error.message);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authSignInWithEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authSignInWithEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authSignInWithEmail.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message || "";
    });
    builder.addCase(authSignInWithGoogle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authSignInWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authSignInWithGoogle.rejected, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.data = null;
      state.error = action.error.message || "";
    });
    builder.addCase(authSignInWithFacebook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authSignInWithFacebook.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authSignInWithFacebook.rejected, (state, action) => {
      state.loading = false;
      state.data = null;
      state.error = action.error.message || "";
    });
    builder.addCase(authSignUpWithEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authSignUpWithEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(authSignUpWithEmail.rejected, (state, action) => {
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

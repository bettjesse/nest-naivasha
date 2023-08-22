"use client"

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RegisterModalState {
  isRegisterModalOpen: boolean;
}

const initialState: RegisterModalState = {
   isRegisterModalOpen: false,
};

const registerModalSlice = createSlice({
  name: 'registerModal',
  initialState,
  reducers: {
    openRegisterModal: (state) => {
      state. isRegisterModalOpen = true;
    },
    closeRegisterModal: (state) => {
      state. isRegisterModalOpen = false;
    },
  },
});

export const { openRegisterModal, closeRegisterModal } = registerModalSlice.actions;
export default registerModalSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const commonSlice = createSlice({
  name: 'auth',
  initialState: { reloadAnimation: false } as {
    reloadAnimation: boolean
  },
  reducers: {
    setReloadAnimation: (state, { payload }: PayloadAction<any | null>) => {
      state.reloadAnimation = payload
    },
  },
})

export const { setReloadAnimation } = commonSlice.actions

export default commonSlice.reducer

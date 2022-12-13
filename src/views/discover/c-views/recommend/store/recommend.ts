import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanner } from '../service/recommend'
//请求轮播数据
export const fetchBannersData = createAsyncThunk(
  'fecthBannersData',
  async (args, { dispatch }) => {
    const res = await getBanner()
    dispatch(changeBannersAction(res.banners))
  }
)

export interface BannerState {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  exclusive: boolean
  encodeId: string
  scm: string
  bannerBizType: string
}

interface InitialState {
  banners: BannerState[]
}

const initialState: InitialState = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})

export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer

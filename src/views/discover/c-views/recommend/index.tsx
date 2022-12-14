import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import TopSwiper from './c-cpns/top-swiper'
import { useAppDispatch } from '@/store'
import {
  fetchBannersDataAction,
  fetchHotRecommendDataAction,
  fetchNewAlbumsDataAction,
  fetchRankingListDataAction
} from './store/recommend'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  //请求轮播数据
  const dispath = useAppDispatch()
  useEffect(() => {
    dispath(fetchBannersDataAction())
    dispath(fetchHotRecommendDataAction())
    dispath(fetchNewAlbumsDataAction())
    dispath(fetchRankingListDataAction())
  }, [dispath])

  return (
    <RecommendWrapper>
      <TopSwiper />
      <div className="recommendContent wrap-v2">
        <div className="recommendLeft">
          <HotRecommend />
          <NewAlbum />
          <RankingList />
        </div>
        <div className="recommendRight"></div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)

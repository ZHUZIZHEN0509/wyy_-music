import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import TopSwiper from './c-cpns/top-swiper'
import { useAppDispatch } from '@/store'
import { fetchBannersData } from './store/recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  //请求轮播数据
  const dispath = useAppDispatch()
  useEffect(() => {
    dispath(fetchBannersData())
  }, [dispath])

  return (
    <RecommendWrapper>
      <TopSwiper />
    </RecommendWrapper>
  )
}

export default memo(Recommend)

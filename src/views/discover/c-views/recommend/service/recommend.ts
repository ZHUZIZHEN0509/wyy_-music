import zhuRequest from '@/services'

export const getBanner = () => {
  return zhuRequest.get({ url: '/banner' })
}

import crypto from 'crypto'
import { CookieAttributes } from 'js-cookie'
import { COOKIES_KEY_INTERCOM, loadFromCookie, saveCookie } from './cookies'

let intercomLoaded = false

export const isIntercomLoaded = (): boolean => intercomLoaded

const getIntercomUserId = async () => {
  const cookiesState = await loadFromCookie(COOKIES_KEY_INTERCOM)
  if (!cookiesState) {
    const userId = crypto.randomBytes(32).toString('hex')
    const newCookieState = { userId }
    const cookieConfig: CookieAttributes = {
      expires: 365,
    }
    await saveCookie(COOKIES_KEY_INTERCOM, newCookieState, cookieConfig)
    return userId
  }
  const { userId } = cookiesState
  return userId
}

// eslint-disable-next-line consistent-return
export const loadIntercom = async (): Promise<void> => {
  const APP_ID = process.env.GATSBY_INTERCOM_ID

  if (!APP_ID) {
    console.error(
      '[Intercom] - In order to use Intercom you need to add an appID'
    )
    return
  }
  const d = typeof window !== 'undefined' && window.document
  const s = d.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = `https://widget.intercom.io/widget/${APP_ID}`
  const x = d.getElementsByTagName('script')[0]
  x.parentNode.insertBefore(s, x)

  const intercomUserId = await getIntercomUserId()

  s.onload = () => {
    ;(window as any).Intercom('boot', {
      app_id: APP_ID,
      user_id: intercomUserId,
    })
    intercomLoaded = true
  }
}

export const closeIntercom = () => {
  if (!isIntercomLoaded()) return
  intercomLoaded = false
  ;(window as any).Intercom('shutdown')
}

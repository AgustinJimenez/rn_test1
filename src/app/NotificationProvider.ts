import { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { useDispatch, useSelector } from 'react-redux'
import { notificationWasTappedAction } from '../actions'
import { authSelector } from '../selectors/datasetsSelector'

const runNotifications = (dispatch: any) =>
    PushNotification.configure({
        //requestPermissions: true,
        onNotification: (notification: any) => {
            //console.log('NOTIFICATION-PROVIDER ===> onNotification', { notification })
            if (notification.userInteraction)
                dispatch(notificationWasTappedAction(notification, () => notification.finish(PushNotificationIOS.FetchResult.NoData)))
        },
        onRegister: (token: any) => {
            //console.log('PushNotification.configure.onRegister', { token })
        },
        permissions: {
            alert: true,
            badge: true,
            sound: true,
        },
        popInitialNotification: true,
    })

export default (props: any) => {
    var dispatch = useDispatch()
    var { token } = useSelector(authSelector)
    useEffect(() => {
        if (!!token) runNotifications(dispatch)
    }, [token])
    return null
}
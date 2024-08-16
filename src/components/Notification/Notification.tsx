import { Toaster, toast } from "sonner"

type NotificationProp = {
    title: string
    description: string
    notifierId: string
}

export const successNotifier = ({
    title,
    description,
    notifierId,
}: NotificationProp) => {
    toast.success(title, {
        description: description,
        // des: message,
        // status: "success",
        // position: "top-center",
        // id: notifierId,
    })
}

export const errorNotifier = ({
    title,
    description,
    notifierId,
}: NotificationProp) => {
    toast.error(title, {
        description: description,

        // id: notifierId,
    })
}

export const infoNotifier = ({
    title,
    description,
    notifierId,
}: NotificationProp) => {
    toast.info(title, {
        description: description,

        // id: notifierId,
    })
}

export const warningNotifier = ({
    title,
    description,
    notifierId,
}: NotificationProp) => {
    toast.warning(title, {
        description: description,

        id: notifierId,
    })
}

const Notification = () => {
    return <Toaster position="bottom-right" closeButton richColors />
}

export default Notification

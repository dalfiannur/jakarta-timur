import {Dialog, DialogPanel} from '@headlessui/react'
import {forwardRef, ReactNode, useImperativeHandle, useState} from "react";

export interface ModalRef {
    open: () => void,
    close: () => void
}

export const Modal = forwardRef<ModalRef, { children: ReactNode }>(function Modal({children}, ref) {
    const [opened, setOpened] = useState(false)

    useImperativeHandle(ref, () => ({
        open() {
            setOpened(true)
        },
        close() {
            setOpened(false)
        }
    }), [])

    return (
        <Dialog open={opened} onClose={() => setOpened(false)} transition
                className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0">
            <div className="fixed inset-0 flex justify-center items-center w-screen p-4 bg-black/10">
                <DialogPanel className="max-w-[1024px] bg-white drop-shadow rounded-xl">
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    )
})
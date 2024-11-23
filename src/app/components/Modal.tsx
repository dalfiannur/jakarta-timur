"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useRouter } from "nextjs-toploader/app";
import { ReactNode } from "react";

export const Modal = ({ children }: { children?: ReactNode }) => {
  const router = useRouter();

  return (
    <Dialog
      open
      onClose={() => router.back()}
      transition
      className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
    >
      <div className="fixed inset-0 flex items-center justify-center w-screen p-4 bg-black/10">
        <DialogPanel className="max-w-full lg:max-w-[1024px] bg-white drop-shadow rounded-xl">
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};

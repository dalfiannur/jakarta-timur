import { Modal } from "@/app/components/Modal";
import { Icon } from "@/app/icons";
import { GovEmployer } from "@/types/gov-employer";
import Image from "next/image";

type DetailModalProps = {
  data: GovEmployer;
  onClose: () => void;
};
export const DetailModal = ({ data, onClose }: DetailModalProps) => {
  return (
    <Modal>
      <div className="relative">
        <button className="absolute z-10 top-2 right-2" onClick={onClose}>
          <Icon name="XGrey" className="w-10 h-10" />
        </button>

        <div className="p-4 overflow-y-scroll lg:p-8 scrollbar-hidden">
          {data.image && (
            <div className="flex justify-center">
              <div className="relative w-[600px] aspect-[4/2]">
                <Image
                  src={data.image}
                  alt="#"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          )}
          {/* <h4 className="mt-6 text-2xl font-bold text-center">
            Sejarah Wilayah {data.nama}
          </h4> */}
          <div
            className="mt-2 text-sm prose lg:text-base line-clamp-6"
            dangerouslySetInnerHTML={{ __html: data.sejarah ?? "" }}
          />
        </div>
      </div>
    </Modal>
  );
};

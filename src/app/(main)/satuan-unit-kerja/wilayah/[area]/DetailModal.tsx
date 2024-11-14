import { Modal } from "@/app/components/Modal";
import { Icon } from "@/app/icons";
import Image from "next/image";

interface Data {
  id: string;
  slug: string;
  nama: string;
  deskripsi: string;
  sejarah: string;
}

type DetailModalProps = {
  data: Data;
  onClose: () => void;
};
export const DetailModal = ({ data, onClose }: DetailModalProps) => {
  return (
    <Modal>
      <div className="relative">
        <button className="absolute top-2 right-2" onClick={onClose}>
          <Icon name="XGrey" size={40} />
        </button>

        <div className="p-8">
          <div className="flex justify-center">
            <div className="relative w-[600px] aspect-[4/2]">
              <Image
                src="/#"
                alt="#"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          {/* <h4 className="font-bold text-2xl text-center mt-6">
            Sejarah Wilayah {data.nama}
          </h4> */}
          <div
            className="mt-2 line-clamp-6"
            dangerouslySetInnerHTML={{ __html: data.sejarah }}
          />
        </div>
      </div>
    </Modal>
  );
};

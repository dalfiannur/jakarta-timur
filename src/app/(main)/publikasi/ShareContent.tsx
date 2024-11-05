import { Icon } from "@/app/icons";

export const ShareContent = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col gap-2 font-plus-jakarta-sans">
      <h6 className="font-semibold text-xl">{label}</h6>
      <div className="mt-2 flex gap-4 items-center">
        <button>
          <Icon name="Link" size={32} />
        </button>
        <button>
          <Icon name="FacebookFill" size={32} />
        </button>
        <button>
          <Icon name="WhatsappColored" size={32} />
        </button>
        <button>
          <Icon name="XColored" size={32} />
        </button>
      </div>
    </div>
  );
};

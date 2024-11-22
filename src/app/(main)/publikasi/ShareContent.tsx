import { Icon } from "@/app/icons";

export const ShareContent = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col gap-2 font-plus-jakarta-sans">
      <h6 className="font-semibold text-xl">{label}</h6>
      <div className="mt-2 flex gap-4 items-center">
        <button>
          <Icon name="Link" className="w-8 h-8" />
        </button>
        <button>
          <Icon name="FacebookFill" className="w-8 h-8" />
        </button>
        <button>
          <Icon name="WhatsappColored" className="w-8 h-8" />
        </button>
        <button>
          <Icon name="XColored" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

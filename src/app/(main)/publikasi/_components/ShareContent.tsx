import { Icon } from "@/app/icons";

export const ShareContent = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-col gap-2 font-plus-jakarta-sans">
      <h6 className="text-base font-semibold lg:text-xl">{label}</h6>
      <div className="mt-2 flex items-center gap-4">
        <button>
          <Icon name="Link" className="h-8 w-8" />
        </button>
        <button>
          <Icon name="FacebookFill" className="h-8 w-8" />
        </button>
        <button>
          <Icon name="WhatsappColored" className="h-8 w-8" />
        </button>
        <button>
          <Icon name="XColored" className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

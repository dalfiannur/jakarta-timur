import Image from "next/image";

export const Header = () => {
  return (
    <div className="h-auto md:h-[514px] bg-[#0C43AE] bg-[url('/img/dashboard-header-background.png')] bg-cover bg-no-repeat">
      <div className="container mx-auto flex items-center justify-center lg:justify-between gap-16 px-4 lg:pr-32 pt-28 pb-12 lg:pt-48">
        <div className="flex flex-col justify-center lg:justify-start">
          <h1 className="font-plus-jakarta-sans text-center text-xl lg:text-4xl font-extrabold text-white">
            Dashboard Jakarta Timur
          </h1>
          <p className="font-roboto text-sm lg:text-3xl text-center text-white">
            Informasi Terbaru dan Data Analitik seputar Jakarta Timur
          </p>
          <div className="mt-4 flex justify-center gap-4 lg:gap-8 font-roboto text-white">
            <p className="text-xsl g:text-2xl">Terakhir Diupdate, 1 September 2024</p>
            <button>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6509 8.15C16.8053 7.05151 15.6579 6.22331 14.349 5.76672C13.04 5.31014 11.6264 5.24497 10.281 5.5792C8.93566 5.91342 7.71687 6.63254 6.77378 7.64857C5.83069 8.6646 5.2042 9.93349 4.97095 11.3M18.0009 4.5V8.5H14.0009M6.34895 16.85C7.19432 17.9489 8.34176 18.7775 9.65079 19.2344C10.9598 19.6912 12.3737 19.7565 13.7192 19.4223C15.0648 19.088 16.2837 18.3687 17.2268 17.3523C18.1698 16.336 18.7961 15.0668 19.0289 13.7M5.99995 20.5V16.5H9.99995"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button className="mt-8 rounded-full bg-[#306AD8] px-16 py-3 text-xl text-white">
            Login
          </button>
        </div>

        <Image
          src="/img/dashboard-logo.png"
          alt="Dashboard Logo"
          width={287}
          height={252}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

const getData = async () => {
  "use server";
  return [
    {
      alias: "UUH",
      title: "Umur Harapan Hidup",
      value: "74,83 Tahun",
    },
    {
      alias: "ABH",
      title: "Angka Buta Huruf",
      value: "0,85%",
    },
    {
      alias: "TPAK",
      title: "Tingkat Partisipasi Angkatan Kerja",
      value: "61,26%",
    },
    {
      alias: "TPT",
      title: "Tingkat Pengangguran Terbuka",
      value: "9,16%",
    },
    {
      alias: "Kemiskinan",
      title: "Jumlah Penduduk Miskin",
      value: "126,63 Ribu",
    },
    {
      alias: "Kriminalitas",
      title: "Total Penduduk yang pernah menjadi korban",
      value: "61,26%",
    },
  ];
};

export const ProfilPendudukSection = async () => {
  const data = await getData();

  return (
    <div className="flex-1">
      <h6 className="py-4 px-6 font-plus-jakarta-sans font-bold text-lg">
        Profil Penduduk Jakarta Timur
      </h6>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            data-stripped={index % 2 === 0}
            className="py-2 px-6 flex gap-4 items-center data-[stripped=true]:bg-blue-500/5"
          >
            <div className="flex-1">
              <div className="font-plus-jakarta-sans font-bold text-gray-950">
                {item.alias}
              </div>
              <div className="mt-2 font-roboto text-sm text-gray-500">
                {item.title}
              </div>
            </div>
            <div className="font-plus-jakarta-sans font-bold text-lg text-orange-600">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

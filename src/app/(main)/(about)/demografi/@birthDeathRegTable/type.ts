export type BirthDeathRegistration = {
  district: string;
  domestic: {
    male: number;
    female: number;
    total: number;
  };
  foreigner: {
    male: number;
    female: number;
    total: number;
  };
};

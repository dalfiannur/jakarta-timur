import { getBulletins } from "@/app/actions/get-bulletin";
import { BulletinWidget } from "@/app/widgets/BulletinWidget";

export default async function Page() {
  const { data } = await getBulletins({ limit: "4" });
  return <BulletinWidget data={data.data} />;
}

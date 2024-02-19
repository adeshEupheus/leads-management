import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function Home() {
  // const router = useRouter();
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  if (token?.value) {
    redirect("/leads");
  } else {
    redirect("/login");
  }
}

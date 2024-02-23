import { cookies } from "next/headers";

export default function returnToken() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if (token?.value) {
    return true;
  } else {
    return false;
  }
}

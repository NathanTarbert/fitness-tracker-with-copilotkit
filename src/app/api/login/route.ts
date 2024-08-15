// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import data from "../../../../db.json";

const handler = async (req: NextRequest, res: NextResponse) => {
  const { username, password } = await req.json();
  // return NextResponse.json(test, { status: 200 });

  const user = data.users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    return NextResponse.json(
      { success: true, message: "Authentication successful", user },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { success: false, message: "Invalid credentials", user },
      { status: 401 }
    );
  }
};
export { handler as POST };

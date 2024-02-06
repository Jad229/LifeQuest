import { getServerSession } from "next-auth";
import { getUser } from "./services/users";
import { Session } from "./types/session";
import { authOptions } from "./utils/auth";

// export default async function middleware() {
//
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  
}

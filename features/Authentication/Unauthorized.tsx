import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1>Welcome to LifeQuest</h1>
      <Card>
        <CardHeader>
          <CardTitle>Please Sign In.</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>
            <Link href="/auth">Log In</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <h1>Next.js + TypeScript + ESLint + Prettier</h1>
      <SignIn />
    </div>
  );
}

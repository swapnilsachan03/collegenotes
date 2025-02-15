import { Button } from "generic-ds";

import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button
        type="submit"
        color="teal"
        style={{ boxShadow: "1px 1px 40px -1px lightblue" }}
        label="Sign in with GitHub"
      />
    </form>
  );
}

import { Suspense } from "react";
import SignUpForm from "./SignUpForm";
S
export default function Page() {
  return (
    <Suspense fallback={<div>Loading signup form...</div>}>
      <SignUpForm />
    </Suspense>
  );
}

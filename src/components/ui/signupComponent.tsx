import React from "react";
import SignUpWrapper, {
  OAuthButton,
  SignUpDescription,
  SignUpFooter,
  SignUpOauthWrapper,
  SignUpTitle,
} from "~/components/ui/signup";

export default function SignUpComponent() {
  return (
    <SignUpWrapper style="light">
      <SignUpTitle>Sign In</SignUpTitle>
      <SignUpDescription>Sign up to Acme Inc.</SignUpDescription>
      <SignUpOauthWrapper>
        <OAuthButton service={"apple"} />
        <OAuthButton service={"github"} />
        <OAuthButton service={"google"} />
      </SignUpOauthWrapper>
      <SignUpFooter>
        By clicking continue, you acknowledge that you have read and agree to
        the <span className="underline">Terms of Service</span> and{" "}
        <span className="underline">Privacy Policy </span>
      </SignUpFooter>
    </SignUpWrapper>
  );
}

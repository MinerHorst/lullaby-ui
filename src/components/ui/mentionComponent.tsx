import React from "react";
import {
  MentionButton,
  MentionDisplay,
  MentionEmail,
  MentionName,
  MentionProfile,
  MentionSocials,
  MentionWrapper,
} from "~/components/ui/mention";

export default function MentionComponent() {
  return (
    <MentionWrapper>
      <MentionButton>@John</MentionButton>
      <MentionDisplay style="light">
        <MentionProfile
          src="https://www.pngkey.com/png/full/503-5035055_a-festival-celebrating-tractors-profile-picture-placeholder-round.png"
          rounded
          alt="Profile"
        />
        <MentionSocials>
          <MentionName>John Doe</MentionName>
          <MentionEmail>johndoe@acmeinc.com</MentionEmail>
        </MentionSocials>
      </MentionDisplay>
    </MentionWrapper>
  );
}

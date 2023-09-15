import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function Room() {
  const { roomID } = useParams();
  console.log(roomID);

  const myMeeting = async (element) => {
    const appID = 778334747;
    const serverSecret = "ffb4a4ad4d56a133b8a357eb78cf32c3";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Add username"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div
      style={{
        marginTop: "14%",
        marginBottom: "14%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%" }} ref={myMeeting} />
    </div>
  );
}

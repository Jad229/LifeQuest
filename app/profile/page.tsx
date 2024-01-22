import Image from "next/image";
import React from "react";

function Profile() {
  return (
    <div>
      Profile
      <Image
        src="./JDpixels.svg"
        alt="pixel avatar"
        width={10000}
        height={10000}
      />
    </div>
  );
}

export default Profile;

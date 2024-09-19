import { Button } from "@nextui-org/react";
import React from "react";

function ProfileDetails() {
  return (
    <div>
      <div className="text-white">
        <img
        className="rounded-full mb-2 w-64 h-64 bg-cover bg-center"
          src="https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <h1 className="text-3xl font-bold mb-1">Qitmeer Raza</h1>
        <p className="text-xl text-[#1F75EC] mb-3">iamqitmeer</p>

        <p>Learning, creating, and evolving lines code at a time 🧑‍💻</p>
        <Button color="primary" variant="flat">
          <i class="ri-arrow-right-circle-fill"></i> See on Github
        </Button>

        <div>
          <p>
            <i class="ri-facebook-circle-fill"></i> iamqitmeer_fb
          </p>
          <p>
            <i class="ri-twitter-fill"></i>
            iamqitmeer_twtr
          </p>
          <p>
            <i class="ri-instagram-fill"></i>
            iamqitmeer_isn
          </p>
        </div>

        <div>
          <p>
            <span className="font-bold">142</span> Repos
            <span className="font-bold">142</span> Followers
            <span className="font-bold">142</span> Following
          </p>
        </div>

        <div>
          <div className="bg-gray-400 h-1 w-56"></div>
        </div>

        <p>
          <i class="ri-copyright-line"></i> 2024{" "}
          <a href="https://github.com/iamqitmeer" target="blank">
            iamqitmeer
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProfileDetails;

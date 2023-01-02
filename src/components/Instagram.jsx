import React from "react";
import { Icon } from "@iconify/react";

const Instagram = () => {
  return (
    <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
      <div>
        <a
          title="Follow me on Instagram"
          href="https://www.instagram.com/ryanpratama14"
          target="_blank"
          class="block transition-all transform hover:scale-110  duration-400 "
        >
          <Icon
            icon="mdi:instagram"
            width="40"
            class="text-primary"
            height="40"
          />
        </a>
      </div>
    </div>
  );
};

export default Instagram;

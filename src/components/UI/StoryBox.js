import React from "react";

function StoryBox(props) {
  return (
    <div className={`${props.bg ? "bg-primary":"bg-[#261d2b]"} px-9 py-5 flex md:flex-row relative`}>
      <img
        className="w-[200px] h-[110px] rounded-md mt-8 mb-8"
        src={require(`../../images/story/img_story${props.image}.png`)}
      />
      <div className="flex flex-col ml-14">
        <span class="relative flex h-3 w-3 top-9 right-[6px]">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span class="relative  inline-flex rounded-full h-2 w-2 m-auto bg-white"></span>
        </span>
        <div className={`${props.start ? "h-[70%]":"h-[100%]"} w-[1px] absolute my-auto mx-auto bottom-0 bg-white`}></div>
      </div>
      <div className={`px-8 mt-8`}>{props.children}</div>
    </div>
  );
}

export default StoryBox;

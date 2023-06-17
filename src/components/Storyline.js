import React from "react";
import Box from "./UI/Box";
import StoryBox from "./UI/StoryBox";

function Storyline(props) {
  return (
    <Box className="text-white ">
      <div className="relative px-14 py-14">
        <h1 className="text-2xl font-bold mb-14">Storyline</h1>
        <p className="mb-5">
          InVaria, the unexplored desert which full of noises and uncertainty…
        </p>
        <p className="mb-5">
          Tribes of humanity are desperate to pursue freedom, creation and
          fulfillment of endless desire. Some of them aggressively explore the
          wealth behind the dark fog, some are the first try to find the safe
          harbor to survive…year in 2222…
        </p>
        <p className="mb-5">
          One tribe discovered a mystic device that could mirror real-world
          assets from 200 years ago; by connecting with it, human beings will be
          able to obtain the resources and benefits…
        </p>
      </div>
      <div>
        <StoryBox bg={true} image={1} start={true}>
          <p className="mb-3">
            「Year… 2222, Location… InVaria, Weather… Radiation Fog and
            Cold」Something is happening in this world…
          </p>
          <p>
            Build up communication channel… Discord set up… Twitter launched…
            Now we can communicate, discuss with each others about InVaria and
            the ideas we have there!
          </p>
        </StoryBox>
        <StoryBox bg={false} image={2}>
          <p className="">
            A tribe of humans find out a device with “CRYPTIC REFLECTOR” words
            carved on it, there is an unclear description
            shows…「Connecting…Connecting…, Connect to Real World, the Reflector
            Indicate Power… Asset will…」
          </p>
        </StoryBox>
        <StoryBox bg={true} image={3}>
          <p className="mb-3">
            The researcher found that the building named Amwaj20, which was
            built in the Persian Gulf region in 2015... Electronic parts and
            documents are scattered at the entrance, especially, the texts on
            the documents are sorted out and translated... One of the paragraphs
            reads "... First priority, enter your address codes in the device,
            also with desire of property resources... You may get an unexpected
            prizes…”
          </p>
        </StoryBox>
        <StoryBox bg={false} image={4}>
          <p className="mb-3">
            Hopefully, through NFT technology, Amwaj20 property ownership is
            fractionalized and waiting to distribute. The lasting time of
            operating furnace is near closed... We should seize the time to mint
            Amwaj20 NFT to avoid losing the rights belonging to us. For details
            and mechanism of fractionalized NFT, please visit the FAQ or related
            information channels.
          </p>
        </StoryBox>
        <StoryBox bg={true} image={5}>
          <p className="mb-3">
            Hopefully, through NFT technology, Amwaj20 property ownership is
            fractionalized and waiting to distribute. The lasting time of
            operating furnace is near closed... We should seize the time to mint
            Amwaj20 NFT to avoid losing the rights belonging to us. For details
            and mechanism of fractionalized NFT, please visit the FAQ or related
            information channels.
          </p>
        </StoryBox>
        <StoryBox bg={false} image={6}>
          <p className="mb-3">
            Hopefully, through NFT technology, Amwaj20 property ownership is
            fractionalized and waiting to distribute. The lasting time of
            operating furnace is near closed... We should seize the time to mint
            Amwaj20 NFT to avoid losing the rights belonging to us. For details
            and mechanism of fractionalized NFT, please visit the FAQ or related
            information channels.
          </p>
        </StoryBox>
        <StoryBox bg={true} image={7}>
          <p className="mb-3">
            Hopefully, through NFT technology, Amwaj20 property ownership is
            fractionalized and waiting to distribute. The lasting time of
            operating furnace is near closed... We should seize the time to mint
            Amwaj20 NFT to avoid losing the rights belonging to us. For details
            and mechanism of fractionalized NFT, please visit the FAQ or related
            information channels.
          </p>
        </StoryBox>
      </div>
    </Box>
  );
}

export default Storyline;

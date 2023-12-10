"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { StreamingEpisode } from "@/types/types";
import { IconPlay } from "@/icons/Icons";

export function ModalWatch({ streamingEpisodes }: { streamingEpisodes : StreamingEpisode[] }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="py-0 bg-transparent px-0 hover:underline"
      >
        View all
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                All videos
              </ModalHeader>
              <ModalBody >
                <div className="w-full h-full grid grid-cols-4 gap-y-4 gap-x-4 overflow-y-auto">
                  {streamingEpisodes.map((episode, index) => {
                   
                    return (
                      <a
                        href={episode.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index}
                      >
                        <div
                          className="w-full h-full relative overflow-hidden rounded-sm hover:opacity-90 transition-opacity duration-300 group"
                          key={index}
                        >
                          <div
                            className="absolute left-0 top-0 w-full h-full flex justify-center items-end "
                            style={{
                              background:
                                "linear-gradient(transparent, transparent  ,  rgba(0, 0, 0 , .8))",
                            }}
                          >
                            <div className="w-full h-full absolute left-0 top-0 flex justify-center items-center">
                              <div className="relative w-[50px] h-[50px] flex justify-center items-center bg-[#00000030] rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                <IconPlay size="20" fill="#fff" />
                              </div>
                            </div>
                            <p className="text-center line-clamp-2 pb-1 px-3">
                              {episode.title}
                            </p>
                          </div>
                          <img
                            src={episode.thumbnail}
                            alt={`image from the episode ${episode.title} `}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

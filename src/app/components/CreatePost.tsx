import React, { useState } from "react";

import Swal from "sweetalert2";

import { createPost } from "@/utils";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";

export default function CreatePost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [content, setContent] = useState<any>("");
  const [titleValue, setTitleValue] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const message = (postion: any, type: any, content: any, time: number) => {
    Swal.fire({
      position: postion,
      icon: type,
      text: content,
      showConfirmButton: false,
      timer: time,
    });
  };

  const appendPost = () => {
    if (titleValue.length < 4) {
      message(
        "top-end",
        "warning",
        "Please enter valid title more than 4 characters",
        1500
      );
      return;
    }
    if (content.length < 20) {
      message(
        "top-end",
        "warning",
        "Please enter valid content more than 20 characters",
        1500
      );
      return;
    }
    setLoading(true);
    createPost(titleValue, content).then((data) => {
      message("top-end", "success", "Post created successfully", 1500);
      setTitleValue("");
      setContent("");
      setLoading(false);
      console.log(data);
    });
  };

  return (
    <>
      <Button
        className="bg-warning font-extrabold flex fixed bottom-4 right-4"
        variant="shadow"
        onPress={onOpen}
      >
        Create Post
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
      >
        <ModalContent className="rounded-none m-0 md:m-[4px] md:rounded-lg">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Post
              </ModalHeader>
              <ModalBody>
                <Input
                  type="email"
                  label="Title"
                  value={titleValue}
                  onValueChange={setTitleValue}
                />

                <Textarea
                  variant="underlined"
                  label="Description"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  value={content}
                  onValueChange={setContent}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={appendPost}
                  color="primary"
                  onPress={() => {}}
                  isLoading={loading}
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

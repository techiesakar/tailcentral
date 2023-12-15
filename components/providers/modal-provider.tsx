"use client";
import { useEffect, useState } from "react";
import AddBlockModal from "../modals/add-block-modal";
import AddComponentModal from "../modals/add-components-modal";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AddBlockModal />
      <AddComponentModal />
    </>
  );
};

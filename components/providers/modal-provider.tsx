"use client";
import { useEffect, useState } from "react";
import AddBlockModal from "../modals/add-block-modal";
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
    </>
  );
};

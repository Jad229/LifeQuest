"use client";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import Modal from "../ui/Modal";
import { useState } from "react";

export default function CompleteQuest() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Button onClick={() => setIsModalOpen(true)}>
      <FaCheck />
    </Button>
  );
}

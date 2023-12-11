"use client";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
  description?: string | null | undefined;
};

export default function QuestDetails({ children, description }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} variant="ghost">
        {children}
      </Button>

      {isModalOpen && (
        <Modal>
          <Card>
            <CardHeader>
              <CardTitle>Quest Details</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={() => setIsModalOpen(false)}>Close</Button>
            </CardFooter>
          </Card>
        </Modal>
      )}
    </>
  );
}

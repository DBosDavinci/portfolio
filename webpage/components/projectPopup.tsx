"use client"

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/modal";
import { normalText, subtitle } from "./primitives";
import Image from "next/image";

export default function ProjectPopup({ open, onOpenChange, title, translations, image }: { open: boolean, onOpenChange: () => void, title: string; translations: string; image?: string }) {
    return (
        <Modal isOpen={open} onOpenChange={onOpenChange} size="3xl">
            <ModalContent>
                <ModalHeader>
                    <h2 className={subtitle({ fullWidth: false })}>
                        {title}
                    </h2>
                </ModalHeader>
                <ModalBody>
                    <p className={normalText({ size: "sm" })}>
                        {translations}
                    </p>
                    {image && (
                        <Image
                            className="m-auto mt-4 mb-4 border-1 border-white rounded-lg"
                            alt={title}
                            height={300}
                            src={`/images/${image}`}
                            width={500}
                        />
                    )}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
"use client"

import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { subtitle } from "./primitives";
import { GithubIcon } from "./icons";
import Image from "next/image";
import NextLink from "next/link";
import { useDisclosure } from "@heroui/modal";
import ProjectPopup from "./projectPopup";

export default function ProjectCard({ title, gitlink, translations, image }: { title: string; gitlink: string; translations: string; image?: string }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <ProjectPopup open={isOpen} onOpenChange={onOpenChange} title={title} translations={translations} image={image} />
            <Card className="mt-6 p-6">
                <div className="flex items-center space-x-2">
                    <h2 className={subtitle({ fullWidth: false })}>
                        {title}
                    </h2>
                    <NextLink href={gitlink}>
                        <GithubIcon className="text-default-500 w-6 h-6" />
                    </NextLink>
                    <Button isIconOnly onPress={onOpen}>
                        <GithubIcon className="text-default-500 w-6 h-6" />
                    </Button>
                </div>
                {image && (
                    <Image
                        alt={title}
                        height={300}
                        src={`/images/${image}`}
                        width={500}
                    />
                )}
            </Card>
        </div>
    );
}
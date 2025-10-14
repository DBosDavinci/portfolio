import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { Card } from "@heroui/card";
import { useTranslations } from "next-intl";
import NextLink from "next/link";

export default function ProjectsPage() {
  const t = useTranslations('Projects');

  return (
    <div>
      <h1 className={title()}>{t('title')}</h1>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>Pi zero 2w webpage (typescript)</h2>
        <NextLink className="w-6 h-6" href="https://github.com/iSniper27/pi-zero-web-app">
          <GithubIcon className="text-default-500" />
        </NextLink>
      </Card>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>Pi zero 2w remote (python)</h2>
        <NextLink className="w-6 h-6" href="https://github.com/iSniper27/pizero2w">
          <GithubIcon className="text-default-500" />
        </NextLink>
      </Card>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>Jukebox (typescript)</h2>
        <NextLink className="w-6 h-6" href="https://github.com/DBosDavinci/jukebox">
          <GithubIcon className="text-default-500" />
        </NextLink>
      </Card>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>Gameplanner (PHP)</h2>
        <NextLink className="w-6 h-6" href="https://github.com/DBosDavinci/gameplanner">
          <GithubIcon className="text-default-500" />
        </NextLink>
      </Card>

      <Card className="mt-6 p-6">
        <h2 className={subtitle()}>Pokemon battle sim (C#)</h2>
        <NextLink className="w-6 h-6" href="https://github.com/DBosDavinci/PokemonBattleSimulator">
          <GithubIcon className="text-default-500" />
        </NextLink>
      </Card>
    </div>
  );
}

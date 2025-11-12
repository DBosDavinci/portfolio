import { GithubIcon } from "@/components/icons";
import { normalText, subtitle, title } from "@/components/primitives";
import { Card } from "@heroui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";
import NextLink from "next/link";

export default function ProjectsPage() {
  const t = useTranslations('Projects');

  return (
    <div>
      <h1 className={title()}>{t('title')}</h1>

      <Card className="mt-6 p-6">
        <div className="flex items-center space-x-2">
          <h2 className={subtitle({ fullWidth: false })}>Pi zero 2w webpage (typescript)</h2>
          <NextLink href="https://github.com/iSniper27/pi-zero-web-app">
            <GithubIcon className="text-default-500 w-6 h-6" />
          </NextLink>
        </div>
        <p className={normalText({ size: "sm" })}>{t('projects_pizero2wwebpage')}</p>
      </Card>

      <Card className="mt-6 p-6">
        <div className="flex items-center space-x-2">
          <h2 className={subtitle({ fullWidth: false })}>Pi zero 2w remote (python)</h2>
          <NextLink href="https://github.com/iSniper27/pizero2w">
            <GithubIcon className="text-default-500 w-6 h-6" />
          </NextLink>
        </div>
        <p className={normalText({ size: "sm" })}>{t('projects_pizero2wremote')}</p>
        <Image
          src="/images/pizero2w.jpg"
          alt="Pi zero 2w remote"
          width={500}
          height={300}
        />
      </Card>

      <Card className="mt-6 p-6">
        <div className="flex items-center space-x-2">
          <h2 className={subtitle({ fullWidth: false })}>Jukebox (typescript)</h2>
          <NextLink href="https://github.com/DBosDavinci/jukebox">
            <GithubIcon className="text-default-500 w-6 h-6" />
          </NextLink>
        </div>
        <p className={normalText({ size: "sm" })}>{t('projects_jukebox')}</p>
        <Image
          src="/images/jukebox.jpg"
          alt="Jukebox"
          width={500}
          height={300}
        />
      </Card>

      <Card className="mt-6 p-6">
        <div className="flex items-center space-x-2">
          <h2 className={subtitle({ fullWidth: false })}>Gameplanner (PHP)</h2>
          <NextLink href="https://github.com/DBosDavinci/gameplanner">
            <GithubIcon className="text-default-500 w-6 h-6" />
          </NextLink>
        </div>
        <p className={normalText({ size: "sm" })}>{t('projects_gameplanner')}</p>
        <Image
          src="/images/gameplanner.jpg"
          alt="Gameplanner"
          width={500}
          height={300}
        />
      </Card>

      <Card className="mt-6 p-6">
        <div className="flex items-center space-x-2">
          <h2 className={subtitle({ fullWidth: false })}>Pokemon battle sim (C#)</h2>
          <NextLink href="https://github.com/DBosDavinci/PokemonBattleSimulator">
            <GithubIcon className="text-default-500 w-6 h-6" />
          </NextLink>
        </div>
        <p className={normalText({ size: "sm" })}>{t('projects_pokemon')}</p>
        <Image
          src="/images/PokemonBattleSim.jpg"
          alt="Pokemon battle simulator"
          width={500}
          height={300}
        />
      </Card>
    </div>
  );
}

import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import ProjectCard from "@/components/projectCard";

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>

      <ProjectCard title="Pi zero 2w webpage" gitlink="https://github.com/iSniper27/pi-zero-web-app" translations={t("projects_pizero2wwebpage")} />

      <ProjectCard title="Pi zero 2w remote" gitlink="https://github.com/iSniper27/pizero2w" translations={t("projects_pizero2wremote")} image="pizero2w.jpg" />

      <ProjectCard title="Jukebox" gitlink="https://github.com/DBosDavinci/jukebox" translations={t("projects_jukebox")} image="jukebox.jpg" />

      <ProjectCard title="Gameplanner" gitlink="https://github.com/DBosDavinci/gameplanner" translations={t("projects_gameplanner")} image="gameplanner.jpg" />

      <ProjectCard title="Pokemon battle sim" gitlink="https://github.com/DBosDavinci/PokemonBattleSimulator" translations={t("projects_pokemon")} image="PokemonBattleSim.jpg" />
    </div>
  );
}

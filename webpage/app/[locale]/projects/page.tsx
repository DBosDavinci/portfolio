import { useTranslations } from "next-intl";

import { title } from "@/components/primitives";
import ProjectCard from "@/components/projectCard";

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <div>
      <h1 className={title()}>{t("title")}</h1>

      <ProjectCard title="Kensan Fischertechnikplant" gitlink="https://github.com/1xfaygo/Kensan-Ombouw-fischertechnikplant-Project" translations={t("projects.kensan")} image="kensan.jpg" />

      <ProjectCard title="Pi zero 2w webpage" gitlink="https://github.com/DBosDavinci/pi-zero-web-app" translations={t("projects.pizero2wwebpage")} image="pizero2wwebpage.jpg" />

      <ProjectCard title="Pi zero 2w remote" gitlink="https://github.com/DBosDavinci/pizero2w" translations={t("projects.pizero2wremote")} image="pizero2w.jpg" />

      <ProjectCard title="Jukebox" gitlink="https://github.com/DBosDavinci/jukebox" translations={t("projects.jukebox")} image="jukebox.jpg" />

      <ProjectCard title="Gameplanner" gitlink="https://github.com/DBosDavinci/gameplanner" translations={t("projects.gameplanner")} image="gameplanner.jpg" />

      <ProjectCard title="Pokemon battle sim" gitlink="https://github.com/DBosDavinci/PokemonBattleSimulator" translations={t("projects.pokemon")} image="PokemonBattleSim.jpg" />
    </div>
  );
}

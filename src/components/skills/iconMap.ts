import { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiLaravel, SiPhp, SiMysql, SiNodedotjs,
  SiWordpress, SiWoocommerce,
  SiGit, SiGithub, SiFigma, SiVscodium, SiDocker,
} from "react-icons/si";

/**
 * Peta nama ikon (dari src/data/portfolio.ts) ke komponen ikon.
 * Dipakai bersama oleh SkillBadge dan TechMarquee.
 */
export const skillIconMap: Record<string, IconType> = {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiCss,
  SiLaravel, SiPhp, SiMysql, SiNodedotjs,
  SiWordpress, SiWoocommerce,
  SiGit, SiGithub, SiFigma, SiVscodium, SiDocker,
};

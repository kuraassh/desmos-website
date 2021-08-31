import React from "react";
// import { useTranslation } from "i18n";
import useTranslation from "next-translate/useTranslation";
import { Layout, SocialMedia } from "@components";
import { useStyles } from "./styles";
import HeroSlogan from "@assets/hero-slogan.svg";
import ArrowIcon from "@assets/icon-arrow.svg";

const Hero = () => {
  const { t, lang } = useTranslation("common");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HeroSlogan className="hero__slogan" />
      <p>{t("hero")}</p>
      <div className="hero__content">
        <a
          href="/files/desmos-project-plan-v0.4.2.pdf"
          target="_blank"
          rel="noreferrer"
          // style={{ width: "fit-content" }}
        >
          <h4>{t("learnMore")}</h4>
          <ArrowIcon className="arrow__icon" />
        </a>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import "./translate.scss";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { lenguage } from "./lenguage";
export const Translate = () => {
  const { t, i18n } = useTranslation("global");
  //Funcion para cambiar el idioma
  const handleTranslate = (change) => {
    i18n.changeLanguage(change);
    moment.locale(change);
  };
  return (
    <div className="translateScreen">
      <div className="container-lenguage">
        <div className="subContainer">
          <h1>{t("translate.lenguage")}</h1>
        </div>
        <p>{t("translate.text-info")}</p>
        <div className="linea"></div>
        <div className="lenguageContainer">
          {lenguage.map((l, index) => (
            <div key={index} className="lenguage">
              <div className="content">
                <p className="p1">{t(l["translate"])}</p>
                <p className="p2" onClick={(e) => handleTranslate(l["local"])}>
                  {l["lenguage"]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

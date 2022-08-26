import React from "react";
import "../styles/styles.scss";
import "./router.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Home } from "../components/home/Home";
import { Translate } from "../view/translate/Translate";
import { MythsCard } from "../view/myths-card/MythsCard";
import { MythsView } from "../view/myths-view/MythsView";
import { HistoryView } from "../view/history-view/HistoryView";
import { PlacesCard } from "../view/places-card/PlacesCard";
import { PlacesView } from "../view/places-view/PlacesView";
import { EventCard } from "../view/event-card/EventCard";
import { EventView } from "../view/event-view/EventView";
import { PersonCard } from "../view/person-card/PersonCard";
import { PersonView } from "../view/person-view/PersonView";
export const Router = () => {
  return (
    <BrowserRouter>
      <div className="container-root-main">
        <div className="container-root-header">
          <Header />
        </div>
        <div className="container-root-body">
          <Routes>
            <Route path="home" exact element={<Home />} />
            <Route path="translate" exact element={<Translate />} />
            <Route path="history-view" exact element={<HistoryView />} />
            <Route path="myths-card" exact element={<MythsCard />} />
            <Route path="myths-view" exact element={<MythsView />} />
            <Route path="places-card" exact element={<PlacesCard />} />
            <Route path="places-view" exact element={<PlacesView />} />
            <Route path="event-card" exact element={<EventCard />} />
            <Route path="event-view" exact element={<EventView />} />
            <Route path="person-card" exact element={<PersonCard />} />
            <Route path="person-view" exact element={<PersonView />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

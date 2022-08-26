import React from 'react'
import { BiChevronsRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AnimationPage } from "../../components/animation/AnimationPage";
import { MythsAll } from "../../components/mythsAll/MythsAll";
export const PlacesCard = () => {
    let navigate = useNavigate();
    return (
        <AnimationPage>
            <div className="container-section-card" id="myths">
                <section className="sub-container-section-card">
                    <article className="container-card-section-card">
                        <div className="sub-container-card-section-card">
                            <div className="container-image-section-card">
                                <img src="https://th.bing.com/th/id/OIP.kpDdsGw5uwcJFOh6en0QHgHaE8?pid=ImgDet&rs=1"></img>
                                <figcaption>Just Filters</figcaption>
                            </div>
                            <div className="container-info-section-card">
                                <div className="sub-container-info-section-card">
                                    <div className="header">
                                        <span className="title">Myth</span>
                                        <h2>
                                            Archimedes’s Weapons of War: Embellished Stories or Deadly
                                            Devices?
                                        </h2>
                                        <div className="info-data">
                                            <span>by Sergio Cano</span>
                                            <span className="space"> | </span>
                                            <span>julio 24 2016</span>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="description">
                                        <p>
                                            The name Archimedes is well known to anyone who has
                                            learned about classical antiquity during…
                                        </p>
                                    </div>
                                    <div className="container-bottom-reader">
                                        <button
                                            className="btn-read"
                                            onClick={() => navigate("/places-view")}
                                        >
                                            {" "}
                                            Read More{" "}
                                            <i className="icon">
                                                <BiChevronsRight />
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                <div className="container-aside">
                    <MythsAll />
                </div>
            </div>
        </AnimationPage>
    );
}
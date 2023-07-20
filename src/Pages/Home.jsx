import { useEffect, useRef } from "react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home({ mouse }) {

    const intensity = 50

    const containerVariants = {
        visible: {
            rotateX:  -mouse.y * intensity,
            rotateY: mouse.x * intensity,
            transition: {
                type: 'Inertia',
            }
        }
    }

    return <>
        <section className="home">
            <div className="home__hero">
                <div className="home__hero__content">
                    <h1 className="home__hero__content--title">
                        Everything you are. In one, simple link in bio.
                    </h1>
                    <p className="home__hero__content--text">
                        Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
                    </p>
                    <Link to={"/Linktree"} className="home__hero__content--link">
                        Claim your tree
                    </Link>
                </div>
                <div className="home__hero__figure">
                    <motion.div
                        variants={containerVariants}
                        animate="visible"
                        className="home__hero__figure--wrapper"
                    >
                        <div className="red"></div>
                        <div className="green"></div>
                        <div className="blue"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    </>
}
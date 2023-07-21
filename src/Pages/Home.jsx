import { useEffect, useRef } from "react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home({ mouse }) {

    const intensity = 75

    const containerVariants = {
        visible: {
            rotateX:  -mouse.y * intensity,
            rotateY: mouse.x * intensity,
            transition: {
                type: 'Inertia',
            }
        }
    }

    const imageVariants = {
        hidden:{
            scale: 0,
        },
        visible: {
            scale: 1,
            transition: {
                type: 'spring',
            }
        }
    }

    const sectionVariants= {
        hidden:{
            opacity: 0,
        },
        visible:{
            opacity: 1,
            transition: {
                type: "spring"
            }
        }
    }

    return <>
        <motion.section 
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="home"
        >
            <div className="home__hero">
                <div className="home__hero__content">
                    <h1 className="home__hero__content--title">
                        Everything you are. In one, simple link in bio.
                    </h1>
                    <p className="home__hero__content--text">
                        Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
                    </p>
                    <motion.div
                        style={{
                            width: "fit-content"
                        }}
                        whileHover={{
                            scale: 1.125,
                            transition: {
                                type: "spring",
                                stiffness: 400
                            }
                        }}
                    >
                        <Link to={"/Linktree"} className="home__hero__content--link">
                            Claim your tree
                        </Link>
                    </motion.div>
                </div>
                <div className="home__hero__figure">
                    <motion.div
                        variants={containerVariants}
                        animate="visible"
                        className="home__hero__figure--wrapper"
                    >
                        <motion.img 
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            src="figure/asteroid.png" 
                            alt="" 
                            className="home__hero__figure--image home__hero__figure--asteroid1"
                            
                        />
                        <motion.img 
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            src="figure/earth.png" 
                            alt="" 
                            className="home__hero__figure--image home__hero__figure--earth"
                            
                        />
                        <motion.img 
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            src="figure/asteroid.png" 
                            alt="" 
                            className="home__hero__figure--image home__hero__figure--asteroid2"
                            
                        />
                        <motion.img 
                            variants={imageVariants}
                            initial="hidden"
                            animate="visible"
                            src="figure/logo.png" 
                            alt="" 
                            className="home__hero__figure--image home__hero__figure--logo"
                            
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    </>
}
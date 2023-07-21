import { Link } from "react-router-dom"
import { motion } from "framer-motion";

export default function Linktree() {
    const links = [
        {
            name: "Twitter",
            link: "https://twitter.com/GammaCities"
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/gammacities/"
        },
        {
            name: "Facebook",
            link: "https://www.facebook.com/gammacities"
        },
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/company/87163774/admin/"
        },
        {
            name: "Discord",
            link: "https://discord.gg/gammacities"
        },
        {
            name: "Telegramme",
            link: "https://t.me/gammacities"
        },
        {
            name: "Youtube",
            link: "https://www.youtube.com/@gammacities"
        },
        {
            name: "TikTok",
            link: "https://www.tiktok.com/@gammacities?_t=8dQlaH4Agnl&_r=1"
        },
        {
            name: "Reddit",
            link: "https://www.reddit.com/user/GammaCities/"
        },

    ];
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring"
            }
        }
    }
    return <>
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="linktree"
        >
            <Link to={"/"}>
                <img src="/Logos/gammacities.png" alt="gammacities logo" />
            </Link>
            {
                links.map((item, key) => {

                    return <motion.a
                        whileHover={{
                            scale: 1.125,
                            transition: {
                                type: "spring",
                                stiffness: 400
                            }
                        }}
                        className="Linktree__link"
                        key={key}
                        href={item.link}
                        target="_blank"
                    >
                        {item.name}
                    </motion.a>
                })
            }
        </motion.section>
    </>
}
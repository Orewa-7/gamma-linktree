export default function Linktree(){
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
        
    ]
    return <>
        <section className="linktree">
            <img src="/Logos/gammacities.png" alt="gammacities logo" />
            {
                links.map((item, key)=>{

                    return <a
                        className="Linktree__link"
                        key={key}
                        href={item.link}
                        target="_blank"
                    >
                        {item.name}
                    </a>
                })
            }
        </section>
    </>
}
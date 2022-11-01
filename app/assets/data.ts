type Event = {
    dateRange?: string,
    degree?: string,
    title: string  
}

type PropType = {
    heading: string,
    helperText?: string,
    events: Event[]
}

type ItemProp = {
    avatar: string,
    toolsName?: string,
    disc: string
}

type Tech = {
    avatar: string,
    title: string,
    color?: string, 
    link?: string
}

type ProgLang = {
    avatar: string,
    link: string,
    name?: string
}

export type ProjectProps = {
    title: string,
    disc: string[],
    code: string,
    demo: string,
    image: string,
    techStack: Tech[],
    prglsngs: ProgLang[]
}

export const EDUCATION: PropType = {
    heading: "Education",
    helperText: "I am mostly self-taught, but here are some of the most relevant certifications I have achieved",
    events: [
        {
            dateRange: "2019",
            degree: "High School Degree(Baccalauréat)",
            title: "Physics Science"
        },
        {
            dateRange: "2020-2022",
            degree: "BTS DIPLOMA",
            title: "Development of Information Systems(DSI)"
        },
        {
            dateRange: "2022-Now",
            degree: "Professional licence in ENS",
            title: "Web Software and Development"
        },
        {
            title: "never stop learning"
        }, 
    ]
}


export const EXPERIENCES: PropType = {
    heading: "Experiences",
    events: [
        {
            dateRange: "April, 2021",
            degree: "Taounate Province",
            title: "Internship(half month)"
        },
        {
            dateRange: "June, 2022",
            degree: "Altek Technologies",
            title: "Internship(half month)"
        },
        {
            title: "more to come..."
        }, 
    ]
}

export const TOOLS: ItemProp[] = [
    {
        avatar: "https://i.imgur.com/vDD6kpS.png",
        toolsName: "intellij idea",
        disc: "IntelliJ - I use this fully fanctional ide for java developement(Spring boot, jakarta ee...). "
    },
    {
        avatar: "https://i.imgur.com/oysyNIt.png",
        toolsName: "VS Code",
        disc: "VS Code - I use visual studio editor for writing javascript/Typescript code(React, React Native, Remix). "
    },
    {
        avatar: "https://i.imgur.com/cm7fUBM.png",
        toolsName: "Vim",
        disc: "Vim - Vim is an essential tool in my tools list for editing simple scripts, configurations files and simple c labs. "
    }
]

export const WORKFLOWS: ItemProp[] = [
    {
        avatar: "https://i.imgur.com/UQtptYi.png",
        toolsName: "figma",
        disc: "Figma - I use figma to create the ui/ux wireframing and prototyping before moving to code.  "
    },
    {
        avatar: "https://i.imgur.com/DBmPjyV.jpeg",
        toolsName: "Drawio",
        disc: "Drawio - Sometimes I need to create some diagrams and this is the right tool for that.  "
    },
    {
        avatar: "https://i.imgur.com/MDjXc0T.png",
        toolsName: "Notion",
        disc: "Notion - The best Note taking and managing workflow app, I try to use it for managing everything.  "
    },
    {
        avatar: "https://i.imgur.com/cUToVuh.png",
        toolsName: "Git",
        disc: "Git - The default version control tool. I use it along with github to manage my projects. "
    }
]

const _react = {
    avatar: "https://i.imgur.com/cWDVsJ8.png",
    title: "React",
    color: "#14d3f5",
    link: "React.com"
}

const _springboot = {
    avatar: "https://i.imgur.com/jKcCIu4.png",
    title: "Spring Boot",
    color: "#8BC34A",
    link: "https://spring.io"   
}

const _remix = {
    avatar: "https://i.imgur.com/jtFkiPX.jpg",
    title: "Remix",
    color: "#2C5689",
    link: "https://remix.com"
}

const _mysql = {
    avatar: "https://i.imgur.com/OGeDQwy.png",
    title: "MySQL",
    color: "#00618A",
    link: "https://mysql.com"
}

const _guichetApi = {
    avatar: "https://i.imgur.com/SffvoZe.png",
    title: "Guichet API",
    color: "#0A1D38",
    link: "https://guichet.com"
}

const _quranApi = {
    avatar: "https://i.imgur.com/JXrwXo2.png",
    title: "Quran API",
    color: "#112E44",
    link: "https://api.quran.com"
}

const _reactNative = {
    avatar: "https://i.imgur.com/cWDVsJ8.png",
    title: "React Native",
    color: "#14d3f5",
    link: "https://reactnative.dev"
}

export const PROJECTS: ProjectProps[] = [
    {
        title: "casawe-guichet",
        disc: [
            "Online ticketing platform for tickets and Sport Ticketing for sports events.",
            "This application is part of the guichet.ma platform which is a web application and mobile application for online ticket booking."
        ],
        code: "https://github.com/abdenassar01/casawe-guichet",
        demo: "https://casawe-guichet.vercel.app/",
        image: "https://i.imgur.com/523rzab.png",
        techStack:[ 
            _react, _guichetApi
        ],
        prglsngs: [
            {
                avatar: "https://i.imgur.com/FMQhTrh.png",
                link: "https://javascript.com",
                name: "JavaScript"
            }
        ]
    },
    {
        title: "Lkora",
        disc: [
            "Cross Platform Mobile app built with react Native.",
            "This application gives data about football events and gives fixtures to next comming matches, show board standing for the most known tournomants, best player of the week and more..."
        ],
        code: "https://github.com/abdenassar01/lkora",
        demo: "https://github.com/abdenassar01/lkora/release",
        image: "https://i.imgur.com/523rzab.png",
        techStack:[ 
            _reactNative
        ],
        prglsngs: [
            {
                avatar: "https://i.imgur.com/FMQhTrh.png",
                link: "https://javascript.com",
                name: "JavaScript"
            }
        ]
    },
    {
        title: "Shoppily",
        disc: [
            "Fullstack ecommerce web application built with spring boot, mysql and react.",
            "This application was built in my final year's project in my BTS degree. It aims to make shopping online easy and smouth(Not Working for know)."
        ],
        code: "https://github.com/abdenassar01/Shoppily",
        demo: "https://shoppily.vercel.app",
        image: "https://i.imgur.com/KjZBOHV.png",
        techStack:[ 
            _react, _springboot, _mysql
        ],
        prglsngs: [
            {
                avatar: "https://i.imgur.com/4oHqGO1.png",
                link: "https://java.com",
                name: "Java"
            },
            {
                avatar: "https://i.imgur.com/FMQhTrh.png",
                link: "https://javascript.com",
                name: "JavaScript"
            }
        ]
    },
    {
        title: "muslim",
        disc: [
            "Alkuran alkareem in your packet. Mobile application for azkar and alQuran Alkareem.",
            "This application can help you to read alkuran whenever you are. It's provide alquran alkareem complete in addition to evening, morning and roqya doae and there is more features comming soon..."
        ],
        code: "https://github.com/abdenassar01/muslim",
        demo: "https://github.com/abdenassar01/muslim/release",
        image: "https://i.imgur.com/Fr7ff2v.png",
        techStack:[ 
            _reactNative, _quranApi
        ],
        prglsngs: [
            {
                avatar: "https://i.imgur.com/OlAGikT.png",
                link: "https://www.typescriptlang.org/",
                name: "TypeScript"
            }
        ]
    },
    {
        title: "muslimweb",
        disc: [
            "Web interface for alquran alkareem reading and listening.",
            "This application is a web application for quran alkareem, you can read alkuran as text or listen to it as an audio. this app is relying on external API's."
        ],
        code: "https://github.com/abdenassar01/quran",
        demo: "https://muslimweb.vercel.app",
        image: "https://i.imgur.com/hvcKZBc.png",
        techStack:[ 
            _remix, _quranApi
        ],
        prglsngs: [
            {
                avatar: "https://i.imgur.com/OlAGikT.png",
                link: "https://www.typescriptlang.org/",
                name: "TypeScript"
            }
        ]
    }
]

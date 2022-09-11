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
    link?: string
}

export type ProjectProps = {
    title: string,
    disc: string[],
    code: string,
    demo?: string,
    image: string,
    techStack: Tech[],
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
        avatar: "https://i.imgur.com/4vegS9z.jpg",
        toolsName: "intellij idea",
        disc: "IntelliJ - I use this fully fanctional ide for java developement(Spring boot, jakarta ee...). "
    },
    {
        avatar: "https://i.imgur.com/YUUYsiX.png",
        toolsName: "VS Code",
        disc: "VS Code - I use visual studio editor for writing javascript/Typescript code(React, React Native, Remix). "
    },
    {
        avatar: "https://i.imgur.com/dAJliqz.png",
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

export const PROJECTS: ProjectProps[] = [
    {
        title: "casawe-guichet",
        disc: [
            "Online ticketing platform for tickets and Sport Ticketing for sports events.",
            "This application is part of the guichet.ma platform which is a web application and mobile application for online ticket booking."
        ],
        code: "https://github.com",
        demo: "https://caswe-guichet.vercel.app",
        image: "",
        techStack:[ 
            {
                avatar: "https://i.imgur.com/cWDVsJ8.png",
                title: "Recat",
                link: "React.com"
            }
        ]
    }
]
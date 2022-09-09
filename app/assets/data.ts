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
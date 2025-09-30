export type SubModel = {
    name: string
    premium?: boolean
    id?: string
}

export type AiModel = {
    model: string
    icon?: string
    premium?: boolean
    enable?: boolean
    subModel?: SubModel[]
}

const aiModels: AiModel[] = [
    {
        model: "GPT",
        icon: "/gpt.png",
        premium: true,
        enable: true,
        subModel: [
            { name: "GPT 3.5", premium: false, id: "gpt-3.5" },
            { name: "GPT 3.5 Turbo", premium: false, id: "gpt-3.5-turbo" },
            { name: "GPT 4 Mini", premium: false, id: "gpt-4-1-mini" },
            { name: "GPT 4", premium: true, id: "gpt-4" },
            { name: "GPT 5 Nano", premium: false, id: "gpt-5-nano" },
            { name: "GPT 5 Mini", premium: false, id: "gpt-5-mini" },
            { name: "GPT 5", premium: true, id: "gpt-5" },
        ],
    },
    {
        model: "Gemini",
        icon: "/gemini.png",
        premium: false,
        enable: true,
        subModel: [
            { name: "Gemini 2.5 Lite", premium: false, id: "gemini-2.5-lite" },
            { name: "Gemini 2.5 Flash", premium: false, id: "gemini-2.5-flash" },
            { name: "Gemini 2.5 Pro", premium: true, id: "gemini-2.5-pro" },
        ],
    },
    {
        model: "DeepSeek",
        icon: "/deepseek.png",
        premium: true,
        enable: true,
        subModel: [
            { name: "DeepSeek R1", premium: false, id: "deepseek-r1" },
            { name: "DeepSeek R1 0528", premium: true, id: "deepseek-r1-0528" },
        ],
    },
    {
        model: "Mistral",
        icon: "/mistral.png",
        premium: true,
        enable: true,
        subModel: [
            { name: "Mistral Medium 2505", premium: true, id: "mistral-medium-2505" },
            { name: "Mistral 3B", premium: false, id: "mistral-3b" },
        ],
    },
    {
        model: "Grok",
        icon: "/grok.png",
        premium: true,
        enable: true,
        subModel: [
            { name: "Grok 3 Mini", premium: false, id: "grok-3-mini" },
            { name: "Grok 3", premium: true, id: "grok-3" },
        ],
    },
    {
        model: "Cohere",
        icon: "/cohere.png",
        premium: false,
        enable: true,
        subModel: [
            { name: "Cohere Command A", premium: false, id: "cohere-command-a" },
            { name: "Cohere Command R 08-2024", premium: false, id: "cohere-command-r-08-2024" },
        ],
    },
    {
        model: "Llama",
        icon: "/llama.png",
        premium: true,
        enable: true,
        subModel: [
            { name: "Llama 3.3 70B Instruct", premium: true, id: "llama-3.3-70b-instruct" },
            { name: "Llama 4 Scout 17B 16E Instruct", premium: false, id: "llama-4-scout-17b-16e" },
        ],
    },
]

export default aiModels

export type NewsItem = {
    id: number;
    title: string;
    description: string;
    image: string;
}

export const NEWS_ITEM = [
    {
        id: 1,
        title: "Notícia 1",
        description: "Descrição da notícia 1",
        image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
        id: 2,
        title: "Notícia 2",
        description: "Descrição da notícia 2",
        image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
        id: 3,
        title: "Notícia 3",
        description: "Descrição da notícia 3",
        image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
        id: 4,
        title: "Notícia 4",
        description: "Descrição da notícia 4",
        image: "https://reactnative.dev/img/tiny_logo.png",
    },
    {
        id: 5,
        title: "Notícia 5",
        description: "Descrição da notícia 5",
        image: "https://reactnative.dev/img/tiny_logo.png",
    }
] as const;

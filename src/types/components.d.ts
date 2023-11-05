type OnClick = {
    onclick: (index: number) => void,
};

type Board = {
    cards: TodoList[],
    onclick: (index: number) => void,
};

type Card = {
    title: string,
    desc: string,
    id: number,
    status: string,
    onclick: (index: number) => void,
}

type TodoList = {
    title: string,
    desc: string,
    id: number,
    status: string,
};

type List = {
    id: string,
    title: string,
    todos: TodoList[],
    onclick: (index: number) => void,
};

type Form = {
    add: (title: string, desc: string) => void,
};

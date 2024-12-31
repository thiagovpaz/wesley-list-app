import axios from "axios";

export function getAccessToken() {
    const json = localStorage.getItem('user');

    if (!json) {
        return null;
    }

    const user = JSON.parse(json);
    const access_token = user.token;

    return access_token ?? access_token
}

export async function CreateTask(title: string, description: string, status: string) {
    const access_token = getAccessToken();
    if (access_token) {
        try {
            const response = await axios.post(
                'http://localhost:3000/task',
                JSON.stringify({ title, description, status }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

            return response;

        } catch (err) {
            return window.alert('Erro ao criar a tarefa');
        }
    } else {
        window.alert('Erro ao criar a tarefa');
    }
}

export async function GetTasks(page: number) {
    const access_token = getAccessToken();
    if (access_token) {
        try {
            const response = await axios.get(
                `http://localhost:3000/task?page=${page}&limit=5`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

            return response;

        } catch (err) {
            return window.alert('Erro ao buscar tarefas');
        }
    } else {
        window.alert('Erro ao buscar tarefas');
    }
}

export async function GetOneTask(id: number) {
    const access_token = getAccessToken();
    if (access_token) {
        try {
            const response = await axios.get(
                `http://localhost:3000/task/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

            return response;

        } catch (err) {
            return window.alert('Erro ao buscar tarefa');
        }
    } else {
        window.alert('Erro ao buscar tarefa');
    }
}

export async function EditTask(id: number, title: string, description: string, status: string) {
    const access_token = getAccessToken();
    if (access_token) {
        try {
            const response = await axios.patch(
                `http://localhost:3000/task/${id}`,
                {
                    title,
                    description,
                    status
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

            return response;

        } catch (err) {
            return window.alert('Erro ao buscar tarefa');
        }
    } else {
        window.alert('Erro ao buscar tarefa');
    }
}

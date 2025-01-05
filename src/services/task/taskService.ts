import { Api } from '../api';

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
            const response = await Api.post(
                '/task',
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
            const response = await Api.get(
                `/task?page=${page}&limit=6`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

            console.log(response);

            return response.data;

        } catch (err) {
            window.alert('Erro ao buscar tarefas');
        }
    } else {
        window.alert('Erro ao buscar tarefas');
    }
}

export async function GetOneTask(id: number) {
    const access_token = getAccessToken();
    if (access_token) {
        try {
            const response = await Api.get(
                `/task/${id}`,
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
            const response = await Api.patch(
                `/task/${id}`,
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
            return window.alert('Erro ao editar tarefa');
        }
    } else {
        window.alert('Erro ao editar tarefa');
    }
}

export async function RemoveTask(id: number) {
    const access_token = getAccessToken();
    if (access_token) {
        try {
            const response = await Api.delete(
                `/task/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );

            return response;

        } catch (err) {
            return window.alert('Erro ao deletar tarefa');
        }
    } else {
        window.alert('Erro ao deletar tarefa');
    }
}

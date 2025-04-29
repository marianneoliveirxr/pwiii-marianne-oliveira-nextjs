// Importação
import { createConnection } from 'mysql2/promise';

// Função para conectar no MySQL
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}

export default async function handler(req, res) {
    if (req.method !== 'GET'){
        return res.status(405).json({ error: 'Metodo não permitido'});
    }

    try {
        // Conexão no MySQL
        const connection = await connectToDatabase();

        // Execução da query para receber dados da tabela "User"
        const [rows] = await connection.execute('SELECT * FROM users WHERE id = 1', );

        // Verificar se o usuário existe 
        if (rows.lenght === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado. '});
        }

        // Fechar a conexão
        await connection.end();

        // Resposta com os dados do usuário
        res.status(200).json(rows);
    }   catch (error) {
        console.error('Erro de conexão com o banco:', error);
        res.status(500).json({ error: 'Erro Interno de Servidor' });
    }
}
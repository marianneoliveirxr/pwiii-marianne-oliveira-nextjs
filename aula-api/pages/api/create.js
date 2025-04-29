
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
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const userdata = req.body;
    console.log(userdata)

    const { name, email} = userdata;

    if (!name || !email ) {
        return res.status(400).json({ error: 'name e email são obrigatórios no request body.'});
    }
    try {
        // Conecta no banco
        const connection = await connectToDatabase();

        //Executa a query para transicionar dados da tabela "user"
        const [result] = await connection.execute('INSERT INTO users (name,email) VALUES (?, ?)', [
            name,
            email,
        ]);
        // Checa se o usuário existe 

        // Encerra conexão
        await connection.end();

        //Respond with the user data
        res.status(201).json({ id: result.insertId, message: 'Usuário criado com sucesso!'});
      } catch (error) {
          console.error('Error de conexão com o banco:', error);
          res.status(500).json({ error: 'Erro Interno de Servidor'});
      }      
}
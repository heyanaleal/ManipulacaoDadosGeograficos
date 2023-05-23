<!DOCTYPE html>
<html>

<body>
  <h1>Desafio Backend</h1>

  <p>O Desafio foi criar uma REST API para resolver problemas de processamento e manipulação de dados geográficos.</p>

  <h2>Primeira Parte</h2>
  <ol>
    <li>
      <h3>GET /v1/</h3>
      <p>Retornar uma mensagem padrão com status 200 OK. </p>
      <p>URL para teste: http://localhost:3000/v1</p>
      <pre><code>{"message": "Bem vindo a API GeoPoly!"}</code></pre>
    </li>
    <li>
      <h3>POST /v1/auth</h3>
      <p>Simular uma rota de autenticação. Retornar uma das possíveis respostas dependendo do corpo da requisição.</p>
      <p>URL para teste: http://localhost:3000/v1/auth </p>
      <p>Exemplo de requisição:</p>
      <pre><code>{
  "email": "admin@exemplo.com.br",
  "password": "abcd1234"
}</code></pre>
      <p>Exemplo de resposta (200 OK) para caso as credenciais estejam corretas:</p>
      <pre><code>{
  "message": "Autenticado com sucesso!"
}</code></pre>
      <p>Exemplo de resposta (401 Unauthorized) para caso as credenciais estejam incorretas:</p>
      <pre><code>{
  "message": "Falha ao autenticar!"
}</code></pre>
      <p>Exemplo de resposta (400 Bad Request) para caso o formato do corpo da requisição (nome dos atributos errados e/ou atributos a mais ou a menos) esteja incorreto:</p>
      <pre><code>{
  "message": "Formato da requisição inválido!"
}</code></pre>
    </li>
  </ol>

  <h2>Segunda Parte</h2>
  <ol start="3">
    <li>
      <h3>GET /v2/places</h3>
      <p>Retornar uma lista de lugares com informações geográficas em formato JSON.</p>
      <p>URL para teste: http://localhost:3000/v2/places</p>
      <p>Exemplo de resposta (lugares em São José dos Campos - SP):</p>
      <pre><code>[
  {
    "id": 1,
    "name": "Parque da Cidade",
    "latitude": -23.221112,
    "longitude": -45.899678
  },
  {
    "id": 2,
    "name": "Praça Ulisses Guimarães",
    "latitude": -23.180038,
    "longitude": -45.884357
  },
]</code></pre>
    </li>
    <li>
      <h3>GET /v2/places/:id</h3>
      <p>Retornar um lugar específico da lista acima pelo seu ID em formato JSON.</p>
      <p>URL para teste: http://localhost:3000/v2/places/{id}</p>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "id": 1,
  "name": "Parque da Cidade",
  "latitude": -23.221112,
  "longitude": -45.899678
}</code></pre>
    </li>
  </ol>

  <h2>Terceira Parte</h2>
  <ol start="5">
    <li>
      <h3>POST /v3/places</h3>
      <p>Criar um novo lugar com informações geográficas a partir de um objeto JSON.</p>
      <p>URL para teste: http://localhost:3000/v3/places</p>
      <p>Exemplo de requisição:</p>
      <pre><code>{
  "name": "Lago do Vale",
  "latitude": -23.200443,
  "longitude": -45.896235
}</code></pre>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "id": 5,
  "name": "Lago do Vale",
  "latitude": -23.200443,
  "longitude": -45.896235
}</code></pre>
    </li>
    <li>
      <h3>PUT /places/:id</h3>
      <p>Atualizar um lugar específico pelo seu ID a partir de um objeto JSON com as informações a serem atualizadas.</p>
      <p>URL para teste: http://localhost:3000/v3/places/{id}</p>
      <p>Exemplo de requisição:</p>
      <pre><code>{
  "name": "Parque da Cidade - São José dos Campos",
  "latitude": -23.221112,
  "longitude": -45.899678
}</code></pre>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "id": 1,
  "name": "Parque da Cidade - São José dos Campos",
  "latitude": -23.221112,
  "longitude": -45.899678
}</code></pre>
    </li>
    <li>
      <h3>DELETE /places/:id</h3>
      <p>Deletar um lugar específico pelo seu ID.</p>
      <p>URL para teste: URL para teste: http://localhost:3000/v3/places/{id}</p>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "message": "Lugar removido com sucesso!"
}</code></pre>
    </li>
  </ol>

  <h2>Quarta Parte</h2>
  <ol start="8">
    <li>
      <h3>GET /v4/places/:id1/distancia/:id2</h3>
      <p>Retornar a distância entre 2 pontos.</p>
      <p>URL para teste: http://localhost:3000/v4/places/{id1}/distancia/{id2}</p>
      <p>Exemplo de resposta:</p>
      <pre><code>{
  "distance": 1300.00
}</code></pre>
    </li>
    <li>
      <h3>GET /v4/search?latitude={latitude}&longitude={longitude}&radius={radius}</h3>
      <p>Retornar uma lista de lugares e/ou áreas em um raio específico a partir de uma localização central (latitude e longitude) e um raio em metros.</p>
     <p>URL para teste: http://localhost:3000/v4/search?latitude=-23.185067&longitude=-45.892018&radius=2000</p>
      <p>Exemplo de resposta:</p>
      <pre><code>[
  {
    "id": 1,
    "name": "Parque da Cidade",
    "latitude": -23.221112,
    "longitude": -45.899678,
    "distance": 1300.0
  },
  {
    "id": 2,
    "name": "Praça Ulisses Guimarães",
    "latitude": -23.180038,
    "longitude": -45.884357,
    "distance": 5000.0
  },
  {
    "id": 3,
    "name": "Shopping Center Vale",
    "latitude": -23.186732,
    "longitude": -45.884104,
    "distance": 5600.0
  },
]</code></pre>
    </li>
  </ol>

  <h2>Quinta Parte</h2>
<ol start="10">
  <li>
    <h3>GET /lugares</h3>
    <p>Retorna a lista de lugares.</p>
    <p>URL para teste: http://localhost:3000/lugares</p>
    <pre><code>[
{
    "id":1,
    "nome": "Central Park",
    "ponto": {
      "type": "Point",
      "coordinates": [-73.965355, 40.782865]
    }
  },
  {
    "id": 2,
    "nome": "Disney",
    "ponto": {
      "type": "Point",
      "coordinates": [-81.536072, 28.385233]
    }
  }
  
]</code></pre>
  </li>
  <li>
    <h3>POST /lugares</h3>
    <p>Cria um novo lugar.</p>
    <p>URL para teste: http://localhost:3000/lugares</p>
    <p>Exemplo de requisição:</p>
    <pre><code>{
  "nome": "Estátua da Liberdade",
  "ponto": {
    "type": "Point",
    "coordinates": [-74.044444, 40.689167]
  }
}
</code></pre>
    <p>Resposta (201 Created) em caso de sucesso.</p>
    <p>Resposta (500 Internal Server Error) em caso de erro.</p>
  </li>
  <li>
    <h3>GET /lugares/{id}</h3>
    <p>Retorna os detalhes de um lugar específico.</p>
    <p>URL para teste: http://localhost:3000/lugares/{id}</p>
    <pre><code>{
    "id":1,
    "nome": "Central Park",
    "ponto": {
      "type": "Point",
      "coordinates": [-73.965355, 40.782865]
    }
  },
}</code></pre>
    <p>Resposta (404 Not Found) caso o lugar não seja encontrado.</p>
  </li>
  <li>
    <h3>PUT /lugares/{id}</h3>
    <p>Atualiza as informações de um lugar específico.</p>
    <p>URL para teste: http://localhost:3000/lugares/{id}</p>
    <p>Exemplo de requisição:</p>
    <pre><code>{
  "nome": "Lugar Atualizado",
  "ponto": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  }
}</code></pre>
    <p>Resposta (200 OK) em caso de sucesso.</p>
    <p>Resposta (500 Internal Server Error) em caso de erro.</p>
  </li>
  <li>
    <h3>DELETE /lugares/{id}</h3>
    <p>Remove um lugar específico.</p>
    <p>URL para teste: http://localhost:3000/v1/lugares/{id}</p>
    <p>Resposta (200 OK) em caso de sucesso.</p>
    <p>Resposta (500 Internal Server Error) em caso de erro.</p>
  </li>

  <li>  
  <h3>GET /areas</h3>
    <p>Retorna a lista de áreas.</p>
    <p>URL para teste: http://localhost:3000/areas</p>
    <pre><code>[
  {
    "id": 1,
    "nome": "Central Park",
    "poligono": {
      "type": "Polygon",
      "coordinates": [[
        [-73.968285, 40.785091],
        [-73.958819, 40.785091],
        [-73.958819, 40.791899],
        [-73.968285, 40.791899],
        [-73.968285, 40.785091]
      ]]
    }
  },
  {
    "id": 2,
    "nome": "Parque Ibirapuera",
    "poligono": {
      "type": "Polygon",
      "coordinates": [[
        [-46.661525, -23.587808],
        [-46.657938, -23.583662],
        [-46.648642, -23.584538],
        [-46.649697, -23.591582],
        [-46.661525, -23.587808]
      ]]
    }
  },
]</code></pre>
  </li>
  
  <li>
    <h3>POST /areas</h3>
    <p>Cria uma nova área.</p>
    <p>URL para teste: http://localhost:3000/areas</p>
    <p>Exemplo de requisição:</p>
    <pre><code>{
  "nome": "Times Square",
  "poligono": {
    "type": "Polygon",
    "coordinates": [[
      [-73.9857, 40.7589],
      [-73.9857, 40.7598],
      [-73.9866, 40.7598],
      [-73.9866, 40.7589],
      [-73.9857, 40.7589]
    ]]
  }
}</code></pre>
    <p>Resposta (201 Created) em caso de sucesso.</p>
    <p>Resposta (500 Internal Server Error) em caso de erro.</p>
  </li>

  <li>
    <h3>GET /areas/{id}</h3>
    <p>Retorna os detalhes de uma área específica.</p>
    <p>URL para teste: http://localhost:3000/areas/{id}</p>
    <pre><code>{
    "id": 1,
    "nome": "Central Park",
    "poligono": {
      "type": "Polygon",
      "coordinates": [[
        [-73.968285, 40.785091],
        [-73.958819, 40.785091],
        [-73.958819, 40.791899],
        [-73.968285, 40.791899],
        [-73.968285, 40.785091]
      ]]
    }
  },
}</code></pre>
    <p>Resposta (404 Not Found) caso a área não seja encontrada.</p>
  </li>
  
  <li>
    <h3>PUT /areas/{id}</h3>
    <p>Atualiza as informações de uma área específica.</p>
    <p>URL para teste: http://localhost:3000/areas/{id}</p>
    <p>Exemplo de requisição:</p>
    <pre><code>{
  "nome": "Área Atualizada",
  "poligono": {
    "type": "Polygon",
    "coordinates": [[
      [longitude1, latitude1],
      [longitude2, latitude2],
      ...
    ]]
  }
}</code></pre>
    <p>Resposta (200 OK) em caso de sucesso.</p>
    <p>Resposta (500 Internal Server Error) em caso de erro.</p>
  </li>
 
  <li>
    <h3>DELETE /areas/{id}</h3>
    <p>Remove uma área específica.</p>
    <p>URL para teste: http://localhost:3000/areas/{id}</p>
    <p>Resposta (200 OK) em caso de sucesso.</p>
    <p>Resposta (500 Internal Server Error) em caso de erro.</p>
  </li>
  
</ol>



<h2>Verificar se um lugar está dentro de uma área</h2>
<ol start="20">
  <li>
    <h3>GET /lugares/:lugarId/areas/:areaId</h3>
  </li>
  <p>Verifica se um lugar específico está dentro de uma área específica.</p>
  <p>URL para teste: http://localhost:3000/lugares/{lugarId}/areas/{areaId}</p>
  <h4>Parâmetros de URL</h4>
  <ul>
    <li><strong>:lugarId</strong> (obrigatório): ID do lugar que será verificado.</li>
    <li><strong>:areaId</strong> (obrigatório): ID da área em que será verificado se o lugar está dentro.</li>
  </ul>
  <h4>Respostas</h4>
  <ul>
    <li>
      <strong>200 OK:</strong> O lugar está dentro da área.
      <pre>
{
  "isInsideArea": true
}
      </pre>
    </li>
    <li>
      <strong>200 OK:</strong> O lugar não está dentro da área.
      <pre>
{
  "isInsideArea": false
}
      </pre>
    </li>
    <li>
      <strong>500 Internal Server Error:</strong> Erro ao verificar se um lugar está dentro de uma área.
      <pre>
{
  "error": "Erro ao verificar se um lugar está dentro de uma área."
}
      </pre>
    </li>
  </ul>
  <h2>Listar lugares dentro de uma área</h2>
  <li>
    <h3>GET /lugares/areas/:areaId</h3>
  </li>
  <p>Lista os lugares dentro de uma área específica.</p>
  <p>URL para teste: http://localhost:3000/lugares/areas/{id}/lugares</p>
  <h4>Parâmetros de URL</h4>
  <ul>
    <li><strong>:areaId</strong> (obrigatório): ID da área da qual serão listados os lugares.</li>
  </ul>
  <h4>Respostas</h4>
  <ul>
    <li>
      <strong>200 OK:</strong> Lista de lugares dentro da área.
      <pre>
{
  "success": true,
  "lugares": [
    {
      "id": 1,
      "nome": "Lugar 1",
      "ponto": {
        "type": "Point",
        "coordinates": [longitude, latitude]
      }
    },
    {
      "id": 2,
      "nome": "Lugar 2",
      "ponto": {
        "type": "Point",
        "coordinates": [longitude, latitude]
      }
    }
  ]
}
      </pre>
    </li>
    <li>
      <strong>500 Internal Server Error:</strong> Erro ao listar lugares dentro de uma área.
      <pre>
{
  "error": "Erro ao listar lugares dentro de uma área."
}
      </pre>
    </li>
  </ul>
</ol>
<h2>Instalação</h2>

<ol>
  <p>Requisitos:</p>
  - <code>PostgreSQL</code><br>
  - <code>Node</code><br>
  - <code>Extensão - PostGIS</code><br>
</ol>

<ol>
  <p>Script para criação das tabelas do banco:</p>
  <p>DataBase - spotsat<p>
  <pre>
    CREATE TABLE lugares (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      ponto GEOMETRY(Point, 4326) NOT NULL
    );
    CREATE TABLE areas (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      poligono GEOMETRY(Polygon, 4326) NOT NULL
    );
  </pre> 



</ol>


<ol>
  <p>Siga as etapas abaixo para configurar e executar o projeto localmente:</p>
  <li>Clone o repositório do projeto:</li>
  <code>git clone https://github.com/heyanaleal/SpotSat.git</code>
  <li>Navegue até o diretório do projeto:</li>
  <code>cd SpotSat</code>
  <li>Instale as dependências do projeto:</li>
  <code>npm install</code>
</ol>
<h2>Uso</h2>
<ol>
  <p>Execute o projeto usando o seguinte comando:</p>
  <code>npm start</code>
</ol>

</body>
</html>

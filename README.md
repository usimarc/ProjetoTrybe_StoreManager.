Desenvolvemos a  primeira API utilizando a arquitetura MSC (model-service-controller)!<br />
API construída é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Você deverá utilizar o banco de dados MySQL para a gestão de dados. Além disso, a API deve ser RESTful.<br />
Lembrando que o projeto foi iniciado pela Trybe e fizemos algumas partes atendendo os requisitos:

01 - Crie endpoints para listar produtos<br />
O endpoint para listar produtos deve ser acessível através do caminho (/products) e (/products/:id);<br />
Através do caminho /products, todos os produtos devem ser retornados;<br />
Através do caminho /products/:id, apenas o produto com o id presente na URL deve ser retornado;<br />
O resultado da listagem deve ser ordenado de forma crescente pelo campo id;<br />

02 - Desenvolva testes que cubram no mínimo 5% das camadas da sua aplicação<br />
Seus arquivos de teste devem ficar no diretório tests/unit, como é descrito em Para escrever seus próprios arquivos de teste;<br />
Seus testes da model devem fazer mock do banco de dados obrigatoriamente;<br />
Opcionalmente você pode parar o serviço do MYSQL em sua máquina. Para rodar seus teste utilize npm run test:mocha;<br />
Antes de executar os testes da Trybe, seus testes não devem conter erros.<br />

03 - Crie endpoint para cadastrar produtos<br />
O endpoint deve ser acessível através do caminho (/products);<br />
Os produtos enviados devem ser salvos na tabela products do banco de dados;<br />
O corpo da requisição deverá seguir o formato abaixo:<br />
{<br />
  "name": "ProdutoX"<br />
}<br />

04 - Crie validações para produtos<br />
O endpoint de produtos deve ser acessível através do caminho (/products);<br />
Lembre-se, o banco de dados não deve ser acessado nas validações iniciais do corpo da requisição;<br />

05 - Desenvolva testes que cubram no mínimo 10% das camadas da sua aplicação<br />
Seus arquivos de teste devem ficar no diretório tests/unit, como é descrito em Para escrever seus próprios arquivos de teste;<br />
Seus testes da model devem fazer mock do banco de dados obrigatoriamente;<br />
Opcionalmente você pode parar o serviço do MYSQL em sua máquina. Para rodar seus teste utilize npm run test:mocha;<br />
Antes de executar os testes da Trybe, seus testes não devem conter erros.<br />

06 - Crie endpoint para validar e cadastrar vendas<br />
O endpoint de vendas deve ser acessível através do caminho (/sales);<br />
As vendas enviadas devem ser salvas nas tabelas sales e sales_products do banco de dados;<br />
Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;<br />
O corpo da requisição deverá seguir o formato abaixo:<br />
[<br />
  {<br />
    "productId": 1,<br />
    "quantity": 1<br />
  },<br />
  {<br />
    "productId": 2,<br />
    "quantity": 5<br />
  }<br />
]<br />

07 - Desenvolva testes que cubram no mínimo 15% das camadas da sua aplicação<br />
Seus arquivos de teste devem ficar no diretório tests/unit, como é descrito em Para escrever seus próprios arquivos de teste;<br />
Seus testes da model devem fazer mock do banco de dados obrigatoriamente;<br />
Opcionalmente você pode parar o serviço do MYSQL em sua máquina. Para rodar seus teste utilize npm run test:mocha;<br />
Antes de executar os testes da Trybe, seus testes não devem conter erros.<br />

08 - Crie endpoints para listar vendas<br />
O endpoint para listar vendas deve ser acessível através do caminho (/sales) e (/sales/:id);<br />
Através do caminho /sales, todas as vendas devem ser retornadas;<br />
Através do caminho /sales/:id, apenas a venda com o id presente na URL deve ser retornada;<br />
o resultado deve ser ordenado de forma crescente pelo campo saleId, em caso de empate, ordenar também de forma crescente pelo campo productId;<br />

09 - Desenvolva testes que cubram no mínimo 20% das camadas da sua aplicação<br />
Seus arquivos de teste devem ficar no diretório tests/unit, como é descrito em Para escrever seus próprios arquivos de teste;<br />
Seus testes da model devem fazer mock do banco de dados obrigatoriamente;<br />
Opcionalmente você pode parar o serviço do MYSQL em sua máquina. Para rodar seus teste utilize npm run test:mocha;<br />
Antes de executar os testes da Trybe, seus testes não devem conter erros.<br />

10 - Crie endpoint para atualizar um produto<br />
O endpoint deve ser acessível através do caminho (/products/:id);<br />
Apenas o produto com o id presente na URL deve ser atualizado;<br />
O corpo da requisição deve ser validado igual no cadastro;<br />
O corpo da requisição deverá seguir o formato abaixo:<br />
{<br />
  "name": "Martelo do Batman"<br />
}<br />


11 - Desenvolva testes que cubram no mínimo 25% das camadas da sua aplicação<br />
Seus arquivos de teste devem ficar no diretório tests/unit, como é descrito em Para escrever seus próprios arquivos de teste;<br />
Seus testes da model devem fazer mock do banco de dados obrigatoriamente;<br />
Opcionalmente você pode parar o serviço do MYSQL em sua máquina. Para rodar seus teste utilize npm run test:mocha;<br />
Antes de executar os testes da Trybe, seus testes não devem conter erros.<br />

12 - Crie endpoint para deletar um produto<br />
O endpoint deve ser acessível através do caminho (/products/:id);<br />
Apenas o produto com o id presente na URL deve ser deletado;<br />
# Entrega

## 🚀 Como executar o projeto

```bash
# Abra seu terminal/cmd e clone este repositório
$ git clone https://github.com/MayllaRabay/desafio-serasa.git

# Acesse a pasta do projeto
$ cd desafio-serasa/serasa-challenge

# Baixe todas as dependências e pacotes da aplicação
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse em seu navegador
http://localhost:3000
```

## Exercício 1 - Tipografia e Cores

- Componente [aqui](./serasa-challenge/src/components/typography/typography.tsx)
- Documentação [aqui](./serasa-challenge/docs/typography.md)

## Exercício 2 - Formulário de avaliação

- Componente [aqui](./serasa-challenge/src/components/evaluation-form/evaluation-form.tsx)
- Página principal [aqui](./serasa-challenge/src/app/page.tsx)

## Exercício 3 - Arquitetura

### Dores

- **SEO**
- **Acessibilidade**
- **Tempo de carregamento das páginas**
- **Melhor experiência para o consumidor**
- **Gerenciamento de conteúdo**

### Como resolver

- Dei uma olhadinha no [blog](https://www.serasa.com.br/blog/) e aparentemente vocês já usam o Next.js. Eu manteria essa tecnologia para o front, creio que é bem robusta para um blog com milhares de acessos diários, principalmente por causa do SSR (Server Side Rendering/Renderização do Lado do Servidor).

  - O Next.js usa o SSR como padrão em todos os componentes, então cada página é totalmente processada no servidor antes de ser enviada para o navegador do cliente, ajudando no **Tempo de carregamento das páginas** e consequentemente na otimização de busca, melhorando o **SEO**.

  - Com o Next.js também é possível otimizar as imagens de cada artigo no blog, com o "lazy loading" e suporte a imagens responsivas, melhorando também o **Tempo de carregamento das páginas** e **SEO**.

  - Outra feature do Next.js que valeria a pena testar é o SSG (Static Site Generation/Geração de Site Estático), pois como um blog é por sua vez quase 100% estático, o SSG iria pré-renderizar as páginas no momento da construção, melhorando drasticamente o **Tempo de carregamento**, mesmo durante horários de pico.

  - Para o **Gerenciamento de conteúdo**, acredito que os times de design e produto estariam mais aptos a resolver esse problema, com uma boa e intuitiva interface para o usuário, design minimalista e uma paleta de cores chamativas e harmônicas (eu já amei a cor primária do blog!).

  - Na questão de **Acessibilidade**, creio que independe da tecnologia usada. Seguindo boas práticas como elementos HTML semânticos, uma boa navegação pelo teclado, indicador de foco visível, atributos ARIA, contraste e legibilidade entre os textos e o background, tendo a funcionalidade de tema claro e escuro, a propriedade "alt" para textos alternativos para imagens e uma boa responsividade são a chave para um site **acessível para todos**! <3

  - Por fim, melhorando todos os pontos acima, podemos proporcionar uma **Melhor experiência para o consumidor**.

- Para tecnologias do back e integração:
  - GraphQL com Apollo, pois com o GraphQL é possível buscar do servidor apenas os dados que você precisa, reduzindo o excesso na resposta e melhorando o desempenho.
  - Node.js com Express, pois é leve e rápido, e o próprio Next.js é construído sobre o Node.js.
  - Não tenho conhecimento em Serverless Functions, mas seria uma boa opção a ser testada pois são econômicas, leves e escalonáveis.

### **OBS:**

- Boa parte das informações do Next.js pesquisei em sua própria [documentação](https://nextjs.org/docs/app/building-your-application).

## Projetos e artigos

Caso tenham curiosidade, segue alguns dos meus projetos pessoais:

- [Famosa pokedex](https://github.com/MayllaRabay/desafio-impar)

- [Cadastro de usuário](https://github.com/MayllaRabay/estante-magica)

- [Lista de tarefas](https://github.com/MayllaRabay/lista-tarefas-2.0)

## Feedback

Obrigada pela oportunidade em fazer esse desafio!! Me diverti e fiz com muito carinho!! Todos os exercícios muito bem explicados e direto ao ponto. Estudei mais a fundo a documentação do Next,js, tanto para fazer o desafio quanto para recomendá-lo no exercício 3, relembrei alguns conceitos de formulário, arquitetura limpa, estilizações no geral e acessibilidade.

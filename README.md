# HTML5

Linguagem de marcação possui as seguintes responsabilidades:

- Conteúdo;
- Semântico (tags);

- `<h1>` - heading 1 - 6
  Usamos esta tag quando queremos definir títulos

- `a` - Tag de link (a - anchor), definir navegação do user

- `<nav>` - Tag para informar que o contexto dentro delaé uma navegação, dinsponível apenas no HTML 5

# CSS

É uma linguagem de estilo, significa que ela possui as seguintes responsabilidades:

- Visual

Para deixar o estilo da página igual para todos os browsers, é preciso setar atributos adicionais de CSS para padronizar o layout em todas as páginas. Existem duas alternativas, o reset css desenvolvido pelo _`Erick Meyer`_ ou o _`Normalize`_.

`Herança de atributos de estilo`

Quando quisermos que mais de um componente possua o mesmo atributo, como por exemplo a mesma cor, podemos adicionar esse atributo em um componente pai, e herdar esse estilo em um componente filho. No exemplo de um link, a tag _`<a link>`_ possui seu próprio estilo de cor, agora se quisermos que essa tag utilize o atributo de um componente pai, basta adicionarmos o estilo abaixo na tag _`<a link`_, isso significa que ele herda a propriedade de um componente pai.

```
color: inherit;
```

`Font-family`

As famílias das fontes precisam ser sempre acompanhadas de mais de um tipo para que o layout possa ter o design mais parecido em todos os sistemas operacionais, por exemplo a fonte Arial existe apenas no Windows.

```
font-family: 'Arial', 'Roboto', sans-serif;
```

Tem como fazer download de fontes direto do site do google também. E para utilizado é só criar uma fonte estilizada e colar como primeiro link href da tag _`<head>`_.
- [Site das fontes](https://fonts.google.com/ "Clique e acesse agora!")

`Float`

O atributo _`float`_ cria um novo contexto no browser, e todos os elementos que não são setados como float permanecem no mesmo contexto em que estão (antigo). O pai não enxerga os componentes que estão como float. O float possui as seguintes características:

- Cria um novo contexto;
- Os elementos ocupam o lugar do antigo componente, entretando o conteúdo não é escondido, sempre fica do lado do componente que está com float;
- O width e height do componente dimensiona de acordo com o conteúdo do conteúdo;

Para forçar com que o browser recalcule o contexto para que possa enxergar os componentes que estão com float dentro dele, é necessário inserir a propriedade abaixo do componente pai.

```
overflow: hidden;
```

A propriedade acima limita o conteúdo do componente ao width e height máximo do componente. Sem essa propriedade, o conteúdo sempre será exibido, ultrapassando até mesmo o width e height.

`Respiro externo`

Utilizado principalmente pelos designers quando querem informar que o layout precisa de uma margem. Para criar esses respiros externos basta selecionar as propriedades abaixo:

```
margin-left: 116px;
margin-right: 115px;
margin-top: 110px;
margin-bottom: 111px;

Formas reduzidas

/* margin: top right bottom left; */
margin: 110px 115px 111px 116px;

/* margin: top/bottom right/left; */
margin: 110px 115px;

/* margin: top right/left bottom; */
margin: 110px 115px 111px;

/* margin: top/bottom/right/left; */
margin: 110px;
```

`Respiro interno`

Segue os mesmos padrões do _`respiro externo`_ mas referente aos componentes que estão dentro do componente. Para isso basta adicionar as propriedades:

```
padding-left: 36px;
padding-right: 35px;
padding-top: 30px;
padding-bottom: 31px;

Formas reduzidas

/* padding: top right bottom left; */
padding: 30px 35px 31px 36px;

/* padding: top/bottom right/left; */
padding: 30px 35px;

/* padding: top right/left bottom; */
padding: 30px 35px 31px;

/* padding: top/bottom/right/left; */
padding: 31px;
```
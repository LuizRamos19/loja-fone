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

Utilizado principalmente pelos designers quando querem informar que o layout precisa de uma margem. Serve para distanciar um elemento do outro. Para criar esses respiros externos basta selecionar as propriedades abaixo:
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

Segue os mesmos padrões do _`respiro externo`_ mas referente aos componentes que estão dentro do componente pai. Para isso basta adicionar as propriedades:
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

`Alinhamento horizontal e vertical`

Para alinhar horizontalmente um texto, a propriedade _`text-align`_ faz isso. Entretanto, para alinhar os elementos verticalmente, mas apenas com uma linha de texto, como no caso dos botões, basta usar o _`line-height`_ e colocar o height no mesmo tamanho do height do botão.

```
text-align: center; // right, left, etc
line-height: 60px; // ou o mesmo height do botão

```

`Propriedade display`

O _`display inline`_ deixa os elementos na mesma linha, e não consegue definir o width e height (Esses elementos não funcionam com elementos que possuem display inline)
```
display: inline;
```

O _`display block`_ não deixa os elementos na mesma linha, mas permite mudar o width e height
```
display: block;
```

O _`display inline block`_ junta as vantages dos dois elemento acima, deixa os elementos na mesma linha e deixa alterar o width e height
```
display: inline-block;
```

`Propriedade position`

O _`position absolute`_ faz com que consigamos mover os elementos de forma absoluta. Assim como o `float`, ele cria também um novo contexto. O que define a largura e altura é o conteúdo que se encontra dentro do elemento.

Em conjunto com o position, pode-se usar o `top: bottom, left, right` mover em relação a página.
```
position: absolute;
top: right; // left, bottom
```

Para relacionar os elementos de forma dinâmica, podemos utilizar a propriedade transform.
```
transform: translateX(-50%) translateY(-50%);
```

O _`vertical-align`_ faz com que dois elementos que sejam `display inline-block` fiquem alinhados verticalmente.
```
vertical-align: top;
```

`Emmet`

É uma tecnologia para escrever códigos mais rápido. No visual code já vem instalado por padrão, se não vier, só ir em emmet.io e instalar.

Exemplo para escrever várias dl, dt e dd:
```
dl>dt{Fone top, feliz e caro}+dd*7

button.button-store.-second{Adicionar texto}
```

O `box-sizing` define o dimensionamento que o elemento terá dependendo de outro elemento. No caso, se ele estiver como `box-sizing: content-box` pegará o tamanho e largura do elemento e somará, se estiver com `box-sizing: border-box` pegará o tamanho e largura do elemento e subtrará do elemento.
```
box-sizing: border-box;
```

`Variação no CSS`

Variação no CSS significa que uma classe implementa determinas propriedas adicionais além da classe principal da qual está sendo implementada. A sintaxe é sempre escrita com _`-`_ antes do nome da classe.
```
-second {

}
```

Entretanto, como é apenas uma classe secundária que está implementando uma classe principal, precisamos informar ao CSS que essa classe secundário só funcionará se tiver a classe primária também, para isso basta escrever da seguinte forma.
```
.button-store.-second {

}
```

`Description list (dl), Description title (dt), Description define (dd)`

Quando for realizar a descrição de um produto ou qualquer outra coisa existe as tags acima.
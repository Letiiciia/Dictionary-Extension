## Extensão de Dicionário
Descrição
A extensão de dicionário permite que você pesquise definições de palavras em inglês diretamente no navegador. Quando você insere uma palavra e clica no botão "Pesquisar", a extensão consulta a API Dictionary e exibe a definição correspondente.

```
Autores 🚀
Letícia Lima
Thayanna Mendes Pedroza
Amanda Lopes Silva
Samantha Raquel de Assis Corrêa
Nícolas Soares
```
```
Estrutura de Arquivos 📝;
manifest.json: O arquivo de configuração da extensão.
index.html: A interface principal da extensão.
styles.css: Estilos para a interface.
script.js: Lógica do JavaScript para buscar as definições da palavra.
icon.png: Ícone da extensão.
```

```
Instruções de Uso 📄
Instalação

Baixe o repositório e salve a pasta no seu computador.
Abra o Chrome e navegue até chrome://extensions/.
Ative o Modo do Desenvolvedor no canto superior direito.
Clique em Carregar sem compactação e selecione a pasta onde a extensão está localizada.

Como Usar
Clique no ícone da extensão na barra de ferramentas do Chrome.
Digite uma palavra em inglês no campo de texto.
Clique no botão "Pesquisar".
A definição da palavra será exibida na caixa de resultados.
```

```
Tecnologias utilizadas 🔧
## Javascript
## CSS
## HTML
```

```
UML 🔧
 +---------------------------+
 |      Usuário              |
 +---------------------------+
           |
           |
  +-----------------------------+
  |   Extensão de Dicionário    |
  +-----------------------------+
           |
    +------------------+
    |    Pesquisar     |
    +------------------+
           |
           v
  +-----------------------------+
  |  Obter Definição da Palavra |
  +-----------------------------+
           |
           v
  +-----------------------------+
  |   Exibir Definição          |
  +-----------------------------+

```


```
Diagrama de Classes 🔧
+----------------------+
|    Extensão          |
+----------------------+
| - título: string     |
| - versão: string     |
+----------------------+
| + inicializar()      |
| + carregarPopup()    |
| + chamarAPI()        |
| + exibirResultado()  |
+----------------------+

         ^
         |
+-------------------------+
|    PopupHTML            |
+-------------------------+
| - inputPalavra: string  |
| - botaoPesquisar: Button|
+-------------------------+
| + capturarEntrada()     |
| + pesquisarDefinição()  |
+-------------------------+

         ^
         |
+----------------------+
|    DictionaryAPI     |
+----------------------+
| - urlAPI: string     |
| + buscarDefinição()  |
+----------------------+

```


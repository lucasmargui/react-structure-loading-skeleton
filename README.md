<H1 align="center">Estrutura Next Dashboard </H1>
<p align="center">🚀Criação de uma estrutura de dashboard em Next para referências futuras</p>


## Criação de projeto Next

```
npx create-next-app@latest nextjs-dashboard
```

### Adicionando pacotes 

```
npm i @heroicons/react
npm i clsx
```

### Alterando moduleResolution

Alteração da resolução de módulo para node em tsconfig.json

```
...
"moduleResolution": "node",
...
```


# Diretório src\app

## dashboard
  Diretório onde armazenará os componentes relacionados a está página e tem como caminho https://localhost:3000/dashboard

  ### (overview)
 Para que loading seja aplicado apenas em dashboard é necessário a utilização de grupos de rotas, eles permitem que você organize arquivos em grupos lógicos sem afetar a estrutura do caminho do URL. Quando você cria uma nova pasta usando parênteses (), o nome não será incluído no caminho do URL. Assim, /dashboard/(overview)/page.tsx se torna https://localhost:3000/dashboard.

  - page.tsx

     <div align="center">
      <h2>Fluxo de inicialização</h2>
      <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/94ecaf81-39df-4bfa-a859-fecd68ac6780" style="width:100%">
    </div>
  
  - loading.tsx
    Página de loading que será renderizada enquanto os componentes aguardam para serem carregados através de streaming

    <div align="center">
      <h2>Skeleton</h2>
      <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/8b084696-0b63-4b9f-bb48-132427d1c786" style="width:100%">
      <h2>Componente carregado com os dados</h2>
      <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/8a861e70-9933-45cd-9823-2b4e93df2cb8" style="width:100%">
    </div>




    
  ### layout.tsx 
  Este é um componente de layout que define a estrutura básica da página dashboard. Ele geralmente contém elementos que aparecem em dashboard e subrotas de dashboard.

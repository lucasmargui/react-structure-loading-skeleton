<H1 align="center">Next Skeleton </H1>
<p align="center">🚀Creating a dashboard skeleton structure in Next for future references</p>

## Requirements
- next
- heroicons
- clsx



## Project creation Next

```
npx create-next-app@latest nextjs-dashboard
```

### Adding packages

```
npm i @heroicons/react
npm i clsx
```

### Changing moduleResolution

Changing module to node resolution in tsconfig.json

```
...
"moduleResolution": "node",
...
```


# src\app directory

## dashboard
 Directory where the components related to this page will be stored and has the path https://localhost:3000/dashboard

 ### (overview)
 For loading to be applied only to the dashboard, it is necessary to use route groups, they allow you to organize files into logical groups without affecting the structure of the URL path. When you create a new folder using parentheses (), the name will not be included in the URL path. So /dashboard/(overview)/page.tsx becomes https://localhost:3000/dashboard.

 - page.tsx

 <div align="center">
 <h2>Initialization flow</h2>
 <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/94ecaf81-39df-4bfa-a859-fecd68ac6780" style="width:100%">
 </div>

 - loading.tsx
 Loading page that will be rendered while components wait to be loaded via streaming

 <div align="center">
 <h2>Skeleton</h2>
 <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/8b084696-0b63-4b9f-bb48-132427d1c786" style="width:100%">
 <h2>Component loaded with data</h2>
 <img src="https://github.com/lucasmargui/React_Estrutura_Dashboard/assets/157809964/8a861e70-9933-45cd-9823-2b4e93df2cb8" style="width:100%">
 </div>



 ### layout.tsx
 This is a layout component that defines the basic structure of the dashboard page. It generally contains elements that appear on dashboards and dashboard subroutes.

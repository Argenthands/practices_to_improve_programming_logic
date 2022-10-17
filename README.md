# [Retos de Programación](https://retosdeprogramacion.com/)
## Configuracion inicial
- [GIT]()
    - Descarga:
        ```bash
        git init
        git clone (url)
        ```
    - .gitignore
        ```
        node_modules/
        package-lock.json
        package.json
        ```
- [NPM](https://www.npmjs.com/)
    - Inicializar:
        ```bash
        npm init
        ```
    - Instalar dependencias:
        ```bash
        npm install
        ```
    - Instalar dependencias de desarrollo:
        ```bash
        npm install --save-dev
        ```
    - Instalar dependencias de producción:
        ```bash
        npm install --save
        ```
### Dependencias
- [Jest](https://jestjs.io/es-ES/)
    - Instalación:
        ```bash
        npm install --save-dev jest
        ```
    - Ejecución:
        ```bash
        npm test
        ```
    - Configuración:
        ```json
        {
            "scripts": {
                "test": "jest --watch"
            },
            "jest": {
                "testEnvironment": "node"
            }
        }
        ```
- [nodemon](https://nodemon.io/)
    - Instalación:
        ```bash
        npm install --save-dev nodemon
        ```
    - Ejecución:
        ```bash
        npm run dev
        ```
    - Configuración:
        ```json
        {
            "scripts": {
                "dev": "nodemon index.js"
            }
        }
        ```
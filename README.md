# [Retos de Programación](https://retosdeprogramacion.com/)
## Configuracion inicial
- [NPM](https://www.npmjs.com/)
    - Inicializar:
        ```
        npm init
        ```
    - Instalar dependencias:
        ```
        npm install
        ```
    - Instalar dependencias de desarrollo:
        ```
        npm install --save-dev
        ```
    - Instalar dependencias de producción:
        ```
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
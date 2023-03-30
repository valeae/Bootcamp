Situación: Usuario ingresa a la versión de SPA de la página de notas

```mermaid
stateDiagram-v2
    User --> WebSPA
    WebSPA --> Server
    Server --> WebSPA
    WebSPA --> User
```
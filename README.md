
# Amigo Secreto - Documentación del Proyecto

## Descripción
Amigo Secreto es una aplicación web que permite organizar sorteos de regalos entre amigos. Los usuarios pueden agregar participantes, eliminarlos y realizar un sorteo aleatorio que asigna a cada persona un amigo secreto.

## Características Principales
- Agregar participantes a la lista
- Eliminar participantes
- Realizar sorteo aleatorio
- Interfaz responsive y amigable
- Validación de nombres duplicados
- Soporte para entrada por teclado (tecla Enter)

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript Vanilla
- Variables CSS personalizadas
- Diseño Responsive

## Estructura del Proyecto
```
amigo-secreto/
│
├── index.html
├── style.css
├── app.js
└── assets/
    ├── amigo-secreto.png
    └── play_circle_outline.png
```

## Instalación
1. Clona el repositorio
2. Abre el archivo `index.html` en tu navegador
3. ¡Listo para usar!

## Cómo Usar
1. Ingresa el nombre de un participante en el campo de texto
2. Presiona "Añadir" o la tecla Enter para agregar el participante
3. Repite el proceso para todos los participantes
4. Usa el botón "×" junto a cada nombre para eliminar participantes si es necesario
5. Presiona "Sortear amigo" para realizar el sorteo
6. Los resultados se mostrarán en la parte inferior

## Funciones Principales

### agregarAmigo()
```javascript
function agregarAmigo()
```
Agrega un nuevo participante a la lista. Incluye validaciones para:
- Nombres vacíos
- Nombres duplicados

### actualizarListaAmigos()
```javascript
function actualizarListaAmigos()
```
Actualiza la interfaz visual con la lista actual de participantes.

### sortearAmigo()
```javascript
function sortearAmigo()
```
Realiza el sorteo aleatorio de amigos secretos asegurando que:
- Nadie se auto-seleccione
- Todos los participantes tengan un amigo asignado

## Estilos CSS
El proyecto utiliza variables CSS para una fácil personalización:
```css
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}
```

## Validaciones
- No se permiten nombres vacíos
- No se permiten nombres duplicados
- Se requieren al menos 2 participantes para realizar el sorteo

## Compatibilidad
- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Mejoras Futuras Sugeridas
1. Persistencia de datos local
2. Exportar resultados
3. Personalización de temas
4. Añadir preferencias de regalo
5. Soporte para múltiples grupos

## Contribución
Si deseas contribuir al proyecto:
1. Haz un Fork del repositorio
2. Crea una nueva rama para tus cambios
3. Envía un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT.

## Autor
Alex Velasquez

## Contacto
- Email: velasquez.toledo2701@gmail.com
- GitHub: alex-v08 

¿Te gustaría que agregue alguna sección adicional o que profundice en algún aspecto específico del README?

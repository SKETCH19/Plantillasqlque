# 📊 Biblioteca SQL - Plantillas para Power BI

Biblioteca personal de 50 queries SQL listos para reciclar en proyectos de Power BI y análisis de datos. Cada query incluye comentarios explicativos y casos de uso práctico.

## 🚀 Características

- ✅ **50 queries SQL** organizados por categoría
- 🔍 **Búsqueda en tiempo real** por palabras clave
- 📑 **Filtrado por categorías** (Básicos, JOINs, Agregaciones, etc.)
- 📋 **Copiar código** con un solo clic
- 💡 **Explicaciones detalladas** de cada query
- 🎯 **Casos de uso en Power BI** para cada consulta
- 📱 **Diseño responsive** - funciona en móvil, tablet y desktop
- ⌨️ **Atajos de teclado** (Ctrl+K para buscar, Escape para limpiar)

## 📂 Categorías de Queries

1. **🔷 Seleccionar y Filtrar (Básicos)** - 11 queries
   - SELECT, WHERE, AND, OR, BETWEEN, IN, LIKE, NULL

2. **🔷 Ordenar y Limitar** - 5 queries
   - ORDER BY, TOP, LIMIT, WITH TIES

3. **🔷 Agrupar y Resumir** - 10 queries
   - COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING

4. **🔷 JOINs** - 6 queries
   - INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN, Self JOIN

5. **🔷 Subqueries y CTEs** - 4 queries
   - Subconsultas, WITH (CTE), consultas anidadas

6. **🔷 Casos de Negocio BI** - 6 queries
   - Top productos, mejores clientes, ventas por mes, productos sin ventas

7. **🔷 Manipulación de Datos** - 5 queries
   - INSERT, UPDATE, DELETE, CREATE VIEW

8. **🔷 Funciones de Ventana (Avanzado)** - 3 queries
   - RANK, ROW_NUMBER, LAG, análisis período anterior

## 🌐 Cómo Subir a GitHub Pages

### Paso 1: Sube los archivos a tu repositorio

```bash
git add .
git commit -m "Biblioteca SQL para Power BI"
git push origin main
```

### Paso 2: Activa GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**
6. Espera 1-2 minutos

### Paso 3: Accede a tu sitio

Tu sitio estará disponible en:
```
https://SKETCH19.github.io/Plantillasqlque/
```

## 💻 Uso Local

Para ver el sitio localmente antes de subirlo:

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js (npx)
npx http-server

# Opción 3: VS Code
# Instala la extensión "Live Server" y haz click derecho en index.html > Open with Live Server
```

Luego abre: `http://localhost:8000`

## 🎯 Cómo Usar los Queries

1. **Busca** el query que necesitas usando la barra de búsqueda
2. **Filtra** por categoría usando los botones superiores
3. **Lee** la explicación y caso de uso en Power BI
4. **Copia** el código SQL con el botón "📋 Copiar"
5. **Pega** en tu herramienta SQL / Power BI
6. **Modifica** los nombres de tablas, columnas y condiciones según tu base de datos

## ⌨️ Atajos de Teclado

- `Ctrl + K` (o `Cmd + K` en Mac) - Enfocar búsqueda
- `Escape` - Limpiar búsqueda y quitar foco

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript (Vanilla JS, ES6+)
- GitHub Pages (hosting)

## 📝 Personalización

Puedes personalizar fácilmente:

### Colores (en `styles.css`)

```css
:root {
    --primary-color: #0066cc;    /* Color principal */
    --secondary-color: #0052a3;  /* Color secundario */
    --accent-color: #00a3ff;     /* Color de acento */
}
```

### Añadir más queries

Copia el formato de cualquier `<div class="query-card">` en `index.html` y modifica:
- Número de query
- Título
- Explicación
- Código SQL
- Etiquetas de búsqueda (`data-tags`)

## 📊 Casos de Uso en Power BI

Estos queries son útiles para:

- **DirectQuery**: Traer datos filtrados en tiempo real
- **Import Mode**: Importar solo datos necesarios (mejor rendimiento)
- **Power Query**: En "Obtener datos" > "Base de datos SQL" > "Editor avanzado"
- **Medidas DAX**: Entender la lógica SQL antes de convertir a DAX
- **Documentación**: Compartir queries con el equipo
- **Aprendizaje**: Estudiar SQL para entrevistas o certificaciones

## 🤝 Contribuir

Si quieres añadir más queries o mejorar los existentes:

1. Fork este repositorio
2. Crea una rama (`git checkout -b feature/nuevo-query`)
3. Commit tus cambios (`git commit -m 'Añadir query de...'`)
4. Push a la rama (`git push origin feature/nuevo-query`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 👤 Autor

**SKETCH19**
- GitHub: [@SKETCH19](https://github.com/SKETCH19)
- Proyecto: [Plantillasqlque](https://github.com/SKETCH19/Plantillasqlque)

---

⭐ Si te resultó útil, dale una estrella al repositorio!

💡 **Tip**: Guarda este sitio en tus favoritos para tener acceso rápido a tus queries SQL.
# expenso-app
A simple personal expense mangement

Este es el frontend de Expenso, desarrollado con React y estilizado con CSS. La aplicación permite a los usuarios visualizar, agregar, editar y eliminar transacciones financieras.

## Instalación y ejecución

Clonar el repositorio:
````
git clone <URL_DEL_REPOSITORIO>
cd expenso-frontend
````

Instalar dependencias con Bun:
````
bun install
````
Crear un archivo .env en la raíz con la URL del backend:
````
VITE_BACK_URL=http://localhost:3001
````
Iniciar el servidor de desarrollo:
````
bun run dev
````

## Funcionalidades principales

Dashboard con resumen de ingresos y gastos.

Listado de transacciones con opciones de edición y eliminación.

Formulario para agregar y editar transacciones.

Gráficos visuales con Recharts para analizar los movimientos financieros.

Notificaciones con react-toastify para mejorar la experiencia de usuario.

Rutas de la aplicación

/ → Página principal con resumen financiero

/transactions → Lista de transacciones

/add → Formulario para agregar una transacción

/transactions/edit/:transactionId → Edición de transacción

/transactions/:transactionId/details → Detalles de una transacción

/about → Información sobre la aplicación

# 🚀 API-Send-Email
Esta API aprovecha la potencia de Resend para gestionar la lógica de envío de correos, y utiliza NodeJS - Express con TypeScript para la estructura del código. La elección de NodeJS y TS se debe a la facilidad que brinda NodeJS para construir el API, y el uso de TS contribuye a mantener una estructura definida y ordenada. Aunque se trata de un API bastante básico, su desarrollo se ha realizado con fines de estudio y práctica, lo que ha motivado la incorporación de TypeScript.

## 🛠️ Pasos para ejecutar el API
Antes de comenzar, es importante destacar que se ha integrado nodemon para facilitar la ejecución del API durante el desarrollo. Nodemon monitoriza los cambios en el código fuente, reiniciando automáticamente el servidor. Ahora, veamos los pasos para ejecutar la aplicación.

### Paso previo 🧐
Primero, para ejecutar el servidor tanto en producción como en desarrollo, debemos ejecutar el siguiente comando:
```
npm run build

```
Este comando se encarga de compilar el código TypeScript en código JavaScript, generando un nuevo directorio llamado dist, donde se almacenan los archivos .js necesarios para la ejecución del servidor.

### Ejecucion en desarrollo 👨🏻‍💻
Como se mencionó, utilizamos Nodemon como una herramienta útil para ejecutar el servidor en modo de desarrollo. Para iniciar el servidor, simplemente usamos el siguiente comando:

```
npm run dev

```
Este comando inicia el servidor en modo de desarrollo y se encarga de reiniciar automáticamente cuando hay cambios en el código.

### Ejecucion en produccion 🔥
Para ejecutar el servidor en modo de producción, empleamos el siguiente comando:

```
npm run start

```
Este comando inicia el servidor Express después de que el código TypeScript ha sido compilado a JavaScript.

## 📝 Aclaraciones
Este pequeño proyecto marca mi incursión en el desarrollo de un API utilizando NodeJS - Express, por lo que es posible que el código pueda mejorarse en varios aspectos. Aun así, espero que sea de utilidad para cualquiera que lo necesite.

¡Muchísimas Gracias!

## 📚 Tutorial para iniciar un proyecto NodeJS/Express con TS
Como guía para iniciar el proyecto con TypeScript, me he basado en el siguiente tutorial, el cual recomendaría revisar: **[Ir al Tutorial de Node TypeScript Express](https://blog.logrocket.com/how-to-set-up-node-typescript-express/)**

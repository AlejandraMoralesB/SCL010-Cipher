#"Alértame César"📌

##Contexto y Objetivo📖

Chile  según el informe de OnuSida conocido el año pasado se convirtió en uno de los diez países donde más han aumentado los casos de VIH, posicionándolo a la par de países como Egipto, Madagascar, Macedonia, Filipinas, entre otros.
A esto se debe considerar que expertos estiman que un número similar al de contagiados desconoce su situación y donde muchos terminan conociendo que son portadores cuando comienzan a experimentar enfermedades oportunistas, propias de la fase Sida.

Por esto es impresindible crear un servicio adicional para la  Clínica Angelus.  ##"Alertame Cesar" es una aplicación orientada al cifrado y descifrado de información de carácter clínico, específicamente en la toma de muestras de sangre para el examen de VIH, ayuda a que el resultado sea lo  más expedito posible generando que las personas se realizen con mas  frecuencia este examen ya que  gracias a este servicio se optimiza el tiempo,  se genera confiabilidad del usuario y la vez refuerza las estrategias de prevención y diagnóstico en la materia.

El objetivo de esta página es poder enviar un identificador único  a la persona que se realizó al examen, a través de un mensaje de texto  o correo electrónico de los resultados, y a la vez permite cifrar para solicitar dia, hora y fecha de examen manteniendo la identidad resguardada en todo momento.

## Usuari@s y objetivos.
Esta orientada para personas de los 15 años en adelante que puedan realizarse este examen.

## Metodología - Cifrado César
El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Por ejemplo, si usamos un desplazamiento de 3 posiciones:

La letra A se cifra como D.
La palabra CASA se cifra como FDVD.
Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Ejecutar Aplicación
Para ejecutar la aplicación se debe ingresar haciendo click en este enlace:

## Control de Flujo

![flujo](flujo.png)  

## Test Usabilidad y Scket

![sketch](sketch.png) 

![sketch2](sketch2.png) 

Los testeos con posibles usuarios fueron de vital importancia, ya que gracias a sus opiniones se hicieron mejoras, como la eliminación de un input para el nombre y modificaciones en el contenido como en el caso de las instrucciones , ya que estas no resultaban utiles ya que los usuarios no las leian.
Los colores fueron sacados siguiendo el patron del logo, pero no obstante realize un estuido de mercado de las clinicas para poder sacar una paleta de colores, en ellas predominaba el color blanco y gris, y los otros colores eran referentes a su logo. 

## Interfaz de usuario.
Se realizo un prototipo que fue mostrado a  diferentes usuarios  donde se generó principalmente la idea de que fuera un espacio de fácil entendimiento y de simpleza visual.

La interfaz " Alertame Cesar" permite a los usuarios:
• Indicar el identificador único asignado como paciente. (Este número indicara cuántas posiciones de desplazamiento se producirá en cada carácter)
• Insertar un mensaje  que querrá cifrar o descifrar, segun necesidades .
• Ver el resultado del mensaje.
• Limpiar o Volver al Inicio, según lo que requiera el usuario.


## Interfaz de programador.
Pasos generales en la creación del proyecto
1.-En primera instancia se creó un flujo de pasos a seguir para tener una estructura básica:

-FlujoCipher

2.-Complementando con un To-Do List en Trellos para asimilar los conceptos necesarios al momento de dar estructura y funcionalidad a la página

-Capturar texto
-Capturar número de desplazamiento
-Contabilizar largo de texto
-Generar el bucle hasta completar todas las letras del texto (lenght proporcional al número de ciclos)
-Cambiar letras a codigos ASCII/Unicode (charCodeAT)
- Aplicar Formula (video michelle)
- Cambiar código ASCII/Unicode a Letras (String.fromCharCode)
-Con estas letras concatenadas voy a tener el nuevo texto encriptado
-Imprimir en la pantalla el resultado
- Insertar botón limpiar

3.-Luego vino la etapa del prototipado, el cuál cambió a medida que avanzó la creación del proyecto

Prototipo1

Prototipo2

3.-Finalmente el diseño de la Interfaz quedó de la siguiente manera:

Interfaz

## Archivos 🛠️

* `README.md`: como ejecutar la aplicación, introducción, aplicación, su funcionalidad y decisiones de diseño que tomaron.

* `src/index.html`:Punto de entrada a la aplicación.

* `src/cipher.js`: implementación  del objeto cipher. Este objeto (`cipher`) debe contener dos métodos:

- `cipher.encode(offset, string)`: `offset` es el número de posiciones que queremos mover a la derecha en el alfabeto y `string` el mensaje (texto) que queremos cifrar.
- `cipher.decode(offset, string)`: `offset` es el número de posiciones que queremos mover a la izquierda en el alfabeto y `string` el mensaje (texto) que queremos descifrar.

* `src/index.js`: eventos del DOM,  `cipher.encode()`o `cipher.decode()` según sea necesidad del usuario.

* `test/cipher.spec.js`: implementación para los tests  `cipher.encode()` y `cipher.decode()`.

## Autor ✒️
***Alejandra Morales Barra ***😊 -- [Estudiante 10° generación SCL ](https://github.com/AlejandraMoralesB)



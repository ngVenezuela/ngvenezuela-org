<img src="https://raw.githubusercontent.com/ngVenezuela/press-kit/master/img/logo/logo_Angular.jpg" alt="ngvenezuela" width="120"/>


# Compilando y Probando ngVenezuela.org
Este documento describe como configurar tu ambiente de desarrollo para ayudar a construir y probar ngvenezuela.org
También explicara los mecánismos básicos del uso de `git`, `node` y `npm`.

* [Pre-Requisitos de Software](#pre-requisitos-de-software)
* [Obteniendo los Fuentes](#obteniendo-los-fuentes)
* [Instalando los Módulos NPM](#instalando-los-módulos-npm)
* [Formateando el Código Fuente](#formateando-el-codigo)

Mira los [lineamientos para contribuir](https://github.com/ngvenezuela/ngvenezuela-org/blob/master/CONTRIBUTING.md)
si quieres empezar con ngVenezuela.org.

## Pre-Requisitos de Software

Antes de que puedas compilar y probar ngvenezuela-org, debes instalar y configurar
los siguientes productos en equpo de desarrollo:

* [Git](http://git-scm.com) y/o  la **App GitHub** (para [Mac](http://mac.github.com) o
  [Windows](http://windows.github.com)); La [Guía para instalar de Github
  Git](https://help.github.com/articles/set-up-git) es una fuente de información.

* [Node.js](http://nodejs.org), (la version especificada en el campo `engines`  [`package.json`](../package.json)) es la utilizada para ejecutar el servidor de desarrollo.
  run tests, and generate distributable files.

* [Yarn](https://yarnpkg.com) (version specified in the engines field of [`package.json`](../package.json)) es la utilizada para instalar las dependencias.


## Obteniendo los Fuentes
`fork` y `clone` al repositorio de ngVenezuela.org

1. Entra tu cuenta GitHub  o crea una siguiendo las instrucciones dadas
   [aquí](https://github.com/signup/free).
2. [Fork](http://help.github.com/forking) el [repositorio principal de ngVenezuela.org](https://github.com/ngvenezuela/ngvenezuela-org).
3. Clona tu `fork` del repositorio de ngVenezuela.org y define un `upstream` un `remote` apuntando al `fork` de ngVenezuela que acabas de hacer.

```shell
# Clona tú repositorio en Github
git clone git@github.com:<github username>/ngvenezuela-org.git

# Ve al directorio de ngvenezuela-org
cd ngvenezuela-org

# Agrega el repositorio principal de ngVenezuela.org  como un `upstream` remoto a tu repositorio
git remote add upstream https://github.com/ngvenezuela/ngvenezuela-org.git
```
## Instalando los Módulos NPM
A continuación, instala los módulos Javascript necesatios para compilar y probar ngVenezuela.org:

```shell
# Instala las dependencias del proyecto ngVenezuela.org (package.json)
yarn install
```


## Formateando el Código Fuente
Pronto....


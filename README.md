# Coding interview
In this exercice, you will implement a single page application based on a provided mockup.

Even though you can use any tools/libs you want, we recommend you to use one of the following framework:

BackboneJS
ReactJS
EmberJS
MithrilJS
VueJS

## Install

* Npm install
* Npm start

Depending on the browser there is some issue with **Cross-Origin Resource Sharing (CORS)**
It can be fixed temporarily by installing this extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related


## Dependencies
* API endpoint 
* [Mockup](https://gist.githubusercontent.com/GabKlein/45e886536ccee6e9f678418aca37a77d/raw/67654000b2e76e7fb4c89b28e191f27e1de84bda/mockup.png)

![Mockup](https://gist.githubusercontent.com/GabKlein/45e886536ccee6e9f678418aca37a77d/raw/67654000b2e76e7fb4c89b28e191f27e1de84bda/mockup.png)


## 1. Integration
In this section, you will implement the mockup using a JS single-page application.
This application should have the following routes:

* `/`
* `/transactions`

For the transactions route, you will retrieve the data to display using an API call.

NOTE: Here, we are looking for a pixel perfect integration of the mockup

## 2. Interaction

In this section, you will implement the following interactions on the transactions table:

* Make each column sortable.
* Add support for row multi select using the Shift key.
* A single row selection should display the details into the right side panel.
* A multi row selection should display the selected transaction's ids into the right side panel.

NOTE: Here, we are looking for a clean, maintainable and DRY code


## Issues

Depending on the browser there is some issue with **Cross-Origin Resource Sharing (CORS)**
It can be fixed temporarily by installing this extension: https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related

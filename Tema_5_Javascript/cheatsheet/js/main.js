
    function saludo () {
        alert(`Hola desde un script externo`);
        console.log(`has hecho un click`);
    }
    document.getElementsByTagName("a").item(2).addEventListenner("click", saludo);
 
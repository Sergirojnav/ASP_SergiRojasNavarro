<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <div id="contenedor">
        <div id="caja-chat">
            <div id="datos-chat">
                <span>Sergi: </span>
                <span>Hola</span>
            </div>
        </div>
    </div>
    <form method="POST" action="indexChat.php">
        <input type="text" name="nombre" placeholder="Ingresa tu nombre">
        <textarea name="mensaje" placeholder="Ingresa tu mensaje"></textarea>
        <input type="submit" name="enviar" value="Enviar">
    </form>
</body>
</html>
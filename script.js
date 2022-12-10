var chistes = [
        
        "La mayor exportación de Australia son los boomerangs. También son la mayor importación",
        "Intenté organizar un torneo profesional de escondite, pero fue un completo fracaso. Los buenos jugadores son difíciles de encontrar.",
        "Hay tres tipos de personas en el mundo: los que saben contar y los que no.",
        "El otro día vendí mi aspiradora. Lo único que hacía era acumular polvo.",
        "¿Qué le dice un jardinero a otro? Nos vemos cuando podamos.",
        "¿Cómo se llama el hermano vegetariano de Bruce Lee? Broco Lee.",
        "Me gustan los elefantes. Todo lo demás me parece irrelefante.",
        "Me gustan los elefantes. Todo lo demás me parece irrelefante.",
        "¿Qué hay peor que encontrarse un gusano en una manzana? Encontrarse medio.",
        "¿De dónde sale la porcelana? De las porceovejas.",
        "¿Cómo se llama un boomerang que no vuelve? Palo.",
        "Tengo un amigo otaku que estaba triste, así que lo animé.        ",
        "¿Has oído hablar del astronauta claustrofóbico? Solo necesitaba un poco de espacio.",
        "¿Por qué no pueden hablar los dinosaurios? Porque están muertos.",
        "¿Qué le dice un 2 a un 0? Veinte conmigo, guapetón.        ",
        "Mi nuevo diccionario es malísimo. No solo eso, también es malísimo.        ",
        "¿Cuál es el animal más tonto de la selva? El oso polar.        ",
        "Ayer fui al McDonald's con cuatro amigos. Tres eran de sagitario. Y el cuarto de libra.",
        "¿Cuál es el café más peligroso del mundo? El ex-preso        ",
        "¿Para qué va una caja al gimnasio? Para hacerse caja fuerte.        ",
        "¿Cómo se despiden los químicos? Ácido un placer.        ",
        "¿Qué le dice una iguana a otra? Somos iguanitas.        ",
        "¿Qué hace una abeja en un gimnasio? Zumba.        ",
        "¿Cómo se llama el campeón de buceo japonés? Tokofondo.",
        "Se abre el telón y se ve un tetrabrik de Don Simón. ¿Cómo se llama la película? Es tinto básico.",
        "¿Qué le dice un ganso a una gansa? ¡Vengansa!        ",
        "Si se muere una pulga, ¿dónde va? Al pulgatorio",
        "- ¿Qué es un pez en un cine? - Un mero espectador",
        "¿Por qué la gallina cuida tanto a sus pollitos? Porque le costó un huevo tenerlos",
        "- Iba a contar un chiste sobre sodio... pero Na.",
        "¿Qué le dice una impresora a otra? ¿Esa hoja es tuya o es impresión mía?.",
        "¿Cómo se dice puerta en inglés? Door. ¿Y el que las vende? Vendedoor. ¿Y el que las compra? Compradoor.",
        "¿Dónde vive Iron Man? Iron Know.        ",
        "Los hippies no orinan: hacen peace.",
        "¿Qué hace una vaca con los ojos cerrados? Leche concentrada.",
        "¿De dónde vienen los hámster? De Hamsterdam.",
        "¿Qué le dice una gallina deprimida a otra gallina deprimida? Necesitamos apoyo.",
        "Papá, papá, ¿puedo ir al cine? Sí, pero no entres.",
        "Doctor, doctor, tengo paperas. Pues toma 2? y ya tienes pá plátanos.",
        "¿Qué hace un vampiro conduciendo un tractor? Sembrar el miedo.       ",
        "¿Cuál es el colmo del atún? Que le den la lata.",
        "¿Qué le dice un árbol a otro? ¡Qué pasa tronco!        ",
        "¿Por qué se suicidó el libro de matemáticas? Porque tenía muchos problemas.",
        "¿Por qué los diabéticos no pueden vengarse? Porque la venganza es dulce.",
        "¿Por qué los patos no tienen amigos? Porque son muy antipáticos",
        "Hola, ¿está Agustín? No, estoy incomodín.",
        "¿Qué le dice una barra de pan a otra? Te presento a una miga.",
        "Una familia ocupó un terreno en Hawaii. Ahora a ver quién la desaloha.",
        "¿Por qué los del Lepe no salen de la comunidad? Porque hay un cartel que pone Huelva.",
        "Hola muñeca. Hola tobillo.",
        "Qué es un pelo en una cama? El bello durmiente.",
        "¿Qué le dice un huevo a una sartén? Me tienes frito.        ",
        "Están dos borrachos y uno le dice al otro: ?No sigas bebiendo que te estás poniendo borroso?.",
        "Si los ciempiés tienen 100 pies... ¿entonces los piojos tienen 3,14 ojos?",
        "¿Por qué la gallina cuida tanto a sus pollitos? Porque le costó un huevo tenerlos.",
        "¿Qué le dice el 3 al 30? Para ser como yo debes ser sincero.",
        "¿Cuál es el superhéroe de los perros? El dóberman.",
        "Si los zombis llegan a la tercera edad... ¿zombiejitos?",
        "¿Por qué la luna es más grande que el sol? Porque la dejan salir de noche.",
        "¿Cuál es el colmo de un puerco espín? Que le dé mala espina.",
        "Van 2 videntes en una moto y se cae el del médium.",
        "¿Qué le dice un semáforo en amarillo a los coches? No me miren, que me estoy cambiando."











 ]

function funcionchistes() {
 
    let random = Math.floor(Math.random() * 62)
            console.log(random)
    let chiste = (chistes[random])
    console.log(chiste)
    let ja = document.getElementById("containerc").innerHTML = chiste

    console.log (ja)
}


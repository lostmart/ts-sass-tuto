var Colors;
(function (Colors) {
    Colors[Colors["Primary"] = 1] = "Primary";
    Colors[Colors["Secondary"] = 2] = "Secondary";
    Colors[Colors["Third"] = 3] = "Third";
})(Colors || (Colors = {}));
export const users = [
    {
        userName: "Rita Sanchezs",
        imageUrl: "01.webp",
        post: "CEO (Jefe de Jefes)",
        color: Colors.Primary,
    },
    {
        userName: "Carlos Alberto",
        imageUrl: "02.webp",
        post: "Gerente General",
        color: Colors.Primary,
    },
    {
        userName: "Donna Penchet",
        imageUrl: "03.webp",
        post: "Jefe de Marketing",
        color: Colors.Secondary,
    },
    {
        userName: "Marcelo Hondogh",
        imageUrl: "04.webp",
        post: "Asistente de Marketing",
        color: Colors.Secondary,
    },
    {
        userName: "Eugenia Perez",
        imageUrl: "05.webp",
        post: "Jefe de ventas",
        color: Colors.Secondary,
    },
    {
        userName: "Fabian Lembart",
        imageUrl: "06.webp",
        post: "Redactor inventario",
        color: Colors.Secondary,
    },
    {
        userName: "Matilda Cerrucho",
        imageUrl: "07.jpg",
        post: "Letras y palabras",
        color: Colors.Third,
    },
    {
        userName: "Juanco Pitufo",
        imageUrl: "08.webp",
        post: "Comunicaciones",
        color: Colors.Third,
    },
];

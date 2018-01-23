export class Usuario {
    constructor(
            public id: number = 0,
            public nombre:String = "",
            public apellido:String ="",
            public telefono:String="",
            public email:String = "",
            public puestotrabajo:String="",
            public aniosempresa:String="",
            public editable:boolean=false

    ){}
}

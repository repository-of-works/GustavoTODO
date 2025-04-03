//se creo types.d.ts:
//types: es culaquier nombre
//.d.: se puede decir que son las declaraciones
//.ts :  por que es typescript
//los tipos se pueden exportar como moulos por que se va querer utilizar en otros tipos

export interface Todo {
    id:string
    title: string
    completed: boolean
}
 export type ListOfTodos = Todo[] 
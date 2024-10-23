// // ControleEditora.ts
// import { Editora } from '../modelo/Editora';

// const editoras: Editora[] = [
//     new Editora(1, 'Editora A'),
//     new Editora(2, 'Editora B'),
//     new Editora(3, 'Editora C'),
// ];

// export class ControleEditora {
//     getEditoras(): Editora[] {
//         return editoras;
//     }

//     getNomeEditora(codEditora: number): string | undefined {
//         const editora = editoras.filter(e => e.codEditora === codEditora);
//         return editora.length > 0 ? editora[0].nome : undefined;
//     }
// }
// src/controle/ControleEditora.ts
import { Editora } from '../modelo/Editora';

export class ControleEditora {
    private editoras: Array<Editora> = [
        new Editora(1, 'Editora A'),
        new Editora(2, 'Editora B'),
        new Editora(3, 'Editora C')
    ];

    public getEditoras(): Editora[] {
        return this.editoras;
    }

    public getNomeEditora(codEditora: number): string | undefined {
        const editora = this.editoras.filter(editor => editor.codEditora === codEditora);
        return editora.length > 0 ? editora[0].nome : undefined;
    }
}


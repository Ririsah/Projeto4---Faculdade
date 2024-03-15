import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {
    editoras : Array<Editora> = [
      new Editora(1, "Ediouro"),
      new Editora(2, "HarperCollins Brasil"),
      new Editora(3, "Editora JBC")
  ];

  constructor() { }
 
  getEditoras(): Array<Editora> {
      return this.editoras;
  }
  
  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { InformacoesComponent } from '../informacoes/informacoes.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { TecnologiaComponent } from '../tecnologia/tecnologia.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ContatoComponent } from '../contato/contato.component';
import { SharedModule } from '../../shared.module';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    InformacoesComponent,
    ServicosComponent,
    TecnologiaComponent,
    ProjetosComponent,
    ContatoComponent,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  downloadCurriculo() {
    const link = document.createElement('a');
    link.href = 'assets/curriculo.pdf';
    link.download = 'curriculo.pdf';
    link.click();
  }
}

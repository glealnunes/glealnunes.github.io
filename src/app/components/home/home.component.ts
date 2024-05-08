import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { InformacoesComponent } from '../informacoes/informacoes.component';
import { ServicosComponent } from '../servicos/servicos.component';
import { TecnologiaComponent } from '../tecnologia/tecnologia.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ContatoComponent } from '../contato/contato.component';
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
    ContatoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Biding';
  descricao = "O data bigind pega uma informação no arquivo.ts e leva para o arquivo.html! :)";
  img = "https://cdn.pixabay.com/photo/2021/12/14/06/56/whale-6869763__340.png";
  altImg ="sketch of 2 whales in the ocean";
  pessoa = {
    nome: "Gabi",
    idade: 24,
    altura: 1.58,
    niver: "15/11/1998"
  }
  arrayPessoa = [
    {nome:"Brendon",idade:27},
    {nome:"José",idade:15},
    {nome:"Guilia",idade:20},
    {nome:"Fábio",idade:45},
    {nome:"Fernanda",idade:32},
  ];
  fotos = {
    img: ""
  }
  catalogoFotos = [
    {img: "https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_640.jpg"},
    {img: "https://cdn.pixabay.com/photo/2020/11/10/09/40/watercolor-5729106_640.png"},
    {img: "https://cdn.pixabay.com/photo/2022/04/09/19/02/moon-7122089_640.png"},
    {img: "https://cdn.pixabay.com/photo/2020/10/14/18/35/sign-post-5655110_640.png"},
    {img: "https://cdn.pixabay.com/photo/2017/10/29/14/02/portrait-2899779_640.png"},
  ]
}

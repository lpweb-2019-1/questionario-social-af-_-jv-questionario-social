import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EstatisticasService {

  lista_cidades = ['Palmas', 'Lajeado', 'Porto Nacional', 'Paraíso', 'Barrolândia'];
  pessoas = [];


  idade_pessoa_mais_velha = 0;
  idade_pessoa_mais_nova = 200;
  nome_pessoa_mais_velha = JSON.parse(localStorage.getItem("pessoa-mais-velha"));
  nome_pessoa_mais_nova = JSON.parse(localStorage.getItem("pessoa-mais-nova"));

  /* MEDIAS */

  media_idade_mulheres = JSON.parse(localStorage.getItem("media-idade-mulheres"));
  media_idade_homens = JSON.parse(localStorage.getItem("media-idade-homens"));
  media_idade_palmas = JSON.parse(localStorage.getItem("media-idade-palmas"));
  media_idade_lajeado = JSON.parse(localStorage.getItem("media-idade-lajeado"));
  media_idade_porto = JSON.parse(localStorage.getItem("media-idade-porto"));
  media_idade_paraiso = JSON.parse(localStorage.getItem("media-idade-paraiso"));
  media_idade_barrolandia = JSON.parse(localStorage.getItem("media-idade-barrolandia"));

  /* FIM MEDIAS */

  /* PORCENTAGENS */

  porcentagem_homem_palmas = JSON.parse(localStorage.getItem("porcentagem-homem-palmas"));
  porcentagem_homem_lajeado = JSON.parse(localStorage.getItem("porcentagem-homem-lajeado"));
  porcentagem_homem_porto = JSON.parse(localStorage.getItem("porcentagem-homem-porto"));
  porcentagem_homem_paraiso = JSON.parse(localStorage.getItem("porcentagem-homem-paraiso"));
  porcentagem_homem_barrolandia = JSON.parse(localStorage.getItem("porcentagem-homem-barrolandia"));
  porcentagem_mulher_palmas = JSON.parse(localStorage.getItem("porcentagem-mulher-palmas"));
  porcentagem_mulher_lajeado = JSON.parse(localStorage.getItem("porcentagem-mulher-lajeado"));
  porcentagem_mulher_porto = JSON.parse(localStorage.getItem("porcentagem-mulher-porto"));
  porcentagem_mulher_paraiso = JSON.parse(localStorage.getItem("porcentagem-mulher-parais"));
  porcentagem_mulher_barrolandia = JSON.parse(localStorage.getItem("porcentagem-mulher-barrolandia"));
  
  /* FIM PORCENTAGENS */

  /* FIM VARIÁVEIS */

  constructor() { }

  cidades(){
    return this.lista_cidades
  }

  salvar(nome, sexo, idade, cidade){
    const pessoa = {
      nome,
      sexo,
      idade,
      cidade
    }
    
    this.pessoas.push(pessoa)
    this.calcular_media();
    this.calcular_media_cidade();
    this.pessoa_velha();
    this.pessoa_nova();
    this.calcular_porcentagem_cidade();
  }

  calcular_media() {
    var cont_mulher = 0;
    var cont_homem = 0;
    var idade_homem = 0;
    var idade_mulher = 0;
    for (let pessoa of this.pessoas){
      if (pessoa.sexo == "Masculino"){
        idade_homem = idade_homem + pessoa.idade
        cont_homem = cont_homem + 1
      }else {
        idade_mulher = idade_mulher + pessoa.idade
        cont_mulher = cont_mulher + 1
      }
    }

    if(cont_homem >= 1){
      this.media_idade_homens = idade_homem / cont_homem;
      localStorage.setItem("media-idade-homens",JSON.stringify(this.media_idade_homens))
    }else{
      this.media_idade_homens = null;
    }

    if(cont_mulher >= 1){
      this.media_idade_mulheres = idade_mulher / cont_mulher;
      localStorage.setItem("media-idade-mulheres",JSON.stringify(this.media_idade_mulheres))
    }else{
      this.media_idade_mulheres = null;
    }
    
  }

  calcular_media_cidade(){
    var cont_palmas = 0;
    var idade_palmas = 0;
    var cont_lajeado = 0;
    var idade_lajeado = 0;
    var cont_porto = 0;
    var idade_porto = 0;
    var cont_paraiso = 0;
    var idade_paraiso = 0;
    var cont_barrolandia = 0;
    var idade_barrolandia = 0;

    for (let pessoa of this.pessoas){
      if (pessoa.cidade == "Palmas"){
        idade_palmas = idade_palmas + pessoa.idade
        cont_palmas = cont_palmas + 1
      } else if (pessoa.cidade == "Lajeado"){
        idade_lajeado = idade_lajeado + pessoa.idade
        cont_lajeado = cont_lajeado + 1
      } else if (pessoa.cidade == "Porto Nacional"){
        idade_porto = idade_porto + pessoa.idade
        cont_porto = cont_porto + 1
      } else if (pessoa.cidade == "Paraíso"){
        idade_paraiso = idade_paraiso + pessoa.idade
        cont_paraiso = cont_paraiso + 1
      } else if (pessoa.cidade == "Barrolândia"){
        idade_barrolandia = idade_barrolandia + pessoa.idade
        cont_barrolandia = cont_barrolandia + 1
      }
    }

    if (cont_palmas >=1){
      this.media_idade_palmas = idade_palmas / cont_palmas;
      localStorage.setItem("media-idade-palmas",JSON.stringify(this.media_idade_palmas))
    } else{
      this.media_idade_palmas = null;
    }
    if (cont_lajeado >=1){
      this.media_idade_lajeado = idade_lajeado / cont_lajeado
      localStorage.setItem("media-idade-lajeado",JSON.stringify(this.media_idade_lajeado))
    } else{
      this.media_idade_lajeado = null;
    }
    if (cont_porto >=1){
      this.media_idade_porto = idade_porto / cont_porto
      localStorage.setItem("media-idade-porto",JSON.stringify(this.media_idade_porto))
    } else{
      this.media_idade_porto = null;
    }
    if (cont_paraiso >=1){
      this.media_idade_paraiso = idade_paraiso / cont_paraiso
      localStorage.setItem("media-idade-paraiso",JSON.stringify(this.media_idade_paraiso))
    } else{
      this.media_idade_paraiso = null;
    }
    if (cont_barrolandia >=1){
      this.media_idade_barrolandia = idade_barrolandia / cont_barrolandia
      localStorage.setItem("media-idade-barrolandia",JSON.stringify(this.media_idade_barrolandia))
    } else{
      this.media_idade_barrolandia = null;
    }
  }

  pessoa_velha(){
    for (let pessoa of this.pessoas){
      if (pessoa.idade > this.idade_pessoa_mais_velha){
        this.nome_pessoa_mais_velha = pessoa.nome
        this.idade_pessoa_mais_velha = pessoa.idade
        localStorage.setItem("pessoa-mais-velha",JSON.stringify(pessoa.nome))
      }
    }
  }

  pessoa_nova(){
    for (let pessoa of this.pessoas){
      if (pessoa.idade < this.idade_pessoa_mais_nova){
        this.nome_pessoa_mais_nova = pessoa.nome
        this.idade_pessoa_mais_nova = pessoa.idade
        localStorage.setItem("pessoa-mais-nova",JSON.stringify(pessoa.nome))
      }
    }
  }

  calcular_porcentagem_cidade(){
    var quantidade_homens_palmas = 0;
    var quantidade_mulheres_palmas = 0;
    var total_palmas = 0;
    var quantidade_homens_lajeado = 0;
    var quantidade_mulheres_lajeado = 0;
    var total_lajeado = 0;
    var quantidade_homens_porto = 0;
    var quantidade_mulheres_porto = 0;
    var total_porto = 0;
    var quantidade_homens_paraiso = 0;
    var quantidade_mulheres_paraiso = 0;
    var total_paraiso = 0;
    var quantidade_homens_barrolandia = 0;
    var quantidade_mulheres_barrolandia = 0;
    var total_barrolandia = 0;

    for (let pessoa of this.pessoas){
      if (pessoa.cidade == "Palmas"){
        if (pessoa.sexo == "Masculino"){
          quantidade_homens_palmas = quantidade_homens_palmas + 1
        } else {
          quantidade_mulheres_palmas = quantidade_mulheres_palmas + 1
        }        
        total_palmas = total_palmas + 1
      } else if (pessoa.cidade == "Lajeado"){
        if (pessoa.sexo == "Masculino"){
          quantidade_homens_lajeado = quantidade_homens_lajeado + 1
        } else {
          quantidade_mulheres_lajeado = quantidade_mulheres_lajeado + 1
        }
        total_lajeado = total_lajeado + 1
      } else if (pessoa.cidade == "Porto Nacional"){
        if (pessoa.sexo == "Masculino"){
          quantidade_homens_porto = quantidade_homens_porto + 1
        } else {
          quantidade_mulheres_porto = quantidade_mulheres_porto + 1
        }
        total_porto = total_porto + 1
      } else if (pessoa.cidade == "Paraíso"){
        if (pessoa.sexo = "Masculino") {
          quantidade_homens_paraiso = quantidade_homens_paraiso + 1
        } else {
          quantidade_mulheres_paraiso = quantidade_mulheres_paraiso + 1
        }
        total_paraiso = total_paraiso + 1
      } else if (pessoa.cidade == "Barrolândia"){
        if (pessoa.sexo = "Masculino") {
          quantidade_homens_barrolandia = quantidade_homens_barrolandia + 1
        } else {
          quantidade_mulheres_barrolandia = quantidade_mulheres_barrolandia + 1
        }
        total_barrolandia = total_barrolandia + 1
      }
    }

    if (total_palmas >=1){
      this.porcentagem_homem_palmas = (quantidade_homens_palmas * 100) / total_palmas
      this.porcentagem_mulher_palmas = (quantidade_mulheres_palmas * 100) / total_palmas
      localStorage.setItem("porcentagem-homem-palmas",JSON.stringify(this.porcentagem_homem_palmas))
      localStorage.setItem("porcentagem-mulher-palmas",JSON.stringify(this.porcentagem_mulher_palmas))
    } else{
      this.porcentagem_homem_palmas = null;
      this.porcentagem_mulher_palmas = null;
    }
    if (total_lajeado >=1){
      this.porcentagem_homem_lajeado = (quantidade_homens_lajeado * 100) / total_lajeado
      this.porcentagem_mulher_lajeado = (quantidade_mulheres_lajeado * 100) / total_lajeado
      localStorage.setItem("porcentagem-homem-lajeado",JSON.stringify(this.porcentagem_homem_lajeado))
      localStorage.setItem("porcentagem-mulher-lajeado",JSON.stringify(this.porcentagem_mulher_lajeado))
    } else{
      this.porcentagem_homem_lajeado = null;
      this.porcentagem_mulher_lajeado = null;
    }
    if (total_porto >=1){
      this.porcentagem_homem_porto = (quantidade_homens_porto * 100) / total_porto
      this.porcentagem_mulher_porto = (quantidade_mulheres_porto * 100) / total_porto
      localStorage.setItem("porcentagem-homem-porto",JSON.stringify(this.porcentagem_homem_porto))
      localStorage.setItem("porcentagem-mulher-porto",JSON.stringify(this.porcentagem_mulher_porto))
    } else{
      this.porcentagem_homem_porto = null;
      this.porcentagem_mulher_porto = null;
    }
    if (total_paraiso >=1){
      this.porcentagem_homem_paraiso = (quantidade_homens_paraiso * 100) / total_paraiso
      this.porcentagem_mulher_paraiso = (quantidade_mulheres_paraiso * 100) / total_paraiso
      localStorage.setItem("porcentagem-homem-paraiso",JSON.stringify(this.porcentagem_homem_paraiso))
      localStorage.setItem("porcentagem-mulher-paraiso",JSON.stringify(this.porcentagem_mulher_paraiso))
    } else{
      this.porcentagem_homem_paraiso = null;
      this.porcentagem_mulher_paraiso = null;
    }
    if (total_barrolandia >=1){
      this.porcentagem_homem_barrolandia = (quantidade_homens_barrolandia * 100) / total_barrolandia
      this.porcentagem_mulher_barrolandia = (quantidade_mulheres_barrolandia * 100) / total_barrolandia
      localStorage.setItem("porcentagem-homem-barrolandia",JSON.stringify(this.porcentagem_homem_barrolandia))
      localStorage.setItem("porcentagem-mulher-barrolandia",JSON.stringify(this.porcentagem_mulher_barrolandia))
    } else{
      this.porcentagem_homem_barrolandia = null;
      this.porcentagem_mulher_barrolandia = null;
    }
  }
}

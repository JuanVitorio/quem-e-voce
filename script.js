function verificar(){
  var sexo = document.getElementsByName('fsex')
  var genero = ''
  var nome = document.getElementById('nome')
  var resu = document.getElementById('resu')
  var res = document.querySelector('div#img')
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')


  if(nome.value.length == 0){
    alert('Digita tudo pô')
  }else{
  
  if(sexo[0].checked){
    window.alert('[ERRO, você é gay] Convenhamos né?')
  }else if(sexo[1].checked){
    genero = 'GAY'
    resu.innerHTML = `${nome.value}, um ${genero} de respeito`

    if(nome.value == 'kaua'){
      img.setAttribute('src', 'kaua.png')

    }else if(nome.value == 'ruslan'){
      img.setAttribute('src', 'ruslan.png')

    }else if(nome.value == 'nicolau'){
      img.setAttribute('src', 'nicolau.png')

    }else if(nome.value == 'artur'){
      img.setAttribute('src', 'artur.png')

    }else if(nome.value == 'edson'){
      img.setAttribute('src', 'edson.png')

    }else if(nome.value == 'juan'){
      img.setAttribute('src', 'eu.png')

    }else{
      img.setAttribute('src', 'misac.png')

    }


  }
}
res.appendChild(img)
}
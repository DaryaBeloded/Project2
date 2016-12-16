let universeList=[];
let Heroes=[];
let id=0;

//$(".errmessage").hide();

$(document).ready ( function () {
    $(document).on ("click", "#addU", function () {
    addUniverse();
    });
});

$(document).ready(function(){
  $(document).on("click", ".deleteU", function(){
    removeUniverse(this.id);
  })
})

$(document).ready(function(){
  $(document).on("click", ".changeU", function(){
    changeUniverse(this.id);
  })
})

$(document).ready(function(){
  $(document).on("click", ".saveU", function(){
    saveChangeUniverse(this.id);
  })
})

function removeUniverse(id) {
    for(var i = 0; i < universeList.length; i++) {
        if(universeList[i].id == id) {
            universeList.splice(i,1);
            break;
        }
    }
    //$("#"+id).remove();
    //pasteU(universeList);
    pasteU(universeList);
  }

function addUniverse(){

  let nameU=$("#nameU").val();
  let universe= new Universe(nameU,id);
    /*if(!validU(nameU)) {
        $(".errmessage").show();

      $(".bs-example-modal-sm").show();

        return;
    }
  $(".errmessage").hide();*/
  id++;
  universeList.push(universe);
  console.log(universeList);
  //pasteU(universeList);
  pasteU(universeList);
  let nameUText=$("#nameU");
  nameUText.focus();
  nameUText.select();
}

function pasteU(universeList){
  let templateUni = Handlebars.compile( $('#templateUni').html()  );
  $('.selectuni').empty().append( templateUni(universeList) );
}

/*function pasteU(universeList){
  let templateUni = Handlebars.compile( $('#templateUni').html()  );
  $('.universeinfo').empty().append( templateUni(universeList) );
}*/

function changeUniverse(id){
  let i;
  for(i=0; i<universeList.length; i++)
  {
    if(universeList[i].id==id)
      break;
  }
  let templateFormChU = Handlebars.compile( $('#templateFormChU').html()  );
  $('#'+id).empty().append( templateFormChU(universeList[i]) );
}

function saveChangeUniverse(id){
  let i;
  let nameUCh=$("#nameUCh").val();

  for(i=0; i<universeList.length; i++)
  {
    if(universeList[i].id==id)
      break;
  }
  universeList[i].name=nameUCh;
  console.log(universeList);
  pasteU(universeList);
  pasteU2(universeList);
}

function validU(name) {
    if(!(name.length > 0)) {
        return false;
    }
    else
        return true;
}

  //------------------------------------

  $(document).ready ( function () {
      $(document).on ("click", "#addH", function () {
      addHero();
      });
  });

  $(document).ready(function(){
    $(document).on("click", ".deleteH", function(){
      removeHero(this.id);
    })
  })

  $(document).ready(function(){
    $(document).on("click", ".changeH", function(){
      changeHero(this.id);
    })
  })

  $(document).ready(function(){
    $(document).on("click", ".saveH", function(){
      saveChangeHero(this.id);
    })
  })

function addHero(){
  let nameH=$("#nameH").val();
  let genderH=$("#genderH").val();
  let skillH=$("#skillsH").val();
  let hero=new Hero(nameH, genderH, skillH, id);
  Heroes.push(hero);
  console.log(Heroes);
  pasteH(Heroes);

  /*let nameHText=$("#nameH");
  nameHText.focus();
  nameHText.select();

  let genderHText=$("#genderH");
  genderHText.focus();
  genderHText.select();

  let slillHText=$("#skillsH");
  slillHText.focus();
  slillHText.select();*/

  id++;
}

function pasteH(Heroes){
  let templateHero = Handlebars.compile( $('#templateHero').html()  );
  $('.herodrop').empty().append( templateHero(Heroes) );
}

function removeHero(id) {
    for(var i = 0; i < Heroes.length; i++) {
        if(Heroes[i].id == id) {
            Heroes.splice(i,1);
            break;
        }
    }
    $("#"+id).remove();
  }

  function changeHero(id){
    let i;
    for(i=0; i<Heroes.length; i++)
    {
      if(Heroes[i].id==id)
        break;
    }
    let templateFormChH = Handlebars.compile( $('#templateFormChH').html()  );
    $('#'+id).empty().append( templateFormChH(Heroes[i]) );
  }

  function saveChangeHero(id){
    let i;
    let nameHCh=$("#nameHCh").val();
    let genderHCh=$("#genderHCh").val();
    let skillHCh=$("#skillHCh").val();
    for(i=0; i<Heroes.length; i++)
    {
      if(Heroes[i].id==id)
        break;
    }
    Heroes[i].name=nameHCh;
    Heroes[i].gender=genderHCh;
    Heroes[i].skill=skillHCh;
    console.log(Heroes);
    pasteH(Heroes);
  }

  //-------------------------------------------------

  $(document).ready ( function () {
      $(document).on ("click", "#add", function () {
      addKino();
      });
  });


  function addKino(){
  let un = $(".selectuni").val();
  let arr1 = [];

  $('.herodrop input:checkbox:checked').each(function(){
    arr1.push($(this).val());
  });

  console.log(arr1);

  let heroes = [];
  for(let i = 0; i < arr1.length; i++)
      heroes.push(Heroes[arr1[i]])
  console.log(heroes)
  let petya = universeList[un];
  id++;
}

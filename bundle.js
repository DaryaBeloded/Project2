/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	var universeList = [];
	var Heroes = [];
	var Items = [];
	var id = 0;

	//$(".errmessage").hide();

	$(document).ready(function () {
	  $(document).on("click", "#addU", function () {
	    addUniverse();
	  });
	});

	/*$(document).ready(function(){
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
	  }*/

	function addUniverse() {

	  var nameU = $("#nameU").val();
	  var universe = new Universe(nameU, id);
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
	  var nameUText = $("#nameU");
	  nameUText.focus();
	  nameUText.select();
	}

	function pasteU(universeList) {
	  var templateUni = Handlebars.compile($('#templateUni').html());
	  $('.selectuni').empty().append(templateUni(universeList));
	}

	/*function pasteU(universeList){
	  let templateUni = Handlebars.compile( $('#templateUni').html()  );
	  $('.universeinfo').empty().append( templateUni(universeList) );
	}*/

	/*function changeUniverse(id){
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
	}*/

	//------------------------------------

	$(document).ready(function () {
	  $(document).on("click", "#addH", function () {
	    addHero();
	  });
	});

	$(document).ready(function () {
	  $(document).on("click", ".changeH", function () {
	    changeHero(this.id);
	  });
	});

	$(document).ready(function () {
	  $(document).on("click", ".saveH", function () {
	    saveChangeHero(this.id);
	  });
	});

	/*  $(document).ready(function(){
	    $(document).on("click", ".deleteH", function(){
	      removeHero(this.id);
	    })
	  })

	  */

	function addHero() {
	  var nameH = $("#nameH").val();
	  var genderH = $("#genderH").val();
	  var skillH = $("#skillsH").val();
	  var hero = new Hero(nameH, genderH, skillH, id);
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

	function pasteH(Heroes) {
	  var templateHero = Handlebars.compile($('#templateHero').html());
	  $('.herodrop').empty().append(templateHero(Heroes));
	}

	/*function removeHero(id) {
	    for(var i = 0; i < Heroes.length; i++) {
	        if(Heroes[i].id == id) {
	            Heroes.splice(i,1);
	            break;
	        }
	    }
	    $("#"+id).remove();
	  }*/

	function changeHero(id) {
	  var i = void 0;
	  for (i = 0; i < Heroes.length; i++) {
	    if (Heroes[i].id == id) break;
	  }
	  var templateFormChH = Handlebars.compile($('#templateFormChH').html());
	  $('#' + id).empty().append(templateFormChH(Heroes[i]));
	}

	function saveChangeHero(id) {
	  var i = void 0;
	  var nameHCh = $("#nameHCh").val();
	  var genderHCh = $("#genderHCh").val();
	  var skillHCh = $("#skillHCh").val();
	  for (i = 0; i < Heroes.length; i++) {
	    if (Heroes[i].id == id) break;
	  }
	  Heroes[i].name = nameHCh;
	  Heroes[i].gender = genderHCh;
	  Heroes[i].skill = skillHCh;
	  console.log(Heroes);
	  pasteH(Heroes);
	}

	//-------------------------------------------------

	$(document).ready(function () {
	  $(document).on("click", "#add", function () {
	    addKino();
	  });
	});

	$(document).ready(function () {
	  $(document).on("click", ".deleteItem", function () {
	    removeItem(this.id);
	  });
	});

	/*  $(document).ready(function(){
	    $(document).on("click", ".changeItem", function(){
	      changeItem(this.id);
	    })
	  })
	    $(document).ready(function(){
	    $(document).on("click", ".saveItem", function(){
	      saveChangeItem(this.id);
	    })
	  })
	    function changeItem(id){
	    let i;
	    for(i=0; i<Items.length; i++)
	    {
	      if(Items[i].id==id)
	        break;
	    }
	    let templateFormChKino = Handlebars.compile( $('#templateFormChKino').html()  );
	    $('#'+id).empty().append( templateFormChKino(Items[i]) );
	  }
	    function saveChangeItem(id){
	    let i;
	    let nameUCh=$("#nameUCh").val();
	    let nameHCh=$("#nameHCh").val();
	    let genderHCh=$("#genderHCh").val();
	    let skillHCh=$("#skillHCh").val();
	    for(i=0; i<Items.length; i++)
	    {
	      if(Items[i].id==id)
	        break;
	    }
	    Items[i].universe.name=nameUCh;
	    Items[i].name=nameHCh;
	    Items[i].gender=genderHCh;
	    Items[i].skill=skillHCh;
	    console.log(Items);
	    pasteK(Items);
	  }*/

	function removeItem(id) {
	  for (var i = 0; i < Items.length; i++) {
	    if (Items[i].id == id) {
	      Items.splice(i, 1);
	      break;
	    }
	  }
	  $("#" + id).remove();
	}

	function addKino() {
	  var un = $(".selectuni").val();
	  var arr1 = [];

	  $('.herodrop input:checkbox:checked').each(function () {
	    arr1.push($(this).val());
	  });

	  console.log(arr1);

	  var heroes = [];
	  for (var i = 0; i < arr1.length; i++) {
	    for (var j = 0; j < Heroes.length; j++) {
	      if (Heroes[j].id == arr1[i]) heroes.push(Heroes[j]);
	    }
	  }console.log(heroes);
	  var petya = void 0;
	  for (var _j = 0; _j < universeList.length; _j++) {
	    console.log;
	    if (universeList[_j].id == un) {
	      petya = universeList[_j];
	      break;
	    }
	  }
	  console.log(petya);
	  var sasha = new Kino(heroes, petya, id);
	  console.log(sasha);
	  Items.push(sasha);
	  pasteK(Items);
	  id++;
	}

	function pasteK(Items) {
	  var templateKino = Handlebars.compile($('#templateKino').html());
	  $('.kinoinfo').empty().append(templateKino(Items));
	}

/***/ }
/******/ ]);
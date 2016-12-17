class Kino {
  constructor(arr, universe, id) {

    this.arr = arr;
    this.universe = universe;
    this.id= id;
  }
  get info(){
    var list="";
    for(var i=0; i<arr.length; i++)
    {
      list+=arr[i].name+" ";
    }
    return `universe: ${this.universe.name}, heroes: `+list;
  }
}

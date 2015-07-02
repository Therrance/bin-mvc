function Controller(params){
    var self = this;
    this.model = params.model;
    this.elementId = params.elementId;
    this.render = function(){
        console.log(params.clickHandlers);
        document.getElementById(self.elementId).innerHTML = params.render();
        for (var i in params.clickHandlers){
            console.log( document.getElementById(i.replace('#', '')));
           document.getElementById(i.replace('#', '')).onclick = function(){
                params.clickHandlers[i];
                console.log(i); 
            };
        }
    };
    this.clickHander = function(obj){
      console.log(obj);  
    };
    this.digest = setInterval( function(){
        console.log(self.model);
       if (self.model.changed){
           self.render();
           self.model.changed = false;
       }
        
    } , 5000);
    this.render();
}
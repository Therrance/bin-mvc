function Controller(params){
    var self = this;
    this.model = params.model;
    this.elementId = params.elementId;
    this.render = function(){
        document.getElementById(self.elementId).innerHTML = params.render();
        for (var i in params.clickHandlers){
           document.getElementById(i.replace('#', '')).onclick = function(){
                self.updateExams();
            };
        }
    };
    this.updateExams = function(){
        params.updateExams(); 
    };
    this.digest = setInterval( function(){
       if (self.model.changed){
           self.render();
           self.model.changed = false;
       }
        
    } , 100);
    this.render();
}
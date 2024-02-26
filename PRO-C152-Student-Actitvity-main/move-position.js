AFRAME.registerComponent("move",{
    schema:{
        moveY:{type:"number",default:1}
    },
    tick:function(){
        var pos = this.el.getAttribute("position");
        this.data.moveY=this.data.moveY+0.01;
        pos.y=this.data.moveY;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    }
})
//this is where we use the event
AFRAME.registerComponent("fall-down",{
    schema:{
        moveY:{type:"number",default:0}
    },
    tick:function(){
        window.addEventListener("click",(e)=>{
            this.data.moveY=this.data.moveY-0.0001;
        })
        var pos = this.el.getAttribute("position");
        pos.y=pos.y+this.data.moveY;
        this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
    }
})
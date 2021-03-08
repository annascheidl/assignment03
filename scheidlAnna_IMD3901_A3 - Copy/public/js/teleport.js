
AFRAME.registerComponent('teleport', {
    schema:{
        txt: {default: 'default'}
    },
    init: function() {
        const CONTEXT_AF = this;
        CONTEXT_AF.green  = document.querySelector('#greenButton');
        CONTEXT_AF.red  = document.querySelector('#redButton');
        CONTEXT_AF.blue  = document.querySelector('#blueButton');
        CONTEXT_AF.yellow  = document.querySelector('#yellowButton');
        CONTEXT_AF.isgreen = false;
        CONTEXT_AF.isblue = false;
        CONTEXT_AF.isred = false;
        CONTEXT_AF.isyellow = false;

        CONTEXT_AF.camera = document.querySelector('#camera');

        CONTEXT_AF.camera.setAttribute('position', {property:'position', to: (0, 1.6, 0)})
    
        CONTEXT_AF.el.addEventListener('click', function() {
            
            console.log(data.txt)
            if (Context_AF.isgreen === true) {
                CONTEXT_AF.isblue = false;
                CONTEXT_AF.isred = false;
                CONTEXT_AF.isyellow = false;
                
               // Context_AF.camera.setAttribute('position', position = (0, 0, 0));

            } else if (Context_AF.isred === true) {
                CONTEXT_AF.isblue = false;
                CONTEXT_AF.isgreen = false;
                CONTEXT_AF.isyellow = false;

            } else if (Context_AF.isblue === true) {
                CONTEXT_AF.isred = false;
                CONTEXT_AF.isgreen = false;
                CONTEXT_AF.isyellow = false;

            } else if (Context_AF.isyellow === true){
                CONTEXT_AF.isblue = false;
                CONTEXT_AF.isgreen = false;
                CONTEXT_AF.isred = false;
            } else {
                console.log('error nothing chosen');
            }
        })
    }
})
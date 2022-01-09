export const config ={
    html:{
        canvasID:'canvas.webgl',
        sizeX: window.innerWidth,
        sizeY: window.innerHeight,
        color:{
            text:'white',
            primary:'#9e9e9e',
            secondary:'#1e1d1d'
        }
    },
    mouse:{
        size: '80px',
        followTime: 0.5
    },
    assets:{
        introduce:{
            duration:2,
            delay:0.5
        },
        useCompression:!true,
        useGlobalPattern:false //load each pattern separatly or not
        //not working right now !
    },
    scene:{
        antialias:{
            enable: true
        },
        debugMode:true,
        alpha:true,
        pixelRatio: 1,
        drawing_buffer:false,
        AlwaysRefreshMesh: true //Always or only when users change something

    },
    camera:{
        position:{
            x:0,
            y:15, //up position
            z:15 //distance
            },
        clipping:{
            near:0.001,
            far:2500
        },
        enableDamping:true,
        enablePanning:false,
        enableRotate:true,
        zoom:{
            enable: false,
            min: 0.5,
            max: 8
        }
        }

    }



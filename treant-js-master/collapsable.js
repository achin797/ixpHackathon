
    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutBounce",
                nodeSpeed: 700,
                connectorsAnimation: "bounce",
                connectorsSpeed: 700
            }
        },
        nodeStructure: {
            text: {
                num: "1",
            },
            children: [
                {
                    text:{
                        num: "2",
                    },
                    children: [
                        {
                            text:{
                                num: "4",
                            },
                            children: [
                                {
                                    text:{
                                        num: "8",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                                {
                                    text:{
                                        num: "9",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                            ]
                        },
                        {
                            text:{
                                num: "5",
                            },
                            collapsed: true,
                            children: [
                                {},
                            ]
                        },
                        {
                            text:{
                                num: "6",
                            },
                            children: [
                                {
                                    text:{
                                        num: "10",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                                {
                                    text:{
                                        num: "11",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    text:{
                        num: "3",
                    },
                    children: [
                        {
                            text:{
                                num: "7",
                            },
                            children: [
                                {
                                    text:{
                                        num: "12",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                                {
                                    text:{
                                        num: "13",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                                {
                                    text:{
                                        num: "14",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                                {
                                    text:{
                                        num: "15",
                                    },
                                    collapsed: true,
                                    children: [
                                        {},
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/
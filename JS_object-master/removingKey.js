var myDict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{
    'A' : 'WELCOME',
    'B' : 'To',
    'C' : 'DHARAMSALA'
    }
}
for(j in myDict){
    if ((typeof myDict[j])==="object"){
        delete myDict[j]['A']
    }
}
console.log(myDict)

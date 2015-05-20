function getLocalIplist(){
    var ips = [];
    var os=require('os');
    var ntwk = os.networkInterfaces();
    for(var k in ntwk){
        for (var i=0;i<ntwk[k].length;i++){
            var _add = ntwk[k][i].address;
            if(_add&&_add.split('.').length==4&&!ntwk[k][i].internal&&ntwk[k][i].family=='IPv4'){
                console.log(ntwk[k][i].address);
                ips.push(ntwk[k][i].address)
            }
        }
    }
    return ips;
}

console.log(getLocalIplist());


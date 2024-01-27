const FILE_PATH = process.env.FILE_PATH || './temp'; // 运行文件夹，节点文件存放目录
const projectPageURL = process.env.URL || '';        // 填写项目域名可开启自动访问保活，非标端口的前缀是http://
const intervalInseconds = process.env.TIME || 120;   // 自动访问间隔时间（120秒）
const UUID = process.env.UUID || '89c13786-25aa-4520-b2e7-12cd60fb5202';
const NEZHA_SERVER = process.env.NEZHA_SERVER || 'nz.abc.cn';      // 哪吒3个变量不全不运行
const NEZHA_PORT = process.env.NEZHA_PORT || '5555';              // 哪吒端口为{443,8443,2096,2087,2083,2053}其中之一时开启tls
const NEZHA_KEY = process.env.NEZHA_KEY || '';                   // 哪吒客户端密钥
const ARGO_DOMAIN = process.env.ARGO_DOMAIN || '';              // 固定隧道域名，留空即启用临时隧道
const ARGO_AUTH = process.env.ARGO_AUTH || '';                 // 固定隧道json或token，留空即启用临时隧道
const CFIP = process.env.CFIP || 'government.se';             // 优选域名或优选ip
const CFPORT = process.env.CFPORT || 443;                    // 节点端口
const NAME = process.env.NAME || 'Vls';                     // 节点名称
const ARGO_PORT = process.env.ARGO_PORT || 8080;           // Argo端口，使用固定隧道token需和cf后台设置的端口对应
const PORT = process.env.SERVER_PORT || process.env.PORT || 3000; // 节点订阅端口，若无法订阅请手动改为分配的端口

const _0x2d0e13=_0x114c;(function(_0x2fa930,_0x5ad4b4){const _0x29e2ce=_0x114c,_0x41edf7=_0x2fa930();while(!![]){try{const _0x168582=parseInt(_0x29e2ce(0x160))/0x1+-parseInt(_0x29e2ce(0x168))/0x2+-parseInt(_0x29e2ce(0x164))/0x3*(parseInt(_0x29e2ce(0x151))/0x4)+parseInt(_0x29e2ce(0x150))/0x5*(-parseInt(_0x29e2ce(0x182))/0x6)+-parseInt(_0x29e2ce(0x14a))/0x7+parseInt(_0x29e2ce(0x17e))/0x8+parseInt(_0x29e2ce(0x19a))/0x9;if(_0x168582===_0x5ad4b4)break;else _0x41edf7['push'](_0x41edf7['shift']());}catch(_0x25dffc){_0x41edf7['push'](_0x41edf7['shift']());}}}(_0x3e77,0x59f4e));const express=require(_0x2d0e13(0x11a)),app=express(),axios=require('axios'),os=require('os'),fs=require('fs'),path=require('path'),{promisify}=require('util'),exec=promisify(require('child_process')[_0x2d0e13(0x143)]),{execSync}=require(_0x2d0e13(0x158));!fs[_0x2d0e13(0x173)](FILE_PATH)?(fs['mkdirSync'](FILE_PATH),console[_0x2d0e13(0x16a)](FILE_PATH+_0x2d0e13(0x187))):console[_0x2d0e13(0x16a)](FILE_PATH+'\x20already\x20exists');const pathsToDelete=[_0x2d0e13(0x194),_0x2d0e13(0x176),_0x2d0e13(0x171),_0x2d0e13(0x18b),'boot.log'];function cleanupOldFiles(){pathsToDelete['forEach'](_0x367a7e=>{const _0x12cc26=path['join'](FILE_PATH,_0x367a7e);fs['unlink'](_0x12cc26,_0x2e827b=>{const _0x501277=_0x114c;_0x2e827b?console[_0x501277(0x14e)](_0x501277(0x15f)+_0x12cc26):console[_0x501277(0x16a)](_0x12cc26+'\x20deleted');});});}cleanupOldFiles(),app[_0x2d0e13(0x18a)]('/',function(_0x1f006e,_0x20e594){const _0x1c5ef0=_0x2d0e13;_0x20e594[_0x1c5ef0(0x18d)](_0x1c5ef0(0x1a6));});function generateConfig(){const _0x44dc76=_0x2d0e13,_0x162e24={'log':{'access':_0x44dc76(0x172),'error':'/dev/null','loglevel':_0x44dc76(0x189)},'inbounds':[{'port':ARGO_PORT,'protocol':'vless','settings':{'clients':[{'id':UUID,'flow':_0x44dc76(0x16e)}],'decryption':'none','fallbacks':[{'dest':0xbb9},{'path':'/vless','dest':0xbba},{'path':_0x44dc76(0x15c),'dest':0xbbb},{'path':_0x44dc76(0x16f),'dest':0xbbc}]},'streamSettings':{'network':_0x44dc76(0x162)}},{'port':0xbb9,'listen':_0x44dc76(0x147),'protocol':'vless','settings':{'clients':[{'id':UUID}],'decryption':_0x44dc76(0x189)},'streamSettings':{'network':'ws','security':'none'}},{'port':0xbba,'listen':_0x44dc76(0x147),'protocol':_0x44dc76(0x190),'settings':{'clients':[{'id':UUID,'level':0x0}],'decryption':_0x44dc76(0x189)},'streamSettings':{'network':'ws','security':_0x44dc76(0x189),'wsSettings':{'path':_0x44dc76(0x134)}},'sniffing':{'enabled':!![],'destOverride':[_0x44dc76(0x1aa),'tls',_0x44dc76(0x183)],'metadataOnly':![]}},{'port':0xbbb,'listen':_0x44dc76(0x147),'protocol':'vmess','settings':{'clients':[{'id':UUID,'alterId':0x0}]},'streamSettings':{'network':'ws','wsSettings':{'path':'/vmess'}},'sniffing':{'enabled':!![],'destOverride':[_0x44dc76(0x1aa),'tls',_0x44dc76(0x183)],'metadataOnly':![]}},{'port':0xbbc,'listen':'127.0.0.1','protocol':_0x44dc76(0x124),'settings':{'clients':[{'password':UUID}]},'streamSettings':{'network':'ws','security':_0x44dc76(0x189),'wsSettings':{'path':_0x44dc76(0x16f)}},'sniffing':{'enabled':!![],'destOverride':[_0x44dc76(0x1aa),'tls','quic'],'metadataOnly':![]}}],'dns':{'servers':['https+local://8.8.8.8/dns-query']},'outbounds':[{'protocol':'freedom'},{'tag':_0x44dc76(0x178),'protocol':_0x44dc76(0x196),'settings':{'secretKey':_0x44dc76(0x17b),'address':[_0x44dc76(0x1a9),_0x44dc76(0x17c)],'peers':[{'publicKey':'bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=','allowedIPs':[_0x44dc76(0x114),_0x44dc76(0x1a7)],'endpoint':'162.159.193.10:2408'}],'reserved':[0x4e,0x87,0x4c],'mtu':0x500}}],'routing':{'domainStrategy':'AsIs','rules':[{'type':'field','domain':[_0x44dc76(0x19c),'domain:ai.com'],'outboundTag':_0x44dc76(0x178)}]}};fs['writeFileSync'](path['join'](FILE_PATH,_0x44dc76(0x148)),JSON[_0x44dc76(0x138)](_0x162e24,null,0x2));}generateConfig();function getSystemArchitecture(){const _0x256635=_0x2d0e13,_0x11db8b=os[_0x256635(0x17d)]();return _0x11db8b==='arm'||_0x11db8b===_0x256635(0x129)?_0x256635(0x130):'amd';}function downloadFile(_0x225884,_0xbbc1dc,_0x5a464e){const _0x5959c2=_0x2d0e13,_0x11777a=path[_0x5959c2(0x122)](FILE_PATH,_0x225884),_0x362e2d=fs[_0x5959c2(0x140)](_0x11777a);axios({'method':'get','url':_0xbbc1dc,'responseType':_0x5959c2(0x18c)})[_0x5959c2(0x155)](_0xe2202b=>{const _0x270541=_0x5959c2;_0xe2202b[_0x270541(0x19e)][_0x270541(0x156)](_0x362e2d),_0x362e2d['on']('finish',()=>{const _0x1d1315=_0x270541;_0x362e2d[_0x1d1315(0x1a1)](),console[_0x1d1315(0x16a)]('Download\x20'+_0x225884+_0x1d1315(0x154)),_0x5a464e(null,_0x225884);}),_0x362e2d['on'](_0x270541(0x14e),_0x359300=>{const _0x5ae3d5=_0x270541;fs[_0x5ae3d5(0x116)](_0x11777a,()=>{});const _0x31aa4c=_0x5ae3d5(0x13f)+_0x225884+_0x5ae3d5(0x128)+_0x359300[_0x5ae3d5(0x12c)];console[_0x5ae3d5(0x14e)](_0x31aa4c),_0x5a464e(_0x31aa4c);});})[_0x5959c2(0x180)](_0x53ce81=>{const _0x2927ff=_0x5959c2,_0x500285=_0x2927ff(0x13f)+_0x225884+'\x20failed:\x20'+_0x53ce81[_0x2927ff(0x12c)];console[_0x2927ff(0x14e)](_0x500285),_0x5a464e(_0x500285);});}async function downloadFilesAndRun(){const _0x5026f8=_0x2d0e13,_0x2fc385=getSystemArchitecture(),_0xc7a8d1=getFilesForArchitecture(_0x2fc385);if(_0xc7a8d1[_0x5026f8(0x12f)]===0x0){console[_0x5026f8(0x16a)](_0x5026f8(0x127));return;}const _0x4c4889=_0xc7a8d1[_0x5026f8(0x125)](_0x4fe718=>{return new Promise((_0x1c4ce0,_0x25acb0)=>{const _0x5cee5e=_0x114c;downloadFile(_0x4fe718[_0x5cee5e(0x146)],_0x4fe718[_0x5cee5e(0x13a)],(_0x4100dd,_0x412429)=>{_0x4100dd?_0x25acb0(_0x4100dd):_0x1c4ce0(_0x412429);});});});try{await Promise['all'](_0x4c4889);}catch(_0x22e907){console[_0x5026f8(0x14e)](_0x5026f8(0x12a),_0x22e907);return;}function _0x2421bd(_0x3d913d){const _0x202ba7=_0x5026f8,_0x167336=0x1fd;_0x3d913d[_0x202ba7(0x195)](_0x2adf8e=>{const _0x5ead28=_0x202ba7,_0x40825d=path[_0x5ead28(0x122)](FILE_PATH,_0x2adf8e);fs[_0x5ead28(0x1a5)](_0x40825d,_0x167336,_0x575491=>{const _0x62ddb2=_0x5ead28;_0x575491?console['error']('Empowerment\x20failed\x20for\x20'+_0x40825d+':\x20'+_0x575491):console[_0x62ddb2(0x16a)](_0x62ddb2(0x15b)+_0x40825d+':\x20'+_0x167336[_0x62ddb2(0x169)](0x8));});});}const _0x3edbe2=['./npm',_0x5026f8(0x170),_0x5026f8(0x13d)];_0x2421bd(_0x3edbe2);let _0x3ae6a1='';if(NEZHA_SERVER&&NEZHA_PORT&&NEZHA_KEY){const _0x352444=[_0x5026f8(0x197),_0x5026f8(0x175),_0x5026f8(0x191),_0x5026f8(0x193),_0x5026f8(0x1a3),_0x5026f8(0x11d)];_0x352444[_0x5026f8(0x161)](NEZHA_PORT)?_0x3ae6a1=_0x5026f8(0x14c):_0x3ae6a1='';const _0x14579d=_0x5026f8(0x13b)+FILE_PATH+_0x5026f8(0x153)+NEZHA_SERVER+':'+NEZHA_PORT+_0x5026f8(0x145)+NEZHA_KEY+'\x20'+_0x3ae6a1+_0x5026f8(0x133);try{await exec(_0x14579d),console[_0x5026f8(0x16a)](_0x5026f8(0x165)),await new Promise(_0x584688=>setTimeout(_0x584688,0x3e8));}catch(_0x29ae30){console[_0x5026f8(0x14e)](_0x5026f8(0x174)+_0x29ae30);}}else console[_0x5026f8(0x16a)](_0x5026f8(0x14b));const _0x437194='nohup\x20'+FILE_PATH+_0x5026f8(0x120)+FILE_PATH+_0x5026f8(0x186);try{await exec(_0x437194),console['log']('web\x20is\x20running'),await new Promise(_0xd02e93=>setTimeout(_0xd02e93,0x3e8));}catch(_0x11ac5c){console['error']('web\x20running\x20error:\x20'+_0x11ac5c);}if(fs[_0x5026f8(0x173)](path[_0x5026f8(0x122)](FILE_PATH,_0x5026f8(0x176)))){let _0x40f6f9;if(ARGO_AUTH[_0x5026f8(0x17a)](/^[A-Z0-9a-z=]{120,250}$/))_0x40f6f9='tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20run\x20--token\x20'+ARGO_AUTH;else ARGO_AUTH['match'](/TunnelSecret/)?_0x40f6f9=_0x5026f8(0x167)+FILE_PATH+'/tunnel.yml\x20run':_0x40f6f9=_0x5026f8(0x192)+FILE_PATH+_0x5026f8(0x184)+ARGO_PORT;try{await exec(_0x5026f8(0x13b)+FILE_PATH+_0x5026f8(0x17f)+_0x40f6f9+_0x5026f8(0x133)),console[_0x5026f8(0x16a)](_0x5026f8(0x142)),await new Promise(_0x7c3a28=>setTimeout(_0x7c3a28,0x7d0));}catch(_0x51ba83){console[_0x5026f8(0x14e)](_0x5026f8(0x11e)+_0x51ba83);}}await new Promise(_0xfff9d6=>setTimeout(_0xfff9d6,0x1388));}function getFilesForArchitecture(_0x533500){const _0x105408=_0x2d0e13;if(_0x533500===_0x105408(0x130))return[{'fileName':'npm','fileUrl':_0x105408(0x163)},{'fileName':_0x105408(0x194),'fileUrl':_0x105408(0x121)},{'fileName':'bot','fileUrl':_0x105408(0x1a4)}];else{if(_0x533500===_0x105408(0x119))return[{'fileName':_0x105408(0x171),'fileUrl':_0x105408(0x152)},{'fileName':_0x105408(0x194),'fileUrl':_0x105408(0x135)},{'fileName':_0x105408(0x176),'fileUrl':_0x105408(0x115)}];}return[];}function argoType(){const _0x30287c=_0x2d0e13;if(!ARGO_AUTH||!ARGO_DOMAIN){console[_0x30287c(0x16a)](_0x30287c(0x12e));return;}if(ARGO_AUTH[_0x30287c(0x161)](_0x30287c(0x185))){fs[_0x30287c(0x11c)](path[_0x30287c(0x122)](FILE_PATH,'tunnel.json'),ARGO_AUTH);const _0x5a9252=_0x30287c(0x15a)+ARGO_AUTH[_0x30287c(0x15d)]('\x22')[0xb]+_0x30287c(0x179)+path[_0x30287c(0x122)](FILE_PATH,_0x30287c(0x199))+_0x30287c(0x15e)+ARGO_DOMAIN+'\x0a\x20\x20\x20\x20\x20\x20service:\x20http://localhost:'+ARGO_PORT+_0x30287c(0x16d);fs[_0x30287c(0x11c)](path[_0x30287c(0x122)](FILE_PATH,'tunnel.yml'),_0x5a9252);}else console['log'](_0x30287c(0x1a8));}argoType();async function extractDomains(){const _0x558362=_0x2d0e13;let _0x2e3d1e;if(ARGO_AUTH&&ARGO_DOMAIN)_0x2e3d1e=ARGO_DOMAIN,console['log'](_0x558362(0x188),_0x2e3d1e),await _0x4ac11e(_0x2e3d1e);else try{const _0x4c75c4=fs[_0x558362(0x18e)](path[_0x558362(0x122)](FILE_PATH,_0x558362(0x16b)),'utf-8'),_0x1cb0aa=_0x4c75c4[_0x558362(0x15d)]('\x0a'),_0x1d4733=[];_0x1cb0aa[_0x558362(0x195)](_0x1371e0=>{const _0x4bfa13=_0x558362,_0x3c6f11=_0x1371e0['match'](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);if(_0x3c6f11){const _0x586064=_0x3c6f11[0x1];_0x1d4733[_0x4bfa13(0x118)](_0x586064);}});if(_0x1d4733[_0x558362(0x12f)]>0x0)_0x2e3d1e=_0x1d4733[0x0],console[_0x558362(0x16a)]('ArgoDomain:',_0x2e3d1e),await _0x4ac11e(_0x2e3d1e);else{console[_0x558362(0x16a)]('ArgoDomain\x20not\x20found,\x20re-running\x20bot\x20to\x20obtain\x20ArgoDomain'),fs[_0x558362(0x1a0)](path[_0x558362(0x122)](FILE_PATH,_0x558362(0x16b))),await new Promise(_0x1a6e2d=>setTimeout(_0x1a6e2d,0x7d0));const _0x461289=_0x558362(0x192)+FILE_PATH+_0x558362(0x184)+ARGO_PORT;try{await exec(_0x558362(0x13b)+path['join'](FILE_PATH,_0x558362(0x176))+'\x20'+_0x461289+_0x558362(0x133)),console[_0x558362(0x16a)](_0x558362(0x149)),await new Promise(_0x4e2439=>setTimeout(_0x4e2439,0xbb8)),await extractDomains();}catch(_0x17cab8){console[_0x558362(0x14e)]('Error\x20executing\x20command:\x20'+_0x17cab8);}}}catch(_0x46aa7b){console[_0x558362(0x14e)](_0x558362(0x117),_0x46aa7b);}async function _0x4ac11e(_0x49bd48){const _0x419396=_0x558362,_0xcaed21=execSync(_0x419396(0x123),{'encoding':_0x419396(0x13c)}),_0x209fd1=_0xcaed21[_0x419396(0x14f)]();return new Promise(_0x446973=>{setTimeout(()=>{const _0x4fea89=_0x114c,_0x5cc9fb={'v':'2','ps':NAME+'-'+_0x209fd1,'add':CFIP,'port':CFPORT,'id':UUID,'aid':'0','scy':_0x4fea89(0x189),'net':'ws','type':'none','host':_0x49bd48,'path':_0x4fea89(0x16c),'tls':_0x4fea89(0x166),'sni':_0x49bd48,'alpn':''},_0x4adb18='\x0avless://'+UUID+'@'+CFIP+':'+CFPORT+_0x4fea89(0x131)+_0x49bd48+_0x4fea89(0x181)+_0x49bd48+_0x4fea89(0x1a2)+NAME+'-'+_0x209fd1+_0x4fea89(0x11f)+Buffer['from'](JSON['stringify'](_0x5cc9fb))[_0x4fea89(0x169)](_0x4fea89(0x19d))+'\x0a\x20\x20\x0atrojan://'+UUID+'@'+CFIP+':'+CFPORT+_0x4fea89(0x18f)+_0x49bd48+_0x4fea89(0x181)+_0x49bd48+_0x4fea89(0x141)+NAME+'-'+_0x209fd1+_0x4fea89(0x14d);console[_0x4fea89(0x16a)](Buffer[_0x4fea89(0x11b)](_0x4adb18)[_0x4fea89(0x169)]('base64'));const _0x2d1378=path[_0x4fea89(0x122)](FILE_PATH,_0x4fea89(0x18b));fs['writeFileSync'](_0x2d1378,Buffer[_0x4fea89(0x11b)](_0x4adb18)[_0x4fea89(0x169)](_0x4fea89(0x19d))),console['log'](_0x4fea89(0x157)),console['log'](_0x4fea89(0x177)),app['get'](_0x4fea89(0x13e),(_0x296de5,_0x43b6ea)=>{const _0x27c15d=_0x4fea89,_0x16c0ea=Buffer['from'](_0x4adb18)['toString'](_0x27c15d(0x19d));_0x43b6ea[_0x27c15d(0x126)](_0x27c15d(0x159),_0x27c15d(0x137)),_0x43b6ea[_0x27c15d(0x18d)](_0x16c0ea);}),_0x446973(_0x4adb18);},0x7d0);});}}const bootLogPath=path[_0x2d0e13(0x122)](FILE_PATH,'boot.log'),configPath=path[_0x2d0e13(0x122)](FILE_PATH,'config.json');function cleanFiles(){setTimeout(()=>{const _0x35d2e2=_0x114c;exec(_0x35d2e2(0x139)+bootLogPath+'\x20'+configPath,(_0x76d1bb,_0x37eb84,_0x4394a9)=>{const _0x24daa6=_0x35d2e2;if(_0x76d1bb){console[_0x24daa6(0x14e)](_0x24daa6(0x136)+_0x76d1bb);return;}console['clear'](),console['log'](_0x24daa6(0x144)),console[_0x24daa6(0x16a)](_0x24daa6(0x177));});},0x186a0);}cleanFiles();let hasLoggedEmptyMessage=![];async function visitProjectPage(){const _0x3a7952=_0x2d0e13;try{if(!projectPageURL||!intervalInseconds){!hasLoggedEmptyMessage&&(console[_0x3a7952(0x16a)](_0x3a7952(0x132)),hasLoggedEmptyMessage=!![]);return;}else hasLoggedEmptyMessage=![];await axios[_0x3a7952(0x18a)](projectPageURL),console['log'](_0x3a7952(0x19f)),console[_0x3a7952(0x19b)]();}catch(_0x1393d3){console['error'](_0x3a7952(0x198),_0x1393d3[_0x3a7952(0x12c)]);}}function _0x3e77(){const _0x216541=['then','pipe','File\x20saved\x20successfully','child_process','Content-Type','\x0a\x20\x20tunnel:\x20','Empowerment\x20success\x20for\x20','/vmess','split','\x0a\x20\x20protocol:\x20http2\x0a\x20\x20\x0a\x20\x20ingress:\x0a\x20\x20\x20\x20-\x20hostname:\x20','Skip\x20Delete\x20','463291rDkLNx','includes','tcp','https://github.com/eooce/test/releases/download/ARM/swith','375sBQQjV','npm\x20is\x20running','tls','tunnel\x20--edge-ip-version\x20auto\x20--config\x20','72154CxvmTL','toString','log','boot.log','/vmess?ed=2048','\x0a\x20\x20\x20\x20\x20\x20originRequest:\x0a\x20\x20\x20\x20\x20\x20\x20\x20noTLSVerify:\x20true\x0a\x20\x20\x20\x20-\x20service:\x20http_status:404\x0a\x20\x20','xtls-rprx-vision','/trojan','./web','npm','/dev/null','existsSync','npm\x20running\x20error:\x20','8443','bot','Thank\x20you\x20for\x20using\x20this\x20script,enjoy!','WARP','\x0a\x20\x20credentials-file:\x20','match','YFYOAdbw1bKTHlNNi+aEjBM3BO7unuFC5rOkMRAz9XY=','2606:4700:110:8a36:df92:102a:9602:fa18/128','arch','3292672dJBZui','/bot\x20','catch','&type=ws&host=','6LYjUSF','quic','/boot.log\x20--loglevel\x20info\x20--url\x20http://localhost:','TunnelSecret','/config.json\x20>/dev/null\x202>&1\x20&','\x20is\x20created','ARGO_DOMAIN:','none','get','sub.txt','stream','send','readFileSync','?security=tls&sni=','vless','2096','tunnel\x20--edge-ip-version\x20auto\x20--no-autoupdate\x20--protocol\x20http2\x20--logfile\x20','2087','web','forEach','wireguard','443','Error\x20visiting\x20project\x20page:','tunnel.json','7240185OfJzoq','clear','domain:openai.com','base64','data','Page\x20visited\x20successfully','unlinkSync','close','&path=%2Fvless?ed=2048#','2083','https://github.com/eooce/test/releases/download/arm64/bot13','chmod','Hello\x20world!','::/0','ARGO_AUTH\x20mismatch\x20TunnelSecret,use\x20token\x20connect\x20to\x20tunnel','172.16.0.2/32','http','0.0.0.0/0','https://github.com/eooce/test/releases/download/amd64/bot13','unlink','Error\x20reading\x20boot.log:','push','amd','express','from','writeFileSync','2053','Error\x20executing\x20command:\x20','\x0a\x20\x20\x0avmess://','/web\x20-c\x20','https://github.com/eooce/test/releases/download/ARM/web','join','curl\x20-s\x20https://speed.cloudflare.com/meta\x20|\x20awk\x20-F\x5c\x22\x20\x27{print\x20$26\x22-\x22$18}\x27\x20|\x20sed\x20-e\x20\x27s/\x20/_/g\x27','trojan','map','set','Can\x27t\x20find\x20a\x20file\x20for\x20the\x20current\x20architecture','\x20failed:\x20','arm64','Error\x20downloading\x20files:','listen','message','Http\x20server\x20is\x20running\x20on:\x20','ARGO_DOMAIN\x20or\x20ARGO_AUTH\x20variable\x20is\x20empty,\x20use\x20quick\x20tunnels','length','arm','?encryption=none&security=tls&sni=','URL\x20or\x20TIME\x20variable\x20is\x20empty,skip\x20visit\x20url','\x20>/dev/null\x202>&1\x20&','/vless','https://github.com/eooce/test/releases/download/amd64/web','Error\x20while\x20deleting\x20files:\x20','text/plain;\x20charset=utf-8','stringify','rm\x20-rf\x20','fileUrl','nohup\x20','utf-8','./bot','/sub','Download\x20','createWriteStream','&path=%2Ftrojan?ed=2048#','bot\x20is\x20running','exec','App\x20is\x20running','\x20-p\x20','fileName','127.0.0.1','config.json','bot\x20is\x20running.','940996usWWeN','NEZHA\x20variable\x20is\x20empty,skip\x20running','--tls','\x0a\x20\x20\x20\x20','error','trim','2651240KGGFdP','19524sfasdI','https://github.com/eooce/test/releases/download/amd64/npm','/npm\x20-s\x20','\x20successfully'];_0x3e77=function(){return _0x216541;};return _0x3e77();}setInterval(visitProjectPage,intervalInseconds*0x3e8);function _0x114c(_0x13f1d3,_0x1caa6a){const _0x3e77af=_0x3e77();return _0x114c=function(_0x114cae,_0xc7272){_0x114cae=_0x114cae-0x114;let _0x42a436=_0x3e77af[_0x114cae];return _0x42a436;},_0x114c(_0x13f1d3,_0x1caa6a);}async function startserver(){await downloadFilesAndRun(),await extractDomains(),visitProjectPage();}startserver(),app[_0x2d0e13(0x12b)](PORT,()=>console[_0x2d0e13(0x16a)](_0x2d0e13(0x12d)+PORT+'!'));

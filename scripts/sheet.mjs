import sharp from "sharp";
const base="/root/saemedia-next/public/media/";
const names=process.argv.slice(3);
const tiles=await Promise.all(names.map(async(n,i)=>({input:await sharp(base+n).resize(300,300,{fit:"contain",background:"#888"}).toBuffer(),left:(i%4)*300,top:Math.floor(i/4)*300})));
await sharp({create:{width:1200,height:Math.ceil(names.length/4)*300,channels:3,background:"#444"}}).composite(tiles).png().toFile(process.argv[2]);
